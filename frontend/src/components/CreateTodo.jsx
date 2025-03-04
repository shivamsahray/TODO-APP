import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    return <div>
        <input id="title" type="text" style = {{
            padding: 10,
            margin: 10
        }} placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br></br><br />
        <input id="desc" type="text" style = {{
            padding: 10,
            margin: 10
        }} placeholder="Description"onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }} /><br></br><br /> 

        <button style = {{
            padding: 10,
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body : JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(
                async function (res) {
                    const json = await res.json();
                    alert("Todo added");
                }
            )
        }} >Add Todo</button>
    </div>
}