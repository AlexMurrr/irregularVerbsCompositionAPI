let translatedVerbs = {

    be:'быть, являться',
    beat:'бить, колотить',
    become:'становиться',
    begin:'начинать',
    bend:'гнуть',
    bet:'держать пари',
    bite:'кусать',
    blow:'дуть, выдыхать',
    break:'ломать, разбивать, разрушать',
    bring:'приносить, привозить, доставлять',
    build:'строить, сооружать',
    buy:'покупать, приобретать',
    catch:'ловить, поймать, схватить',
}

let pastSimple = {

    be:'was,were',
    beat:'beat',
    become:'became',
    begin:'began',
    bend:'bent',
    bet:'bet',
    bite:'bit',
    blow:'blew',
    break:'broke',
    bring:'brought',
    build:'built',
    buy:'bought',
    catch:'caught',
}

let pastParticiple = {

    be:'been',
    beat:'beaten',
    become:'become',
    begin:'begun',
    bend:'bent',
    bet:'bet',
    bite:'bitten',
    blow:'blown',
    break:'broken',
    bring:'brought',
    build:'built',
    buy:'bought',
    catch:'caught',
}

const arInputName = ['Переревод','Simple Past','Simple Participle'];

//get random verb
let verb = Object.keys(translatedVerbs)[Math.floor(Math.random() * Object.keys(translatedVerbs).length)];

let title = document.getElementById('title');
title.textContent = 'Введите для глагола:  ' + verb.toUpperCase();

let divCardCenter = document.getElementById('div');

function removeDiv(){
    divCardCenter.remove();
}

let translate = document.getElementById('translate');
let sPast = document.getElementById('sPast');
let sParticiple = document.getElementById('sParticiple');
let div = document.getElementById('div');

const htmlTrueTranslate = '<div class ="adjacent"> Перевод глагола верный </div>';
const htmlFalseTranslate = `<div class ="adjacent"> <span class ="textRed">Перевод глагола неверный!</span> <span class="textGreen">Надо:  ${translatedVerbs[verb].toUpperCase()} </span></div>`;

const htmlTruePastSimple = '<div class ="adjacent"> Форма верна</div>';
const htmlFalsePastSimple = `<div class ="adjacent"> <span class ="textRed">Форма глагола неверная!</span> <span class="textGreen">Надо:  ${pastSimple[verb].toUpperCase()} </span></div>`;

const htmlTruePastParticiple = '<div class ="adjacent"> Форма верна </div>';
const htmlFalsePastParticiple = `<div class ="adjacent"> <span class ="textRed">Форма глагола неверная!</span> <span class="textGreen">Надо:  ${pastParticiple[verb].toUpperCase()} </span></div>`;

//tr = translate.value;
//sP = sPast.value;
//sP = sParticiple.value;
//
function getInputTranslate(){
      let tr = translate.value;
     if(tr === translatedVerbs[verb]) {
         document.getElementById('translateLi').insertAdjacentHTML('beforeend', '+1');
        document.getElementById('translateLi').insertAdjacentHTML('afterend', htmlTrueTranslate);
    }else {
        document.getElementById('translateLi').insertAdjacentHTML('beforeend', '<span class="textRed">-1</span>');
        document.getElementById('translateLi').insertAdjacentHTML('afterend', htmlFalseTranslate);
    }
}

function getInputPastSimple(){
    let sP = sPast.value;
    if(sP === pastSimple[verb]) {
         document.getElementById('sPastLi').insertAdjacentHTML('beforeend', '+1');
        document.getElementById('sPastLi').insertAdjacentHTML('afterend', htmlTruePastSimple);
    }else {
        document.getElementById('sPastLi').insertAdjacentHTML('beforeend', '<span class="textRed">-1</span>');
        document.getElementById('sPastLi').insertAdjacentHTML('afterend', htmlFalsePastSimple);
    }
}

function getInputPastParticiple(){
    sP = sParticiple.value;
    if(sP === pastParticiple[verb]) {
         document.getElementById('sParticipleLi').insertAdjacentHTML('beforeend', '+1');
        document.getElementById('sParticipleLi').insertAdjacentHTML('afterend', htmlTruePastParticiple);
    }else {
        document.getElementById('sParticipleLi').insertAdjacentHTML('beforeend', '&nbsp; &nbsp; &nbsp;<span class="textRed">-1</span>');
        document.getElementById('sParticipleLi').insertAdjacentHTML('afterend', htmlFalsePastParticiple);
    }
}

function createButton(cssClass, textCont){
const btn = document.createElement('button');
btn.classList.add(cssClass);
btn.textContent = textCont;

    return btn;
}

const btnStart = createButton('btn', 'start');


function getInput(){

    getInputTranslate();
    getInputPastSimple();
    getInputPastParticiple();
    document.getElementById('btn').remove();
    div.appendChild(btnStart);
}

function reload(){
    translate.value = "";
    sPast.value = "";
    sParticiple.value = "";
    btnStart.remove();
    location.reload();

}

let btnShowResulte = document.getElementById('btn');

btnShowResulte.addEventListener('click', getInput);
btnStart.addEventListener('click', reload);










