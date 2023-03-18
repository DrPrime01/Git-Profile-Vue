<template>
    <div class="max-w-[1080px] mx-auto p-5 min-h-screen">
        <div v-for="item in repo" :key="item.id">
            <p>Name: {{ item.name }}</p>
            <p>Language: {{ item.language }}</p>
            <p>Stars: {{ item.stargazers_count }}</p>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";

export default {
    name: "RepoPage",
    data() {
        return {
            repo: [],
        }
    },
    computed: {
        getRepos() {
            const store = useStore();
            return store.getters.getRepos;
        },
        repos() {
            const store = useStore();
            return store.state.repos;
        },
    },
    methods: {
        repoData(id) {
            return this.getRepos.filter(repo => repo.id === parseInt(id))
        },
    },
    mounted() {
        const store = useStore();
        store.dispatch("fetchRepos");
        this.repo = this.repoData(this.$route.params.id);
    }
}
</script>