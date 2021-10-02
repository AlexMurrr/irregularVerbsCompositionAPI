let translatedVerbs = {

    be:'быть, являтся',
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

let translate;
let sPast;
let sParticiple;

const htmlTrueTranslate = '<div class ="adjacent"> Перевод глагола верный </div>';
const htmlFalseTranslate = `<div class ="adjacent"> <span class ="textRed">Перевод глагола неверный!</span> <span class="textGreen">Надо:  ${translatedVerbs[verb].toUpperCase()} </span></div>`;

const htmlTruePastSimple = '<div class ="adjacent"> Форма верна</div>';
const htmlFalsePastSimple = `<div class ="adjacent"> <span class ="textRed">Форма глагола неверная!</span> <span class="textGreen">Надо:  ${pastSimple[verb].toUpperCase()} </span></div>`;

const htmlTruePastParticiple = '<div class ="adjacent"> Форма верна </div>';
const htmlFalsePastParticiple = `<div class ="adjacent"> <span class ="textRed">Форма глагола неверная!</span> <span class="textGreen">Надо:  ${pastParticiple[verb].toUpperCase()} </span></div>`;

function getInputTranslate(){
    translate = document.getElementById('translate').value;
    if(translate === translatedVerbs[verb]) {
         document.getElementById('translateLi').insertAdjacentHTML('beforeend', '+1');
        document.getElementById('translateLi').insertAdjacentHTML('afterend', htmlTrueTranslate);
    }else {
        document.getElementById('translateLi').insertAdjacentHTML('beforeend', '<span class="textRed">-1</span>');
        document.getElementById('translateLi').insertAdjacentHTML('afterend', htmlFalseTranslate);
    }
}

function getInputPastSimple(){
    sPast = document.getElementById('sPast').value;
    if(sPast === pastSimple[verb]) {
         document.getElementById('sPastLi').insertAdjacentHTML('beforeend', '+1');
        document.getElementById('sPastLi').insertAdjacentHTML('afterend', htmlTruePastSimple);
    }else {
        document.getElementById('sPastLi').insertAdjacentHTML('beforeend', '<span class="textRed">-1</span>');
        document.getElementById('sPastLi').insertAdjacentHTML('afterend', htmlFalsePastSimple);
    }
}

function getInputPastParticiple(){
    sParticiple = document.getElementById('sParticiple').value;
    if(sParticiple === pastParticiple[verb]) {
         document.getElementById('sParticipleLi').insertAdjacentHTML('beforeend', '+1');
        document.getElementById('sParticipleLi').insertAdjacentHTML('afterend', htmlTruePastParticiple);
    }else {
        document.getElementById('sParticipleLi').insertAdjacentHTML('beforeend', '&nbsp; &nbsp; &nbsp;<span class="textRed">-1</span>');
        document.getElementById('sParticipleLi').insertAdjacentHTML('afterend', htmlFalsePastParticiple);
    }
}


function getInput(){
    getInputTranslate();
    getInputPastSimple();
    getInputPastParticiple();
}

let btnShowResulte = document.getElementById('btn');

btnShowResulte.addEventListener('click', getInput);







