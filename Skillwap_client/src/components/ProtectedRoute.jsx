"use client";


import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function ProtectedRoute({

children,
role

}){


const router = useRouter();



useEffect(()=>{


// temporary protection

const user =
JSON.parse(
localStorage.getItem("user")
);



if(!user){

router.push("/login");

return;

}



if(role && user.role!==role){

router.push("/dashboard");

}


},[]);



return children;


}