<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1>All Students</h1>
    <div v-for="student in students">
      <h2>{{ student.first_name }} {{ student.last_name }}</h2>
      <h3>{{ student.email }}</h3>
      <h3>{{ student.phone_number }}</h3>
      <h3>{{ student.short_bio }}</h3>
      <h3>{{ student.linkedin_url }}</h3>
      <h3>{{ student.resume_url}}</h3>
      <h3>{{ student.github_url }}</h3>
      <h3>{{ student.website_url}}</h3>

      <img :src="`${student.photo}`" alt="person's picture" />
      <br />
      <br />

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
        },
        {
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
        },
        {
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