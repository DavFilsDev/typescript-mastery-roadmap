/**
 * EXERCISE 10: Vehicle Rental System - SOLUTION
 */

// Solution: Enums
enum VehicleType {
  Car = "CAR",
  Motorcycle = "MOTORCYCLE",
  Truck = "TRUCK",
  Van = "VAN"
}

enum FuelType {
  Petrol = "PETROL",
  Diesel = "DIESEL",
  Electric = "ELECTRIC",
  Hybrid = "HYBRID"
}

enum RentalStatus {
  Available = "AVAILABLE",
  Rented = "RENTED",
  Maintenance = "MAINTENANCE",
  Reserved = "RESERVED"
}

// Solution: Base Vehicle interface
interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  type: VehicleType;
  fuelType: FuelType;
  dailyRate: number;
  status: RentalStatus;
}

// Solution: Car interface
interface Car extends Vehicle {
  doors: number;
  transmission: "manual" | "automatic";
  airConditioning: boolean;
}

// Solution: Motorcycle interface
interface Motorcycle extends Vehicle {
  engineSize: number; // in cc
  hasSidecar: boolean;
}

// Solution: Truck interface
interface Truck extends Vehicle {
  cargoCapacity: number; // in kg
  axles: number;
}

// Solution: VehicleRental class
class VehicleRental {
  private vehicles: Vehicle[] = [];
  private rentals: Map<number, { customer: string; days: number; startDate: Date }> = new Map();
  private nextId = 1;

  addVehicle(vehicleData: Omit<Vehicle, "id" | "status">): Vehicle {
    const vehicle: Vehicle = {
      ...vehicleData,
      id: this.nextId++,
      status: RentalStatus.Available
    };
    
    this.vehicles.push(vehicle);
    console.log(`Added: ${vehicle.year} ${vehicle.make} ${vehicle.model} (ID: ${vehicle.id})`);
    return vehicle;
  }

  removeVehicle(id: number): boolean {
    const index = this.vehicles.findIndex(v => v.id === id);
    if (index === -1) return false;
    
    const vehicle = this.vehicles[index];
    if (vehicle.status === RentalStatus.Rented) {
      console.log(`Cannot remove vehicle ID ${id} - it's currently rented`);
      return false;
    }
    
    this.vehicles.splice(index, 1);
    console.log(`Removed vehicle ID ${id}`);
    return true;
  }

  rentVehicle(id: number, customer: string, days: number): boolean {
    const vehicle = this.vehicles.find(v => v.id === id);
    
    if (!vehicle) {
      console.log(`Vehicle ID ${id} not found`);
      return false;
    }
    
    if (vehicle.status !== RentalStatus.Available) {
      console.log(`Vehicle ID ${id} is not available (status: ${vehicle.status})`);
      return false;
    }
    
    vehicle.status = RentalStatus.Rented;
    this.rentals.set(id, { customer, days, startDate: new Date() });
    
    const totalCost = this.calculateRentalCost(vehicle, days);
    console.log(`Rented to ${customer} for ${days} days. Total: $${totalCost