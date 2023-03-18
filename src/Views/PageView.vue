<template>
    <NavBar />
    <RouterView/>
    <FooterComponent />
</template>

<script>
import NavBar from '@/components/NavBar';
import FooterComponent from '@/components/FooterComponent';


export default {
    name: "PageView",
    components: {
        NavBar,
        FooterComponent,
    }
}
</script>