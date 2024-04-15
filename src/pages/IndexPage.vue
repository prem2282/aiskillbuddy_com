<template>
  <q-page>
    <div class="overall-container buddy-blue-1">
      <div class="top-text-section-1 buddy-blue-2">
        <Typewriter
          data-type='["Welcome to AI Skill Buddy!", "Become Technology Independent!", "Connect with us today!"]'
          data-period="1000"
        ></Typewriter>
      </div>
      <HighlevelCourses />
      <RequestCallback />
      <CoursesSection ref="coursesSection" />
      <FlyerSection />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Typewriter from "./TypeWriter.vue";
import HighlevelCourses from "./HighlevelCourses.vue";
import RequestCallback from "./RequestCallback.vue";
import FlyerSection from "./FlyerSection.vue";
import CoursesSection from "./CoursesSection.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Typewriter,
    HighlevelCourses,
    RequestCallback,
    FlyerSection,
    CoursesSection,
  },
  provide() {
    return {
      scrollToMethods: {
        scrollToDeveloperCourseSection: this.scrollToDeveloperCourseSection,
        scrollToCloudCourseSection: this.scrollToCloudCourseSection,
      },
    };
  },
  methods: {
    scrollToDeveloperCourseSection() {
      const section =
        this.$refs.coursesSection.$el.querySelector(".developer-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToCloudCourseSection() {
      const section =
        this.$refs.coursesSection.$el.querySelector(".cloud-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
});
</script>

<style scoped>
.overall-container {
  /* background-color: rgb(36, 33, 46); */
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  margin: auto;
}

.top-text-section-1 {
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  font-weight: 500;
}

@media (max-width: 600px) {
  .overall-container {
    max-width: 100vw;
  }
}
</style>
