// var title = document.querySelectorAll('.title');
var nameP = document.querySelector("#name");
var myinput = document.querySelectorAll(".myinput");
var rangeV = document.querySelectorAll(".rangeV");
var range = document.querySelector("#range");
var words = document.querySelector("#words");

const char = ['Programmer','Visianite','Android Developer'];

gsap.to("#words",{
    duration:1,
    opacity:0,
    stagger:.5,
    delay:5
});
// gsap.from("#words",{
//     duration:1,
//     opacity:1
// });

function firstPageAnimation(){
        gsap.to(".title",{
            duration: 1,
            x:'0',
            ease:Power2,
            stagger:.2
        })
        gsap.to(".link",{
            duration: 1,
            y:'0',
            ease:Power2,
            stagger:.2,
            opacity:1,
            delay:2
        })

    gsap.to(".name",{
        duration:1,
        opacity:1,
        delay:1,
        y:'1',
        ease:Power3,
        stagger:.5
    })
    gsap.to('#discP',{
        y:'1',
        duration:1,
        delay:1,
        ease:Power3
    })

    gsap.to('#button',{
        x:'1',
        duration:1.4,
        delay:3,
        ease:Bounce.easeOut
    })
}

firstPageAnimation();


function rangeColor(){
    var value;
    let i = 0;
    myinput.forEach(element => {
        // console.log(element.value);
        value = element.value;
            element.style.background = `linear-gradient(to right,  rgb(13, 13, 37) 0%,  rgb(13, 13, 37) ${value}%, #fff ${value}%, #fff 100%)`
            while(i<rangeV.length){
                let elem = rangeV[i];
                elem.textContent = value;
                i++;
                break;
            }

    });
}
rangeColor();


