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
      } else {
        this.translateStore = false;
        this.resultTranslate = '<h1>-1</h1>'
      }
    },
    checkPastSimple(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.pastSimpleStore = true;
        this.resultSimplePast = '<h1>+1</h1>';
      } else {
        this.pastSimpleStore = false;
        this.resultSimplePast = '<h1>-1</h1>';
      }        
    },
    checkPastParticiple(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.pastParticipleStore = true;
        this.resultSimpleParticiple = '<h1>+1</h1>';
      } else {
        this.pastParticipleStore = false;
        this.resultSimpleParticiple = '<h1>-1</h1>';
      }
    },
    resetValue(){
      this.resultTranslate = '';
      this.resultSimplePast = '';
      this.resultSimpleParticiple = '';
    },
  }
})