const btn=document.querySelector(".btn");
const  input=document.querySelector("input");
const message=document.querySelector(".message");
const err=document.querySelector(".error");

btn.addEventListener("click",mss);
var array=[];
function mss()
{
    if(input.value)
    {
        var ul =document.createElement("ul");
        var li=document.createElement("li");
        li.innerHTML=input.value;
        ul.appendChild(li);
        input.value="";
        document.getElementById("menu").appendChild(ul);
     
    }
    else
    {
        err.style.display="block";
        setInterval(() => 
        {
                err.style.display="none";
        },10000);
    }
}






