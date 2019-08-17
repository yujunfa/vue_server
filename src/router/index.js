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

Vue.use(Router);

export default new Router({
  routes: [
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
