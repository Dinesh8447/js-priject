const hours1=document.querySelector('.hours')
const min1=document.querySelector('.min')
const sec1=document.querySelector('.sec')

const updateclock=()=>{
    const date=new Date();
    // setTimeout(updateclock,1000)
    
    const hour=date.getHours();
    const min=date.getMinutes();
    const sec=date.getSeconds();

    const hoursdeg=(hour/12)*360;
    hours1.style.transform=`rotate(${hoursdeg}deg)`;

    const mindeg=(min/60)*360;
    min1.style.transform=`rotate(${mindeg}deg)`;

    const secdeg=(sec/60)*360;
    sec1.style.transform=`rotate(${secdeg}deg)`;
}

// updateclock()
setInterval(updateclock,1000);