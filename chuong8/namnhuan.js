let nam = prompt('Nhập năm để kiểm tra')
let namNhuan = false;
let chiaHetcho4 = nam % 4 == 0;
    if (chiaHetcho4){
        let chiaHetcho100 = nam % 100 == 0;
        if (chiaHetcho100){
            let chiaHetcho400 = nam % 100 == 0;
            if (chiaHetcho400){
                namNhuan = true;
            }
        } else {
            namNhuan = true
        }
    }
    if (namNhuan) {
        alert(nam + "là năm nhuận")
    }else{
            alert(nam+"Không phải năm nhuận")
    }
