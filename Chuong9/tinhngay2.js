function hienthi() {
    getvalue = +document.getElementById('x').value
    switch (getvalue) {
        case 1:
            document.getElementById('z').innerHTML='Tháng 1 có 30 ngày'
            break;
        case 2:
            document.getElementById('z').innerText='Tháng 2 có 28 hoặc 29 ngày'
            break;
        case 3:
            document.getElementById('z').innerHTML='Tháng 3 có 30 ngày'
            break;
        case 4:
            document.getElementById('z').innerHTML='Tháng 4 có 30 ngày'
            break;
        case 5:
            document.getElementById('z').innerHTML='Tháng 5 có 30 ngày'
            break;
        case 6:
            document.getElementById('z').innerHTML='Tháng 6 có 30 ngày'
            break;
        case 7:
            document.getElementById('z').innerHTML='Tháng 7 có 30 ngày'
            break;
        case 8:
            document.getElementById('z').innerHTML='Tháng 8 có 31 ngày'
            break;
        case 9:
            document.getElementById('z').innerHTML='Tháng 9 có 30 ngày'
            break;
        case 10:
            document.getElementById('z').innerHTML='Tháng 10 có 31 ngày'
            break;
        case 11:
            document.getElementById('z').innerHTML='Tháng 11 có 30 ngày'
            break;
        case 12:
            document.getElementById('z').innerHTML='Tháng 12 có 31 ngày'
            break;
    }
}