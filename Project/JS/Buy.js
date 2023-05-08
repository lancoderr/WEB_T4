var inputB = document.querySelector("#BuySp");
inputB.addEventListener('click', () => 
{
    var credit = document.querySelector("#credit");
    var namesp = document.querySelector("#namesp");
    var pricesp = document.querySelector("#pricesp");
    var soluong = document.querySelector("#number_in").value;
    var soluongview = document.querySelector("#sluong");
    var tsp = document.querySelector("#tsp").innerHTML;
    var gsp = document.querySelector("#gsp").innerHTML;
    var length_price = gsp.length;
    var price_sp = 0;
    var pow = 1;
    for (var i = parseInt(length_price)-2; i >= 0; i--)
    {
        
        if(gsp[i] != '.')
        {
            if(gsp[i] == ' ')
            {
                break;
            }
            price_sp += parseInt(gsp[i]) * pow;
          
            pow = pow *10;
        }
    }
    credit.style.display = 'flex';
    namesp.innerHTML = tsp;
    pricesp.innerHTML = price_sp*parseInt(soluong);
    var imgs = document.querySelector("#img_sp_l").innerHTML;
    var imgcy = document.querySelector("#img_sp");
    imgcy.innerHTML =  imgs;
    soluongview.innerHTML = soluong;
    var phone = document.querySelector("#phone");
    phone.addEventListener('change',() =>{
            checkphone();
    });
    credit.addEventListener('click',(e) => {if(e.target === credit){credit.style.display = 'none';}});
}
)
function cl1(){
    var cls1 = document.querySelector("#pttt1").value;
    var phanhoi = document.querySelector("#phanhoi");
    phanhoi.innerHTML = 'Vui lòng thanh toán khi đơn hàng được giao';
}
function cl2(){
    var cls2 = document.querySelector("#pttt2").value;
    var phanhoi = document.querySelector("#phanhoi");
    phanhoi.innerHTML = 'Vui lòng chuyển khoản vào tài khoản sau:<p>Ngân hàng ACB</p>Số tài khoản 998 858 258 <p></p>';
    
}
function checkphone(){
    var phone = document.querySelector("#phone");
    var pattern = /^([0-9]{9,10})+$/;
    if(!pattern.test(phone.value)){
        phone.style.border = '1px solid red';
        alert("Số điện thoại không hợp lệ (9-10 số) ");
        return false
    }
    else{
        phone.style.border = '';
        return true;
    }
}
