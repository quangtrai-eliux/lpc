const date = new Date();
var day = date.getDate(),
  month = date.getMonth() + 1,
  year = date.getFullYear(),
  hour = date.getHours(),
  min = date.getMinutes();

month = (month < 10 ? "0" : "") + month;
day = (day < 10 ? "0" : "") + day;
hour = (hour < 10 ? "0" : "") + hour;
min = (min < 10 ? "0" : "") + min;

var today = year + "-" + month + "-" + day,
  displayTime = hour + ":" + min;

document.getElementById("closetop").value = today;

const danhsachrc = [
  {
    id: 170521,
    name: "Khương Ly Mặc",
    nameAcc: "Áp Quyển Thự Quang",
  },
  {
    id: 101809,
    name: "Nhậm Hồng Tín ",
    nameAcc: "Nhậm Hồng Tín ",
  },
  {
    id: 201412,
    name: "Âu Dương Vân Hi ",
    nameAcc: "Lucian Gloster ",
  },
  {
    id: 232245,
    name: "Ứng Thừa Ngôn",
    nameAcc: "Ứng Thừa Ngôn",
  },
  {
    id: 696969,
    name: "Diệp Thanh Khư",
    nameAcc: "Diệp Thanh Khư",
  },
  {
    id: 190109,
    name: "Mạc Chu Tôn",
    nameAcc: "Ôn Truất An ",
  },
  {
    id: 3103333,
    name: "Tuệ Yết Hàm",
    nameAcc: "Ức Liễu Hoa ",
  },
  {
    id: 403301,
    name: "Khảng Tâm",
    nameAcc: "Lĩnh Hà Lâm Nha",
  },
  {
    id: 623623,
    name: "Vong Huyền ",
    nameAcc: "Lam Thiên",
  },
  {
    id: 170517,
    name: "Âu Dương Thời Song ",
    nameAcc: "Mordu Amplitude ",
  },
  {
    id: 300803,
    name: "Mạc Tinh Nghiên",
    nameAcc: "Tiêu Khắc Minh",
  },
  {
    id: 115379,
    name: "Diên Thành",
    nameAcc: "Huỳnh Trúc Huỳnh",
  },
  {
    id: 985792,
    name: "Cố Mạn Hoa",
    nameAcc: "Huyen Nguyen",
  },
  {
    id: 251022,
    name: "Hạ Nam Chương",
    nameAcc: "Hạ Nam Chương",
  },
  {
    id: 150902,
    name: "Nhiếp Linh Nhi",
    nameAcc: "Kleine Prinzessin",
  },
  {
    id: 983651,
    name: "Giản Nhã Lâm ",
    nameAcc: "Giản Nhã Lâm ",
  },
  {
    id: 141267,
    name: "Trác Lãng ",
    nameAcc: "Tràng Tự Lãng",
  },
  {
    id: 301907,
    name: "Bạc Ngư",
    nameAcc: "Biện Tri",
  },
  {
    id: 210901,
    name: "Diệp Hy Nguyệt",
    nameAcc: "Bé Di",
  },
  {
    id: 155443,
    name: "Chu Tử Hiên",
    nameAcc: "Tản Thu",
  },
  {
    id: 251205,
    name: "Diệp Tửu Lân ",
    nameAcc: "Giản Nhã Lâm ",
  },
  {
    id: 227345,
    name: "Mặc Thanh",
    nameAcc: "Mặc Thanh",
  },
  {
    id: 123456,
    name: "Mục Tức Vi ",
    nameAcc: "Mục Dịch ",
  },
  {
    id: 150318,
    name: "Lệ Quỷ",
    nameAcc: "Lươn Tra Thủy Chung ",
  },
  {
    id: 190202,
    name: "Chu Lãng Hà",
    nameAcc: "Nhậm Diêu Viễn.",
  },
];

const validate = () => {
  if (document.formInit.mst.value == "") {
    alert("Nhập mã số top!");
    document.formInit.mst.focus();
    return false;
  }
  if (document.formInit.idoc.value == "") {
    alert("Nhập ID OC!");
    document.formInit.idoc.focus();
    return false;
  }
  if (
    danhsachrc.filter((item) => item.id == document.formInit.idoc.value)
      .length == 0
  ) {
    alert("Không tìm thấy ID OC!");
    document.formInit.idoc.focus();
    return false;
  }
  if (document.formInit.rcjoin.value == "") {
    alert("Nhập số RC tham gia!");
    document.formInit.rcjoin.focus();
    return false;
  }
  if (document.formInit.comtper.value == "") {
    alert("Nhập số comt role cá nhân!");
    document.formInit.comtper.focus();
    return false;
  }
  if (document.formInit.comt10row.value == "") {
    alert("Nhập số comt role cá nhân có 10 dòng!");
    document.formInit.comt10row.focus();
    return false;
  }
  if (document.formInit.totalcomt.value == "") {
    alert("Nhập số comt role của topic!");
    document.formInit.totalcomt.focus();
    return false;
  }

  return true;
};

let objData = {};

const back = () => {
  document.querySelector(".calculator").style.display = "flex";
  document.querySelector(".btn-calculator").style.display = "block";
  document.querySelector(".btn-back").style.display = "none";
  document.querySelector("#calculator-success").style.display = "none";
};

const calculator = () => {
  if (validate()) {
    document.querySelector(".calculator").style.display = "none";
    document.querySelector(".btn-calculator").style.display = "none";
    document.querySelector(".btn-back").style.display = "block";
    document.querySelector("#calculator-success").style.display = "block";

    const ocInfo = danhsachrc.filter(
      (item) => item.id == document.formInit.idoc.value
    )[0];

    const date = new Date(document.formInit.closetop.value);
    const day = date.getDate();

    const multiplyAnniv = () => {
      if (day == 10) return 5;
      if (day == 1 || day == 20 || day == 30) return 2;
      if (day == 15) return 3;
      return 1;
    };

    const multiplyDan = (soluong) => {
      let multiply = 0;
      let arr = [];
      for (let index = 0; index < soluong; index++) {
        let random = Math.floor(1 + Math.random() * 10);
        multiply += random;
        arr.push(random);
      }
      return { multiply, arr };
    };

    objData = {
      timeCal: today + " " + displayTime,
      closeDate: document.formInit.closetop.value,
      numberTop: document.formInit.mst.value,
      idOc: ocInfo.id,
      nameOC: ocInfo.name,
      accOC: ocInfo.nameAcc,
      quest: document.querySelector("#nv:checked") ? true : false,
      numberRC: document.formInit.rcjoin.value,
      actionTop: document.formInit.action.value,
      rateTop: document.formInit.ratetop.value,
      comtPer: document.formInit.comtper.value,
      comt10Row: document.formInit.comt10row.value,
      comtTotal: document.formInit.totalcomt.value,
      numberK: 1 + document.formInit.comt10row.value / 10,
      kq1: Math.floor(5 + Math.random() * 26),
      kq2: Math.floor(5 + Math.random() * 26),
      mocComt: Math.floor(
        Math.floor(document.formInit.comtper.value / 10) * 3 -
          (document.formInit.comtper.value > 10 ? 3 : 0) +
          Math.random() *
            (Math.floor(document.formInit.comtper.value / 10) * 5 -
              (Math.floor(document.formInit.comtper.value / 10) * 3 -
                (document.formInit.comtper.value > 10 ? 3 : 0)) +
              1)
      ),
      bonusCH: document.formInit.bonusch.value || 0,
      bonusLT: document.formInit.bonuslt.value || 0,
      bonusExp: document.formInit.bonusexp.value || 0,
      numberTVD: document.formInit.tvd.value || 0,
      numberHDD: document.formInit.hdd.value || 0,
      chiSo: document.formInit.chiso.value || 0,
      multiplyHHD: multiplyDan(document.formInit.hdd.value || 0),
      multiplyTVD: multiplyDan(document.formInit.tvd.value || 0),
    };

    const totalCH =
      Math.floor(
        (multiplyAnniv() + objData.multiplyHHD.multiply) *
          ((objData.actionTop == "true" ? 100 : 50) +
            objData.numberRC * 10 +
            (objData.kq1 * objData.comt10Row * objData.numberK +
              objData.kq1 * (objData.comtPer - objData.comt10Row)) +
            objData.comtTotal * 2)
      ) + Number(objData.bonusCH);
    const totalLT =
      Math.floor(
        multiplyAnniv() *
          ((objData.actionTop == "true" ? 50 : 20) +
            objData.numberRC * 10 +
            (objData.kq2 * objData.comt10Row * objData.numberK +
              objData.kq2 * (objData.comtPer - objData.comt10Row)) +
            objData.comtTotal * 2)
      ) + Number(objData.bonusLT);

    const calculatorData = [
      {
        name: "Ngày tính",
        data: objData.timeCal,
      },
      {
        name: "Ngày đóng top",
        data: objData.closeDate,
      },
      {
        name: "Mã số top",
        data: objData.numberTop,
      },
      {
        name: "ID OC",
        data: objData.idOc,
      },
      {
        name: "Tên OC",
        data: objData.nameOC,
      },
      {
        name: "Tên tài khoản",
        data: objData.accOC,
      },
      {
        name: objData.actionTop == "true" ? "OC Đăng top" : "OC Tham gia",
        data:
          objData.actionTop == "true"
            ? "100 Điểm cống hiến<br> 50 Linh thạch<br> 5 Điểm khí vận<br> 4 Điểm sinh mệnh"
            : "50 Điểm cống hiến<br> 20 Linh thạch<br> 2 Điểm khí vận<br> 1 Điểm sinh mệnh",
      },
      {
        name: "Số RC tham gia<br> (" + objData.numberRC + " RC)",
        data:
          objData.numberRC * 10 +
          " Điểm cống hiến<br> " +
          objData.numberRC * 10 +
          " Linh thạch",
      },
      {
        name:
          "Đánh giá<br> ( " +
          (objData.rateTop == "true" ? "Hợp lệ" : "Không hợp lệ") +
          " )",
        data:
          objData.rateTop == "true"
            ? "1 Điểm may mắn<br> 1 Điểm sinh mệnh"
            : "2 Điểm xui xẻo<br> -2 Điểm sinh mệnh",
      },
      {
        name:
          "Chất lượng Comt <br>(" +
          objData.comt10Row +
          " comt 10 dòng)<br>(K=" +
          objData.numberK +
          ")<br>(KQ1: " +
          objData.kq1 +
          ", KQ2: " +
          objData.kq2 +
          ")",
        data:
          Math.floor(
            objData.kq1 * objData.comt10Row * objData.numberK +
              objData.kq1 * (objData.comtPer - objData.comt10Row)
          ) +
          " Điểm cống hiến<br> " +
          Math.floor(
            objData.kq2 * objData.comt10Row * objData.numberK +
              objData.kq2 * (objData.comtPer - objData.comt10Row)
          ) +
          " Linh thạch",
      },
      {
        name:
          "Mốc Comt cá nhân<br> (" +
          Math.floor(objData.comtPer / 10) * 10 +
          " comt)<br>(Random từ " +
          (Math.floor(objData.comtPer / 10) * 3 -
            (objData.comtPer > 10 ? 3 : 0)) +
          " đến " +
          Math.floor(objData.comtPer / 10) * 5 +
          ")",
        data: objData.mocComt + " Điểm khí vận",
      },
      {
        name: "Mốc Comt top<br> (" + objData.comtTotal + " comt)",
        data:
          objData.comtTotal * 2 +
          " Điểm cống hiến<br> " +
          objData.comtTotal +
          " Linh thạch",
      },
      {
        name: "Đóng top ngày " + day,
        data:
          "x" +
          multiplyAnniv() +
          " Điểm cống hiến<br> x" +
          multiplyAnniv() +
          " Linh thạch",
      },
      {
        name: "Nhiệm vụ",
        data: objData.quest ? 1 : 0,
      },
      {
        name: "Exp",
        data: "Tạm chưa có",
      },
      {
        name: "Cống hiến thêm",
        data: objData.bonusCH,
      },
      {
        name: "Linh thạch thêm",
        data: objData.bonusLT,
      },
      {
        name: "Exp thêm",
        data: objData.bonusExp,
      },
      {
        name: "Điểm chỉ số",
        data: objData.chiSo,
      },
      {
        name: "Hoạt động đan<br>(" + objData.numberHDD + " viên)",
        data:
          (objData.numberHDD == 0 ? "" : "x") +
          objData.multiplyHHD.arr.join(", x"),
      },
      {
        name: "Tu vi đan<br>(" + objData.numberTVD + " viên)",
        data:
          (objData.numberTVD == 0 ? "" : "x") +
          objData.multiplyTVD.arr.join(", x"),
      },
      {
        name: "Tổng:",
        data:
          totalCH +
          " Điểm cống hiến<br> " +
          totalLT +
          " Linh thạch <br>" +
          (objData.mocComt + (objData.actionTop == "true" ? 5 : 2)) +
          " Điểm khí vận<br>" +
          (objData.rateTop == "true" ? 0 : 2) +
          " Điểm xui xẻo<br>" +
          ((objData.actionTop == "true" ? 4 : 1) +
            (objData.rateTop == "true" ? 1 : -2)) +
          " Điểm sinh mệnh<br>" +
          objData.chiSo +
          " Điểm chỉ số<br>" +
          "0 Exp",
      },
    ];
    let html = "";
    calculatorData.forEach((item) => {
      html += `<div class="info-row">
        <div class="name">${item?.name}</div>
        <div class="data">${item?.data}</div>
    </div>`;
    });
    document.getElementById(
      "calculator-success"
    ).innerHTML = `<div>${html}<div/>`;
  }
};
