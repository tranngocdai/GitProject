convert= document.getElementById("get");
convert.addEventListener("click",clickconvert);
function clickconvert(){
    let get = +document.getElementById("ab").value;
    let From = +document.getElementById("b").value;
    let To= +document.getElementById("c").value;
    let ketqua= get*(From/To)
    document.getElementById("Hien").innerHTML=ketqua;
}
