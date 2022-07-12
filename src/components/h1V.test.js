import h1V from './h1V.vue';
import { render, prettyDOM } from '@testing-library/vue';

test ('render h1V', ()=> {
   const {debag} = render(h1V)
   debag
   console.log(prettyDOM());
})

