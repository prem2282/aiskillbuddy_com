<template>
  <div class="q-pa-md q-pt-xl central-container">
    <div class="course-header">Cloud Courses</div>
    <q-list bordered>
      <q-expansion-item
        v-for="course in courses"
        group="somegroup"
        :key="course.title"
        class="shadow-1 overflow-hidden course-expansion-item text-subtitle1 q-ma-md"
        header-class="buddy-blue-4 text-white text-h5"
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
            <div
              :key="description"
              v-for="description in course.description"
              class="q-pa-md justify-center"
            >
              {{ description }}
            </div>
          </q-card-section>

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
  name: "CloudCourses",
  data() {
    return {
      courses: [
        {
          title: "AWS Cloud Practitioner",
          icon: "join_full",
          fee: "Rs.30,000 + GST",
          duration: "3 months",
          description: [
            "This 3-month AWS Cloud Practitioner course is designed for individuals seeking to gain comprehensive understanding and skills in Amazon Web Services (AWS) cloud computing. It serves as a foundational step for beginners and IT professionals alike to grasp the essentials of AWS, ensuring they are well-equipped to operate within the cloud.",
            "The course also covers the AWS Well-Architected Framework, ensuring participants understand how to design robust systems on AWS. With an emphasis on real-world applications, learners will explore strategies for migrating to the cloud, cost optimization, and managing AWS costs effectively. Security and compliance, crucial aspects of cloud computing, will be thoroughly addressed to ensure learners can navigate AWS’s data encryption and compliance programs confidently.",
            "Designed for beginners and IT professionals alike, this course does not just aim at theoretical knowledge. Instead, it focuses on empowering learners with the skills and understanding necessary to utilize AWS services effectively and to lay a solid foundation for their cloud computing careers. By the end of this journey, participants will be well-prepared to take the AWS Certified Cloud Practitioner exam, armed with the knowledge, skills, and confidence needed to excel.",
          ],
        },
        {
          title: "AWS Certified Developer Associate",
          fee: "Rs.30,000 + GST",
          duration: "3 months",
          icon: "dns",
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
          description: [
            "This course is tailored for individuals aiming to achieve the AWS Certified Developer – Associate certification, focusing on the essentials of developing and maintaining applications on Amazon Web Services. Through concise, targeted instruction, participants will learn to utilize AWS core services like Amazon EC2, AWS Lambda, and Amazon S3, mastering the development of scalable and reliable cloud-based applications.",
            "Key topics include practical use of AWS SDKs and APIs for programmatic access to AWS services, implementing robust security measures using AWS IAM and Amazon Cognito, and optimizing application performance with Amazon CloudWatch. The curriculum is designed to impart best practices in serverless application development, and CI/CD methodologies to streamline the development lifecycle.",
            "By the end of this course, learners will be equipped with the necessary skills to pass the AWS Certified Developer – Associate exam confidently and possess the practical knowledge required for developing efficient, secure applications on AWS, setting a solid foundation for a career in cloud technology.",
          ],
        },
        {
          title: "AWS Certified Solutions Architect Associate",
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
          description: [
            "This streamlined course is designed to propel participants towards achieving the AWS Certified Solutions Architect – Associate certification, focusing on mastering the art of designing and implementing robust and scalable systems on Amazon Web Services. Participants will delve into essential AWS services required for architecting optimal cloud solutions, including Amazon EC2, Amazon S3, AWS Lambda, and Amazon RDS, alongside an understanding of AWS networking and security best practices.",
            "The curriculum is carefully crafted to cover architectural principles of building on the AWS Cloud, leveraging AWS well-architected framework guidelines. Learners will explore how to design high-availability systems, implement fault-tolerant and scalable applications, and understand cost-optimization strategies",
            "Security principles form a core part of the course, ensuring participants can design applications with security and compliance as a priority, utilizing tools like AWS IAM and Amazon VPC. The course emphasizes practical skills, offering hands-on experience in deploying and managing systems, making architectural decisions based on AWS recommended practices, and utilizing AWS management tools for optimization and monitoring.",
            "By the completion of this course, learners will have the confidence and skills to take the AWS Certified Solutions Architect – Associate exam, armed with comprehensive knowledge and practical experience in AWS solution design, ready to tackle complex architectural challenges in the cloud.",
          ],
        },
      ],
    };
  },
  components: {},
  methods: {},
  onBeforeUnmount() {},
  mounted() {},
});
</script>
<style scoped>
.hr-class {
  background-color: rgb(23, 22, 22);
  margin: 0;
}

.course-header {
  font-size: 2em;
  font-weight: bolder;
  text-align: center;
  margin: 1rem 0 0 0;
  color: gainsboro;
  font-family: "Roboto", sans-serif;
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

@media (max-width: 600px) {
  .course-expansion-item {
    width: 100vw;
  }
}
</style>
