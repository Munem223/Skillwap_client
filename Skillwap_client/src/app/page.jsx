export default function Home(){

return (

<main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">


<div className="text-center max-w-3xl">


<h1 className="text-6xl font-bold">
SkillSwap 🚀
</h1>


<p className="mt-6 text-xl text-gray-600">
A smart marketplace connecting clients with talented freelancers.
</p>



<div className="flex justify-center gap-5 mt-10">


<a
href="/tasks"
className="bg-black text-white px-8 py-3 rounded-xl"
>
Explore Tasks
</a>


<a
href="/register"
className="border px-8 py-3 rounded-xl"
>
Join Now
</a>


</div>


</div>


</main>

);

}