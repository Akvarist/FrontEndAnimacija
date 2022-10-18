let listNav = document.getElementsByClassName('list_item');
let  progLine= document.getElementsByClassName('progres_line');

for (var n = 0; n < listNav.length; n++) {
    listNav[n].addEventListener( 'click', function(){
    for(;Number(this.id)!=slides[0];){
        if(Number(this.id)<=slides[0]) {
         runCarousel(startAnimUp(videoFace));


        }  
        else{
           runCarousel(startAnimDown(videoFace));
        }
    }
    });
   }
function navControl() {
    for(var n = 0; n < 4; n++){
       listNav[n].style= 'color:white';
       }
    let a=19*slides[0];
    gsap.to(progLine, {translateY:a, delay:0.5,});
    listNav[slides[0]].style= 'color:red';
 }