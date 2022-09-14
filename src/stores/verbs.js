import { defineStore } from 'pinia'

export const  useStoreVerbs = defineStore('storeId', {
 
  state: () => {
    return {      
    verbForms: {
      0: ['be', '[быть, являться]', "['was, were']", 'been'],
      1: ['beat', '[бить, колотить]', 'beat', 'beaten'],
      2: ['become', 'становиться', 'became', 'become'],
      3: ['begin', 'начинать', 'began', 'begun'],
      4: ['bend', 'гнуть', 'bent', 'bent'],
      5: ['bet', 'держать пари', 'bet', 'bet']
    },
    rendArrFromVerbForms: '',  
    translateStore: '', 
    pastSimpleStore: '', 
    pastParticipleStore: '', 
    resultTranslate: '',
    resultSimplePast: '',
    resultSimpleParticiple: '',
    numPoints: 0,
    resultMinus: `<p>Ваш ответ неверный</p><h2 style = "color: #d15a5a">-1</h2>`,
    resultPlus: '<p>Ваш ответ верный</p><h2 style = "color: #66d17e">+1</h2>',    
    }
  },
  getters:{

  },
  actions:{
    rendomNumFromVerbs (){
      this.rendArrFromVerbForms = this.verbForms[Math.floor(Math.random() *
        Object.keys(this.verbForms).length)]     
    },
    checkTranslate(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.translateStore = true;
        this.resultTranslate = this.resultPlus;
        this.numPoints++;
      } else {
        this.translateStore = false;
        this.resultTranslate = `<p>Ваш ответ неверный, верный - 
                                ${this.rendArrFromVerbForms[1]} </p>
                                <h2 style = "color: #d15a5a">-1</h2>`;
        this.numPoints--;
      }
    },
    checkPastSimple(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.pastSimpleStore = true;
        this.resultSimplePast = this.resultPlus;
        this.numPoints++;
      } else {
        this.pastSimpleStore = false;
        this.resultSimplePast =`<p>Ваш ответ неверный, верный - 
                                   ${this.rendArrFromVerbForms[2]} </p>
                                   <h2 style = "color: #d15a5a">-1</h2>`;
        this.numPoints--;
      }        
    },
    checkPastParticiple(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.pastParticipleStore = true;
        this.resultSimpleParticiple = this.resultPlus;
        this.numPoints++;
      } else {
        this.pastParticipleStore = false;
        this.resultSimpleParticiple = `<p>Ваш ответ неверный, верный - 
                                       ${this.rendArrFromVerbForms[3]} </p>
                                       <h2 style = "color: #d15a5a">-1</h2>`;
        this.numPoints--;
      }
    },
    resetValue(){
      this.resultTranslate = '';
      this.resultSimplePast = '';
      this.resultSimpleParticiple = '';
    },
    removeEmptySpace(verb){
      return verb.replace(/\s/g,'');
    }
  }
})