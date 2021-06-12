function hienthi(){
    getvalue = +document.getElementById('a').value
    switch (getvalue){
        case 1:
            document.getElementById('b').innerHTML='tháng 1 có 31 ngày'
            break;
        case 2:
            document.getElementById('b').innerHTML='tháng 1 có 28 hoặc 29 ngày'
            break;
        case 3:
            document.getElementById('b').innerHTML='tháng 1 có 30 ngày'
            break;
        case 4:
            document.getElementById('b').innerHTML='tháng 1 có 31 ngày'
            break;
        case 5:
            document.getElementById('b').innerHTML='tháng 1 có 30 ngày'
            break;
        case 6:
            document.getElementById('b').innerHTML='tháng 1 có 31  ngày'
            break;
        case 7:
            document.getElementById('b').innerHTML='tháng 1 có 31 ngày'
            break;

    }
}

