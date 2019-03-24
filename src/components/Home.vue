<template>
    <v-container >
        <v-layout row wrap>
            <v-flex xs-12 sm6 class="text-xs-center text-sm-right"><v-btn large router to="/meetups" class = "purple darken_1">
                Exlore Meetups
                </v-btn></v-flex>
                <v-flex xs-12 sm6 class="text-xs-center text-sm-left"><v-btn large router to="/createmeetup" class = "purple darken_1">
                Organize Meetups
                </v-btn></v-flex>
        </v-layout>
        <v-layout class="mt-2">
            <v-flex md12>
<v-carousel style="cursor: pointer;">
    <v-carousel-item
      v-for="meetup in meetups"
      :key="meetup.id"
      :src="meetup.imageUrl" 
      @click="onLoadMeetup(meetup.id)">
        <div class="title">{{meetup.title}}</div>
    </v-carousel-item>
  </v-carousel>

            </v-flex>
        </v-layout >
        <v-layout row wrap class="mt-2">
            <v-flex xs-12 sm5 class="text-xs-center"></v-flex>
                <p>Join our Awesome meet up!</p>
        </v-layout>
        
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            meetups: [
                {imageUrl: 'https://www.samaa.tv/wp-content/uploads/2017/09/centaurus-640x335.jpg', id: 'asdsgasd', title: 'Meet up in islamabad'},
                {imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibE047gxlMLyViMtALurUXXMUZ6OM0thJ_hgT3_UHkdirje1O', id: 'adfdgdfg', title: 'Meet up in Lahore'},
                
            ]

        }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }

}
</script>

<style  scoped>
.title {
     position:absolute ;
     padding: 30px;
     bottom: 50px;
    background-color:rgba(0,0,0,0.5);
    color:white;
    font-size: 2em;
    bottom: 50px;
    right: 450px;


}
</style>

