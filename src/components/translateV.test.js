import { render, prettyDOM } from '@testing-library/vue';
import translate from "./trancelateV.vue"

test ('render trancelateV', ()=> {
   const {debug} = render(translate)
   debug()  
})