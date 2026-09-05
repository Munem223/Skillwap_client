"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function useAuth(requiredRole){

    const router = useRouter();

    const [user,setUser] = useState(null);


    useEffect(()=>{


        const storedUser =
        localStorage.getItem("user");


        if(!storedUser){

            router.push("/login");
            return;

        }


        const parsedUser =
        JSON.parse(storedUser);


        setUser(parsedUser);



        // role protection

        if(requiredRole && parsedUser.role !== requiredRole){

            router.push("/dashboard");

        }


    },[]);



    return user;

}