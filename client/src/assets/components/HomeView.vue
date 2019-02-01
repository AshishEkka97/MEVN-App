<template>
<div>



<div class="parall" xs12 sm6 offset-sm3>
 <v-parallax src="/static/img/icons/oc6.jpeg" xs12 sm6 offset-sm3></v-parallax>
</div>

<br><br>

<div class="mid1" xs12 sm6 offset-sm3 style="float:left; width:100%; padding:25px;">
<strong style="color:gray; font-size:22px;">About Aquacaping</strong>
<p>
Aquascaping is the craft of arranging aquatic plants, as well as rocks, stones, cavework, or driftwood, in an aesthetically pleasing manner within an aquarium—in effect, gardening under water.
Aquascape designs include a number of distinct styles, including the garden-like Dutch style and the Japanese-inspired nature style.
Typically, an aquascape houses fish as well as plants, although it is possible to create an aquascape with plants only, or with rockwork or other hardscape and no plants.
</p>
<p>
Aquascaping is a learned art form that allows you to create an underwater landscape, inspiration for many works come from both underwater locations but also natural scenes such as mountains, jungles, deserts, waterfalls and many others.
Designing an aquascape can be challenging. Aquascaping involves using basic principles of design and applying them to the aquarium. Browsing other aquascapes can help you decide what style and layout you enjoy the most.
To aid in your designing process this page is filled with some stunning examples of aquascaping.

Using one type of plant – it may give a theme to the tank but can become boring – mix it up!
Using only large leaf plants, larger plants will make your aquascape look smaller and not as deep, the finer the leaves, the larger your scape!
</p>
</div>

<div class="mid2" xs12 sm6 offset-sm3 style="width:50%; float:left; heitght:400px; overflow:hidden;">

  <v-flex xs12 sm6 offset-sm3 >
    <v-card xs12 sm6 offset-sm3>
      <v-card-media
        src="/static/img/icons/fish.jpg"
        height="200px"
      >
      </v-card-media>
      <v-card-title xs12 sm6 offset-sm3 primary-title>
        <div>
          <div xs12 sm6 offset-sm3 class="headline">Beautiful Fishes</div>
          <span xs12 sm6 offset-sm3 class="grey--text">Feel the Wonder of Sea</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat xs12 sm6 offset-sm3>Share</v-btn>
        <v-btn flat color="purple" xs12 sm6 offset-sm3>Explore</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show" xs12 sm6 offset-sm3>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
<br><br>

</div>


<div class="mid3 text-xs-center" xs12 sm6 offset-sm3>

<v-carousel xs12 sm6 offset-sm3 v-show="show" class="text-xs-center" style="float:left; margin-top:100px;width:40%; height:320px; transition:0.8s;">
   <v-carousel-item xs12 sm6 offset-sm3 v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
 </v-carousel>
</div>


</div>



</template>

<script>
  export default {
    data: () => ({
      show: false,

      items: [
         {
           src: '/static/img/icons/oc7.jpg'
         },
         {
           src: '/static/img/icons/oc8.jpg'
         },
         {
           src: '/static/img/icons/oc9.jpg'
         },
         {
           src: '/static/img/icons/fish1.jpg'
         }
       ]

    })
  }
</script>

<style>
.wel
{
font-size:40px; color:gray;
}

.parall
{
width:100%;
}

</style>
