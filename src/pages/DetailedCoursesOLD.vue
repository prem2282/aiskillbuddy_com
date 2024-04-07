<template>
  <div class="courses-container row">
    <div class="course-sub-container col">
      <div class="course-header buddy-blue-2">
        <span class="header-text">Developer Courses</span>
      </div>
      <div class="course-buttons-container">
        <q-btn
          class="course-button buddy-blue-3 text-grey-4"
          no-caps
          square
          flat
        >
          Fullstack Developer
        </q-btn>
        <q-btn
          class="course-button buddy-blue-4 text-grey-4"
          no-caps
          square
          flat
        >
          Backend Developer
        </q-btn>
        <q-btn
          class="course-button buddy-blue-5 text-grey-4"
          no-caps
          square
          flat
        >
          Frontend Developer
        </q-btn>
        <q-btn
          class="course-button buddy-blue-6 text-grey-4"
          no-caps
          square
          flat
        >
          Datascience Developer
        </q-btn>
      </div>
    </div>
    <div class="course-description-container col">
      <div class="course-header buddy-blue-2">
        <span class="header-text">Course Details</span>
      </div>
      <div>
        <q-chip v-for="tag in fullstack.backend" :key="tag">{{ tag }}</q-chip>
      </div>
      <div>
        <q-chip v-for="tag in fullstack.frontend" :key="tag">{{ tag }}</q-chip>
      </div>
      <div>
        <q-chip v-for="tag in fullstack.others" :key="tag">{{ tag }}</q-chip>
      </div>
      <div>
        <q-chip v-for="tag in fullstack.ai" :key="tag">{{ tag }}</q-chip>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed
        molestias ratione sunt eius! Nulla assumenda corrupti, repellendus esse
        necessitatibus fugit itaque labore sint vero eaque dolore totam minima
        explicabo.
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailedCourses",
  data: () => {
    return {
      fullstack: {
        name: "Fullstack Developer",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed molestias ratione sunt eius! Nulla assumenda corrupti, repellendus esse necessitatibus fugit itaque labore sint vero eaque dolore totam minima explicabo.",
        backend: ["python", "flask", "django", "rest api", "sql", "nosql"],
        frontend: ["html", "css", "javascript", "jquery", "react/vue"],
        others: ["git", "websockets", "aws", "bitbucket", "docker"],
        ai: ["openai", "gemini", "llama"],
      },
    };
  },
  components: {},
});
</script>

<style scoped>
.course-sub-container {
  max-width: 30%;
  background-color: brown;
  margin: 2rem 0;
}

.course-description-container {
  max-width: 70%;
  background-color: brown;
  margin: 2rem 0;
}

.course-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-text {
  font-size: 1.5em;
  color: rgb(133, 119, 119);
  padding: 0.5rem;
}
.course-buttons-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.course-button {
  padding: 2rem 0;
  width: 100%;
  font-size: 1.2em;
}

@media (max-width: 600px) {
}
</style>
