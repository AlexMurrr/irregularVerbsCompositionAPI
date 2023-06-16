import { defineStore } from "pinia";

export const useStoreVerbs = defineStore("storeId", {
  state: () => {
    return {
      verbForms: {
        0: ["be", "быть, являться", "was, were", "been"],
        1: ["beat", "бить, колотить", "beat", "beaten"],
        2: ["become", "становиться", "became", "become"],
        3: ["begin", "начинать", "began", "begun"],
        4: ["bend", "гнуть", "bent", "bent"],
        5: ["bet", "держать пари", "bet", "bet"],
      },
      randVerb: "",
      rendArrFromVerbForms: "",
      translateStore: "",
      pastSimpleStore: "",
      pastParticipleStore: "",
      user: "",
      rendUser: "",
      allVerbs: "",
    };
  },
  getters: {},
  actions: {
    async getUser() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/" +
          (Math.floor(Math.random() * 10) + 1)
      );
      const user = await res.json();
      this.user = user.name;
    },

    async getVerbs() {
      const res = await fetch("http://localhost:5001/verbs");
      this.allVerbs = await res.json();
    },

    async getRandVerb() {
      const res = await fetch("http://localhost:5001/randverb");
      const arrRandVerb = await res.json();
      this.randVerb = arrRandVerb[0].infinitive;
    },

    async getRandomUser() {
      const res = await fetch("http://localhost:5001/user");
      const verbs = await res.json();
      this.rendUser = verbs[0].name;
    },

    async rendomNumFromVerbs() {
      this.rendArrFromVerbForms =
        this.verbForms[
          Math.floor(Math.random() * Object.keys(this.verbForms).length)
        ];
    },
  },
});
