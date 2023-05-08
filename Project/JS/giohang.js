var inputA = document.querySelector("#ThemSP");
var datalt = localStorage.getItem('sanpham_giohang');
if(datalt)
{
    var sanpham_giohang = JSON.parse(localStorage.getItem('sanpham_giohang'));
}
else
{
    var sanpham_giohang = [];
}
inputA.addEventListener('click', () => {
    var imgs = document.querySelector("#img_sp_l").innerHTML;
    var tsp = document.querySelector("#tsp").innerHTML;
    var gsp = document.querySelector("#gsp").innerHTML;
    var soluong = document.querySelector("#number_in").value;
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

    var tongtien = parseInt(price_sp)*parseInt(soluong);
    additems(imgs,tsp,price_sp,soluong,tongtien);
    localStorage.setItem('sanpham_giohang',JSON.stringify(sanpham_giohang));
});
function additems(imgs,tsp,price_sp,soluong,tongtien)
{
    var item = {
        imagesp: imgs,
        namesp: tsp,
        pricesp: price_sp,
        slsp: soluong,
        thanhtien: tongtien
    }
    sanpham_giohang.push(item);
    alert("Đã thêm sản phẩm "+ tsp + ' với số lượng: ' + soluong + ' vào giỏ hàng');
}