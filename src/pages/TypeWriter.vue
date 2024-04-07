<template>
  <div class="typewriter-container">
    <div class="typewrite">
      <span class="wrap">{{ txt }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toRotate: null,
      period: 2000,
      txt: "",
      loopNum: 0,
      isDeleting: false,
    };
  },
  mounted() {
    // Assuming you're passing 'toRotate' and 'period' as props or defining them here.
    this.toRotate = JSON.parse(this.$el.getAttribute("data-type")) || [];
    this.period = parseInt(this.$el.getAttribute("data-period"), 10) || 2000;
    this.tick();
  },
  methods: {
    tick() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      var delta = 200 - Math.random() * 100;
      if (this.isDeleting) {
        delta /= 5;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        this.tick();
      }, delta);
    },
  },
};
</script>
<style>
.typewriter-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.typewrite {
  text-align: center; /* Center align the container */
}
.typewrite > .wrap {
  /* border-right: 0.08em solid #fff; */
  color: lightskyblue;
  display: inline-block;
}
</style>
