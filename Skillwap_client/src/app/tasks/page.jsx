"use client";

import {useEffect,useState} from "react";
import Link from "next/link";
import api from "@/lib/axios";


export default function TasksPage(){


const [tasks,setTasks]=useState([]);

const [search,setSearch]=useState("");



useEffect(()=>{

loadTasks();

},[]);



const loadTasks=async()=>{


try{


const res =
await api.get("/tasks");


setTasks(res.data.data);


}catch(error){

console.log(error);

}


};




const filteredTasks =
tasks.filter((task)=>

task.title
.toLowerCase()
.includes(
search.toLowerCase()
)

);




return (

<div className="p-10">


<h1 className="text-4xl font-bold">
Browse Tasks
</h1>


<input

className="border p-3 mt-6 w-full max-w-md rounded"

placeholder="Search tasks..."

value={search}

onChange={
e=>setSearch(e.target.value)
}

/>



<div className="grid md:grid-cols-3 gap-6 mt-10">


{
filteredTasks.map(task=>(


<div

key={task._id}

className="border rounded-2xl p-6 shadow-sm hover:shadow-xl transition bg-white"

>


<h2 className="text-xl font-bold">
{task.title}
</h2>



<p className="mt-2">
Category:
{task.category}
</p>


<p>
Budget:
${task.budget}
</p>


<p>
Status:
{task.status}
</p>



<Link

href={`/tasks/${task._id}`}

className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
>

View Details

</Link>



</div>


))

}


</div>


</div>

);


}