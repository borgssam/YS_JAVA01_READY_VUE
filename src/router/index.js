import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import BasicView from '../views/BasicView.vue'
import DeepView from '../views/DeepView.vue'
import DeepView2 from '../views/DeepView2.vue'
import DeepView3 from '../views/DeepView3.vue'
import CalCulator from '../views/CalCulator.vue'
import CalculatorApi from '../views/CalculatorApi.vue'
import CalculatorApi2 from '../views/CalculatorApi2.vue'
import CalculatorApi3 from '../views/CalculatorApi3.vue'
import CalculatorApi4 from '../views/CalculatorApi4.vue'
import MixView from '../views/MixView.vue'
import UserView from '../views/UserView.vue'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/deep',
    name: 'deep',
    component: DeepView
  },
  {
    path: '/deep2',
    name: 'deep2',
    component: DeepView2
  },
  {
    path: '/deep3',
    name: 'deep3',
    component: DeepView3
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: CalCulator
  },
  {
    path: '/calculatorapi',
    name: 'calculatorapi',
    component: CalculatorApi
  },
  {
    path: '/calculatorapi2',
    name: 'calculatorapi2',
    component: CalculatorApi2
  },
  {
    path: '/calculatorapi3',
    name: 'calculatorapi3',
    component: CalculatorApi3
  },
  {
    path: '/calculatorapi4',
    name: 'calculatorapi4',
    component: CalculatorApi4
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: MixView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
