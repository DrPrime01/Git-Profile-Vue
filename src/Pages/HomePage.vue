<template>
    <div class="flex mx-auto max-w-[1080px] p-5 flex-col items-center justify-center min-h-screen bg-gray-100">
      <img class="w-48 h-48 mb-8 rounded-full object-cover object-center" :src="profileImage" alt="Profile Picture">
      <h1 class="text-4xl font-bold mb-4 text-center">Welcome to My Portfolio</h1>
      <p class="text-xl mb-8 text-center">I'm a frontend developer creating amazing web experiences.</p>
      <RouterLink to="/repos" class="bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-blue-800">
        Check out my repos
      </RouterLink>
    </div>
</template>
  
<script>

import myOpenAIPics from '@/assets/images/myOpenAIPics.jpeg';
  export default {
    data() {
      return {
        profileImage: myOpenAIPics, // Replace with your own image URL
      };
    },
  };
</script>
  