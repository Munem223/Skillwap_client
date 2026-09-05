"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";


export default function RegisterPage(){


const router = useRouter();



const [form,setForm]=useState({

name:"",
email:"",
password:"",
role:"freelancer"

});



const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};



const handleSubmit=async(e)=>{

e.preventDefault();


try{


await api.post(
"/auth/register",
form
);



alert("Registration successful");


router.push("/login");



}catch(error){


console.log(error.response?.data);


alert(
error.response?.data?.message ||
"Registration failed"
);


}


};




return (

<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-5">


<div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">


<h1 className="text-4xl font-bold text-center">
SkillSwap 🚀
</h1>


<p className="text-center text-gray-500 mt-2">
Create your account
</p>



<form
onSubmit={handleSubmit}
className="mt-8 space-y-4"
>


<input

name="name"

placeholder="Full Name"

className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"

onChange={handleChange}

/>



<input

name="email"

type="email"

placeholder="Email address"

className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"

onChange={handleChange}

/>



<select

name="role"

className="w-full border rounded-xl p-3"

value={form.role}

onChange={handleChange}

>


<option value="freelancer">
Freelancer
</option>


<option value="client">
Client
</option>


</select>




<button

className="w-full bg-black text-white p-3 rounded-xl hover:opacity-90"

>

Create Account

</button>



</form>



<p className="text-center mt-6 text-gray-600">

Already have account?

<a
href="/login"
className="font-semibold ml-2 text-black"
>
Login
</a>


</p>



</div>


</div>

);

}