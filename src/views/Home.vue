<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>All Students</h1>
    <div v-for="student in students">
      <h2>{{ student.first_name }} {{ student.last_name }}</h2>
      <img :src="`${student.photo}`" alt="person's picture" />
      <br />
      <br />
      <h3>{{ student.short_bio }}</h3>
      <h3>{{ student.experiences[0].job_title}}</h3>
      <h3>{{ student.experiences[0].start_date}} - {{ student.experiences[0].end_date}}</h3>

      <!-- add button below -->
      <h3>{{ student.email }}</h3>
      <h3>{{ student.phone_number }}</h3>
      <h3>{{ student.linkedin_url }}</h3>
      <h3>{{ student.resume_url}}</h3>
      <h3>{{ student.github_url }}</h3>
      <h3>{{ student.website_url}}</h3>

      <div v-for="experience in student.experiences">
        <h3>{{ experience.job_title }}</h3>
      </div>
      <a :href="`https://www.twitter.com/${student.twitter_url}`">@{{ student.twitter_url }}</a>
    </div>
  </div>
</template>


<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "HI AGAIN!",
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
          photo: "bobsmith.jpg",
          experiences: [
            {
              id: 1,
              start_date: "january 1, 2019",
              end_date: "Present",
              job_title: "Web Developer",
              company_name: "Github",
              details: "i work on the backend",
              student_id: 1,
            },
            {
              id: 2,
              start_date: "january 1, 2019",
              end_date: "Present",
              job_title: "Ruby Developer",
              company_name: "Github",
              details: "i work on the backend",
              student_id: 1,
            },
          ],
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
          photo: "sallyjones.jpg",
          experiences: [
            {
              id: 1,
              start_date: "June1, 2019",
              end_date: "Present",
              job_title: "Web Developer",
              company_name: "Github",
              details: "i work on the backend",
              student_id: 2,
            },
          ],
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
          photo: "freddyhernandez.jpg",
          experiences: [
            {
              id: 1,
              start_date: "March 1, 2019",
              end_date: "Present",
              job_title: "Software Developer",
              company_name: "Github",
              details: "i work on the backend",
              student_id: 3,
            },
          ],
        },
      ],
    };
  },
  created: function() {
    // axios.get("/api/photos").then(response => {
    //   this.photos = response.data;
    // });
  },
  methods: {},
};
</script>