let clock=document.querySelector(".clock");
let tick=()=>{
    const now=new Date();
    let time=now.toLocaleDateString();
    let sec=now.getSeconds();
    let min=now.getMinutes();
    let hr=now.getHours();
    let zone=hr>12? "PM":"AM"

    clock.innerHTML=`
        <div class="time">${time}</div>
        <div class="hr">${hr}</div> :
        <div class="min">${min}</div> :
        <div class="sec">${sec}</div> :
        <div class="zone">${zone}</div>
        `
}
setInterval(tick,1000);