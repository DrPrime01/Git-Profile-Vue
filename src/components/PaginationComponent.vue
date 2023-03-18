<template>
  <nav class="flex items-center justify-end flex-row mt-4">
    <ul class="inline-flex">
      <li v-for="page in pages" :key="page"
        class="{page === currentPage ? inline-block border active : inline-block border}">
        <a class="bg-white text-gray-700 inline-block px-4 py-3 hover:bg-gray-100 cursor-pointer"
          @click="onPageChange(page)">{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import _ from "lodash";
export default {
  name: "PaginationComponent",
  props: {
    itemsCount: Number,
    pageSize: Number,
    currentPage: Number,
    onPageChange: Function,
  },
  computed: {
    pagesCount() {
      return Math.ceil(this.itemsCount / this.pageSize);
    },
    pages() {
      if (this.pagesCount === 1) return null;
      return _.range(1, this.pagesCount + 1);
    },
  },
};
</script>
