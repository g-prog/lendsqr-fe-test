A frontend implementation of the Lendsqr Admin Dashboard built with Next.js (App Router) and TypeScript.

This project replicates core dashboard functionality including authentication routing, user listing, and dynamic user details pages.

 (A) TECH STACK

Next.js 16 (App Router)

TypeScript

SCSS Modules

Jest + React Testing Library

LocalStorage (mocked data source)

(B) GETTING STARTTED

1) Install dependencies:

npm install

2) Run development server:
npm run dev

3) Open:  http://localhost:3000

4) To build:  npm run build



(C) PROJECT STRUCTURE

Uses App Router (app/ directory)

Dynamic route for user details:
/dashboard/users/[id]

Root path / permanently redirects to /auth/login

Shared layout defined in layout.tsx

Global styles handled in globals.scss

src/
│
├── app/
│   ├── auth/
│   │   └── login/
│   ├── dashboard/
│   │   └── users/
│   │       ├── [id]/
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── layout.tsx
│   └── globals.scss
│
├── components/
│   └── icons/
│
├── __tests__/
│
└── utils/

(D) ROUTING & REDIRECT

async redirects() {
  return [
    {
      source: '/',
      destination: '/auth/login',
      permanent: true,
    },
  ];
}

(E) USER DATA HANDLING

User data is stored in localStorage

The User Details page:

Reads id from useParams()

Fetches matching user from localStorage

Displays "User not found" if no match exists


(F) TESTING

Testing is implemented using:

Jest

React Testing Library

Tested behaviors include:

Rendering user details

Handling "User not found" state

Router navigation (router.back())

Component interaction

To run tests 

npm run test

Global Loader was setup and can be found in

app/loading.tsx