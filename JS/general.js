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
        rep_noti.addEventListener('click',(e) => {if(e.target == rep_noti){rep_noti.style.width = '0px';p.style.display='none';dem_noti = 0;   hivi.style.border = '2px solid white'; hivi.style.color  = 'white';        hivi.style = '#notification:hover{border: 2px solid rgba(255, 255, 0, 0.715);color: rgba(255, 255, 0, 0.715);}'}});
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
        hivi.style = '#notification:hover{border: 2px solid rgba(255, 255, 0, 0.715);color: rgba(255, 255, 0, 0.715);}'
    }

}