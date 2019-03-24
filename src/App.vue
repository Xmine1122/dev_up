<template>
  <v-app>
  <v-toolbar class = "purple darken_1">
      
      <v-toolbar-title  >
        <router-link to="/" tag="span" style="cursor: pointer" >DevMeetup</router-link>
      </v-toolbar-title>
        <v-spacer></v-spacer>
      <v-toolbar-items class ="hidden-xs-only" ></v-toolbar-items>      <v-toolbar-items >
        <v-btn flat dark  v-for="item in menuItems" :key="item.title"  to="item.link"><v-icon left dark>{{ item.icon }}</v-icon>
          {{item.title}}</v-btn>
      </v-toolbar-items >
    </v-toolbar>
    

     <main>
<router-view></router-view>

    </main>
  </v-app>
</template>

<script>
import Home from './components/Home'
import Meetups from "./components/Meetup/Meetups";
import Createmeetup from "./components/Meetup/Createmeetup";
import Profile from "./components/User/Profile";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup"
import Meetup from './components/Meetup/Meetup'

export default {
  name: 'App',
  components: {
    Home,
    


  },
  data () {
    return {
      
      menuItems: [
        {icon: 'supervisor_account', title: 'View Meetups', link:'/meetups' },
        {icon: 'room', title: 'organize Meetup', link:'/createmeetup'},
        {icon: 'person', title: 'profile', link:'/profile'},
        {icon: 'face', title: 'Sign Up', link:'/signup'},
        {icon: 'lock_open', title: 'Sign in', link:'/signin'}
      ]
    }
  }
}
</script>
