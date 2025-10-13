"use client";
import { useState } from "react";

export default function about() {
  const [form, setForm] = useState({ fname: "", lname: "", age: 0 });

  function handlechange(e){
    setForm({...form,[e.target.name]: e.target.value})    
  }

  return (
    <>
      <form>
        <input
          type="text"
          className="border p-1"
          value={form.fname}
          name="fname"
          onChange={handlechange}
        />
        <input
          type="text"
          className="border p-1"
          value={form.lname}
          name="lname"
          onChange={handlechange}
        />
        <input
          type="number"
          className="border p-1"
          value={form.age}
          name="age"
          onChange={handlechange}
        />
      </form>

      <h1 className={`text-4xl`}>{`${form.fname} ${form.lname}`}</h1>
    </>
  );
}
