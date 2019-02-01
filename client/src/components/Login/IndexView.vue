
<template>
  <div> 

    <div class="cont">
  <v-container fluid pa-0 >
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg4  >
        <v-card dark tile flat >
          <v-card-media src="static/img/wooscape screen 1.svg" height="100vh" cover>
            <v-container fill-height fluid>
            <v-layout fill-height align-center>
              <v-flex xs12 align-center flexbox class="header-text">
                <span class="headline" pl3></span>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card-media>
        </v-card>
      </v-flex>
     
      <v-flex xs12 sm6 md4 lg4  >
        <v-card dark tile flat >
          <v-card-media src="static/img/wooscape screen 2.svg" height="100vh" cover>
            <v-container fill-height class="text_content">
              <v-layout align-center >
                <v-flex xs12 align-center flexbox class="header-text-4">
                <p class="headlines"><span class="frst">India's first</span></p>
                <p class="headlines"><span class="scnd" >AQUASCAPE</span><span class="frst"> Company </span></p>
               
              </v-flex>
            </v-layout>
              <!-- <v-btn style="position:absolute;top:50%;right:0;" v-if="i===3">Nozzberry</v-btn> -->
            </v-container> 
            <v-container fill-height style="margin-right:100%;">
            <v-layout fill-height align-end class="header-text-3">
              <v-flex xs12 align-start flexbox>

                <a href=""  style="margin-top:50vh"><p class="lines" ><span class="tagg"><</span>blog<span class="tagg">/></span></p></a>

                <a href=""><p class="lines" ><span class="tagg"><</span>facebook<span class="tagg">/></span></p></a>

                <a href=""><p class="lines" ><span class="tagg"><</span>instagram<span class="tagg">/></span></p></a>
                
                <a href=""><p class="lines" ><span class="tagg"><</span>twitter<span class="tagg">/></span></p></a>
            </v-flex>
            </v-layout>
          </v-container>

          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4>
        <v-card dark tile flat >
          <v-card-media fill-height height="100vh" src="static/img/wooscape screens-03.svg" cover>
              <v-container fill-height fluid>
            <v-layout fill-height align-start>
              <v-flex xs12 align-center flexbox class="header-text-4">
                <p class="headlines">Make Arrangements and Design</p>
                <p class="headlines">Slope and Symmetry</p>
                <p class="headlines">Focal Points and Foliage</p>
                <p class="headlines">Accents and Rocks</p>
              </v-flex>
            </v-layout>
          </v-container>
           <v-container fill-height fluid>
            <v-layout fill-height align-end class="header-text-5">
              <v-flex xs12 align-end flexbox>
              <span @click="goto" class="ele">Select your elements</span>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</div>
  <div class="caro">
  <v-carousel hide-controls hide-delimiters hidden-xs-and-up >
    <v-carousel-item
      src="static/img/wooscape screen 1.svg">
    
    </v-carousel-item> 

    <v-carousel-item
      src="static/img/wooscape screen 2.svg"
    >
    <v-container fill-height class="text_content">
              <v-layout align-center >
                <v-flex xs12 align-center flexbox class="header-text-4">
                <p class="headlines"><span class="frst">India's first</span></p>
                <p class="headlines"><span class="scnd" >AQUASCAPE</span><span class="frst"> Company </span></p>
               
              </v-flex>
            </v-layout>
             
            </v-container> 
    <v-container fill-height class="text_content" style="margin-right:20%;">
              <v-layout align-center >
                <v-flex xs12 align-end flexbox class="header-text-3">

                <a href=""  style="margin-top:50vh"><p class="lines" ><span class="tagg"><</span>blog<span class="tagg">/></span></p></a>

                <a href=""><p class="lines" ><span class="tagg"><</span>facebook<span class="tagg">/></span></p></a>

                <a href=""><p class="lines" ><span class="tagg"><</span>instagram<span class="tagg">/></span></p></a>
                
                <a href=""><p class="lines" ><span class="tagg"><</span>twitter<span class="tagg">/></span></p></a>
            
                </v-flex>
              </v-layout>
             
            </v-container> 
          
    
    </v-carousel-item> 
    <v-carousel-item
      src="static/img/wooscape screens-03.svg"
    >
    
    <v-container fill-height class="text_content">
              <v-layout align-center >
                <v-flex xs12 align-center flexbox class="header-text-4">
                <p class="headlines">Make Arrangements and Design</p>
                <p class="headlines">Slope and Symmetry</p>
                <p class="headlines">Focal Points and Foliage</p>
                <p class="headlines">Accents and Rocks</p>
              </v-flex>
            </v-layout>
         
            </v-container> 
      <v-container fill-height class="text_content">
              <v-layout align-center >
                <v-flex xs12 align-end flexbox class="header-text-5">
     <span @click="goto" class="ele">Select your elements</span>
              </v-flex>
            </v-layout>
             
            </v-container> 
          
    
    </v-carousel-item> 
  </v-carousel>
 </div>
  

  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->



<script>
  export default{

    beforeMount:function(){

   if(this.$store.state.isUserLoggedIn)
   {
    if(this.$store.state.user.isAdmin)
    {
      this.$store.commit('SET_LAYOUT','admin-layout')
      this.$router.push('/adminhome')
    }
    else
    {
      this.$store.commit('SET_LAYOUT','user-layout')
      this.$router.push('/user')
    }
    }
   
   else
   {
    this.$store.commit('SET_LAYOUT','front-layout')
   }
  },


    name:'HelloWorld',
    data(){
      return{
          dialog:true,
      }
    },
    methods:{
    goto()
    {
       this.$store.commit('SET_LAYOUT','login-layout')
       this.$router.push('/login')      
    }
    }
  }
</script>
<style >
.text_content{
  max-width:400px;
  color:white;
  font-family:'Raleway', sans-serif;
}
.card{
  font-family: 'Raleway', sans-serif;

}
.jumbotron{
  min-height:100%;
  }
  .carousel{
    position: absolute;
    height: 100%;
    width:100%;
  }
  .headline{
    font-size: 2rem;
  }
.jumbotron img{
    display:block;
    width:100%;
    height:100%;
    position: absolute;
  }
  .jumbotron_content{
    position:absolute;
    top:0;
        
    height:100%;
    width:100%;
  }
  .headline{
    font-size:7rem;
    color:#E0E0E0;
  }
  .headlines{
    margin-top: 18px;
    font-size:1.5rem;
    color:#E0E0E0;
  }

 .ctabtn{
   position: absolute;
   top:60%;
   right:20px;
   
 }
 .header-text{
   padding-left:30px;
 }
.header-text-1{
  position:absolute;
  top:40%;
  padding-left:70px;
  max-width:350px;
  margin:0 auto;
}
.header-text-2{
  position:absolute;
  bottom:20%;
  max-width:350px;
  margin:0 auto;
}
.header-text-3{
  position:absolute;
  bottom:15%;
  max-width:350px;
  margin:0 auto;
}
.header-text-4{
  position:absolute;
  top:5%;
  max-width:350px;
  margin:0 auto;
}
.header-text-5{
  right: 35%;
  bottom:8%;
  position:absolute;
  margin:0 auto;
}

.lines
{ 
  font-size:2.8rem;
  margin-top:8.5vh;
    color:#E0E0E0; 
}
.tagg
{
  color:#c28547;
}

a{
  text-decoration:none;
}
.ele{
  font-size: 2rem;
  color:#E0E0E0;
  cursor:pointer;
  text-decoration:none; 
  transition: 0.4s;
}
.ele:hover
{
  color:#ffffff;
  text-decoration: underline;
}

.scnd{
  text-decoration:underline;
  text-decoration-color:#c28547;
  font-size:2.6rem;
}
.frst{
  font-size:1.8rem;
}
.cont{
  display:block;
}
.caro{
  display:none;
}
@media screen and (max-width: 1250px){
.cont{
  display:none;
}
.caro{
  display:block;
}
 }
@media screen and (max-width: 400px){

.lines
{ 
  font-size:2.4rem;
  margin-top:8.5vh;
    color:#E0E0E0; 
}
.tagg
{
  color:#c28547;
}

a{
  text-decoration:none;
}
.ele{
  font-size: 1.5rem;
  color:#E0E0E0;
  cursor:pointer;
}
.scnd{
  text-decoration:underline;
  text-decoration-color:#c28547;
  font-size:2.2rem;
}
.frst{
  font-size:1.3rem;
}
}
</style>
