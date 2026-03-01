let currentTab = "all"
const activeTab = ["text-white", "bg-info"]
const inactiveTab = ["text-[#64748B]", "bg-white"]

const interviewSection = document.getElementById("addedToInterview")
const rejectSection = document.getElementById("addedToReject")
const joblistsSection = document.getElementById("job-lists")
// noAvailableJob.classList.add("hidden")

function toggleChange(tab){
    const allTabs = ["all", "interview", "reject"]
   currentTab = tab;

    for(const t of allTabs){
        // console.log(t, tab)
        const tabName = document.getElementById(t + "-status")
        console.log(tabName)
        if(t === tab){
            tabName.classList.remove(...inactiveTab)
            tabName.classList.add(...activeTab)
        }
        else{
            tabName.classList.add(...inactiveTab)
            tabName.classList.remove(...activeTab)
            // rejectSection.children.length
        }
    }
    // toggleChange()

    const sections = [interviewSection, rejectSection, joblistsSection]
for(let section of sections){
    section.classList.add("hidden")
}
    noAvailableJob.classList.add("hidden")

    if(tab == "all"){
        joblistsSection.classList.remove("hidden")
        // updateStatus()
        if(joblistsSection.children.length < 1){
            noAvailableJob.classList.remove("hidden")
        }
    }
    else if(tab == "interview"){
        interviewSection.classList.remove("hidden")
        // avaiableJob.innerHTML = interviewSection.children.length
        if(interviewSection.children.length < 1){
            noAvailableJob.classList.remove("hidden")
        }
    }
    else{
        // avaiableJob.innerHTML = rejectSection.children.length
        rejectSection.classList.remove("hidden")
        if(rejectSection.children.length < 1){
            noAvailableJob.classList.remove("hidden")

        }
    }
        
updateStatus()

}
// status update
const totalJob = document.getElementById("total-jobs")
const totalInterview = document.getElementById("total-interview")
const totalReject = document.getElementById("total-reject")
const avaiableJob = document.getElementById("available-job")
const noAvailableJob = document.getElementById("no-job-available")

function updateStatus(){

    // totalJob.innerHTML = joblistsSection.children.length
    // totalInterview.innerHTML = interviewSection.children.length
    // totalReject.innerHTML = rejectSection.children.length
    // avaiableJob.innerHTML = joblistsSection.children.length
    
    const counts = {
        all: joblistsSection.children.length,
        interview: interviewSection.children.length,
        reject: rejectSection.children.length

    }
    totalJob.innerHTML = counts.all;
    totalInterview.innerHTML = counts.interview;
    totalReject.innerHTML = counts.reject;
    avaiableJob.innerText = counts[currentTab];
    // console.log(noAvailableJob.innerText)
    if(counts[currentTab] < 1){
        noAvailableJob.classList.remove("hidden")
    }
}
updateStatus()

document.getElementById("main-container").addEventListener("click", function(e){
    const targatedElement = e.target
    const card = targatedElement.closest(".card")
    if(!card){
        return;
    }
    const cardParent = card.parentNode;
    // console.log(cardParent)
    const applicationStatus = card.querySelector(".application-status")
    
    // console.log(applicationStatus)
    if(targatedElement.classList.contains("interview-btn")){
        applicationStatus.innerText = "Interview"
        applicationStatus.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]")
        applicationStatus.classList.add("btn", "btn-success", "btn-outline", "text-success")
        interviewSection.appendChild(card)
        updateStatus()
    }
     if(targatedElement.classList.contains("reject-btn")){
        applicationStatus.innerText = "Rejected"
        applicationStatus.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]")
        applicationStatus.classList.add("btn", "btn-error", "btn-outline", "text-error")
        rejectSection.appendChild(card)
        updateStatus()
    }
    if(targatedElement.classList.contains("delete-btn")){
        cardParent.removeChild(card)
        updateStatus()
    }

})
