import { render, prettyDOM } from '@testing-library/vue';
import simplePast from "./simplePastV.vue"

test ('render simplePast', ()=> {
   const {debug} = render(simplePast)
   debug()
   console.log(prettyDOM());
})