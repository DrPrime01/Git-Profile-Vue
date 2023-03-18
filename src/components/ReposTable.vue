<template>
    <div class="container sm:overflow-x-auto xs:overflow-x-auto">
        <table class="w-full divide-y divide-gray-200 sm:overflow-x-auto xs:overflow-x-auto">
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Stars</th>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th class="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="repo in reposList" :key="repo.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{repo.name}}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{repo.language}}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{repo.stargazers_count}}</td>
                    <td class="px-6 py-4 whitespace-nowrap"><a :href="repo.html_url">View on GitHub</a></td>
                    <td class="px-6 py-4 whitespace-nowrap"><RouterLink :to="`/repo/${repo.id}`">Explore Repo</RouterLink></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import paginate from "@/Utils/paginate"
import { RouterLink } from "vue-router";

export default {
    name: "ReposTable",
    props: {
        repos: Array,
        currentPage: Number,
        pageSize: Number,
    },
    computed: {
        reposList() {
            return paginate(this.repos, this.currentPage, this.pageSize);
        }
    },
    components: { RouterLink }
}
</script>