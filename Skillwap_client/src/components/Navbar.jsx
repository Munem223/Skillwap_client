"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Navbar(){

const router = useRouter();


const logout=()=>{

localStorage.removeItem("user");

router.push("/login");

};



return (

<nav className="sticky top-0 z-50 bg-white border-b shadow-sm">

<div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">


<Link
href="/"
className="text-2xl font-bold"
>
SkillSwap 🚀
</Link>



<div className="flex gap-6 items-center text-sm">


<Link href="/">
Home
</Link>


<Link href="/tasks">
Browse Tasks
</Link>


<Link href="/dashboard">
Dashboard
</Link>


<Link
href="/login"
className="hover:text-blue-600"
>
Login
</Link>


<Link
href="/register"
className="hover:text-blue-600"
>
Register
</Link>


<button

onClick={logout}

className="bg-black text-white px-4 py-2 rounded-lg"

>
Logout
</button>


</div>


</div>


</nav>

);

}