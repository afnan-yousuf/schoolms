"use client";
import { useEffect, useState } from "react";

export default function friends() {
  const [form, setForm] = useState({ name: "", age: 0 });
  const [friends, setfriends] = useState([]);
  const [msg, setMsg] = useState(null);
  const [c, setc] = useState(0);

  const handelForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveFriend = (e) => {
    e.preventDefault();
    fetch("/api/friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMsg(data.message);
        setc(c + 1);
      });
    setForm({ name: "", age: 0 });
  };

  useEffect(() => {
    fetch("/api/friends")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setfriends(data);
      });
  }, [c]);

  const handledelete = (id) => {
    let xc = confirm("Do you want to delete?");

    if (xc) {
      fetch("/api/friends", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setc(c + 1);
        });
    }
  };

  const handleedit = (id,name,age) => {
    setForm({name: name, id: id, age:age})
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <form className="max-w-sm mx-auto" onSubmit={saveFriend}>
          <h1 className="text-4xl">Add Friend</h1>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={handelForm}
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              value={form.age}
              onChange={handelForm}
              name="age"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
        {msg && msg}
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex-1">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {friends.map((f, i) => {
              return (
                <tr
                  key={i}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4">{f.id}</td>
                  <td className="px-6 py-4">{f.name}</td>
                  <td className="px-6 py-4">{f.age}</td>
                  <td className="px-6 py-4">
                    <input
                      type="button"
                      value="Edit"
                      className="border rounded p-2 cursor-pointer bg-yellow-300 hover:bg-yellow-500"
                      onClick={() => handleedit(f.id,f.name,f.age)}
                    />

                    <input
                      type="button"
                      value="Delete"
                      className="border rounded p-2 cursor-pointer bg-red-400 hover:bg-red-500 ml-5 hover:text-white"
                      onClick={() => handledelete(f.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
