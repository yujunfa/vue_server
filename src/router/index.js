/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Hello from '@/components/Hello';
import SayHi from '@/components/say_hi';
import BindDemo from '@/components/BindDemo';
import ModelDemo from '@/components/ModelDemo';
import BlogLists from '@/components/BlogLists';
import Navbar from '@/components/Navbar';
import BVDemo from '@/components/BVDemo';
import Badge from '@/components/bootstrapvue/Badge';
import BreadcrumbDemo from "../components/bootstrapvue/BreadcrumbDemo";
import ButtonDemo from "../components/bootstrapvue/ButtonDemo";
import ButtonGroupDemo from "../components/bootstrapvue/ButtonGroupDemo";
import ButtonToolbarDemo from "../components/bootstrapvue/ButtonToolbarDemo";
import CardsDemo from "../components/bootstrapvue/CardsDemo";
import CardsDemo01 from "../components/bootstrapvue/CardsDemo01";
import CardsBodyDemo01 from "../components/bootstrapvue/CardsBodyDemo01";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/demo/CardsBodyDemo01',
      component: CardsBodyDemo01
    },
    {
      path: '/demo/CardsDemo01',
      component: CardsDemo01
    },
    {
      path: '/demo/CardsDemo',
      component: CardsDemo
    },
    {
      path: '/demo/ButtonToolbarDemo',
      component: ButtonToolbarDemo
    },
    {
      path: '/demo/ButtonGroupDemo',
      component: ButtonGroupDemo
    },
    {
      path: '/ButtonDemo',
      component: ButtonDemo
    },
    {
      path: '/BreadcrumbDemo',
      component: BreadcrumbDemo
    },
    {
      path: '/Badge',
      name: Badge,
      component: Badge
    },
    {
      path: '/BVDemo',
      name: BVDemo,
      component: BVDemo
    },
    {
      path: '/navbar',
      name: Navbar,
      component: Navbar
    },
    {
      path: '/blog_lists',
      name: BlogLists,
      component: BlogLists
    },
    {
      path: '/model_demo',
      name: 'ModelDemo',
      component: ModelDemo
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/say_hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
    },
    {
      path: '/bind_demo',
      name: 'BindDemo',
      component: BindDemo
    }
  ]
});
