"use client";
import { useEffect, useState } from "react";

export default function friends() {
  const [friends, setfriends] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setfriends(data);
      });
  }, []);

  return (
    <>
      <ul>
        {friends.map((f, i) => {
          return <li key={i}>{f.uname}</li>;
        })}
      </ul>
    </>
  );
}
