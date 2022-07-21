import { render, prettyDOM } from '@testing-library/vue';
import simpleParticiple from "./simpleParticipleV.vue"

test ('render simpleParticiple', ()=> {
   const {debag} = render(simpleParticiple)
   debag  
})