let currentTab = "all"
const activeTab = ["text-white", "bg-info"]
const inactiveTab = ["text-[#64748B]", "bg-white"]


function toggleChange(tab){
    const allTabs = ["all", "interview", "reject"]
    for(const t of allTabs){
        // console.log(t, tab)
        const tabName = document.getElementById(t + "-status")
        // console.log(tabName)
        if(t === tab){
            tabName.classList.remove(...inactiveTab)
            tabName.classList.add(...activeTab)
        }
        else{
            tabName.classList.add(...inactiveTab)
            tabName.classList.remove(...activeTab)
            
        }
    }
}
// toggleChange()
