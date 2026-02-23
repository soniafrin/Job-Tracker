const int_Btn =document.getElementById("intBtn")
    if(int_Btn){
int_Btn.addEventListener("click", function(){
    const total_Jobs = document.getElementById("total-jobs").innerText
    mul("total-jobs");

    const total_interview = document.getElementById("total-interview").innerText
    sum("total-interview");
   
    const applicationStatus = document.getElementById("not-applied");
    applicationStatus.innerText = "Interview"
    applicationStatus.classList.add("btn", "btn-success", "btn-outline", "text-success")
    applicationStatus.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]")
    



    // const interviewpage = document.getElementById("no-job-available")
    // if(interviewpage){
    //     interviewpage.style.display = "none"

    // }
    // const added_interview = document.getElementById("added-intervew")
    // if(added_interview){
    //     added_interview.appendChild(jobList);
    // }



})}