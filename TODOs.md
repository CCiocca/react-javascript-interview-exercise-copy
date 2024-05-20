# ReactJS, Interview Exercise

#### Start working from StartFile.js component

**Instructions:** 

There are 2 components in this application: **Counter** and **App**. The steps below will take you through modifying and adding components to change functionality and implementation.

0. Install the node_modules with the `npm install` command
1. Update the Counter component to take `onIncrement` and `onDecrement` callbacks as props and ensure they update the counter's values independently. Each callback should take a single, integer value as a parameter which is the amount to increment the counter's existing value by.
2. Move the global `data` array to the component state for the `App` component.
3. Render a fourth `Counter` component and ensure its value is updated independently from the others.
4. Create a `Total` component, which should display below the `Counter` components and always display the running total of all the `Counter` values.
5. Test the increment of the total number and run the command `npm run coverage`
5. (Optional): Make a copy of the `Counter` component, saving the original so your instructor can view it later. Then do the following:
   1. Remove the `onIncrement` and `onDecrement` props from the (new) `Counter` component.
   2. Add a single `onChange` callback prop that takes a single integer parameter — the new value for the counter.
   3. Ensure all `Counter` components still update and function independently after this change.
