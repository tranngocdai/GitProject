convert.addEventListener("click",clickconvert)
function chuyendoi() {
    let soTien = parseInt(document.getElementById("amount").value);
    let dvCanChuyenDoi = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value);
    let ketqua = soTien*(dvCanChuyenDoi/to);
    document.getElementById("Hien").innerHTML=ketqua;

}
// convert= document.getElementById("get")
// convert.addEventListener("click",clickconvert)
// function clickconvert(){
//     let get = +document.getElementById("ab").value
//     let From = +document.getElementById("b").value
//     let To= +document.getElementById("c").value
//     let ketqua= get*(From/To)
//     document.getElementById("Hien").innerHTML=ketqua;