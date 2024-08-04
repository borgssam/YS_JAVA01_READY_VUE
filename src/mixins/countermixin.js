export const counterMixin = {
  data() {
    return {
      count: 0
    };
  },
  created() {
    this.incrementCount();
  },
  methods: {
    incrementCount() {
      setInterval(() => {
        this.count++;
      }, 1000);
    }
  }
};
