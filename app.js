const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskValue: "",
      showList: true,
    };
  },
  computed: {
    buttonContext() {
      return this.showList ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskValue);
      this.taskValue = "";
    },
    toggleShowList() {
      this.showList = !this.showList;
    },
  },
}).mount("#assignment");
