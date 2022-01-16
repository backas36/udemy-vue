const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      showParagraph: true,
      backGroundColor: "",
    };
  },
  computed: {
    valueStyle() {
      if (this.inputValue === "user1") {
        return this.showParagraph
          ? {
              user1: true,
              visible: true,
            }
          : { user1: true, hidden: true };
      }
      if (this.inputValue === "user2") {
        return this.showParagraph
          ? {
              user2: true,
              visible: true,
            }
          : { user2: true, hidden: true };
      }
    },
  },
  methods: {
    setInputValue(event) {
      this.inputValue = event.target.value;
    },
    setShowParagraph() {
      this.showParagraph = !this.showParagraph;
    },
    setBackGroundColor(event) {
      this.backGroundColor = event.target.value;
    },
  },
}).mount("#assignment");

// :class 可以放兩個以上的 computed 嗎？
