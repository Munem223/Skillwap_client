"use client";

import {useEffect,useState} from "react";
import api from "@/lib/axios";
import {useAuth} from "@/context/AuthContext";


export default function ClientDashboard(){


const {user}=useAuth();


const [tasks,setTasks]=useState([]);



useEffect(()=>{


const loadTasks=async()=>{

try{

const res =
await api.get("/clients/tasks");


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

<div className="min-h-screen p-10">

<h1 className="text-4xl font-bold">
SkillSwap Dashboard 🚀
</h1>


<p className="mt-4 text-gray-600">
Welcome to SkillSwap marketplace.
</p>


<div className="grid md:grid-cols-3 gap-5 mt-10">


<div className="border rounded-xl p-6">
<h2 className="font-bold">
Client
</h2>

<button
className="mt-3 bg-black text-white px-4 py-2 rounded"
onClick={()=>router.push("/client/dashboard")}
>
Open
</button>

</div>



<div className="border rounded-xl p-6">

<h2 className="font-bold">
Freelancer
</h2>

<button
className="mt-3 bg-black text-white px-4 py-2 rounded"
onClick={()=>router.push("/freelancer/dashboard")}
>
Open
</button>

</div>




<div className="border rounded-xl p-6">

<h2 className="font-bold">
Admin
</h2>

<button
className="mt-3 bg-black text-white px-4 py-2 rounded"
onClick={()=>router.push("/admin/dashboard")}
>
Open
</button>

</div>


</div>


</div>

);

}
}