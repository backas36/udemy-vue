const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      showParagraph: true,
      backGroundColor: "",
    };
  },
  computed: {
    //valueStyle() {
    //  if (this.inputValue === "user1") {
    //    return this.showParagraph
    //      ? {
    //          user1: true,
    //          visible: true,
    //        }
    //      : { user1: true, hidden: true };
    //  }
    //  if (this.inputValue === "user2") {
    //    return this.showParagraph
    //      ? {
    //          user2: true,
    //          visible: true,
    //        }
    //      : { user2: true, hidden: true };
    //  }
    //},
    pargraphClasses() {
      return {
        user1: this.inputValue === "user1",
        user2: this.inputValue === "user2",
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      };
    },
  },
  methods: {
    //使用 v-model 就不須這個 method (setInputValue,setBackGroundColor)了
    //setInputValue(event) {
    //  this.inputValue = event.target.value;
    //},
    setShowParagraph() {
      this.showParagraph = !this.showParagraph;
    },
    setBackGroundColor(event) {
      this.backGroundColor = event.target.value;
    },
  },
}).mount("#assignment");

// :class 可以放兩個以上的 computed 嗎？ 可以。必須要用 array syntax
