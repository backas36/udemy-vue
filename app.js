const app = Vue.createApp({
  data() {
    return {
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
});

app.component("friend-contact", {
  template: `
   <li>
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails">{{detailAreVisible? 'Hide':'Show'}} Details</button>
      <ul v-if="detailAreVisible">
        <li><strong>Phone:</strong> 0{{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailAreVisible: false,
      friend: {
        id: "sadfkewfew",
        name: "Ashi fewf",
        phone: "09123456789",
        email: "wefwefwef@8898.gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailAreVisible = !this.detailAreVisible;
    },
  },
});
//第一個參數是 own HTML element name, 第二個參數是放 createApp 的 object，然後不使用 mount，而是使用 template

app.mount("#app");
