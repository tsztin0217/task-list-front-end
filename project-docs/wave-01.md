# Wave 01: Setup and Baseline

**Learn Topics: React Components and Props required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `npm install` to install dependencies.
1. Run `npm dev` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End. For this wave you should make sure that that you are on the branch called `wave-01`. You might also need to either commit, stash, or abandon any changes made to the `wave-01` branch to be able to switch back to the main branch.

Read through the code in `App.jsx`, `TaskList.jsx` and `Task.jsx` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from?  Task has {id, title, isComplete } as its props, it comes from TaskList
1. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`?  {props.id, props.title, props.isComplete}
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
1. What `props` does `TaskList` have? Where do they come from?  tasks, it comes from App component
1. Where is the function `getTaskListJSX` called in `TaskList`?   call in 18th line in TaskList component
    - How would the code change without this helper function?   without this function, we need iterate each task directly. 
1. What component is `TASKS` passed to in `App`?    TaskList in line 24th
    - How does the component pass `TASKS`?  so the TASKS is the props which received from TaskList
    - What element is the component wrapped in? <div>

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.
