<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        v-if="repo"
        class="bg-white shadow-md rounded-md p-8 w-full md:w-3/4 lg:w-1/2"
      >
        <h1 class="text-3xl font-bold mb-4">{{ repo.name }}</h1>
        <a :href="repo.html_url" target="_blank" class="text-blue-600 mb-4 inline-block">
          {{ repo.html_url }}
        </a>
        <p class="text-gray-600">Created at: {{ formattedCreatedAt }}</p>
        <p class="text-gray-600">Language: {{ repo.language }}</p>
        <p class="text-gray-600">Stars: {{ repo.stargazers_count }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    name: "RepoPage",
    data() {
      return {
        repo: null,
      };
    },
    computed: {
      ...mapGetters(["getRepos"]),
      formattedCreatedAt() {
        return this.repo ? new Date(this.repo.created_at).toLocaleDateString() : "";
      },
    },
    methods: {
      ...mapActions(["fetchRepos"]),
      repoData(id) {
        return this.getRepos.filter((repo) => repo.id === parseInt(id))[0];
      },
    },
    async mounted() {
      await this.fetchRepos();
      this.repo = this.repoData(this.$route.params.id);
    },
  };
  </script>
  