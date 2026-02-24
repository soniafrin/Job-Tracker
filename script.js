const interviewList = []
let rejectList = []

const totalCount = document.getElementById("total-jobs")
const interviewCount = document.getElementById("total-interview")
const rejectCount = document.getElementById("total-reject")

// access to addedInterview
const addingInt = document.getElementById("addedToInterview");

// access to job list 
const jobLists = document.getElementById("job-lists")

// acces to mainContainer
const mainContainer = document.querySelector("main")
// job counts
function total(){
    totalCount.innerText = jobLists.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length

}
total()

// event delegation to main container 
mainContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("interview-btn")){
        const parentNode = e.target.parentNode.parentNode;
    const jobtitle = parentNode.querySelector(".job-title").innerText
    const jobPost = parentNode.querySelector(".job-post").innerText
    const jobsalary = parentNode.querySelector(".job-salary").innerText
    const applicationStatus = parentNode.querySelector(".application-status").innerText
    const jobDescription = parentNode.querySelector(".job-description").innerText
//    console.log(jobtitle, jobPost, jobsalary,applicationStatus, jobDescription )
const jobInfo = {
    jobtitle, 
    jobPost, 
    jobsalary,
    applicationStatus, 
    jobDescription
}

const ifInfoExist = interviewList.find(i => i.jobtitle == jobInfo.jobtitle)
    const newbadge = parentNode.querySelector(".application-status")
    newbadge.innerText = "Interview"
    newbadge.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]")
    newbadge.classList.add("btn", "btn-success", "btn-outline", "text-success")
//     int_Btn.disabled = true;

if(!ifInfoExist){
    interviewList.push(jobInfo)
}
renderInteview()
// console.log(interviewList)
    }
})

function renderInteview(){

    addingInt.innerHTML = '';

    for(interview of interviewList){
        const newDiv = document.createElement("div");
         const newbadge = document.querySelector(".application-status").innerText = "Interview"
    // newbadge.classList.add("btn", "btn-success", "btn-outline", "text-success")
    // newDiv.classList.add("newIntDiv")
    newDiv.innerHTML =`<div id="job-list" class="flex mt-4 p-6 justify-between rounded-lg bg-white border border-[#F1F2F4]">
            <div >
            <h2 class="text-[#002C5C] font-semibold text-[18px]">Mobile First Corp</h2>
            <p class="text-[#64748B] text-[16px]">React Native Developer</p>
            <p class="py-5 text-[#64748B] text-[14px]">Remote • Full-time • $130,000 - $175,000</p>
            <p id="not-applied" class="pb-2 text-[14px] font-semibold btn-success btn-outline border text-success w-28 text-center px-3 py-2 rounded-md">${newbadge}</p>
            <p class="pb-5 text-[#323B49] text-[14px] mt-2">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            <button id="intBtn" class=" btn btn-outline btn-success w-24 font-semibold hover:text-white text-[14px]">Interview</button>
            <button class="btn btn-outline btn-error w-24 font-semibold ml-2 hover:text-white text-[14px]">Rejected</button>
            </div>
            <div>
                  <i class="fa-solid fa-trash-can"></i>  
            </div>
        </div>`
    addingInt.appendChild(newDiv)

    }
}

// const int_Btn =document.getElementById("intBtn")
//     if(int_Btn){
// int_Btn.addEventListener("click", function(){
//     const total_Jobs = document.getElementById("total-jobs").innerText
//     mul("total-jobs");

//     const total_interview = document.getElementById("total-interview").innerText
//     sum("total-interview");
   
//     const applicationStatus = document.getElementById("not-applied");
//     applicationStatus.innerText = "Interview"
//     applicationStatus.classList.add("btn", "btn-success", "btn-outline", "text-success")
//     applicationStatus.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]")
//     int_Btn.disabled = true;


//     
//     
//     addingInt.appendChild(newDiv);
//     addingInt.classList.add("hidden");

    

// const intStatus = document.getElementById("interview-status")
// intStatus.addEventListener("click", function(){
//     addingInt.classList.remove("hidden");
//     const availableJob = document.getElementById("no-job-available")
//     availableJob.classList.add("hidden")

// })
// const rejectStatus = document.getElementById("reject-btn")
// rejectStatus.addEventListener("click", function(){
//     addingInt.classList.add("hidden");
//     // const availableJob = document.getElementById("no-job-available")
//     // availableJob.classList.add("hidden")

// })

// const allStatus = document.getElementById("all-status")
// allStatus.addEventListener("click", function(){
//     addingInt.classList.add("hidden");

// })


// })}

    