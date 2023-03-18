<template>
    <div class="container mx-auto max-w-[1080px] p-5 min-h-screen sm:mb-10 xs:mb-10">
        <div class="flex flex-col md:flex-row h-screen">
    <div class="w-full md:w-1/2">
        <img class="w-full h-1/2 xs:h-auto sm:h-auto md:h-screen object-cover object-top" :src="image" alt="headshot">
    </div>
    <div class="flex w-full md:w-1/2 bg-gray-100 p-10">
        <div class="mb-auto mt-auto max-w-lg">
            <h1 class="text-3xl uppercase">Gabriel Shoyombo</h1>
            <p class="font-semibold mb-5">Frontend Developer</p>
            <p class="mb-6">I am a frontend developer and a student of both Software Engineering at AltSchool Africa and
                Physiotherapy at the University of Lagos, Nigeria. As a front-end developer, I specialize in web
                development and design, creating visually appealing and user-friendly websites. I am passionate
                about exploring the intersection of technology and healthcare and finding innovative ways to improve
                healthcare outcomes. With a strong work ethic and a desire to make a positive impact, I am dedicated
                to achieving my goals and making a difference in my community.</p>
            <a href="mailto:gabrielshoyombo2002@gmail.com"
                class="bg-black rounded-md py-3 px-7 text-white">Email Me</a>
        </div>
    </div>
</div>

    </div>
</template>

<script>
import myOpenAIPics from "@/assets/images/myOpenAIPics.jpeg";
export default {
    name: "AboutPage",
    data() {
        return {
            image: myOpenAIPics,
        }
    }
}
</script>