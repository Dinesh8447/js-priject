const circle=document.querySelector('.circle');
const up=document.querySelector('#upbtn');
const down=document.querySelector('#downbtn');
let rotatevalue=circle.style.transform;


up.addEventListener('click',()=>{
let rotatesum=rotatevalue + "rotate(-90deg)";
circle.style.transform=rotatesum;
rotatevalue=rotatesum;
})


down.addEventListener('click',()=>{
    let rotatesum=rotatevalue + "rotate(90deg)";
    circle.style.transform=rotatesum;
    rotatevalue=rotatesum;
    })