<template>
  <div class="courses-section">
    <DeveloperCourses class="developer-section" />
    <CloudCourses class="cloud-section" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import DeveloperCourses from "./DeveloperCourses.vue";
import CloudCourses from "./CloudCourses.vue";

export default defineComponent({
  name: "CoursesSection",
  components: {
    DeveloperCourses,
    CloudCourses,
  },
});
</script>
