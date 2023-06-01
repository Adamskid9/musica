"strict"
const parentE = document.querySelector(".music_render");
const test = ["davido","wizkid","olamide","phyno","reekado bank","reminix","kiss daniel"];
// console.log(parentE.)
const imageSelector = ["Rectangle 16.png","Rectangle 15.png","Rectangle 17.png","Rectangle 18.png","Rectangle 27.png","Rectangle 20.png","lead.png"]

function sam (){  
      parentE.innerHTML="";
    test.forEach((value,i)=>{
  const html = ` 
  <div class="music">
  <img class="small_img"src="./img/${imageSelector[i]}" alt="">
  <h3 class="shift">${value}</h3>
  </div>` 
if(i<7){
    parentE.insertAdjacentHTML("afterbegin",html)
}
  
})
};

sam();  
