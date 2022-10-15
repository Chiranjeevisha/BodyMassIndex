import React from "react";
import AddTodo from "./sample-2";
import DeleteTodo from "./sample-3";

function TodoList() {
  return (
    <>
      <div>
        <h1>Todo List</h1>

        <AddTodo />
        <DeleteTodo />
      </div>
    </>
  );
}

export default TodoList;
