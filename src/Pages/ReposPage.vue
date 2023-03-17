<template>
    <h1>Repos</h1>
    
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "ReposPage",
    component: {
        
    },
    computed: {
        ...mapState([
            'data'
        ])
    },
    methods: {
        ...mapActions([
            'fetchData'
        ])
    },
    mounted() {
        this.fetchData();
        console.log(this.data)
    }
}
</script>