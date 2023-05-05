import { defineStore } from 'pinia'

export const  useStoreVerbs = defineStore('storeId', {
 
  state: () => {
    return {      
    verbForms: {
      0: ['be', 'быть, являться', 'was, were', 'been'],
      1: ['beat', 'бить, колотить', 'beat', 'beaten'],
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
    resultMinus: `<p>Ваш ответ неверный</p><h2 style = "color: #d15a5a">-1</h2>`,
    resultPlus: '<p>Ваш ответ верный</p><h2 style = "color: #66d17e">+1</h2>', 
    name: '',    
    user: '',
    time: '',
    verbs: '',
    rendUser:'',         
    }
  },
  getters:{

  },
  actions:{

    async getUser (){
      const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ 
      (Math.floor(Math.random() * 10)+1));
      const user = await res.json();
      this.user = user.name;
    },    

      async getRandomUser () {
      const res = await fetch('http://localhost:5001/user');
      const verbs = await res.json();
      this.rendUser = verbs[0].name;
    },

    rendomNumFromVerbs (){
      this.rendArrFromVerbForms = this.verbForms[Math.floor(Math.random() *
        Object.keys(this.verbForms).length)]     
    },    
   
    removeEmptySpace(verb){
      return verb.replace(/\s/g,'');
    },
   
    oneWordTrue(inputVerb, trueVerb){     
      const inputVerbs = this.removeEmptySpace(inputVerb);
      const trueVerbs = this.removeEmptySpace(trueVerb);
      const trueArr = trueVerbs.split(",");      
      return trueArr.includes(inputVerbs);       
    }
  }
})

