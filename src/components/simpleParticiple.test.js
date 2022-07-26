import { render, prettyDOM } from '@testing-library/vue';
import simpleParticiple from "./simpleParticipleV.vue"

test ('render simpleParticiple', ()=> {
   const {debug} = render(simpleParticiple)
   debug()  
})