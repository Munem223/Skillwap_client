"use client";

import { useEffect,useState } from "react";
import api from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";


export default function AdminDashboard(){


const auth = useAuth();

const user = auth?.user;


const [users,setUsers]=useState([]);

const [tasks,setTasks]=useState([]);

const [payments,setPayments]=useState([]);




useEffect(()=>{


const loadData=async()=>{


try{


const usersRes =
await api.get("/admin/users");


const tasksRes =
await api.get("/admin/tasks");


const paymentsRes =
await api.get("/admin/payments");



setUsers(usersRes.data.data);

setTasks(tasksRes.data.data);

setPayments(paymentsRes.data.data);



}catch(error){

console.log(error);

}


};


if(user){

loadData();

}


},[user]);





if(!user){

return(

<div className="p-10 text-center">
Loading...
</div>

);

}



return (

<div className="min-h-screen bg-gray-50 p-10">


<div className="max-w-6xl mx-auto">


<h1 className="text-4xl font-bold">
Admin Dashboard
</h1>


<p className="text-gray-600 mt-2">
System overview
</p>



<div className="grid md:grid-cols-3 gap-6 mt-10">


<div className="bg-white rounded-2xl shadow p-8">

<h2 className="text-xl font-bold">
Users
</h2>

<p className="text-5xl mt-4 font-bold">
{users.length}
</p>

</div>



<div className="bg-white rounded-2xl shadow p-8">

<h2 className="text-xl font-bold">
Tasks
</h2>

<p className="text-5xl mt-4 font-bold">
{tasks.length}
</p>

</div>




<div className="bg-white rounded-2xl shadow p-8">

<h2 className="text-xl font-bold">
Payments
</h2>

<p className="text-5xl mt-4 font-bold">
{payments.length}
</p>

</div>



</div>



</div>


</div>

);

}