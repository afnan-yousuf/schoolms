"use client";
import Link from "next/link";
import PrimaryHeading from "../components/PrimaryHeading";
import Card from "../components/Card";
import { useEffect, useState } from "react";

export default function todos() {
  //let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //let todos = await response.json();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <>
      <PrimaryHeading a="Todos List" />

      <ol>
        {todos.map((t, i) => {
          return (
            <li
              className="p-2 text-green-600 cursor-pointer hover:text-blue-500 hover:border"
              key={i}
            >
              <Link href={`/todos/${t.id}`}>{t.title}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
