# TypeScript Configuration Deep Dive

## 📁 tsconfig.json Explained

### 1. Basic Options

```json
{
  "compilerOptions": {
    // Target JavaScript version
    "target": "ES2022", // ES5, ES6, ES2015, ES2020, ES2022, ESNext
    
    // Module system
    "module": "commonjs", // commonjs, amd, es2015, es2020, esnext, node16
    
    // Library files to include
    "lib": ["ES2022", "DOM"], // ES5, ES6, DOM, WebWorker, ScriptHost
    
    // Output directory
    "outDir": "./dist",
    
    // Root directory
    "rootDir": "./src",
    
    // Allow JS files
    "allowJs": true,
    
    // Check JS files
    "checkJs": true,
    
    // JSX support
    "jsx": "react", // preserve, react, react-native, react-jsx
  }
}
```

### 2. Strict Type Checking

```json
{
  "compilerOptions": {
    // Enable all strict type checks
    "strict": true,
    
    // Individual strict flags
    "noImplicitAny": true,        // Error on implicit any
    "strictNullChecks": true,      // Handle null/undefined properly
    "strictFunctionTypes": true,   // Check function types
    "strictBindCallApply": true,   // Check bind/call/apply
    "strictPropertyInitialization": true, // Check class properties
    "noImplicitThis": true,        // Error on this with implicit any
    "useUnknownInCatchVariables": true, // Catch variables as unknown
  }
}
```

### 3. Module Resolution

```json
{
  "compilerOptions": {
    // Module resolution strategy
    "moduleResolution": "node", // node, classic, bundler
    
    // Base URL for non-relative imports
    "baseUrl": "./",
    
    // Path mapping
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@utils/*": ["./src/utils/*"]
    },
    
    // Allow importing with .ts extension
    "allowImportingTsExtensions": false,
    
    // Resolve JSON modules
    "resolveJsonModule": true,
    
    // Allow default imports
    "allowSyntheticDefaultImports": true,
    
    // Emit interoperability
    "esModuleInterop": true,
    
    // Preserve import/export syntax
    "preserveValueImports": false,
  }
}
```

### 4. Output Configuration

```json
{
  "compilerOptions": {
    // Generate declaration files (.d.ts)
    "declaration": true,
    
    // Generate source maps
    "sourceMap": true,
    
    // Generate declaration maps
    "declarationMap": true,
    
    // Remove comments
    "removeComments": false,
    
    // No emit on error
    "noEmitOnError": true,
    
    // Downlevel iterators
    "downlevelIteration": true,
    
    // Import helpers
    "importHelpers": true,
    
    // New line character
    "newLine": "lf",
    
    // Strip internal
    "stripInternal": true,
  }
}
```

### 5. Additional Checks

```json
{
  "compilerOptions": {
    // No unused locals
    "noUnusedLocals": true,
    
    // No unused parameters
    "noUnusedParameters": true,
    
    // No implicit returns
    "noImplicitReturns": true,
    
    // No fallthrough in switch
    "noFallthroughCasesInSwitch": true,
    
    // No unchecked indexed access
    "noUncheckedIndexedAccess": true,
    
    // No property override without explicit
    "noImplicitOverride": true,
    
    // Exactly optional properties
    "exactOptionalPropertyTypes": true,
  }
}
```

### 6. Experimental Features

```json
{
  "compilerOptions": {
    // Decorators
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    
    // Use define for class fields
    "useDefineForClassFields": true,
  }
}
```

### 7. Advanced Options

```json
{
  "compilerOptions": {
    // Skip type checking of declaration files
    "skipLibCheck": true,
    
    // Skip type checking of default libraries
    "skipDefaultLibCheck": true,
    
    // Force consistent casing
    "forceConsistentCasingInFileNames": true,
    
    // Isolated modules
    "isolatedModules": true,
    
    // Incremental compilation
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo",
  }
}
```

### 8. Include/Exclude

```json
{
  // Files to include
  "include": [
    "./src/**/*.ts",
    "./tests/**/*.ts"
  ],
  
  // Files to exclude
  "exclude": [
    "node_modules",
    "dist",
    "**/*.spec.ts",
    "**/*.test.ts"
  ],
  
  // Specific files
  "files": [
    "./src/main.ts",
    "./src/types.ts"
  ]
}
```

### 9. Project References

```json
{
  "references": [
    { "path": "./packages/core" },
    { "path": "./packages/utils" }
  ]
}
```

### 10. Common Configurations

#### Node.js Project
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

#### React Project
```json
{
  "compilerOptions": {
    "target": "ES5",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
```

#### Library Project
```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "ES2015",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## 📝 tsconfig Tips

### 1. Extending Configs
```json
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

### 2. Different Configs per Environment
```bash
# Development
tsc -p tsconfig.dev.json

# Production
tsc -p tsconfig.prod.json

# Watch mode
tsc --watch
```

### 3. Useful Commands
```bash
# Generate default tsconfig
npx tsc --init

# Check config
npx tsc --showConfig

# Debug config
npx tsc --traceResolution

# Type check only
npx tsc --noEmit
```

### 4. Best Practices

1. **Always enable strict mode** for new projects
2. **Use `strictNullChecks`** to avoid null reference errors
3. **Configure paths** for cleaner imports
4. **Set proper target** based on your environment
5. **Use `skipLibCheck`** to speed up compilation
6. **Enable source maps** for debugging
7. **Separate configs** for development and production
8. **Use project references** for monorepos

### 5. Common Errors & Solutions

| Error | Solution |
|-------|----------|
| Cannot find module | Check `moduleResolution` and paths |
| Cannot use JSX | Set `jsx` option |
| Cannot find global types | Add to `lib` or install `@types/node` |
| Cannot compile decorators | Enable `experimentalDecorators` |
| Out of memory | Use `incremental` compilation |