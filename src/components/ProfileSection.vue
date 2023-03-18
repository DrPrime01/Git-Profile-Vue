<template>
    <div class="flex flex-col space-y-4">
        <div class="avatar rounded-full h-40 w-40 flex justify-center items-center">
            <img :src="avatar" alt="profile" class="h-auto w-full"/>
        </div>
        <div class="name">
            <h2>{{ name }}</h2>
            <h3>{{ username }}</h3>
        </div>
        <div class="bio">
            <p>{{ bio }}</p>
        </div>
        <div class="otherInfo">
            <div class="location">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {{ location }}
            </div>
            <div class="email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {{ email }}
            </div>
            <div class="twitter">
                <a :href="twitter_url" target="_blank">{{ twitter }}</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfileSection",
    props: {
        name: String,
        username: String,
        avatar: String,
        bio: String,
        location: String,
        email: String,
        twitter: String,
        twitter_url: String,
    },
    data() {
        return {

        }
    }
}
</script>