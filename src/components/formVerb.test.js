import formVerb from './formVerb.vue';
import { render, prettyDOM } from '@testing-library/vue';

test ('render formVerb', ()=> {
   const {debug} = render(formVerb)
   debug()
   console.log(prettyDOM());
})