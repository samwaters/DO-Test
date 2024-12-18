# Senior frontend role

## Libraries Used:
- `html-to-image`: Used to create PNG images of the workflow
- `react-icons`: Used to show icons in the UI
- `react-tooltip`: Used to show simple tooltips on UI elements
- `@testing-library/user-event`: Used in Jest to test events
- `husky`: Used to enforce code standards on commit
- `prettier`: Used to auto-format code
- `zod`: Used to validate API requests

## Sample Unit Tests
- Simple UI component tests reside in `ui/__tests__/`
- A context test is in `contexts/__tests__/notificationcontext.test.tsx`
- A test with the ReactFlow provider is in `menubar/__tests__/menubar.test.tsx`
- A test that mocks ReactFlow entirely along with the save functionality is in `hooks/__tests__/save.test.tsx`

## Further Improvements
- Better handle the positioning of the modal if it would go off the screen
- Better error handling if the save fails
- Create more colour variables for greater control over palette
- Cooldown on save button to prevent repeated api calls 
- Code splitting to reduce bundle size
- Translations using `react-i18next`
- E2E tests using Cypress or Playwright

## Create a simple automation builder

The goal of that exercice is to create an automation builder containing nodes (that could be actions) and edges (to link nodes with each other) using the code in this repo.

This repo uses:
 - [Next.js](https://nextjs.org/docs) (React, Typescript)
 - [ReactFlow](https://reactflow.dev/learn)
-  CSS (in order to keep it simple)

Overall feel free to use any libs you want but please explain your reasoning.

Spend the time you want/can allocate, if something isn't fully working/done, just explain what it should have been and how you would have done it.

### Exercice

 - Create/Edit nodes
   - create a modal allowing the user to edit the node name
   - this modal should also opens when dropping a node to the builder
 - Save feature
   - Using Next.js create an endpoint that allows to "save" the nodes/edges
     - don't bother saving it for real, just validate the data
 - Be creative

> Have fun!

### What we expect from you

We are not expecting from candidates to have the best automation builder tool as possible.
We only look at the code, and how you would work in an asynchronous work environment.

 - Clean code
 - Some unit tests
   - Don't write tests just for the sake of writing tests
   - If you don't have time to write them, list them and explain the strategy
 - Some nice UI

## Getting Started

First, run the development server:

```bash
nvm use
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

