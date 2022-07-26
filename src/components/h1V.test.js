import h1V from './h1V.vue';
import { render, prettyDOM } from '@testing-library/vue';

test ('render h1V', ()=> {
   const {debug} = render(h1V)
   debug()
   console.log(prettyDOM());
})

