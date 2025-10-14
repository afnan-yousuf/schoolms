"use client";
import { useState } from "react";

export default  function contact() {
  const [form, setForm] = useState({ firstname: "", lastname: "",dob:"" });


  function handleForm(e){
    let n = e.target.name
    let v = e.target.value
    setForm({...form,[n]: v})
  }

  async function submitform(e){
    e.preventDefault()
    
    const res = await fetch("/api/friends",{
      method: "POST",
      header: {"Content-Type": "application/json"},
      body: JSON.stringify(form)
    });

    const data = res.json()
    console.log(data)



    setForm({ firstname: "", lastname: "",dob:"" })
  }

  return (
    <>
      <div className="flex space-around p-3">
        <div className="flex-1">
          <h1 className="text-center text-4xl">Contact Form</h1>

          <form className="max-w-sm mx-auto" onSubmit={submitform}>
            <div className="mb-5">
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Afnan Yosuuf"
                value={form.firstname}
                required
                onChange={handleForm}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Yousuf Ali"
                value={form.lastname}
                onChange={handleForm}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={form.dob}
                onChange={handleForm}
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
        </div>
        <div className="flex-1">
          <h1 className="text-center text-4xl">Map Will come here</h1>
        </div>
      </div>
    </>
  );
}
