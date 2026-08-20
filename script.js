
const btn=document.getElementById("themeToggle");

btn.onclick=()=>{

document.body.classList.toggle("light");

btn.innerHTML=document.body.classList.contains("light")
?"☀️":"🌙";

};

const observer=new IntersectionObserver((entries)=>{

entries.forEach(e=>{

if(e.isIntersecting){

e.target.style.opacity=1;

e.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section,.card,.profile-card").forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});
