<template>
  <div class="index-section-2 row">
    <div class="section-2-box-1">
      <div>
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated fadeOut"
        >
          <img
            class="logo-card"
            src="~assets/aiskillbuddylogo.png"
            alt="Quasar Logo"
          />
        </transition>
        <div class="logo-text-container">
          <transition
            appear
            enter-active-class="animated zoomIn"
            leave-active-class="animated fadeOut"
          >
            <span class="logo-text breathe">AI Skill Buddy</span>
          </transition>
        </div>
      </div>
    </div>

    <div class="section-2-box-2">
      <transition
        appear
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOut"
      >
        <div class="course-buttons-container">
          <q-btn
            @click="scrollToMethods.scrollToDeveloperCourseSection"
            class="course-button"
            size="lg"
            no-caps
            rounded
            outline
          >
            Developer Courses
          </q-btn>
          <q-btn
            @click="scrollToMethods.scrollToCloudCourseSection"
            class="course-button"
            size="lg"
            no-caps
            rounded
            outline
          >
            Cloud Certification Courses
          </q-btn>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HighlevelCourses",
  components: {},
  inject: ["scrollToMethods"],
});
</script>

<style scoped>
.logo-card {
  max-width: 300px;
}

.logo-text-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.course-buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.course-button {
  width: 100%;
  color: lightblue;
  margin: 0.5rem;
}

.logo-text {
  font-size: 1.2em;
  color: gainsboro;
  font-family: "Roboto", sans-serif;
  font-weight: 1000;
  letter-spacing: 0.5em;
}

.index-section-2 {
  min-height: 400px;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-2-box-1 {
  height: 100%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  width: 50%;
}
.section-2-box-2 {
  /* background-color: blue; */
  height: 100%;
  width: 50%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  font-size: 2.5em;
}

@media (max-width: 600px) {
  .section-2-box-1 {
    width: 75%;
    padding: 1rem;
  }
  .section-2-box-2 {
    width: 100%;
    padding: 1rem;
  }

  .logo-card {
    max-width: 200px;
  }
}

@keyframes breathing-effect {
  0%,
  100% {
    transform: scaleX(1); /* Original size */
  }
  50% {
    transform: scaleX(1.1); /* 10% larger */
  }
}

.breathe {
  display: inline-block; /* Required for transform to work on span */
  animation: breathing-effect 4s ease-in-out infinite; /* Adjust timing to suit */
}
</style>
