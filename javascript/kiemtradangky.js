function KiemTraThongTin(){
    var hoTen=document.getElementById("hoten");
    if (hoTen.value==""){
        alert("Vui lòng nhập Họ tên.");
        hoTen.focus();
        return false;
    }
    var email=window.document.getElementById("email") ;
    re=/\w+@\w+\.\w+/;
    if (email.value=="") {
        alert("Bạn chưa nhập Email.") ;
        email. focus () ;
        return false;
    }
    else
    if (re. test (email. value) ==false) {
        alert("Email không đúng định dạng!");
        email. focus () ;
        return false;
    }
    var matKhau=document.getElementById("matkhau");
    if (matKhau.value==""){
        alert("Vui lòng nhập mật khẩu.");
        matKhau.focus();
        return false;
    }
    var nhapLaiMatKhau=document.getElementById("nhaplaimatkhau");
    if (nhapLaiMatKhau.value==""){
        alert("Vui lòng nhập lại mật khẩu.");
        nhapLaiMatKhau.focus();
        return false;
    }
    if((matKhau.value)!=(nhapLaiMatKhau.value)){
        alert("Mật khẩu không trùng khớp! Xin mời nhập lại mật khẩu.");
        nhapLaiMatKhau. value="";
        matKhau.focus();
        nhapLaiMatKhau.focus();
        return false;
    }
    var Checkbox=document.getElementById("checkbox");
    if (Checkbox.checked == false){
        alert("Vui lòng đồng ý với các Điều Khoản & Dịch Vụ.");
        Checkbox.focus();
        return false;
    }
    alert("Đăng ký thành công!");
    alert("---------------- Chào mừng bạn đến với MUA NGAY ---------------");
    return true;
}