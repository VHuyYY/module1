class SOTIETKIEM {
  constructor(maSo, loaiTietKiem, hoTen, CMND, ngayMoSo, soTien) {
    this.maSo = maSo;
    this.loaiTietKiem = loaiTietKiem;
    this.hoTen = hoTen;
    this.CMND = CMND;
    this.ngayMoSo = ngayMoSo;
    this.soTien = soTien;
  }
}
class soThem {
  constructor(name) {
    this.name = name;
    this.listMoney = [];
  }
  addMoney(money) {
    this.listMoney.push(money);
  }
  removeMoney(index) {
    this.listMoney.splice(index, 1);
  }
}
let myMoney = new soThem("Savings Accounts");
function showAll() {
  let list = myMoney.listMoney;
  let str = `
      <tr>
          <th>Mã Sổ</th>
          <th>Loại tiết kiệm</th>
          <th>Họ tên</th>
          <th>CMND</th>
          <th>Ngày Mở Sổ</th>
          <th>Số tiền</th>
          <th>Action</th>
      </tr>
  `;
  for (let i = 0; i < list.length; i++) {
    str += `
          <tr>
              <td>${list[i].maSo}</td>
              <td>${list[i].loaiTietKiem}</td>
              <td>${list[i].hoTen}</td>
              <td>${list[i].CMND}</td>
              <td>${list[i].ngayMoSo}</td>
              <td>${list[i].soTien}</td>
              <td><button class="btn" onclick="removeMoney(${i})">Xóa</button></td>
          </tr>
      `;
  }
  document.getElementById("table-money").innerHTML = str;
}
function add() {
  let maSo = document.getElementById("maSo").value;
  let loaiTietKiem = document.getElementById("loaiTietKiem").value;
  let hoTen = document.getElementById("hoTenKhachHang").value;
  let CMND = document.getElementById("cmnd").value;
  let ngayMoSo = document.getElementById("ngayMoSo").value;
  let soTienGui = document.getElementById("soTienGui").value;
  let newMoney = new SOTIETKIEM(
    maSo,
    loaiTietKiem,
    hoTen,
    CMND,
    ngayMoSo,
    soTienGui
  );
  myMoney.addMoney(newMoney);
  alert("Thêm thành công");
  showAll();
}
function removeMoney(index) {
  let isConfirm = confirm("Bạn có chắc muốn xóa?");
  if (isConfirm) {
    myMoney.removeMoney(index);
    alert("Xóa thành công");
    showAll();
  }
}
