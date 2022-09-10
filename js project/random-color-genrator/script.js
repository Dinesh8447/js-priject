const background=document.querySelector('body');
const btn=document.querySelector('button');
const text=document.querySelector('h1')


btn.addEventListener('click',()=>{
    const ash='#'
    const first=Math.floor(Math.random()*10)
    const fivedigit=Math.floor(Math.random()*90000+1000)
    const join=ash+first+fivedigit
    // const tab=Math.floor(Math.random()*1000);
    // text.innerHTML=`rgba(${tab},3.${tab},1.${tab},0.${tab})`;
    // background.style.backgroundColor=`rgba(${tab},3.${tab},1.${tab},0.${tab})`;
    text.innerHTML=join;
    background.style.backgroundColor=join;
    // console.log(`${join}`);
    
})