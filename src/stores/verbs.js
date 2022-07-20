import { defineStore } from 'pinia'

export default  useStore = defineStore('storeId', {
 
  state: () => {
    return {      
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})