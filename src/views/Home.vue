<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div v-for="student in students">
      <h2>{{ student.first_name }} {{ student.last_name }}</h2>
      <div>
        <img
          :src="`${student.photo}`"
          :alt="`${student.first_name} ${student.last_name}'s Profile Picture`"
        />
      </div>
      <div>
        <b>Bio:</b>
        <p>{{ student.short_bio }}</p>
        <b>Current Job:</b>
        <p>{{ student.experiences[0].job_title}} at {{ student.experiences[0].company_name }} ({{ student.experiences[0].start_date}} - {{ student.experiences[0].end_date}})</p>
      </div>

      <!-- add button below -->
      <div>
        <button v-on:click="showStudent(student)">Show More Info</button>
      </div>
      <div v-if="student === currentStudent">
        <br />
        <b>Employment Experience:</b>
        <div v-for="experience in student.experiences">
          <ul>
            <li>{{ experience.job_title }} at {{ experience.company_name }} ({{ experience.start_date }} - {{ experience.end_date }})</li>
          </ul>
        </div>
        <b>Resume:</b>
        <p>{{ student.resume_url}}</p>
        <b>LinkedIn:</b>
        <p>{{ student.linkedin_url }}</p>
        <b>e-mail:</b>
        <p>{{ student.email }}</p>
        <b>phone number:</b>
        <p>{{ student.phone_number }}</p>
        <b>GitHub:</b>
        <p>{{ student.github_url }}</p>
        <b>Personal Website:</b>
        <p>{{ student.website_url}}</p>
        <b>Twitter:</b>
        <div>
          <a :href="`https://www.twitter.com/${student.twitter_url}`">@{{ student.twitter_url }}</a>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
img {
  height: 400px;
  width: 600px;
}
li {
  list-style-position: inside;
}
</style>

<script>
export default {
  data: function() {
    return {
      message: "Student Community Resumes",
      students: [
        {
          id: 1,
          first_name: "Bob",
          last_name: "Smith",
          email: "bob@example.com",
          phone_number: "111-1111",
          short_bio: "My name is Bob. I'm not a blob.",
          linkedin_url: "www.linkedin.com/in/bobsmith",
          twitter_url: "bobsmith",
          website_url: "www.bobsmith.com",
          resume_url: "www.bobsmithresume.com",
          github_url: "www.github.com/bobsmith",
          photo:
            "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          experiences: [
            {
              id: 1,
              start_date: "January 1, 2019",
              end_date: "Present",
              job_title: "Web Developer",
              company_name: "Github",
              details: "I work on the backend",
              student_id: 1
            },
            {
              id: 2,
              start_date: "January 1, 2018",
              end_date: "Present",
              job_title: "Ruby Developer",
              company_name: "Github",
              details: "I work on the backend",
              student_id: 1
            }
          ]
        },
        {
          id: 2,
          first_name: "Sally",
          last_name: "Jones",
          email: "sally@example.com",
          phone_number: "222-2222",
          short_bio: "My name is Sally. I bowl in an alley.",
          linkedin_url: "www.linkedin.com/in/sallyjones",
          twitter_url: "sallyjones",
          website_url: "www.sallyjones.com",
          resume_url: "www.sallyjonesresume.com",
          github_url: "www.github.com/sallyjones",
          photo:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          experiences: [
            {
              id: 1,
              start_date: "June 1, 2019",
              end_date: "Present",
              job_title: "Web Developer",
              company_name: "Github",
              details: "I work on the backend",
              student_id: 2
            }
          ]
        },
        {
          id: 3,
          first_name: "Freddy",
          last_name: "Hernandez",
          email: "freddy@example.com",
          phone_number: "333-3333",
          short_bio: "My name is Freddy. I'm not ready.",
          linkedin_url: "www.linkedin.com/in/freddyhernandez",
          twitter_url: "freddyhernandez",
          website_url: "www.freddyhernandez.com",
          resume_url: "www.freddyhernandezresume.com",
          github_url: "www.github.com/freddyhernandez",
          photo:
            "https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          experiences: [
            {
              id: 1,
              start_date: "March 1, 2019",
              end_date: "Present",
              job_title: "Software Developer",
              company_name: "Github",
              details: "I work on the backend",
              student_id: 3
            },
            {
              id: 2,
              start_date: "February 1, 2017",
              end_date: "March 1, 2019",
              job_title: "Web Developer",
              company_name: "Pandora",
              details: "I work on the frontend",
              student_id: 3
            },
            {
              id: 3,
              start_date: "January 1, 2015",
              end_date: "February 1, 2017",
              job_title: "Full Stack Developer",
              company_name: "Cars.com",
              details: "I work across the stack",
              student_id: 3
            }
          ]
        }
      ],
      currentStudent: {}
    };
  },
  created: function() {
    // axios.get("/api/students").then(response => {
    //   this.students = response.data;
    // });
  },
  methods: {
    showStudent: function(student) {
      if (this.currentStudent === student) {
        this.currentStudent = {};
      } else {
        this.currentStudent = student;
      }
    }
  }
};
</script>