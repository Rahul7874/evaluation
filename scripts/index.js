// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar} from "../components/navbar.js";

let nav =document.getElementById("navbar")

nav.innerHTML =navbar();

import {sidebar} from "../components/navbar.js";

let side = document.getElementById("sidebar")

side.innerHTML=sidebar();


let container =document.getElementById("container");

let getdata =async ()=>{
    try{
        let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);

        let data =await res.json();
        append(data);
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
      
}
getdata();


let append = (data) => {
    data.forEach(({title}) =>{
    
    let div = document.createElement("div")

    let img =document.createElement("img")
    img.src=urlToImage

    let p =document.createElement("p")
    p.innerText=title

    div.append(img,p);
    container.append(div);
    });

};
