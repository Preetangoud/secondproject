function changeMode(){
    let myBody = document.body
    myBody.classList.toggle("myDark")
}
window.onload = coupon()
 function loadCoupon(){
    document.getElementById("coupon").style.display="block"
}
function closeCoupon(){
    document.getElementById("coupon").style.display="none"
}