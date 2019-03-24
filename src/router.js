import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Meetups from "./components/Meetup/Meetups";
import Createmeetup from "./components/Meetup/Createmeetup";
import Profile from "./components/User/Profile";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";
import Meetup from './components/Meetup/Meetup'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    
    {
      path: "/meetups",
      name: "Meetups",
      component: Meetups
    },

    {
      path: "/createmeetups",
    name: "Createmeetup",
    components: Createmeetup
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup
    },

    {
      path: "/profile",
    name: "Profile",
    components: Profile
    },

    {
  path: "/signup",
  name: "Signup",
  components: Signup
    },

    {
  path: "/signin",
  name: "Signin",
  component: Signin
}

  ]
});
