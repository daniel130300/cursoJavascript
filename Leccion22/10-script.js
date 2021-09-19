document.addEventListener("DOMContentLoaded", (e)=>{
    const form1 = document.getElementById("form1");

    form1.addEventListener("focus", (e)=>{
        e.target.style.background = "red";
    }, true);

    form1.addEventListener("blur", (e)=>{
        e.target.style.background = "";
    }, true);
});
   