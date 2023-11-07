#Start of React Project
Referring from https://react.dev/learn
https://github.com/facebook/react/tree/main
https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js     --> how to create react Elements

#Creating a project to understand the need of hooks in React
    create a project with vite
    https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js  --> Here we can read about Hooks in source code

#React fibre documentation:
    https://github.com/acdlite/react-fiber-architecture
    
     key features of React Fibre include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

     The key points are:

1) Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
2) Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."
3) In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
4) Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
5) A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.


04bgChanger is a background Chnager project:
In which I have learned about onClick() method and Tailwind CSS



https://github.com/rakeshrkhub/react_learning/assets/69245319/36efd3e0-3975-41f4-ac9f-266a3cd1b3cf

