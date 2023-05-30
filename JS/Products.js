var dem_noti = 0;
function notification(){
    if(dem_noti == 0)
    {
        var p = document.querySelector("#notification_on p");
        var rep_noti = document.querySelector("#notification_on");
        var hivi = document.querySelector("#notification");
        rep_noti.style.width = '300px';
        hivi.style.color  = 'yellow';
        hivi.style.border = '2px solid yellow';
        setTimeout(() => {
           p.style.display = 'block';
        }, 1000);
        rep_noti.addEventListener('click',(e) => {if(e.target == rep_noti){rep_noti.style.width = '0px';p.style.display='none';dem_noti = 0;   hivi.style.border = '2px solid white'; hivi.style.color  = 'white';}});
        dem_noti = 1;
    }
    else
    {
        var p = document.querySelector("#notification_on p");
        var rep_noti = document.querySelector("#notification_on");
        var hivi = document.querySelector("#notification");
        rep_noti.style.width = '0px';
        p.style.display = 'none';
        dem_noti = 0;
        hivi.style.color  = 'white';
        hivi.style.border = '2px solid white';
    }

}
function min(){
    let ele = document.getElementById("number_in");
    let min = ele.value;
       if(min > 1){
        min--;
    }
    else
    {
        min = min;
    };
    document.getElementById("number_in").value = min;
}
function max(){
    let ele = document.getElementById("number_in");
    let max = ele.value;
    max++;
    document.getElementById("number_in").value = max;
}
function hiden(){
    var content = document.querySelector("#content");
    var bt1 = document.querySelector("#an");
    var bt2 = document.querySelector("#hien");
    bt1.style.display = 'none';
    bt2.style.display = 'block';
    content.style.overflow = 'hidden';
    content.style.height = '350px';
    content.style.transition = 'all 1s';
}
function visi(){
    var content = document.querySelector("#content");
    var bt1 = document.querySelector("#an");
    var bt2 = document.querySelector("#hien");
    bt1.style.display = 'block';
    bt2.style.display = 'none';
    content.style.overflow = 'visible';
    content.style.height = '1000px';
    content.style.transition = 'all 0s';
}

