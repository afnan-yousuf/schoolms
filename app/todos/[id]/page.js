export default async function singletodos({ params }) {
    let param = await params;
    let id = param.id;
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let todo = await response.json();
    return <>
        <h1 className="text-4xl">{todo.title}</h1>
        {todo.completed ? <p className="text-green-500 border p-2">Done</p> : <p className="text-orange-500">Pending</p>  }
    </>;
}
