let videoFace = document.getElementsByClassName('carousel__face')
var vid0 = document.getElementById("myVideo0");
var vid1 = document.getElementById("myVideo1"); 
var vid2 = document.getElementById("myVideo2"); 
var vid3 = document.getElementById("myVideo3"); 
var master = gsap.timeline();
let slides=[0,1,2,3];
function playVid() {
  switch(slides[0]){
  case 0:
    vid0.play();
    break;
  case 1:
    vid1.play();
    break;
      case 2:
        vid2.play();
    break;
    case 3:
      vid3.play();
      break;
  }
}
function pauseVid() {
  switch(slides[0]){
    case 0:
      vid0.pause();
      break;
    case 1:
      vid1.pause();
      break;
        case 2:
          vid2.pause();
      break;
      case 3:
        vid3.pause();
        break;
    }
  }

function animationUp(array){
  var tl = gsap.timeline();
  tl.to(array[slides[0]], {scale:1, delay:0.5,},"start");
  let lastElement=slides.pop();
  slides.unshift(lastElement);
  tl.to(array[slides[0]],  {translateY:0,rotateX:40,translateZ:100, scale:1, delay:1.5,},"start");
  tl.to(array[slides[1]], {translateY:287,rotateX:40,translateZ:0, scale:0.7, delay:1.5,},"start");
  tl.to(array[slides[2]],  {translateY:0,rotateX:40,translateZ:-100, scale:0.3, delay:1.5,},"start");
  tl.to(array[slides[3]],  {translateY:-200,rotateX:-40,translateZ:0, scale:0.7, delay:1.5,},"start");
  tl.to(array[slides[1]], {rotateX:0,scale:0.7, delay:2,},"start");
  tl.to(array[slides[3]], {rotateX:0,scale:0.7, delay:2,},"start");
  tl.to(array[slides[2]], {rotateX:0,scale:0.3, delay:2,},"start");
  tl.to(array[slides[0]], {rotateX:0,scale:5, delay:2,},"start");
 return tl;
}
function* startAnimUp(array){
  const t0 = performance.now();
  pauseVid();
  master.add(animationUp(array),">");
navControl();
 playVid();
 const t1 = performance.now();
  console.log(`Animation proces took ${t1 - t0} milliseconds.`);
}
function animationDown(array){
  var tl = gsap.timeline();
  tl.to(array[slides[0]], {scale:1, delay:0.5,},"start");
  let firstElement=slides.shift();
  slides.push(firstElement);
  tl.to(array[slides[0]],  {translateY:0,rotateX:40,translateZ:100, scale:1, delay:1,},"start");
  tl.to(array[slides[1]],  {translateY:287,rotateX:40,translateZ:0, scale:0.7, delay:1,},"start");
  tl.to(array[slides[2]],  {translateY:0,rotateX:-40,translateZ:-100, scale:0.3, delay:1,},"start");
  tl.to(array[slides[3]],  {translateY:-200,rotateX:-40,translateZ:0, scale:0.7, delay:1,},"start");
  tl.to(array[slides[1]], {rotateX:0,scale:0.7, delay:2,},"start");
  tl.to(array[slides[3]], {rotateX:0,scale:0.7, delay:2,},"start");
  tl.to(array[slides[2]], {rotateX:0,scale:0.3, delay:2,},"start");
  tl.to(array[slides[0]], {rotateX:0,scale:5, delay:2,},"start");
 return tl;
}
function* startAnimDown(array){
  const t0 = performance.now();
  pauseVid();
  master.add(animationDown(array),">");
  navControl();
  playVid();
  const t1 = performance.now();
  console.log(`Animation proces took ${t1 - t0} milliseconds.`);
  }
function runCarousel(genObj) {
  if (!genObj.next().done) {
    setTimeout(runCarousel, 10, genObj);
  }
}
function zoom(event) {
    if(event.deltaY<0){
     runCarousel(startAnimUp(videoFace))

      startAnimUp(videoFace);

  }
  else
  {
   runCarousel(startAnimDown(videoFace))

  }
 
}
const el = document.querySelector('body');
el.onwheel = zoom;
function Load(){
gsap.to(videoFace[slides[0]],  {translateY:0,rotateX:40,translateZ:100, scale:1, delay:1.5,});
gsap.to(videoFace[slides[1]], {translateY:287,rotateX:40,translateZ:0, scale:0.7, delay:1.5,});
gsap.to(videoFace[slides[2]],  {translateY:0,rotateX:40,translateZ:-100, scale:0.3, delay:1.5,});
gsap.to(videoFace[slides[3]],  {translateY:-200,rotateX:-40,translateZ:0, scale:0.7, delay:1.5,});
gsap.to(videoFace[slides[0]], {rotateX:0,scale:5, delay:2,});
playVid();
}

Window.onLoad=Load();