"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";


export default function LoginPage(){

const router = useRouter();


const [form,setForm]=useState({

email:"",
password:""

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


const res = await api.post(
"/auth/login",
form
);



localStorage.setItem(
"user",
JSON.stringify(res.data.user)
);



alert("Login successful");



const role=res.data.user.role;



if(role==="client"){

router.push("/client/dashboard");

}

else if(role==="freelancer"){

router.push("/freelancer/dashboard");

}

else if(role==="admin"){

router.push("/admin/dashboard");

}

else{

router.push("/dashboard");

}



}catch(error){


console.log(error.response?.data);


alert(
error.response?.data?.message ||
"Login failed"
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
Login to your account
</p>



<form
onSubmit={handleSubmit}
className="mt-8 space-y-5"
>


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



<button

className="w-full bg-black text-white p-3 rounded-xl hover:opacity-90"

>

Login

</button>



</form>



<p className="text-center mt-6 text-gray-600">

Don't have an account?

<a
href="/register"
className="font-semibold ml-2 text-black"
>
Register
</a>

</p>



</div>


</div>

);

}