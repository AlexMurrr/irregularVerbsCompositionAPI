import h1V from './h1V.vue';
import { render } from '@testing-library/vue';

test ('render', ()=> {
   const {debag} = render(h1V)
   debag
})