function KiemTraThongTin(){
    var tenDangNhap=document.getElementById("tendangnhap");
    if (tenDangNhap.value==""){
        alert("Vui lòng nhập tên đăng nhập.");
        tenDangNhap.focus();
        return false;
    }
    var matKhau=document.getElementById("matkhau");
    if (matKhau.value==""){
        alert("Vui lòng nhập mật khẩu.");
        matKhau.focus();
        return false;
    }
    alert("Đăng nhập thành công! Xin chúc mừng.");
    return true;
}