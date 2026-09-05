"use client";


import {useEffect,useState} from "react";
import {useParams} from "next/navigation";
import Link from "next/link";
import api from "@/lib/axios";


export default function TaskDetails(){


const params = useParams();

const id = params.id;


const [task,setTask]=useState(null);



useEffect(()=>{


const loadTask=async()=>{


try{


const res =
await api.get(`/tasks/${id}`);


setTask(res.data.data);



}catch(error){

console.log(error);

}


};



if(id)
loadTask();


},[id]);




if(!task){

return (

<div className="p-10">

Loading...

</div>

);

}



return (

<div className="p-10 max-w-3xl">


<h1 className="text-4xl font-bold">
{task.title}
</h1>



<div className="border rounded-xl p-6 mt-8">


<p className="text-lg">

<strong>Description:</strong>

<br/>

{task.description}

</p>



<p className="mt-5">

<strong>Category:</strong>

{task.category}

</p>



<p>

<strong>Budget:</strong>

${task.budget}

</p>



<p>

<strong>Deadline:</strong>

{new Date(task.deadline)
.toDateString()}

</p>



<p>

<strong>Status:</strong>

{task.status}

</p>



</div>



<Link

href={`/tasks/${id}/proposal`}

className="inline-block mt-6 bg-black text-white px-6 py-3 rounded"

>

Submit Proposal

</Link>



</div>

);


}