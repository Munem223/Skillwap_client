"use client";

import {useEffect,useState} from "react";
import {useParams,useRouter} from "next/navigation";
import api from "@/lib/axios";


export default function ProposalsPage(){


const params = useParams();
const router = useRouter();

const task_id = params.id;


const [proposals,setProposals]=useState([]);

const [loading,setLoading]=useState(true);



useEffect(()=>{

loadProposals();

},[]);



const loadProposals=async()=>{

try{

const res =
await api.get(
`/proposals/task/${task_id}`
);


setProposals(res.data.data);


}catch(error){

console.log(error);

}

finally{

setLoading(false);

}

};



const acceptProposal=async(id)=>{


try{


const res =
await api.patch(
`/proposals/${id}/accept`
);



alert(
"Proposal accepted successfully"
);



loadProposals();



}catch(error){

console.log(error);

}

};



const rejectProposal=async(id)=>{


try{


await api.patch(
`/proposals/${id}/reject`
);


loadProposals();


}catch(error){

console.log(error);

}

};




if(loading){

return <div className="p-10">
Loading...
</div>

}




return (

<div className="p-10">


<h1 className="text-3xl font-bold">
Received Proposals
</h1>



<div className="mt-8 space-y-5">


{
proposals.map((proposal)=>(


<div

key={proposal._id}

className="border rounded-xl p-6"

>


<h2 className="text-xl font-bold">

{proposal.freelancer_email}

</h2>



<p>
Budget:
${proposal.proposed_budget}
</p>



<p>
Estimated Days:
{proposal.estimated_days}
</p>



<p className="mt-3">

{proposal.cover_note}

</p>



<p className="mt-3">

Status:
{proposal.status}

</p>



{
proposal.status==="pending" &&

<div className="flex gap-3 mt-5">


<button

onClick={()=>acceptProposal(proposal._id)}

className="bg-green-600 text-white px-4 py-2 rounded"

>

Accept

</button>



<button

onClick={()=>rejectProposal(proposal._id)}

className="bg-red-600 text-white px-4 py-2 rounded"

>

Reject

</button>



</div>

}



</div>


))

}



</div>


</div>

);

}