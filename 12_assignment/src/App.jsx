import { useState } from "react";
import { HookCounter } from "./HookCounter";
import { UserList } from "./UserList";
import "./App.css";

function App() {
  return (
    <div>
      <HookCounter />
      <UserList />
    </div>
  );
}

export default App;
