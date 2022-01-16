const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalVaule: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalVaule);
      this.enteredGoalVaule = "";
    },
  },
});

app.mount("#user-goals");
