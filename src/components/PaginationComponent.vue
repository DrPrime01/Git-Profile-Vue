<template>
    <nav>
        <ul>
            <li v-for="page in pages" :key="page" class="[page === currentPage ? page-item active : page-item]">
                <a>{{ page }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import _ from 'lodash';
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
            return Math.ceil(this.itemsCount/this.pageSize)
        },
        pages() {
            if(this.pagesCount === 1) return null;
            return _.range(1, this.pagesCount + 1);
        }
    }
}
</script>