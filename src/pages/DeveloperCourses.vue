<template>
  <div class="q-pa-md q-pt-xl central-container">
    <div class="course-header">Developer Courses</div>
    <q-list bordered>
      <q-expansion-item
        v-for="course in courses"
        :key="course.title"
        class="shadow-1 overflow-hidden course-expansion-item text-subtitle1 q-ma-md"
        header-class="buddy-blue-3 text-white text-h5"
      >
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar :icon="course.icon" text-color="indigo-2" />
          </q-item-section>

          <q-item-section class="text-indigo-3 text-h6 header-title-box">
            <div>
              {{ course.title }}
            </div>
            <div class="text-subtitle2 text-grey">
              {{ course.duration }}
            </div>
          </q-item-section>
          <q-item-section side> </q-item-section>
        </template>
        <q-card>
          <q-card-section class="bg-black text-blue-1 central-container">
            <div class="q-pa-md justify-center">{{ course.description }}</div>
          </q-card-section>

          <q-card-section
            class="no-padding bg-black"
            v-for="image in course.images"
            :key="image"
          >
            <img src="~assets/FSDJourney.gif" class="course-resource" />
          </q-card-section>

          <q-card-section class="bg-black text-blue-1 central-container">
            <div class="central-container q-pa-md">
              <q-chip
                class="q-px-md text-h6 buddy-blue-3"
                text-color="indigo-3"
                square
                icon="build_circle"
                >Technology Stack</q-chip
              >
            </div>
            <div v-if="course.sections && course.sections.length">
              <div
                class="course-expansion-item"
                v-for="section in course.sections"
                :key="section"
              >
                <div class="q-mb-md">
                  <div class="central-container section-name">
                    {{ section.name }}
                  </div>
                  <div class="tag-container">
                    <q-chip
                      class="q-pa-md q-ma-sm shadow-3 text-blue-3 text-h6 text-weight-semibold"
                      outline
                      :class="section.class"
                      v-for="tag in section.tags"
                      :key="tag"
                    >
                      {{ tag }}
                    </q-chip>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <hr class="hr-class q-mx-md" />
          <q-card-section
            class="bg-black text-blue-1 text-h6 central-container"
          >
            Duration : {{ course.duration }}
          </q-card-section>
          <hr class="hr-class" />
          <q-card-section
            class="bg-black text-blue-1 text-h6 central-container"
          >
            Course Fee : {{ course.fee }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "DeveloperCourses",
  data() {
    return {
      courses: [
        {
          title: "Full Stack Developer",
          icon: "join_full",
          fee: "Rs.60,000 + GST",
          duration: "6 months",
          images: ["~assets/FSDJourney.gif"],
          sections: [
            {
              name: "Backend",
              class: " text-blue-3",
              tags: ["python", "flask", "django", "rest api", "sql", "nosql"],
            },
            {
              name: "Frontend",
              class: "text-yellow-3",
              tags: ["html5", "css3", "javascript", "jquery", "vue", "react"],
            },
            {
              name: "CICD & Cloud",
              class: "text-orange-3",
              tags: ["Git", "Docker", "Jenkins", "Bitbucket", "AWS", "Netlify"],
            },
            {
              name: "Generative AI",
              class: "text-green-3",
              tags: ["llm", "openai", "gemini", "copilot", "ollama", "RAG"],
            },
          ],

          description:
            "Embark on a transformative 6-month journey to becoming a Full Stack Developer, where you'll dive into the essentials of backend and frontend development, master the art of Continuous Integration and Continuous Deployment (CI/CD), harness the power of cloud computing, and explore the revolutionary world of Generative AI.",
        },
        {
          title: "Backend Developer",
          fee: "Rs.30,000 + GST",
          duration: "3 months",
          icon: "dns",
          images: [],
          sections: [
            {
              name: "Backend",
              class: " text-blue-3",
              tags: [
                "python",
                "flask",
                "django",
                "rest api",
                "sql",
                "nosql",
                "pytest",
              ],
            },
            {
              name: "CICD & Cloud",
              class: "text-orange-3",
              tags: ["Git", "Docker", "Jenkins", "Bitbucket", "AWS"],
            },
          ],
          description:
            "Dive into Backend Development with our concise 3-month course, blending CI/CD practices and Cloud Technologies. Master the core of web development through Test-Driven Development (TDD), learn to automate and deploy with precision, and leverage cloud services for scalable solutions. This course is your fast track to becoming a proficient back-end developer, ready to tackle the digital challenges of tomorrow.",
        },
        {
          title: "Frontend Developer",
          fee: "Rs.30,000 + GST",
          duration: "3 months",
          icon: "web",
          sections: [
            {
              name: "Frontend",
              class: "text-yellow-3",
              tags: [
                "html5",
                "css3",
                "javascript",
                "jquery",
                "vue",
                "react",
                "jest",
              ],
            },
            {
              name: "CICD & Cloud",
              class: "text-orange-3",
              tags: ["Git", "Bitbucket", "AWS", "Netlify"],
            },
          ],
          description:
            "Step into the vibrant world of Frontend Development with our streamlined 3-month course. Master the essentials and dive deep into Vue or React for dynamic, user-driven web experiences. Learn to deploy your projects effortlessly on Netlify, embracing cloud technologies for scalable front-end solutions. With a focus on CI/CD practices and Test-Driven Development (TDD) using Jest, this course equips you with the skills to build, test, and deploy with confidence",
        },
        {
          title: "Datascience Developer",
          fee: "Rs.60,000 + GST",
          duration: "6 months",
          icon: "data_usage",
          sections: [
            {
              name: "Backend",
              class: " text-blue-3",
              tags: ["python", "flask", "django", "rest api", "sql", "nosql"],
            },
            {
              name: "Data Science",
              class: "text-yellow-3",
              tags: [
                "numpy",
                "pandas",
                "matplotlib",
                "Seaborn",
                "Scikit-learn",
                "SciPy",
                "Tensorflow",
                "Keras",
                "Pytorch",
                "Stastmodels",
                "OpenCV",
              ],
            },
            {
              name: "CICD & Cloud",
              class: "text-orange-3",
              tags: ["Git", "Docker", "Jenkins", "Bitbucket", "AWS"],
            },
          ],

          description:
            "Dive into Data Science with our streamlined course, designed to turn curiosity into capability. Learn to analyze, visualize, and predict, using tools like Pandas, Matplotlib, and Scikit-learn. From data wrangling to machine learning, this program packs essential skills into practical exercises, preparing you to solve real-world challenges with data-driven insights. Start your journey to becoming a data scientist today.",
        },
        {
          title: "Gen AI Developer",
          fee: "Rs.30,000 + GST",
          duration: "3 months",
          icon: "psychology",
          sections: [
            {
              name: "Backend",
              class: " text-blue-3",
              tags: ["python", "flask"],
            },
            {
              name: "Generative AI",
              class: "text-green-3",
              tags: ["llm", "openai", "gemini", "copilot", "ollama", "RAG"],
            },
            {
              name: "Frontend",
              class: "text-yellow-3",
              tags: ["html5", "css3", "javascript"],
            },
            {
              name: "CICD & Cloud",
              class: "text-orange-3",
              tags: ["Git", "AWS", "Netlify"],
            },
          ],
          description:
            "Dive into the future with our Generative AI course, blending the essentials of Python, generative models like OpenAI, Google Gemini, and LLaMA, with practical skills in front-end development and AWS deployment. This concise program equips you with the know-how to build, deploy, and interact with AI-driven applications. Perfect for those looking to harness the power of AI creativity and innovation, our course sets the stage for you to lead in the tech revolution. Step into the world of Generative AI and start transforming ideas into reality.",
        },
      ],
    };
  },
  components: {},
  methods: {},
  onBeforeUnmount() {},
  mounted() {},
  computed: {
    orientation() {
      return this.$q.screen.lt.md ? "vertical" : "horizontal";
    },
    mobile() {
      return this.$q.screen.lt.md;
    },
  },
});
</script>
<style scoped>
.hr-class {
  background-color: rgb(23, 22, 22);
  margin: 0;
}

.header-title-box {
  display: block;
}

.course-header {
  font-size: 2em;
  font-weight: bolder;
  text-align: center;
  margin: 1rem 0 0 0;
  color: gainsboro;
  letter-spacing: 0.25em;
}
.course-expansion-item {
  width: 50vw;
}

.section-name {
  font-size: 1.1em;
  font-weight: medium;
  color: gainsboro;
  margin: 0rem 0;
}

.course-resource {
  max-width: 100%;
}

.tag-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0.25rem 0;
  justify-content: center;
  align-content: stretch;
}
@media (max-width: 600px) {
  .course-expansion-item {
    width: 100vw;
  }
}
</style>
