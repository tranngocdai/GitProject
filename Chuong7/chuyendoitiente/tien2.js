convert= document.getElementById("get");
convert.addEventListener("click",clickconvert());
function clickconvert(){
    let get = +document.getElementById("a").value;
    let from = +document.getElementById("b").value;
    let to= +document.getElementById("c").value;
    let ketqua= get*(from/to)
    document.getElementById("Hien").innerHTML=ketqua;
}
