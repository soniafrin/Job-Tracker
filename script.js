let interviewList = [];
let rejectList = [];
let currentStatus = 'all'

const totalCount = document.getElementById("total-jobs")
const interviewCount = document.getElementById("total-interview")
const rejectCount = document.getElementById("total-reject")


const allStatus = document.getElementById("all-status")
const intStatus = document.getElementById("interview-status")
const RejStatus = document.getElementById("reject-status")

// access to addedInterview and reject
const addingInt = document.getElementById("addedToInterview");
// const addingRej = document.getElementById("addedToInterview");
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

function toggleChange(id) {

    allStatus.classList.add('bg-white', 'text-black')
    intStatus.classList.add('bg-white', 'text-black')
    RejStatus.classList.add('bg-white', 'text-black')

    allStatus.classList.remove('bg-info', 'text-white')
    intStatus.classList.remove('bg-info', 'text-white')
    RejStatus.classList.remove('bg-info', 'text-white')

    const clickedBtn = document.getElementById(id)

    currentStatus = id
    
    clickedBtn.classList.remove('bg-white', 'text-black')
    clickedBtn.classList.add('bg-info', 'text-white')
    
    if (id == 'interview-status') {
        jobLists.classList.add('hidden');
        addingInt.classList.remove('hidden')
        renderInteview()
    } else if (id == 'all-status') {
        jobLists.classList.remove('hidden');
        addingInt.classList.add('hidden')
    } else if (id == 'reject-status') {
        jobLists.classList.add('hidden');
        addingInt.classList.remove('hidden')
        renderReject()
    }
}


// event delegation to main container 
mainContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("interview-btn")){
        const parentNode = e.target.parentNode.parentNode;
    const jobtitle = parentNode.querySelector(".job-title").innerText
    const jobPost = parentNode.querySelector(".job-post").innerText
    const jobsalary = parentNode.querySelector(".job-salary").innerText
    const applicationStatus = parentNode.querySelector(".application-status").innerText
    const jobDescription = parentNode.querySelector(".job-description").innerText
    // parentNode.querySelector(".application-status").innerText = "Interview"

const jobInfo = {
    jobtitle, 
    jobPost, 
    jobsalary,
    applicationStatus:"Interview", 
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

 rejectList = rejectList.filter(i => i.jobtitle != jobInfo.jobtitle)
//  console.log(rejectList)
 

 if (currentStatus == 'interview') {
            renderInteview()
        }
// renderInteview()
total()
// console.log(interviewList)
    } else if(e.target.classList.contains("reject-btn")){
        const parentNode = e.target.parentNode.parentNode;
    const jobtitle = parentNode.querySelector(".job-title").innerText
    const jobPost = parentNode.querySelector(".job-post").innerText
    const jobsalary = parentNode.querySelector(".job-salary").innerText
    const applicationStatus = parentNode.querySelector(".application-status").innerText
    const jobDescription = parentNode.querySelector(".job-description").innerText
// querySelector(".application-status").innerText = "Rejected"
const jobInfo = {
    jobtitle, 
    jobPost, 
    jobsalary,
    applicationStatus: "Rejected", 
    jobDescription
}

const ifInfoExist = rejectList.find(i => i.jobtitle == jobInfo.jobtitle)
    const newbadge = parentNode.querySelector(".application-status")
    newbadge.innerText = "Rejected"
    newbadge.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]")
    newbadge.classList.add("btn", "btn-error", "btn-outline", "text-error")
//     int_Btn.disabled = true;



if(!ifInfoExist){
    rejectList.push(jobInfo)
}
interviewList = interviewList.filter(i => i.jobtitle != jobInfo.jobtitle)
// console.log(interviewList)

if (currentStatus == "reject-status") {
            renderReject();
        }

// renderReject()
total()
// console.log(interviewList)
    }
})

function renderInteview(){

    addingInt.innerHTML = '';
    // const newbadge = document.querySelector(".application-status").innerText = "Interview"

    for(const interview of interviewList){
        const newDiv = document.createElement("div");
         
    newDiv.innerHTML =`<div id="job-list" class="flex mt-4 p-6 justify-between rounded-lg bg-white border border-[#F1F2F4]">
            <div >
            <h2 class="text-[#002C5C] font-semibold text-[18px]">${interview.jobtitle}</h2>
            <p class="text-[#64748B] text-[16px]">${interview.jobPost}</p>
            <p class="py-5 text-[#64748B] text-[14px]">${interview.jobsalary}</p>
            <p id="not-applied" class="pb-2 text-[14px] font-semibold btn-success btn-outline border text-success w-28 text-center px-3 py-2 rounded-md">${interview.applicationStatus}</p>
            <p class="pb-5 text-[#323B49] text-[14px] mt-2">${interview.jobDescription}</p>
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
function renderReject(){

    addingInt.innerHTML = '';

    for(const reject of rejectList){
        const newDiv = document.createElement("div");
         const newbadge = document.querySelector(".application-status").innerText = "Rejected"
    newDiv.innerHTML =`<div id="job-list" class="flex mt-4 p-6 justify-between rounded-lg bg-white border border-[#F1F2F4]">
            <div >
            <h2 class="text-[#002C5C] font-semibold text-[18px]">${reject.jobtitle}</h2>
            <p class="text-[#64748B] text-[16px]">${reject.jobPost}</p>
            <p class="py-5 text-[#64748B] text-[14px]">${reject.jobsalary}</p>
            <p id="not-applied" class="pb-2 text-[14px] font-semibold btn-error btn-outline border text-error w-28 text-center px-3 py-2 rounded-md">${reject.applicationStatus}</p>
            <p class="pb-5 text-[#323B49] text-[14px] mt-2">${reject.jobDescription}</p>
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

