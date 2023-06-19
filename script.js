"strict"
const parentE = document.querySelector(".music_render");
const musicList = ["davido","wizkid","olamide","phyno","reekado bank","reminix","kiss daniel","ss"];
// console.log(parentE.)
const imageSelector = ["Rectangle 16.png","Rectangle 15.png","Rectangle 17.png","Rectangle 18.png","Rectangle 27.png","Rectangle 20.png","lead.png"]

function renderLayout (){  
      parentE.innerHTML="";
    musicList.forEach((value,i)=>{
  const html = ` 
  <div class="music">

  <div class="imgSmall-container">
  <img class="small_img"src="./img/${imageSelector[i]}" alt="">
  </div>

  <div class="love-container">
  <div class="love-icon">❤</div>
  </div>
  
  <div class="artist-container">
  <div class="artist-name">${value}</div>
  </div>
  
  <div class="music-title-container">
  <div class="music-title">Africa giant</div>
  </div>
  
<div class="music-playList-container">
<div class="music-playList">435</div>
</div>

<div class="menu-playList-container">
 <div class="menu-playList">⏸</div>
</div>
   
  </div>` 
if(i<7){
    parentE.insertAdjacentHTML("afterbegin",html)
}
  
})
};

renderLayout();  
