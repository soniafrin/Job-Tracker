// const allStatus = document.getElementById("all-status")
// allStatus.addEventListener("click", function(){
//     allStatus.classList.remove("text-[#64748B]", "bg-white")
//     allStatus.classList.add("text-[#FFFFFF]", "bg-info")
//     intStatus.classList.remove("text-[#FFFFFF]", "bg-info")
//     intStatus.classList.add("text-[#64748B]", "bg-white")
//     rejectStatus.classList.add("text-[#64748B]", "bg-white")
//     rejectStatus.classList.remove("text-[#FFFFFF]", "bg-info")
//     const jobList = document.getElementById("job-list")
//     jobList.classList.remove("hidden")
//     const availableJob = document.getElementById("no-job-available")
//     availableJob.classList.add("hidden")

// })

// const intStatus = document.getElementById("interview-status")
// intStatus.addEventListener("click", function(){
//     rejectStatus.classList.add("text-[#64748B]", "bg-white")
//     rejectStatus.classList.remove("text-[#FFFFFF]", "bg-info")
//     intStatus.classList.remove("text-[#64748B]", "bg-white")
//     intStatus.classList.add("text-[#FFFFFF]", "bg-info")
//     allStatus.classList.remove("text-[#FFFFFF]", "bg-info")
//     allStatus.classList.add("text-[#64748B]", "bg-white")
//     const availableJob = document.getElementById("no-job-available")
//     availableJob.classList.remove("hidden")
//     const jobList = document.getElementById("job-list")
//     jobList.classList.add("hidden")

// })
// const rejectStatus = document.getElementById("reject-status")
// rejectStatus.addEventListener("click", function(){
//     rejectStatus.classList.remove("text-[#64748B]", "bg-white")
//     rejectStatus.classList.add("text-[#FFFFFF]", "bg-info")
//     intStatus.classList.add("text-[#64748B]", "bg-white")
//     intStatus.classList.remove("text-[#FFFFFF]", "bg-info")
//     allStatus.classList.remove("text-[#FFFFFF]", "bg-info")
//     allStatus.classList.add("text-[#64748B]", "bg-white")

//     const jobList = document.getElementById("job-list")
//     jobList.classList.add("hidden")
//     const availableJob = document.getElementById("no-job-available")
//     availableJob.classList.remove("hidden")
// })

const jobStatus = document.querySelectorAll(".job-status")
const jobList = document.getElementById("job-list")
const availableJob = document.getElementById("no-job-available")
function toggleChange(id){
    jobStatus.forEach(btnn =>{
        btnn.classList.add("text-[#64748B]", "bg-white")
        btnn.classList.remove("text-[#FFFFFF]", "bg-info")
    })
    
    const clickedBtn = document.getElementById(id)
    // console.log(clickedBtn)
        clickedBtn.classList.remove("text-[#64748B]", "bg-white")
        clickedBtn.classList.add("text-[#FFFFFF]", "bg-info")
    if(id === "all-status"){
        jobList.classList.remove("hidden")
        availableJob.classList.add("hidden")
    } else {
        jobList.classList.add("hidden")
        availableJob.classList.remove("hidden")
    }
}




