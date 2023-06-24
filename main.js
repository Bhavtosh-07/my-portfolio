const style_switcher_toggle=document.querySelector(".style-switcher-toggler");
style_switcher_toggle.addEventListener("click",()=>
{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// removing the change color screen on scroll
window.addEventListener("scroll",()=>
{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");

    }
})

// =======================THEME COLORS=======================
const alternateStyles=document.querySelectorAll(".alternate-style");

function setActiveStyle(color)
{
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
            
        }
    })
}
    // =======================DAY/NIGHT COLORS=======================
const dayNight=document.querySelector(".day-night");


dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>
{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
