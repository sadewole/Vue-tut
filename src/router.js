import AboutPage from './vue/About.vue'
import HomePage from './vue/Home.vue'

export default [{
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
]