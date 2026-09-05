"use client";

import { useEffect,useState } from "react";
import api from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";


export default function FreelancerDashboard(){


const auth = useAuth();

const user = auth?.user;


const [projects,setProjects]=useState([]);



useEffect(()=>{


const loadProjects=async()=>{


try{


const res =
await api.get("/freelancers/projects");


setProjects(res.data.data);


}catch(error){

console.log(error);

}


};


if(user){

loadProjects();

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
Freelancer Dashboard
</h1>


<p className="text-gray-600 mt-2">
View your active projects
</p>



<div className="grid md:grid-cols-2 gap-6 mt-8">


{
projects.map((project)=>(


<div

key={project._id}

className="bg-white rounded-2xl shadow p-6"

>


<h2 className="text-2xl font-bold">

{project.title}

</h2>



<div className="mt-4 space-y-2">


<p>
Client:
{project.client_email}
</p>


<p>
Budget:
${project.budget}
</p>


<p>
Status:
{project.status}
</p>



</div>



</div>


))

}



</div>


</div>


</div>

);


}