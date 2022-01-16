const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoalVaule: "" };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalVaule);
      this.enteredGoalVaule = "";
    },
    removeGoal(event, index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
