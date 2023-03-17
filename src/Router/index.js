import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../Pages/HomePage';
import ReposPage from '../Pages/ReposPage';
import RepoPage from '../Pages/RepoPage';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';

const routes = [
    {
        name: "Home",
        path: "/",
        component: HomePage,
    },
    {
        name: "Repos",
        path: "/repos",
        component: ReposPage,
        children: [
            {
                name: "Repo",
                path: "repo",
                component: RepoPage,
            }
        ]
    },
    {
        name: "About",
        path: "/about",
        component: AboutPage,
    },
    {
        name: "Contact",
        path: "/contact",
        component: ContactPage,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})