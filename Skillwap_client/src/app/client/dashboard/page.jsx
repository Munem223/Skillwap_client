"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";


export default function ClientDashboard(){

const auth = useAuth();

const user = auth?.user;

const [tasks,setTasks] = useState([]);



useEffect(()=>{


const loadTasks = async()=>{

try{

const res = await api.get("/clients/tasks");

setTasks(res.data.data);


}catch(error){

console.log(error);

}

};


if(user){

loadTasks();

}


},[user]);



if(!user){

return (

<div className="p-10 text-center">
Loading...
</div>

);

}



return (

<div className="min-h-screen bg-gray-50 p-10">


<div className="max-w-6xl mx-auto">


<h1 className="text-4xl font-bold">
Client Dashboard
</h1>


<p className="text-gray-600 mt-2">
Manage your posted tasks and proposals
</p>



<div className="grid md:grid-cols-2 gap-6 mt-8">


{
tasks.map((task)=>(


<div

key={task._id}

className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"

>


<h2 className="text-2xl font-bold">
{task.title}
</h2>


<div className="mt-4 space-y-2 text-gray-700">


<p>
Category:
<span className="font-semibold">
{" "}{task.category}
</span>
</p>


<p>
Budget:
<span className="font-semibold">
{" "}${task.budget}
</span>
</p>


<p>
Status:
<span className="font-semibold">
{" "}{task.status}
</span>
</p>


<p>
Freelancer:

<span className="font-semibold">
{" "}
{
task.assigned_freelancer ||
"No freelancer yet"
}
</span>

</p>


</div>



<Link

href={`/client/tasks/${task._id}/proposals`}

className="inline-block mt-6 bg-black text-white px-5 py-2 rounded-xl"

>

View Proposals

</Link>



</div>


))

}


</div>


</div>


</div>

);

}