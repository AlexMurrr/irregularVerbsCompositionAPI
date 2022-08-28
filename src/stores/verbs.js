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
        this.resultTranslate = '<h1>+1</h1>';
        this.numPoints++;
      } else {
        this.translateStore = false;
        this.resultTranslate = '<h1>-1</h1>'
        this.numPoints--;
      }
    },
    checkPastSimple(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.pastSimpleStore = true;
        this.resultSimplePast = '<h1>+1</h1>';
        this.numPoints++;
      } else {
        this.pastSimpleStore = false;
        this.resultSimplePast = '<h1>-1</h1>';
        this.numPoints--;
      }        
    },
    checkPastParticiple(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.pastParticipleStore = true;
        this.resultSimpleParticiple = '<h1>+1</h1>';
        this.numPoints++;
      } else {
        this.pastParticipleStore = false;
        this.resultSimpleParticiple = '<h1>-1</h1>';
        this.numPoints--;
      }
    },
    resetValue(){
      this.resultTranslate = '';
      this.resultSimplePast = '';
      this.resultSimpleParticiple = '';
    },
  }
})