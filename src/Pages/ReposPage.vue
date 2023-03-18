<template>
  <div class="max-w-[1080px] mx-auto p-5 min-h-screen">
  <div class="flex flex-col justify-between sm:flex-col xs:flex-col">
    <ProfileSection :name="getData.name" :avatar="getData.avatar_url" :username="getData.login"
      :twitter="getData.twitter_username" :bio="getData.bio" :location="getData.location" :email="email"
      :twitter_url="`https://twitter.com/${getData.twitter_username}`"/>
    <div class="mt-20 xs:mt-10 sm:mt-16">
      <ReposTable :repos="getRepos" :pageSize="pageSize" :currentPage="currentPage"/>
      <PaginationComponent :itemsCount="getRepos.length" :pageSize="pageSize" :currentPage="currentPage" :onPageChange="onPageChange"/>
    </div>
  </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import ProfileSection from "@/components/ProfileSection";
import PaginationComponent from "@/components/PaginationComponent";
import ReposTable from "@/components/ReposTable";

export default {
  name: "ReposPage",
  components: {
    ProfileSection,
    PaginationComponent,
    ReposTable,
  },
  data() {
    return {
      email: "gabrielshoyombo2002@gmail.com",
      pageSize: 5,
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    }
  },
  computed: {
    getData() {
      const store = useStore();
      return store.getters.getData;
    },
    getRepos() {
      const store = useStore();
      return store.getters.getRepos;
    },
    data() {
      const store = useStore();
      return store.state.data;
    },
    repos() {
      const store = useStore();
      return store.state.repos;
    }
  },
  mounted() {
    const store = useStore();
    store.dispatch("fetchData");
    store.dispatch("fetchRepos");
  }
};

</script>