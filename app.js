const app = Vue.createApp({
  data() {
    return {
      showDetails: false,
      friends: [
        {
          id: "manuel",
          name: "Ashi Yang",
          phone: "0915181818",
          email: "fake@fake.gmail.com",
        },
        {
          id: "sadfkewfew",
          name: "Ashi fewf",
          phone: "09123456789",
          email: "wefwefwef@8898.gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});
app.mount("#app");

/*
現在只要 button 按下去，所有的 detail 都會顯示，可是
如果當我們只需要顯示一個朋友detail 怎麼辦？

*/
