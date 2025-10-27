# TypeScript Mastery Roadmap 🚀

<div align="left">
  
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
  
  ### Learn TypeScript by Building, from Zero to Hero!
  
  [Getting Started](#-getting-started) •
  [Learning Path](#-learning-path) •
  [Projects](#-real-world-projects) •
  [Resources](#-resources)
  
</div>

---

## 📚 About This Repository

This repository is your hands-on guide to mastering TypeScript. Instead of just reading documentation, you'll learn by writing code, solving exercises, and building real-world projects. Each concept builds upon the previous one, ensuring a solid understanding.

### Why This Approach?
- **🧠 Learn by Doing**: Type every example yourself
- **📈 Progressive Complexity**: Start simple, end advanced
- **🛠️ Real-World Focus**: Build projects you'd actually use
- **✅ Practice Exercises**: Reinforce concepts immediately
- **🔍 Type Safety Focus**: Understand why TypeScript matters

## 🎯 Prerequisites

- Basic JavaScript knowledge (variables, functions, objects)
- Node.js installed (v16 or higher)
- A code editor (VS Code recommended)
- Git for version control (optional but recommended)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/typescript-mastery-roadmap.git
cd typescript-mastery-roadmap

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode (auto-restart on changes)
npm run dev

# Check types without compiling
npm run type-check
```

## 📖 Learning Path

### Phase 1: Foundations (Weeks 1-2)
```
📁 01-basics/
├── 01-hello-world.ts        # First steps, type inference
├── 02-primitive-types.ts     # string, number, boolean
├── 03-functions.ts          # Parameter & return types
├── 04-objects-arrays.ts     # Object shapes, array types
├── 05-union-literals.ts     # Union types, literal types
└── exercises/               # Practice problems
```

**What you'll learn:**
- Type annotations & inference
- Basic and primitive types
- Function typing
- Object and array structures
- Union and intersection types

### Phase 2: Intermediate Concepts (Weeks 3-4)
```
📁 02-intermediate/
├── 01-interfaces.ts          # Interface declaration
├── 02-classes.ts             # OOP in TypeScript
├── 03-generics-intro.ts      # Introduction to generics
├── 04-type-aliases.ts        # Type vs Interface
├── 05-enums.ts               # Enumerations
└── exercises/
```

**What you'll learn:**
- Interfaces and type aliases
- Classes and access modifiers
- Basic generics
- Enums and const assertions
- Type narrowing and guards

### Phase 3: Advanced Patterns (Weeks 5-6)
```
📁 03-advanced/
├── 01-advanced-generics.ts    # Constraints, defaults
├── 02-conditional-types.ts    # Type conditions
├── 03-mapped-types.ts         # Transforming types
├── 04-template-literals.ts    # String literal types
├── 05-decorators.ts          # Class decorators
└── exercises/
```

**What you'll learn:**
- Advanced generic patterns
- Conditional types
- Mapped and utility types
- Template literal types
- Decorators and metadata

### Phase 4: Modules & Configuration (Week 7)
```
📁 04-modules-and-config/
├── 01-modules/               # ES Modules
├── 02-tsconfig-explained.md  # Configuration deep dive
└── 03-third-party/           # Using external types
```

## 💻 VS Code Extensions (Recommended)

- [TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## 🏃‍♂️ How to Run TypeScript Files

### Method 1: Using tsx (Recommended)
```bash
# Run a file once
npx tsx 01-basics/01-hello-world.ts

# Run with watch mode (auto-restart on changes)
npx tsx watch 01-basics/01-hello-world.ts
```

## 📝 How to Use This Repository Effectively

1. **Follow the Order**: Complete sections in order
2. **Code Along**: Type every example, don't copy-paste
3. **Experiment**: Modify examples to see what breaks
4. **Solve Exercises**: Practice is crucial for retention
5. **Build Projects**: Apply knowledge in real scenarios
6. **Review Often**: Revisit concepts you find challenging

## 🎮 Interactive Learning Tips

```typescript
// PRO TIP: Use TypeScript's playground in VS Code
// Hover over variables to see inferred types
// Use "Go to Definition" (F12) to explore type definitions
// Enable "strict" mode for better error catching
```

## 🤔 Common Questions

**Q: How long will this take?**  
A: If you spend 1-2 hours daily, about 2-3 months to complete everything.

**Q: Do I need to know JavaScript first?**  
A: Yes, basic JavaScript knowledge is required.

**Q: Can I use this for a team?**  
A: Absolutely! This is great for team workshops or study groups.

## 📚 Additional Resources

- [Official TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [TypeScript Weekly Newsletter](https://typescript-weekly.com/)

## 🆘 Getting Help

- Open an issue in this repository
- Check the [TypeScript Community](https://github.com/ts-community)
- Join the [TypeScript Discord](https://discord.gg/typescript)

## 🤝 Contributing

Found a bug? Have a suggestion? Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

MIT © David Fils