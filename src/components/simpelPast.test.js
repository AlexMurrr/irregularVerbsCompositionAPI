import { render, prettyDOM } from '@testing-library/vue';
import simplePast from "./simplePastV.vue"

test ('render simplePast', ()=> {
   const {debag} = render(simplePast)
   debag
   console.log(prettyDOM());
})