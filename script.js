gsap.to("#nav",{
    backgroundColor:"#000",opacity:"0.7",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -15%",
        end:"top -16%",
        scrub:"1",
        
    }
})

gsap.to("#main",{
    backgroundColor:"#000",

    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -20%",
        end:" top -70%",
        scrub:"2",
    }
})

var cursor = document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px"    //Nhi Samjha +20 
    cursor.style.top=dets.y+"px"
})

var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    cursorBlur.style.left=dets.x-150+"px"
    cursorBlur.style.top=dets.y-150+"px"
    
})

var h4=document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3;
        cursor.style.border=" 1px solid #fff";
        cursor.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border=" 0px solid #95c11e";
        cursor.style.backgroundColor="#95c11e ";
    })
})


gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,//stagger sequence me div ko show karta hai ye gap in seconds create karta hai
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:"3",
    }
})


gsap.from(".card",{
    scale:0.8,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:"3",
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 60%",
        end:"top 55%%",
        scrub:3,
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3,
    }
})


var h2=document.querySelectorAll(".elem h2")
h2.forEach(function(idx){
    idx.addEventListener("mouseenter",function(){
        cursor.style.scale=3;
        cursor.style.border=" 1px solid #fff";
        cursor.style.backgroundColor="transparent";
    })
    idx.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border=" 0px solid #95c11e";
        cursor.style.backgroundColor="#95c11e ";
    })
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:3,
    }

})


var footer=document.querySelectorAll("#footer")
footer.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3;
        cursor.style.border=" 1px solid #fff";
        cursor.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1;
        cursor.style.border=" 0px solid #95c11e";
        cursor.style.backgroundColor="#95c11e ";
    })
})



// for creating a slider

// const slider = document.querySelector('#images-slider');
//         const images = document.querySelectorAll('#images-slider #image1');
//         let counter = 0;

//         function slide() {
//             counter++;
//             if (counter === images.length) {
//                 counter = 0;
//             }
//             slider.style.transform = `translateX(-${counter * 100}%)`;
//         }

//         setInterval(slide, 3000);

// img id="image1" src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="image1">
// {/* <img id="image2" src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="image2"> */}
// {/* <img id="image3" src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&fit=682%2C1024&ssl=1" alt="image3"> */}

// var slider=document.querySelector("#slider");
// var slide=document.querySelectorAll("#slide");
// var previous=document.querySelector(".previous");
// var next=document.querySelector(".next");

// let slideindex=0;

// slide[slideindex].classList.add('active');

// previous.addEventListener("click",function(){
//     slide[slideindex].classList.remove('active');
//     slideindex =(slideindex === 0) ? slide.length-1 : slideindex-1;//check if slideindex is = to last slide or not if yes that goto index0 else index+1;
//     slide[slideindex].classList.add('active');
//     slider.style.transform=`translateX(-${slideindex *100}%)`;
// })

// next.addEventListener("click",function(){
//     slide[slideindex].classList.remove('active');
//     slideindex =(slideindex === slide.length-1) ? 0:slideindex+1;//check if slideindex is = to last slide or not if yes that goto index0 else index+1;
//     slide[slideindex].classList.add('active');
//     slider.style.transform=`translateX(-${slideindex *100}%)`;
// })



