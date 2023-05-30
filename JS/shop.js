var datastring = localStorage.getItem('sanpham_giohang');
var list = JSON.parse(localStorage.getItem('sanpham_giohang'));
var sum = 0;
if(datastring)
{
    var imgtt = document.querySelector("#imgtt");
    var tables = document.querySelector(".container_bottom");
    imgtt.style.display = 'none';
    tables.style.display = 'block';
    var strdata = document.querySelector(".container_bottom");
    console.log(list);
    var strdataview = '';
    for (var i = 0; i < list.length; i++)
    {
        if(i == 0)
        {
            strdataview +=  '<tr><th></th><th>Tên hàng</th><th>Giá</th><th>Số lượng</th><th>Tổng</th></tr>';
            strdata.innerHTML = strdataview;
        }
        var viewimg =  list[i].imagesp;
        viewimg = viewimg.replace('../../', '../');
       sum += parseInt(list[i].thanhtien);
        strdataview +=  '<tr><td>'+viewimg+'</td><td>'+list[i].namesp+'</td><td>'+list[i].pricesp+'</td><td>'+list[i].slsp+'</td><td>'+list[i].thanhtien+'</td></tr>';
        strdata.innerHTML =strdataview;
        if(i == list.length - 1)
        {
            strdataview +=  '<tr><td></td><td></td><td></td><td>'+'Thành tiền'+'</td><td id="thanhtoans">'+sum+'</td></tr>';
            strdataview += '<tr><td></td><td></td><td></td><td>'+'<button type="button" onclick="huy()">Hủy tất cả đơn hàng</button>'+'</td><td>'+'<button type="button" onclick="thanhtoan()">Thanh toán</button>'+'</td></tr>';
            strdata.innerHTML = strdataview;
        }
        
    }
}
else
{
    var imgtt = document.querySelector("#imgtt");
    var tables = document.querySelector(".container_bottom");
    imgtt.style.display = 'block';
    tables.style.display = 'none';
}
function huy(){
    localStorage.removeItem('sanpham_giohang');
    location.reload();
}
//-------------------------------------

function thanhtoan(){
    var credit = document.querySelector("#credit");
    var pricesp = document.querySelector("#pricesp");
    credit.style.display = 'flex';
    pricesp.innerHTML = sum;
    var phone = document.querySelector("#phone");
    phone.addEventListener('change',() =>{
            checkphone();
    });
    credit.addEventListener('click',(e) => {if(e.target === credit){credit.style.display = 'none';}});
}

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