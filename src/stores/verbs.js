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
      }else this.translateStore = false;
    },
    checkPastSimple(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.pastSimpleStore = true;
      }else this.pastSimpleStore = false;
    },
    checkPastParticiple(inputVerb, trueVerb){
      if(inputVerb===trueVerb) {
        this.pastParticipleStore = true;
      }else this.pastParticipleStore = false;
    },
  }
})