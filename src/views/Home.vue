<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h1 >All Students</h1>
    <div v-for="student in students">
      <h2>{{ student.first_name }} {{ student.last_name }}</h2>
      <h3>{{ student.email }}</h3>
      <h3>{{ student.phone_number }}</h3>
      <h3>{{ student.short_bio }}</h3>
      <h3>{{ student.linked_in_url }}</h3>
      <a :href="`https://www.twitter.com/${student.twitter_handle}`">@{{ student.twitter_handle }}</a>
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
          linked_in_url: "www.linkedin.com/in/bobsmith",
          twitter_handle: "bobsmith",
          website: "www.bobsmith.com",
        },
        {
          first_name: "Sally",
          last_name: "Jones",
          email: "sally@example.com",
          phone_number: "222-2222",
          short_bio: "My name is Sally. I bowl in an alley.",
          linked_in_url: "www.linkedin.com/in/sallyjones",
          twitter_handle: "sallyjones",
          website: "www.sallyjones.com",
        },
        {
          first_name: "Freddy",
          last_name: "Hernandez",
          email: "freddy@example.com",
          phone_number: "333-3333",
          short_bio: "My name is Freddy. I'm not ready.",
          linked_in_url: "www.linkedin.com/in/freddyhernandez",
          twitter_handle: "freddyhernandez",
          website: "www.freddyhernandez.com",
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