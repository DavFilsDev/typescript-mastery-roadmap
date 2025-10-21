/**
 * EXERCISE 5: HTTP Decorators
 * 
 * Create a decorator-based HTTP client similar to popular libraries
 */

// TODO: Create a @Controller decorator that sets a base path
// Example: @Controller("/api/users")


// TODO: Create method decorators:
// - @Get(path: string)
// - @Post(path: string)
// - @Put(path: string)
// - @Delete(path: string)


// TODO: Create parameter decorators:
// - @Param(name: string) - extracts from URL params
// - @Body() - extracts request body
// - @Query(name: string) - extracts query params


// TODO: Create a class that uses these decorators
// Example:
// @Controller("/api/users")
// class UserController {
//   @Get("/:id")
//   getUser(@Param("id") id: string) {
//     return { id, name: "Alice" };
//   }
//
//   @Post("/")
//   createUser(@Body() body: any) {
//     return { ...body, id: 123 };
//   }
// }


// TODO: Create a createServer function that:
// - Takes a controller instance
// - Sets up routes based on decorators
// - Returns an Express-like server object


// Bonus: Add validation using parameter decorators
// @Validate("body") or @Validate("param", "id")