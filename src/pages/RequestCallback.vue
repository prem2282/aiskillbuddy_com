<template>
  <div class="connect-button-container">
    <transition
      appear
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOut"
    >
      <a
        :href="'tel:+918754288702'"
        style="text-decoration: none; color: inherit"
      >
        <q-chip
          class="buddy-blue-7 q-mt-md q-pa-md text-subtitle2"
          clickable
          text-color="white"
        >
          <q-avatar class="ringing" size="lg" icon="phone"> </q-avatar>
          +91 87542 88702</q-chip
        >
      </a>
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOut"
    >
      <a href="https://maps.app.goo.gl/RTVEg3FLFQ6n9BKe6" target="_blank">
        <q-chip
          class="buddy-blue-7 q-mt-md q-pa-md text-subtitle2"
          clickable
          text-color="white"
        >
          <q-avatar class="swirling" size="lg" icon="location_on"> </q-avatar>
          Ramanathapuram, Coimbatore</q-chip
        >
      </a>
    </transition>
    <transition
      appear
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOut"
    >
      <a
        href="mailto:support@aiskillbuddy.com"
        style="text-decoration: none; color: inherit"
      >
        <q-chip
          class="buddy-blue-7 q-mt-md q-pa-md text-subtitle2"
          clickable
          text-color="white"
        >
          <q-avatar class="flying" size="lg" icon="email"> </q-avatar>
          support@aiskillbuddy.com</q-chip
        >
      </a>
    </transition>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RequestCallback",
  components: {},
  setup() {},
});
</script>
<style scoped>
.connect-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@keyframes ringAndChange {
  0%,
  50% {
    /* 0 to 3 seconds active of a 6-second total cycle */
    transform: rotate(0deg) scale(1);
    color: white;
  }
  5%,
  15%,
  25%,
  35%,
  45% {
    transform: rotate(15deg) scale(1.1); /* Rotate and scale up */
    color: aqua; /* Color during ringing */
  }
  10%,
  20%,
  30%,
  40% {
    transform: rotate(-10deg) scale(1.1);
    color: aqua;
  }
  50% {
    transform: rotate(0deg) scale(1);
    color: white;
  }
  100% {
    /* 3 seconds to 13 seconds (10 seconds idle) */
    transform: rotate(0deg) scale(1);
    color: white;
  }
}

.ringing {
  display: inline-block; /* Ensures transform applies correctly */
  animation: ringAndChange 6s ease-in-out infinite;
  animation-delay: 5s; /* Initial delay and interval between animations */
}

@keyframes swirlEffect {
  0% {
    transform: rotateY(0deg) scale(1);
    color: white;
  }
  10% {
    transform: rotateY(360deg) scale(1.2);
    color: aqua;
  }
  20%,
  100% {
    transform: rotateY(0deg) scale(1);
  }
}

.swirling {
  display: inline-block; /* Ensures transform applies correctly */
  animation: swirlEffect 10s linear infinite; /* Continuous rotation with a duration of 3 seconds */
  transform-style: preserve-3d;
  animation-delay: 8s; /* Initial delay and interval between animations */
}

@keyframes flyingEffect {
  0% {
    transform: translateX(0) rotate(0deg) scale(1);
    opacity: 1;
  }
  3% {
    transform: translateY(-10%) rotate(-10deg) scale(0.9);
    opacity: 0.8;
  }
  6% {
    transform: translateY(-25%) rotate(10deg) scale(0.8);
    opacity: 0.4;
  }
  10% {
    transform: translateY(-50%) rotate(10deg) scale(0.5);
    opacity: 0;
  }
  15% {
    transform: translateX(0%) rotate(0deg) scale(1);
    opacity: 0;
  }
  20% {
    transform: translateX(0%) rotate(0deg) scale(1);
    opacity: 1;
  }
  100% {
  }
}

.flying {
  display: inline-block; /* Ensures proper display and positioning */
  animation: flyingEffect 6s linear infinite; /* Continuous flying effect with a duration of 5 seconds */
  animation-delay: 11s; /* Initial delay and interval between animations */
  transform-style: preserve-3d;
}
</style>
