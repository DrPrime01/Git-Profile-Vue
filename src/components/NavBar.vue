<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <span class="block h-8 w-auto lg:hidden text-white text-bold text-lg">GitProfile</span>
                        <span class="hidden h-8 w-auto lg:block text-white text-bold text-lg">GitProfile</span>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <RouterLink v-for="(item) in navigation" :key="item.name" :to="item.to"
                                :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                :aria-current="item.current ? 'page' : undefined" @click="open = false">{{ item.name }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <RouterLink v-for="(item) in navigation" :key="item.name" :to="item.to"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined" @click="open = false">
                    {{ item.name }}
                </RouterLink>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script>

import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
export default {
    name: "NavBar",
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Bars3Icon,
        XMarkIcon
    },
    data() {
        return {
            navigation: [
                { name: 'Home', to: '/', current: true },
                { name: 'Repos', to: '/repos', current: false },
                { name: 'About', to: '/about', current: false },
                { name: 'Contact', to: '/contact', current: false },
            ],
            open: false,
        };
    },
    computed: {
        currentPath() {
            return this.$route.path;
        },
    },
    mounted() {
        this.updateCurrentPath();
    },
    watch: {
        $route() {
            this.updateCurrentPath();
            this.open = false;
        },
    },

    methods: {
        updateCurrentPath() {
            this.navigation.forEach((item) => {
                if (item.to === this.currentPath) {
                    item.current = true;
                } else {
                    item.current = false;
                }
            });
        },
    },
};
</script>
