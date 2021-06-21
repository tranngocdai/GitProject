// convert.addEventListener("click",clickconvert)
// function chuyendoi() {
//     let soTien = parseInt(document.getElementById("amount").value);
//     let dvCanChuyenDoi = parseInt(document.getElementById("from").value);
//     let to = parseInt(document.getElementById("to").value);
//     let ketqua = soTien*(dvCanChuyenDoi/to);
//     document.getElementById("Hien").innerHTML=ketqua;

// }
// convert= document.getElementById("get")
// convert.addEventListener("click",clickconvert)
// function clickconvert(){
//     let get = +document.getElementById("ab").value
//     let From = +document.getElementById("b").value
//     let To= +document.getElementById("c").value
//     let ketqua= get*(From/To)
//     document.getElementById("Hien").innerHTML=ketqua;

function chuyendoi() {
    let sotien;
    let tutien;
    let thanhtien;
    sotien = document.getElementById("sotien").value;
    tutien = document.getElementById("tutien").value;
    thanhtien = document.getElementById("thanhtien").value;
    if (tutien == thanhtien){
        alert("so tien la: " + sotien);}

    else{
        if (tutien=="vietnam"){
            sotien = sotien / 25000;
            alert("so tien la: " + sotien);
        }
        else {
            sotien = sotien * 25000;
            alert("so tien la: " + sotien);
        }}

}