"use client";

import {useState} from "react";
import {useParams,useRouter} from "next/navigation";
import api from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";

export default function ProposalPage(){


const params = useParams();
const router = useRouter();
const {user}=useAuth();
const task_id = params.id;



const [form,setForm]=useState({

proposed_budget:"",
estimated_days:"",
cover_note:""

});



const submitProposal=async(e)=>{

e.preventDefault();

if(!user){

alert("Please login first");

router.push("/login");

return;

}

try{


const res =
await api.post("/proposals",{

task_id,

freelancer_email:user.email,

proposed_budget:
Number(form.proposed_budget),

estimated_days:
Number(form.estimated_days),

cover_note:
form.cover_note


});


console.log(res.data);


alert("Proposal submitted successfully");


router.push("/freelancer/dashboard");



}catch(error){

console.log(error.response?.data);

}


};




return (

<div className="p-10 max-w-xl">


<h1 className="text-3xl font-bold">

Submit Proposal

</h1>



<form
onSubmit={submitProposal}
className="space-y-5 mt-8"
>



<input

className="border p-3 w-full"

placeholder="Proposed Budget"

type="number"

onChange={
e=>setForm({

...form,

proposed_budget:e.target.value

})
}

/>



<input

className="border p-3 w-full"

placeholder="Estimated Days"

type="number"

onChange={
e=>setForm({

...form,

estimated_days:e.target.value

})
}

/>



<textarea

className="border p-3 w-full"

placeholder="Cover Note"

rows="5"

onChange={
e=>setForm({

...form,

cover_note:e.target.value

})
}

/>



<button

className="bg-black text-white px-6 py-3 rounded"

>

Submit Proposal

</button>



</form>


</div>

);


}