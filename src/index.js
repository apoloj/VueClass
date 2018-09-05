/* global Vue */
const vm = new Vue({
  el: "#app",
  data: {
    nombre: "Juanxo",
    lastName: "Reyes",
    resta: 0,
    suma: 0
  },
  beforeCreate() {
    console.log("BeforeCreate");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    sumatoria() {
      this.suma += 1;
    },
    restando() {
      this.suma -= 1;
    }
  },
  computed: {
    fullName() {
      return this.nombre + " " + this.lastName;
    }
  }
});
