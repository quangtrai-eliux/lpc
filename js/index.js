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

$(document).ready(function () {
  $("select").selectize({
    sortField: "text",
    searchField: ["text", "value"],
    plugins: ["clear_button", "auto_position"],
  });
});

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
  if (document.formInit.nameoc.value == "") {
    alert("Nhập danh tính OC!");
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
  document.querySelector("#calculator-success").classList.remove("active");
  document.querySelector(".btn-compact").style.display = "none";
  document.querySelector(".btn-extend").style.display = "none";
};

const calculator = () => {
  if (validate()) {
    document.querySelector(".calculator").style.display = "none";
    document.querySelector(".btn-calculator").style.display = "none";
    document.querySelector(".btn-back").style.display = "block";
    document.querySelector(".btn-compact").style.display = "block";
    document.querySelector("#calculator-success").style.display = "block";

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
      idOc: document.formInit.idoc.value,
      nameOC: document.formInit.nameoc.value,
      quest: document.formInit.nv.value,
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
      multiplyTV: document.formInit.tv.value || 0,
      bonusDSM: Number(document.formInit.bonusdsm.value || 0),
      bonusDKV: Number(document.formInit.bonusdkv.value || 0),
      bonusLuk: Number(document.formInit.bonusluk.value || 0),
      bonusUnLuk: Number(document.formInit.bonusunluk.value || 0),
      bonusLL: Number(document.formInit.bonusll.value || 0),
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
        compact: true,
      },
      {
        name: "Ngày đóng top",
        data:
          objData.closeDate +
          "<span class='display-compact'> (x" +
          multiplyAnniv() +
          " CH,LT)<span>",
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
        name: objData.actionTop == "true" ? "OC Đăng top" : "OC Tham gia",
        data:
          objData.actionTop == "true"
            ? "100 Điểm cống hiến<br> 50 Linh thạch<br> 5 Điểm khí vận<br> 4 Điểm sinh mệnh"
            : "50 Điểm cống hiến<br> 20 Linh thạch<br> 2 Điểm khí vận<br> 1 Điểm sinh mệnh",
        compact: false,
      },
      {
        name: "Số RC tham gia<br> (" + objData.numberRC + " RC)",
        data:
          objData.numberRC * 10 +
          " Điểm cống hiến<br> " +
          objData.numberRC * 10 +
          " Linh thạch",
        compact: false,
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
        compact: false,
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
        compact: false,
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
        compact: false,
      },
      {
        name: "Mốc Comt top<br> (" + objData.comtTotal + " comt)",
        data:
          objData.comtTotal * 2 +
          " Điểm cống hiến<br> " +
          objData.comtTotal +
          " Linh thạch",
        compact: false,
      },
      {
        name: "Đóng top ngày " + day,
        data:
          "x" +
          multiplyAnniv() +
          " Điểm cống hiến<br> x" +
          multiplyAnniv() +
          " Linh thạch",
        compact: true,
      },
      {
        name: "Nhiệm vụ",
        data: objData.quest + " Nhiệm vụ",
        compact: true,
      },
      {
        name: "Exp",
        data: objData.comtPer * objData.multiplyTV + " Exp",
        compact: objData.multiplyTV == 0 ? true : false,
      },
      {
        name: "Cống hiến thêm",
        data: objData.bonusCH + " Điểm cống hiến",
        compact: true,
      },
      {
        name: "Linh thạch thêm",
        data: objData.bonusLT + " Linh thạch",
        compact: true,
      },
      {
        name: "Exp thêm",
        data: objData.bonusExp + " Exp",
        compact: true,
      },
      {
        name: "Điểm sinh mệnh thêm",
        data: objData.bonusDSM + " Điểm sinh mệnh",
        compact: true,
      },
      {
        name: "Điểm khí vận thêm",
        data: objData.bonusDKV + " Điểm khí vận",
        compact: true,
      },
      {
        name: "Điểm may mắn thêm",
        data: objData.bonusLuk + " Điểm may mắn",
        compact: true,
      },
      {
        name: "Điểm xui xẻo thêm",
        data: objData.bonusUnLuk + " Điểm xui xẻo",
        compact: true,
      },
      {
        name: "Điểm linh lực thêm",
        data: objData.bonusLL + " Điểm linh lực",
        compact: true,
      },
      {
        name: "Điểm chỉ số",
        data: objData.chiSo + " Điểm chỉ số",
        compact: true,
      },
      {
        name: "Hoạt động đan<br>(" + objData.numberHDD + " viên)",
        data:
          (objData.numberHDD == 0 ? "" : "x") +
          objData.multiplyHHD.arr.join(", x"),
        compact: true,
      },
      {
        name: "Tu vi đan<br>(" + objData.numberTVD + " viên)",
        data:
          (objData.numberTVD == 0 ? "" : "x") +
          objData.multiplyTVD.arr.join(", x"),
        compact: true,
      },
      {
        name: "Tổng:",
        data:
          totalCH +
          " Điểm cống hiến<br> " +
          totalLT +
          " Linh thạch <br>" +
          (objData.mocComt +
            Number(objData.actionTop == "true" ? 5 : 2) +
            objData.bonusDKV) +
          " Điểm khí vận<br>" +
          ((objData.rateTop == "true" ? 1 : 0) + objData.bonusLuk) +
          " Điểm may mắn<br>" +
          ((objData.rateTop == "true" ? 0 : 2) + objData.bonusUnLuk) +
          " Điểm xui xẻo<br>" +
          (Number(objData.actionTop == "true" ? 4 : 1) +
            Number(objData.rateTop == "true" ? 1 : -2) +
            objData.bonusDSM) +
          " Điểm sinh mệnh<br>" +
          objData.bonusLL +
          " Điểm linh lực<br> " +
          objData.chiSo +
          " Điểm chỉ số<br>" +
          (objData.comtPer * objData.multiplyTV * objData.multiplyTVD.multiply +
            Number(objData.bonusExp)) +
          " Exp <br>" +
          "<span class='hidden-info'>" +
          objData.quest +
          " Nhiệm vụ<span>",
      },
    ];
    let html = "";
    calculatorData.forEach((item) => {
      html += `<div class="info-row ${item?.compact == true ? "compact" : ""}">
        <div class="name">${item?.name}</div>
        <div class="data">${item?.data}</div>
    </div>`;
    });
    document.getElementById(
      "calculator-success"
    ).innerHTML = `<div>${html}<div/>`;
  }
};

const compact = () => {
  document.querySelector("#calculator-success").classList.add("active");
  document.querySelector(".btn-compact").style.display = "none";
  document.querySelector(".btn-extend").style.display = "block";
};

const extend = () => {
  document.querySelector("#calculator-success").classList.remove("active");
  document.querySelector(".btn-compact").style.display = "block";
  document.querySelector(".btn-extend").style.display = "none";
};
