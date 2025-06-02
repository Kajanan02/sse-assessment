# SSE Frontend Technical Assessment 2025

## 🧩 Project Overview

This repository implements a **micro frontend architecture** using **Vite**, **React**, **Chakra UI**, and **Module
Federation**. The application is divided into three independently deployable and maintainable apps:

- **Container App**: Hosts remote apps and handles routing.
- **Dashboard App**: Displays user statistics and activity insights using charts.
- **Log App**: Displays user logs in a tabular format.

The architecture ensures performance, scalability, and modularity while maintaining shared dependencies (React, Chakra
UI, Redux) via `@module-federation/vite`.

---

## 🏗️ Architecture Breakdown

### 📦 Module Federation

- Implemented via `@module-federation/vite`.
- Each app exposes or consumes modules based on its role.
- `container` dynamically loads `dashboard` and `log` via remote entry points.

### 🧱 Atomic Design Structure

Each app (especially dashboard) follows **Atomic Design Pattern**:

- **Atoms**: Reusable UI components.
- **Molecules**: Reusable UI components that are composed of atoms.
- **Organisms**: Reusable UI components that are composed of molecules.
- **Templates**: Reusable UI components that are composed of organisms.
- **Pages**: UI components that are composed of templates.

### 🦆 Duck Pattern for Redux

Redux state is organized using the **Duck pattern**, keeping slices and sagas in a single module:

- **slices**: Redux state slices.
- **sagas**: Redux sagas.

---

## ⚙️ Technologies Used

- React 19
- Vite
- Chakra UI
- Redux + Redux-Saga
- Highcharts
- Module Federation
- Atomic Design + Duck Architecture

---

## 📁 Folder Structure

``` 
sse-assessment/
├── container-app/
├── dashboard-app/
├── log-app/
```

Each contains its own `vite.config.js`, `.env`, `src/`, and `dist/` folders.

---

## 🚀 Development Setup

Run each app in a separate terminal:


```
# 1. Dashboard
cd dashboard-app
npm install
npm run dev

# 2. Log
cd ../log-app
npm install
npm run dev

# 3. Container
cd ../container-app
npm install
npm run dev

```

Visit: http://localhost:5000

---

## 🏗️ Production Build & Optimization
### 🛠 Build All Apps

```
cd dashboard-app && npm run build
cd ../log-app && npm run build
cd ../container-app && npm run build

```

---

## 🔥 Optimization 

- ✅ Minification via Vite’s esbuild

- ✅ File Compression using vite-plugin-compression (gzip)
 
- ✅ Tree Shaking for unused exports

- ✅ Code Splitting & Chunking using Rollup

- ✅ Shared Dependencies to prevent duplication (React, Chakra UI, Redux)

---

## Run Build Apps Locally

```
cd dashboard-app && npm run preview
cd ../log-app && npm run preview
cd ../container-app && npm run preview
```

---

## 🔁 Shared Library Management

```
shared: {
  react: { singleton: true, requiredVersion: '19.1.0' },
  'react-dom': { singleton: true, requiredVersion: '19.1.0' },
  '@chakra-ui/react': { singleton: true },
  '@emotion/react': { singleton: true },
  'react-redux': { singleton: true },
}
```

---

## Best Practices

- Use eslint and prettier for consistent code style

- Follow Atomic + Duck structure for clean maintainable code

- Use <React.Suspense> and lazy imports to improve rendering performance
