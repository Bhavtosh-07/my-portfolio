// ********************TYPING ANIMATIONS***************
let typed = new Typed('.typing', {
    strings: ["Web designer", "programmer", "cricketer"],
    typeSpeed: 50,
    startDelay: 10,
    BackSpeed: 200,
    backDelay: 700,
    loop: true

});

// ********************ASIDE CONTAINER***************
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavlList = navList.length;
const  allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavlList; i++) {

    const a = navList[i].querySelector("a");
    // console.log(a);
    a.addEventListener("click", function () {

        removeBackSection();
        for (let j = 0; j < totalNavlList; j++) {

            if (navList[j].querySelector("a").classList.contains("active")) {
                // console.log("back-section"+navList[j].querySelector("a"));
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");

        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth <1200)
        {
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");

    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element)
{
    for(let i=0;i<totalNavlList;i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];

        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click",function()
{
    const sectionIndex=this.getAttribute("data-section-index");

    showSection(this);
    updateNav(this);

    removeBackSection();
    addBackSection(sectionIndex);
}
)

const navTogglerBtn=document.querySelector(".nav-toggler");
const aside=document.querySelector(".aside");
    navTogglerBtn.addEventListener("click",()=>
    {
        asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn()
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");

        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.toggle("open");
        }
    }

    function removeBackSection()
    {
         for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
         }
    }
    function addBackSection(num)
    {
        allSection[num].classList.add("back-section");

    }