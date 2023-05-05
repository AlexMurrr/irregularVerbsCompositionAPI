import {defineStore} from 'pinia'

export const storeCheckVerbs = defineStore('check', {
    state:()=>{
        return {
            translateStore: '',
            pastSimpleStore: '',
            resultPlus: '<p>Ваш ответ верный</p><h2 style = "color: #66d17e">+1</h2>',
            resultTranslate: '', 
            resultSimplePast: '',
            resultSimpleParticiple: '',
            numPoints: 0,
            rendVerbFromArrVerbForms:'e',
        }
    },

    getters: {

    },

    actions: { 
        
        removeEmptySpace(verb){
            return verb.replace(/\s/g,'');
          },
         
        oneWordTrue(inputVerb, trueVerb){     
            const inputVerbs = this.removeEmptySpace(inputVerb);
            const trueVerbs = this.removeEmptySpace(trueVerb);
            const trueArr = trueVerbs.split(",");      
            return trueArr.includes(inputVerbs);       
          },

        checkTranslate(inputVerb, trueVerb){
              if(inputVerb===trueVerb || this.oneWordTrue(inputVerb, trueVerb)){
                this.translateStore = true;
                this.resultTranslate = this.resultPlus;
                this.numPoints++;
              } else {
                this.translateStore = false;
                this.resultTranslate = `<p color = "green">Ваш ответ неверный, верный - 
                                        <b><span style = "color: #55a34e; font-size: 120%">
                                        ${this.rendVerbFromArrVerbForms}
                                        </span></b> </p>
                                        <h2 style = "color: #d15a5a">-1</h2>`;
                this.numPoints--;
              }
            },

        checkPastSimple(inputVerb, trueVerb){
              if(inputVerb===trueVerb || this.oneWordTrue(inputVerb, trueVerb)) {
                this.pastSimpleStore = true;
                this.resultSimplePast = this.resultPlus;
                this.numPoints++;
              } else {
                this.pastSimpleStore = false;
                this.resultSimplePast =`<p>Ваш ответ неверный, верный - 
                                        <b><span style = "color: #55a34e; font-size: 120%">
                                        ${this.rendVerbFromArrVerbForms} </p>
                                        </span></b> </p>
                                        <h2 style = "color: #d15a5a">-1</h2>`;
                this.numPoints--;
                }        
            },

            checkPastParticiple(inputVerb, trueVerb){
                if(inputVerb===trueVerb || this.oneWordTrue(inputVerb, trueVerb)) {
                  this.pastParticipleStore = true;
                  this.resultSimpleParticiple = this.resultPlus;
                  this.numPoints++;
                } else {
                  this.pastParticipleStore = false;
                  this.resultSimpleParticiple = `<p>Ваш ответ неверный, верный - 
                                                 <b><span style = "color: #55a34e; font-size: 120%">
                                                 ${this.rendVerbFromArrVerbForms} </p>
                                                 </span></b> </p>
                                                 <h2 style = "color: #d15a5a">-1</h2>`;
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