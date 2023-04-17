import { createRouter, createWebHistory } from 'vue-router'
import UserNameView from '../views/UserNameInputView.vue'
import OAuthLoginView from '../views/OAuthLoginView.vue'
import RoleInputView from '../views/RoleInputView.vue'
import HomePageView from '../views/HomePageView.vue'
import ProfileView from '../views/ProfileView.vue'
import PortfolioCreatorView from '../views/PortfolioCreatorView.vue'
import FAQView from '../views/FAQView.vue'
//import ProjectListView from '../views/ProjectListView.vue'
import FreelancerListView from '../views/FreelancerListView.vue'
import ChatView from '../views/ChatView.vue'
import EmailInviteView from '../views/EmailInviteView.vue'
import PortfolioCards from '../views/PortfolioCardsView.vue'
import ProjectListView from '../views/ProjectListView.vue'
import ProjectCreatorView from '../views/ProjectCreatorView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "login",
            component: OAuthLoginView
        },
        {
            path: '/user-name',
            name: "username",
            component: UserNameView
        },
        {
            path: '/role',
            name: "role",
            component: RoleInputView
        },
        {
            path: '/home',
            name: "home",
            component: HomePageView
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView
        },
        {
            path: '/create-portfolio',
            name: 'create-portfolio',
            component: PortfolioCreatorView
        },
        {
            path: '/create-project',
            name: 'create-project',
            component: ProjectCreatorView
        },
        {
            path: '/faq',
            name: 'faq',
            component: FAQView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectListView
        },
        {
            path: '/chat',
            name: 'chat',
            component: ChatView
        },
        {
            path: '/freelancers',
            name: 'chat',
            component: FreelancerListView

        },
        {
            path: '/invite',
            name: 'invite',
            component: EmailInviteView
        },
        {
            path: '/portfolios',
            name: 'portfolios',
            component: PortfolioCards
        }
    ]
})

export default router