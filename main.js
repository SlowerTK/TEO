const calculateValue = (b, x) => {
  let temp = parseFloat(b) * parseFloat(x);
  return !isNaN(temp) ? (Math.round(temp * 100) / 100).toFixed(2) : "";
};
const updateValues = (index) => {
  let b = document.getElementById(`B${index}`).value;
  let x = document.getElementById(`X${index}`).value;
  let bx = document.getElementById(`BX${index}`);
  bx.value = calculateValue(b, x);

  let altx = document.getElementById(`altX${index}`).value;
  let altbx = document.getElementById(`altBX${index}`);
  altbx.value = calculateValue(b, altx);
};
function changeTime1_1R() {
  if(document.querySelector('#td1_1').value == 0){document.querySelector('#td1_3').value = "-";}
  else{var time = new Date(document.querySelector('#td1_2').value);
    time.setDate(time.getDate() + (parseInt(document.querySelector('#td1_1').value)-1));
    document.querySelector('#td1_3').value = time.toLocaleDateString();}
  }
  
function changeTime1_1P() {
  if(document.querySelector('#td1_4').value == 0){document.querySelector('#td1_5').value = "-";}
  else{var time = new Date(document.querySelector('#td1_2').value);
    time.setDate(time.getDate() + (parseInt(document.querySelector('#td1_4').value)-1));
    document.querySelector('#td1_5').value = time.toLocaleDateString();}
}
function changeTimePER(a,b,c,d,y,z) {
  let _a = document.getElementById(a);
  let _b = document.getElementById(b);
  let _c = document.getElementById(c);
  let _d = document.getElementById(d);
  let _y = document.getElementById(y);
  let _z = document.getElementById(z);

  let parts = _a.value.split('.');
  let date = new Date(parts[2], parts[1] - 1, parts[0]);
    date.setDate(date.getDate()+1);
    _b.value = date.toLocaleDateString();
  if(_z.value == 0){_c.value = "-";}
  else{
      parts = _b.value.split('.');
      date = new Date(parts[2], parts[1] - 1, parts[0]);
      date.setDate(date.getDate() + parseInt(_z.value) - 1);
      _c.value = date.toLocaleDateString();}
  parts = _b.value.split('.');
  date = new Date(parts[2], parts[1] - 1, parts[0]);
  date.setDate(date.getDate() + parseInt(_y.value) - 1);
  _d.value = date.toLocaleDateString();
}
function DaySum() {
  let PM = 0, TM = 0;
  const num1 = document.querySelectorAll('input[name="r"]');
  const num2 = document.querySelectorAll('input[name="p"]');
  let totalPriceElement3 = document.querySelector('#total-price3');
  let totalPriceElement4 = document.querySelector('#total-price4');
  for(const radio of num1){
    PM = PM + (parseInt(radio.value));
    }
    document.querySelector('#total-price1').value = Intl.NumberFormat('ru').format(PM);
    totalPriceElement3.value = Intl.NumberFormat('ru').format(PM);
  for(const radio of num2){
    TM = TM + (parseInt(radio.value));
  }
  document.querySelector('#total-price2').value = Intl.NumberFormat('ru').format(TM);
  totalPriceElement4.value = Intl.NumberFormat('ru').format(TM)

  const col_day = document.querySelector('#col_day');
  let stavka = document.querySelector('#stavka');
  let stavka2 = document.querySelector('#stavka2');
  stavka.value = parseFloat(document.querySelector('#i_zp').value/col_day.value).toFixed(2);
  stavka2.value = parseFloat(document.querySelector('#i_zp2').value/col_day.value).toFixed(2);
  document.querySelector('#multiply1').value = parseFloat(stavka.value*totalPriceElement3.value).toFixed(2);
  document.querySelector('#multiply2').value = parseFloat(stavka2.value*totalPriceElement4.value).toFixed(2);
  document.querySelector('#OZP').value = parseFloat(stavka.value*totalPriceElement3.value+stavka2.value*totalPriceElement4.value).toFixed(2);
  document.querySelector('#OZP2').value = parseFloat(stavka.value*totalPriceElement3.value+stavka2.value*totalPriceElement4.value).toFixed(2);
}

function SumZatratsZaMateriali(){
  let Msum = document.querySelectorAll('input[name="Msum"]');
  let sum = 0;
  let index = 1;
  for(var mm of Msum){
    let X = document.getElementById(`Mx${index}`);
    let Y = document.getElementById(`My${index}`);
    mm.value = parseFloat(X.value * Y.value).toFixed(2);
    sum = parseFloat(sum) + parseFloat(mm.value);
    index++;
  }
  document.querySelector('#ZNM').value = parseFloat(sum).toFixed(2);
  document.querySelector('#ZNM2').value = parseFloat(sum).toFixed(2);
}

function ZATRATI(){
  let OZP = document.querySelector('#OZP');
  let DZP = document.querySelector('#DZP');
  let ONSN = document.querySelector('#ONSN');
  let ZNMV = document.querySelector('#ZNMV');
  let NRO = document.querySelector('#NRO');
  let ZNR = document.querySelector('#ZNR');
  let ITOG = document.querySelector('#ITOG');
  let coef_otpysk = document.querySelector('#coef_otpysk');
  let coef_ragion = document.querySelector('#coef_ragion');
  let coef_PF = document.querySelector('#coef_PF');
  let coef_FSS = document.querySelector('#coef_FSS');
  let coef_FFOMS= document.querySelector('#coef_FFOMS');
  let coef_travmi = document.querySelector('#coef_travmi');
  let coef_naclad = document.querySelector('#coef_naclad');
  let hours = document.querySelector('#hours');
  let price_hours = document.querySelector('#price_hours');
  let coef_multi = document.querySelector('#coef_multi');
  let balans = document.querySelector('#balans');
  let col_oborydovania = document.querySelector('#col_oborydovania');
  let PM_inf = document.querySelector('#PM_inf');
  let chastota = document.querySelector('#chastota');
  let day_year = document.querySelector('#day_year');
  let hours_day = document.querySelector('#hours_day');
  let stavka_DPZPSP = document.querySelector('#stavka_DPZPSP');
  let stavka_DPZPSP2 = document.querySelector('#stavka_DPZPSP2');
  let zp_s = document.querySelector('#zp_s');
  let zp_p = document.querySelector('#zp_p');
  let col_day2 = document.querySelector('#col_day2');
  let zatrata_time = document.querySelector('#zatrata_time');
  let zatrata_time2 = document.querySelector('#zatrata_time2');
  let coef_ragion2 = document.querySelector('#coef_ragion2');
  let DPZPSP = document.querySelector('#DPZPSP');
  let DPZPSP2 = document.querySelector('#DPZPSP2');
  let stavka_DPZPSA = document.querySelector('#stavka_DPZPSA');
  let stavka_DPZPSA2 = document.querySelector('#stavka_DPZPSA2');
  let zatrata_time3 = document.querySelector('#zatrata_time3');
  let zatrata_time4 = document.querySelector('#zatrata_time4');
  let DPZPSA = document.querySelector('#DPZPSA');
  let DPZPSA2 = document.querySelector('#DPZPSA2');
  let zp_sa = document.querySelector('#zp_sa');
  let zp_pa = document.querySelector('#zp_pa');

  DZP.value = parseFloat(OZP.value * (parseFloat(coef_otpysk.value) + parseFloat(coef_ragion.value))).toFixed(2);
  ONSN.value = parseFloat((parseFloat(OZP.value) + parseFloat(DZP.value)) * (parseFloat(coef_PF.value) + parseFloat(coef_FFOMS.value) + parseFloat(coef_FSS.value) + parseFloat(coef_travmi.value))).toFixed(2);
  ZNMV.value = parseFloat(parseFloat(hours.value) * parseFloat(price_hours.value) * parseFloat(coef_multi.value) * document.querySelector('#total-price2').value).toFixed(2);
  NRO.value =  parseFloat(OZP.value * parseFloat(coef_naclad.value)).toFixed(2);
  ZNR.value = parseFloat((parseFloat(balans.value) * parseFloat(col_oborydovania.value) * parseFloat(PM_inf.value) * parseFloat(chastota.value)) / (parseFloat(day_year.value) * parseFloat(hours_day.value))).toFixed(2);
  ITOG.value = parseFloat(document.querySelector('#OZP2').value) + parseFloat(DZP.value) + parseFloat(ONSN.value) + parseFloat(document.querySelector('#ZNM2').value) + parseFloat(ZNMV.value) + parseFloat(NRO.value) + parseFloat(ZNR.value);

  let SumItog2 = 0;
  for(const itogi2 of document.querySelectorAll('input[name="zatrata2"]')){
    SumItog2 = SumItog2 + (parseFloat(itogi2.value));
    document.querySelector('#ITOG2').value = parseFloat(SumItog2).toFixed(2);
  }

  stavka_DPZPSP.value = parseFloat(zp_s.value/col_day2.value).toFixed(2);
  stavka_DPZPSP2.value = parseFloat(zp_p.value/col_day2.value).toFixed(2);
  DPZPSP.value = parseFloat((stavka_DPZPSP.value*zatrata_time.value+stavka_DPZPSP2.value*zatrata_time2.value)*(1+parseFloat(coef_otpysk.value) + parseFloat(coef_ragion2.value))*(1+parseFloat(coef_PF.value) + parseFloat(coef_FFOMS.value) + parseFloat(coef_FSS.value) + parseFloat(coef_travmi.value))).toFixed(2);
  DPZPSP2.value = parseFloat((stavka_DPZPSP.value*zatrata_time.value+stavka_DPZPSP2.value*zatrata_time2.value)*(1+parseFloat(coef_otpysk.value) + parseFloat(coef_ragion2.value))*(1+parseFloat(coef_PF.value) + parseFloat(coef_FFOMS.value) + parseFloat(coef_FSS.value) + parseFloat(coef_travmi.value))).toFixed(2);



  stavka_DPZPSA.value = parseFloat(zp_sa.value/col_day.value).toFixed(2);
  stavka_DPZPSA2.value = parseFloat(zp_pa.value/col_day.value).toFixed(2);
  DPZPSA.value = parseFloat((stavka_DPZPSA.value*zatrata_time3.value+stavka_DPZPSA2.value*zatrata_time4.value)*(1+parseFloat(coef_otpysk.value) + parseFloat(coef_ragion2.value))*(1+parseFloat(coef_PF.value) + parseFloat(coef_FFOMS.value) + parseFloat(coef_FSS.value) + parseFloat(coef_travmi.value))).toFixed(2);
  DPZPSA2.value = parseFloat((stavka_DPZPSA.value*zatrata_time3.value+stavka_DPZPSA2.value*zatrata_time4.value)*(1+parseFloat(coef_otpysk.value) + parseFloat(coef_ragion2.value))*(1+parseFloat(coef_PF.value) + parseFloat(coef_FFOMS.value) + parseFloat(coef_FSS.value) + parseFloat(coef_travmi.value))).toFixed(2);

}
function ZATRATI2(){
  let amortizacia = document.querySelector('#amortizacia');
  let balans2 = document.querySelector('#balans2');
  let col_oborydovania2 = document.querySelector('#col_oborydovania2');
  let norm_zagryzka = document.querySelector('#norm_zagryzka');
  let day_year2 = document.querySelector('#day_year2');
  let coef_moshnost = document.querySelector('#coef_moshnost');
  let tarif_energy = document.querySelector('#tarif_energy');
  let moshnost = document.querySelector('#moshnost');
  let remont = document.querySelector('#remont');
  let coef_naclad_rashod = document.querySelector('#coef_naclad_rashod');
  let AOOSOIYS = document.querySelector('#AOOSOIYS');
  let AOOSOIYS2 = document.querySelector('#AOOSOIYS2');
  let ZNSE = document.querySelector('#ZNSE');
  let ZNSE2 = document.querySelector('#ZNSE2');
  let ZNTROIYS = document.querySelector('#ZNTROIYS');
  let ZNTROIYS2 = document.querySelector('#ZNTROIYS2');
  let ZNMIMN = document.querySelector('#ZNMIMN');
  let ZNMIMN2 = document.querySelector('#ZNMIMN2');
  let NRIO = document.querySelector('#NRIO');
  let NRIO2 = document.querySelector('#NRIO2');
  let ITOG3 = document.querySelector('#ITOG3');
  let ITOG4 = document.querySelector('#ITOG4');
  
    AOOSOIYS.value =  parseFloat((balans2.value * amortizacia.value * col_oborydovania2.value) * ((parseInt(zatrata_time.value) + parseInt(zatrata_time2.value))* norm_zagryzka.value) / (norm_zagryzka.value * day_year2.value)).toFixed(2);
    AOOSOIYS2.value = parseFloat((balans2.value * amortizacia.value * col_oborydovania2.value) * ((parseInt(zatrata_time3.value) + parseInt(zatrata_time4.value))* norm_zagryzka.value) / (norm_zagryzka.value * day_year2.value)).toFixed(2);
    ZNSE.value = parseFloat(((parseInt(zatrata_time.value) + parseInt(zatrata_time2.value))* hours_day.value) * tarif_energy.value *moshnost.value*coef_moshnost.value).toFixed(2);
    ZNSE2.value = parseFloat(((parseInt(zatrata_time3.value) + parseInt(zatrata_time4.value))* hours_day.value) * tarif_energy.value *moshnost.value* coef_moshnost.value).toFixed(2);
    ZNTROIYS.value = parseFloat((balans.value * remont.value) * ((parseInt(zatrata_time.value) + parseInt(zatrata_time2.value))* hours_day.value) / (hours_day.value * day_year.value)).toFixed(2);
    ZNTROIYS2.value = parseFloat((balans.value * remont.value) * ((parseInt(zatrata_time3.value) + parseInt(zatrata_time4.value))* hours_day.value) / (hours_day.value * day_year.value)).toFixed(2);
    ZNMIMN.value =  parseFloat(balans.value *0.01).toFixed(2);
    ZNMIMN2.value = parseFloat(balans.value * 0.01).toFixed(2);
    NRIO.value = parseFloat((parseFloat(DPZPSP.value) + parseFloat(AOOSOIYS.value) + parseFloat(ZNSE.value)+ parseFloat(ZNTROIYS.value) + parseFloat(ZNMIMN.value) )* coef_naclad_rashod.value).toFixed(2);
    NRIO2.value = parseFloat((parseFloat(DPZPSA.value) + parseFloat(AOOSOIYS2.value) + parseFloat(ZNSE2.value)+ parseFloat(ZNTROIYS2.value) + parseFloat(ZNMIMN2.value) )* 0.2).toFixed(2);
    ITOG3.value = parseFloat(parseFloat(DPZPSP.value) + parseFloat(AOOSOIYS.value) + parseFloat(ZNSE.value)+ parseFloat(ZNTROIYS.value) + parseFloat(ZNMIMN.value) +parseFloat(NRIO.value)).toFixed(2);
    ITOG4.value = parseFloat(parseFloat(DPZPSA.value) + parseFloat(AOOSOIYS2.value) + parseFloat(ZNSE2.value)+ parseFloat(ZNTROIYS2.value) + parseFloat(ZNMIMN2.value) +parseFloat(NRIO2.value)).toFixed(2);
}
function Effectivnost(){
  let obem_rabot = document.querySelector('#obem_rabot');
  var norm_koef = document.querySelector('#norm_koef');
  let STEZ = document.querySelector('#STEZ');
  let STEZ1_2 = document.querySelector('#STEZ1_2');
  let STEZ2 = document.querySelector('#STEZ2');
  let SZSSVP = document.querySelector('#SZSSVP');
  let SZSSVP1_2 = document.querySelector('#SZSSVP1_2');
  let SZSSVP2 = document.querySelector('#SZSSVP2');
  let PZNER = document.querySelector('#PZNER');
  let PZNER2 = document.querySelector('#PZNER2');
  let EEOIRS = document.querySelector('#EEOIRS');
  let EEOIRS2 = document.querySelector('#EEOIRS2');
  let SO = document.querySelector('#SO');
  var KEE = document.querySelector('#KEE');

  STEZ.value = parseFloat(ITOG3.value).toFixed(2);
  STEZ1_2.value = parseFloat(ITOG3.value).toFixed(2);
  STEZ2.value = parseFloat(ITOG4.value).toFixed(2);
  SZSSVP.value = parseFloat(ITOG.value).toFixed(2);
  SZSSVP1_2.value = parseFloat(ITOG.value).toFixed(2);
  SZSSVP2.value = parseFloat(ITOG2.value).toFixed(2);
  PZNER.value = parseFloat(parseFloat(ITOG3.value) + parseFloat(norm_koef.value) * parseFloat(ITOG.value)).toFixed(2);
  PZNER2.value = parseFloat(parseFloat(ITOG4.value) + parseFloat(norm_koef.value) * parseFloat(ITOG2.value)).toFixed(2);
  EEOIRS.value = parseFloat((parseFloat(PZNER2.value) * parseFloat(A.value) - parseFloat(PZNER.value)) * parseFloat(obem_rabot.value)).toFixed(2);
  EEOIRS2.value = parseFloat((parseFloat(PZNER2.value) * parseFloat(A.value) - parseFloat(PZNER.value)) * parseFloat(obem_rabot.value)).toFixed(2);
  SO.value = parseFloat(parseFloat(SZSSVP1_2.value)/parseFloat(EEOIRS2.value)).toFixed(2);
  KEE.value = parseFloat(1/parseFloat(SO.value)).toFixed(2);
}
function UpdateData(){
  changeTime1_1R();
  changeTime1_1P();
  for (let i = 0; i < 16; i++) {
    changeTimePER(`td1_${5+i*5}`, `td1_${7+i*5}`, `td1_${8+i*5}`,`td1_${10+i*5}`, `td1_${9+i*5}`,`td1_${6+i*5}`);
  }
  DaySum();
  SumZatratsZaMateriali();
  ZATRATI();
  ZATRATI2();
  Effectivnost();

  if(KEE.value>norm_koef.value){
    document.querySelector('#EFFECTIVNOST').value = "Эффективнее разрабатывать собственный проект";
  }
  else{
    document.querySelector('#EFFECTIVNOST').value = "Эффективнее покупать аналог";
  }
  
}


document.addEventListener("input", function (event) {
  if (event.target.tagName.toLowerCase() === "input" && /^(B|X|altX)\d+$/.test(event.target.id)) {
    event.target.value = event.target.value.replace(/[^0-9.]/g, "");

    let GLOBALINDEX = document.querySelector("table tbody").querySelectorAll("tr").length -2;
    for (let i = 1; i <= GLOBALINDEX; i++) {
      updateValues(i);
    }
    
    const sumValues = (prefix) => {
      let sum = 0;
      for (let i = 1; i <= GLOBALINDEX; i++) {
        sum += parseFloat(document.getElementById(`${prefix}${i}`).value) || 0;
      }
      return sum;
    };

    let J1 = document.getElementById("J1");
    let J2 = document.getElementById("J2");
    let J1Value = sumValues("BX");
    let J2Value = sumValues("altBX");
    J1.value = (Math.round(J1Value * 100) / 100).toFixed(2);
    J2.value = (Math.round(J2Value * 100) / 100).toFixed(2);

    let A = document.getElementById("A");
    let AValue = J1Value / J2Value;
    if (isNaN(AValue) || !isFinite(AValue)) {
      AValue = 0;
    }
    A.value = (Math.round(AValue * 100) / 100).toFixed(2);

  }
  UpdateData();
});
function addRow() {
  const table = document.querySelector("table tbody");
  const rowCount = table.querySelectorAll("tr").length - 1;
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><input class="centr" type="text" placeholder="${rowCount}" /></td>
    <td><input min="0" max="1" step="0.01" value="0" class="centr" type="number" id="B${rowCount}" placeholder="0" /></td>
    <td><input min="1" max="5" step="1" value="0" class="centr" type="number" id="X${rowCount}" placeholder="0" /></td>
    <td><input value="0.00" class="centr" type="number" id="BX${rowCount}" placeholder="0" readonly /></td>
    <td><input min="1" max="5" step="1" value="0" class="centr" type="number" id="altX${rowCount}" placeholder="0" /></td>
    <td><input value="0.00" class="centr" type="number" id="altBX${rowCount}" placeholder="0" readonly /></td>
  `;
  table.appendChild(newRow);
}

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input[id^='B'], input[id^='X'], input[id^='altX']");
  inputs.forEach(input => {
    const index = input.id.match(/\d+$/)[0];
    updateValues(index);
  });
  UpdateData();
});

function addRow2() {
  const table = document.getElementById("materialsTable");
  const rowCount = table.querySelectorAll("tr").length;
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td class="thtd-long"><input type="text" placeholder="Введите название материала" /></td>
    <td><input type="text" value="шт." class="centr"/></td>
    <td><input type="number" min="1" max="1000" step="1" value="1" class="centr" id="Mx${rowCount}" /></td>
    <td><input type="number" min="1" max="1000" step="1" value="1" class="centr" id="My${rowCount}" /></td>
    <td><input type="number" value="0" name="Msum" class="fifi centr" readonly /></td>
  `;
  table.appendChild(newRow);
  SumZatratsZaMateriali();
}
document.getElementById('agreeButton').addEventListener('click', function () {
  const modal = document.getElementById('licenseModal');
  modal.parentNode.removeChild(modal);
  document.body.style.overflow = 'auto';
});
