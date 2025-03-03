# ToDo App (Floaty)
A modern task management application built with React, TypeScript, and Vite.

## Implemented Features:
Mock server to serve data stored in JSON files. 
Responsive design for mobile and desktop

## Upcoming Features:
Create, read, update, and delete tasks
Mark tasks as complete/incomplete
Filter tasks by status (All, Active, Completed)

## Technologies Used:
React 18.3.18
TypeScript ~5.6.2
Vite 6.0.5
CSS Modules

## Getting Started

### Prerequisites
Node.js (v20.18.1)
npm or yarn

### Installation

1. **Clone the repository**:
git clone https://github.com/alexa101-1/ToDoApp.git
cd todo-app

2.**Install dependencies**:
npm install
# or
yarn install

2.**Start the development server**:
npm run dev
# or
yarn dev

Open your browser and navigate to http://localhost:5173


## Project Structure

### Frontend

ToDoApp/frontend/
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── cloud.webp
├── README.md
├── src
│   ├── app
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── colors.css
│   ├── components
│   │   ├── basic
│   │   │   ├── CategoryCard.module.css
│   │   │   ├── CategoryCard.tsx
│   │   │   ├── SelfAssignedLittleCard.module.css
│   │   │   └── SelfAssignedLittleCard.tsx
│   │   ├── buttons
│   │   │   ├── HomeButton.module.css
│   │   │   └── HomeButton.tsx
│   │   ├── Home.module.css
│   │   ├── Home.tsx
│   │   ├── Monthly.module.css
│   │   ├── Monthly.tsx
│   │   ├── Navbar.module.css
│   │   ├── Navbar.tsx
│   │   ├── Today.module.css
│   │   ├── Today.tsx
│   │   ├── Weekly.module.css
│   │   └── Weekly.tsx
│   ├── data
│   │   └── events.json
│   ├── features
│   │   └── data
│   │       ├── eventsSlice.ts
│   │       └── todayDataSlice.ts
│   ├── index.css
│   ├── main.tsx
│   ├── types
│   │   ├── cardCategory.ts
│   │   ├── index.ts
│   │   └── mySpace.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts


### Backend

ToDoApp/backend/
├── data
│   ├── events.json
│   ├── items.json
│   ├── myspace.json
│   └── weeklyItems.json
├── package.json
├── package-lock.json
├── routes
│   └── routes.js
└── server.js

## Available Scripts

npm run dev - Starts the development server
npm run build - Builds the app for production
npm run preview - Serves the production build locally
npm run lint - Runs the linter




