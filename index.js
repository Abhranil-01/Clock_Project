setInterval(function() {
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let hrotation=30*hour+min/2;
    let mrotation=6*min;
    let srotation=6*sec;

    let h=document.getElementById('hour')
    let m=document.getElementById('min')
    let s=document.getElementById('sec')

    h.style.transform=`rotate(${hrotation}deg)`;
    m.style.transform=`rotate(${mrotation}deg)`;
    s.style.transform=`rotate(${srotation}deg)`;

},1000)