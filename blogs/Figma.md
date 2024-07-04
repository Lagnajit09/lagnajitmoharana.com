# Project: Figma Clone

Visit the website: https://pro-figma.vercel.app/

Find my project repository:

[https://github.com/Lagnajit09/Figma](https://github.com/Lagnajit09/Figma)

## What is to Develop:

https://www.figma.com/

**Figma** is a collaborative web-based design tool known for its robust features that cater to user interface and user experience design. It stands out in the design community for its ability to support real-time collaboration, allowing multiple users to work on the same project simultaneously.

## Tech Stack:

- **Next 14:** A powerful React framework developed by Vercel that facilitates the creation of server-rendered React applications with ease.
- **Tailwind CSS:** A highly customizable, utility-first CSS framework that allows developers to rapidly build custom designs without having to leave their HTML.
- **Fabric JS:** A robust and versatile JavaScript library for working with HTML5 canvas. It simplifies the process of creating, manipulating, and animating canvas elements.
- **Liveblocks:** A real-time collaboration API designed to enhance web applications with live, interactive features.

## Project Set-up:

- Initialize the project with the required frameworks and dependencies. (Refer to my [`package.json`](https://github.com/Lagnajit09/Figma/blob/master/package.json) file to get all the required dependencies.)
- Update the [`tailwind.config.ts`](https://github.com/Lagnajit09/Figma/blob/master/tailwind.config.ts) file to add the required styles.
- Download the replace the required assets for the project from [`GitHub`](https://drive.google.com/file/d/17tRs0sEiIsCeTYEXhWEdHMrTshuz2oYf/view).
- Create a project in the liveblocks dashboard in development mode and get the API key as well as the project-id. Create a `.env.local` file at the root directory and paste the values there. Then update the [`liveblocks.config.ts`](https://github.com/Lagnajit09/Figma/blob/master/liveblocks.config.ts) file to get started.

## Dependencies:

- **`@liveblocks/client`:**
  - A client library for Liveblocks, used to create collaborative and real-time experiences in your applications. It manages the state synchronization between clients in a shared session.
- **`@liveblocks/react`:**
  - A React integration for Liveblocks. It provides hooks and components to make it easier to use Liveblocks in React applications, facilitating real-time collaboration features.
- **`@liveblocks/react-comments`:**
  - A React library for integrating comments into your Liveblocks-powered applications. This allows for real-time collaborative commenting features.
- **`fabric`:**
  - A powerful and flexible JavaScript library for working with the HTML5 canvas element. It provides an object model on top of the canvas, allowing for complex shapes, images, and interactions, often used in creating drawing and image editing applications.
- **`jspdf`:**
  - A JavaScript library for generating PDF documents. It enables the creation of PDF files directly in the browser, making it possible to generate and download reports, invoices, or any other document in PDF format.
- **`uuid`:**
  - A JavaScript library for generating universally unique identifiers (UUIDs). UUIDs are used to uniquely identify objects, such as records in a database or resources in an application, ensuring they are distinct from one another.

## Liveblocks Hooks and Functions:

https://liveblocks.io/docs

- **`RoomProvider`**:

  - **Description**: A React component that wraps your application or a part of it, providing the context necessary for Liveblocks to manage the real-time collaborative state. It establishes a connection to a specific room where the collaboration takes place.
  - **Usage**: Wrap your main component or layout to provide Liveblocks context to your application.

  ```tsx
  import { RoomProvider } from "@liveblocks/react";

  function App() {
    return (
      <RoomProvider id="your-room-id">{/* Your components */}</RoomProvider>
    );
  }
  ```

- **`useRoom`**:

  - **Description**: A hook to access the current room instance, allowing you to interact with the room directly.
  - **Usage**: Useful when you need to perform actions directly on the room instance.

  ```tsx
  import { useRoom } from "@liveblocks/react";

  const room = useRoom();
  // Perform actions with the room instance
  ```

- **`useMyPresence`**:

  - **Description**: A hook to manage the current user's presence state. It returns the current presence state and a function to update it.
  - **Usage**: Use this to update the current user's cursor position or any other presence-related information.

  ```tsx
  import { useMyPresence } from "@liveblocks/react";

  const [{ cursor }, updateMyPresence] = useMyPresence();
  updateMyPresence({ cursor: { x: 100, y: 200 } });
  ```

- **`useOthers`**:

  - **Description**: A hook to get a list of other users in the room and their presence state.
  - **Usage**: Use this to access and display the presence data of other users, such as their cursor positions.

  ```tsx
  import { useOthers } from "@liveblocks/react";

  const others = useOthers();
  others.map((user) => {
    // Render user cursors or other presence data
  });
  ```

- **`ClientSideSuspense`**:

  - **Description**: A component that allows you to show a fallback UI while your component is waiting for real-time data. It works similarly to React's `Suspense` but is designed for client-side usage.
  - **Usage**: Wrap your components that rely on Liveblocks data to provide a loading state.

  ```tsx
  import { ClientSideSuspense } from "@liveblocks/react";

  <ClientSideSuspense fallback={<div>Loading...</div>}>
    {/* Your components */}
  </ClientSideSuspense>;
  ```

- **`useMutation`**:

  - **Description**: A hook that allows you to perform mutations on the shared state. It is used to modify the state in a way that is synchronized across all users.
  - **Usage**: Use this hook to update shared state variables.

  ```tsx
  import { useMutation } from "@liveblocks/react";

  const updateState = useMutation(({ storage }) => {
    storage.get("key").set("value");
  });
  ```

- **`useRedo`**:

  - **Description**: A hook that provides a function to redo the last undone action. It is useful for implementing undo/redo functionality in collaborative applications.
  - **Usage**: Use this hook to redo actions in the shared state.

  ```tsx
  import { useRedo } from "@liveblocks/react";

  const redo = useRedo();

  // Call redo function to redo the last undone action
  redo();
  ```

- **`useStorage`**:

  - **Description**: A hook that allows you to access and manipulate the Liveblocks storage. This storage is shared among all users in the room.
  - **Usage**: Use this hook to read and write data to the shared storage.

  ```tsx
  import { useStorage } from "@liveblocks/react";

  const storage = useStorage();

  // Access and manipulate shared storage
  const value = storage.get("key");
  ```

- **`useUndo`**:

  - **Description**: A hook that provides a function to undo the last action. It is useful for implementing undo/redo functionality in collaborative applications.
  - **Usage**: Use this hook to undo actions in the shared state.

  ```tsx
  import { useUndo } from "@liveblocks/react";

  const undo = useUndo();

  // Call undo function to undo the last action
  undo();
  ```

- **`useThreads`**:

  - **Description**: A hook to manage threaded comments or discussions within the shared state. It allows for organizing comments into threads.
  - **Usage**: Use this to manage threaded discussions in your collaborative application.

  ```tsx
  import { useThreads } from "@liveblocks/react-comments";

  const { threads } = useThreads();
  ```

- **`AvatarStack`**:
  - **Description**: A component that displays a stack of avatars representing the users currently present in the room. It visually indicates the number of active participants.
  - **Usage**: Use this component to show the presence of users in a collaborative space.
- **`LiveCursorsChat`**:
  - **Description**: A component that combines live cursors with a chat interface, allowing users to see each other's cursors and chat messages in real-time.
  - **Usage**: Use this component for enhanced collaborative experiences that require both visual and text communication.
- **`Comments`**:
  - **Description**: A component or hook that enables users to add, view, and manage comments in real-time. It can be used for providing feedback or discussing specific parts of a document or design.
  - **Usage**: Integrate this feature to allow real-time commenting within your application.
- **`LiveCursors`**:
  - **Description**: A component that displays the cursors of other users in real-time. It shows the position and movement of each user's cursor, enhancing collaborative interactions.
  - **Usage**: Use this component to visually track the cursor positions of collaborators.

## Disabling SSR:

```tsx
// app/page.tsx
import dynamic from "next/dynamic";

const App = dynamic(() => import("./App"), { ssr: false });

export default App;
```

1. **`const App = dynamic(() => import('./App'), { ssr: false });`**:
   - This line dynamically imports the `App` component.
   - The function `() => import('./App')` is a dynamic import that returns a promise which resolves to the `App` component.
   - The `{ ssr: false }` option disables server-side rendering for the `App` component, meaning this component will only be rendered on the client side.
2. **`export default App;`**:
   - This statement exports the dynamically imported `App` component as the default export of the module.

### Why Use Dynamic Imports with SSR Disabled?

- **Performance Optimization**:
  - By disabling SSR, you can reduce the initial load time for your application because the component is not included in the server-rendered HTML. This can be beneficial for components that are not critical for the initial render or rely heavily on client-side JavaScript (such as components that require access to the `window` object).
- **Avoiding SSR Issues**:
  - Some components may rely on browser-specific APIs that are not available during server-side rendering. By disabling SSR, you can ensure that such components are only rendered in the browser environment.
