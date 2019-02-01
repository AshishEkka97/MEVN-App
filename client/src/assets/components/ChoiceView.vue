<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Select rocks</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Select plants</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Select fishes</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm6 offset sm-3>
              <v-card>
              <v-card-media
              class="white--text"
              height="200px"
              src="/static/img/rock1.jpeg"
              >
              </v-card-media>
              <v-card-title>
              <div>
                <span class="black--text">Sedimentary</span><br>
                <span>Blue color</span><br>
                <span>Life span 4-5 years</span>
              </div>
             </v-card-title>
             <v-card-actions>
              <v-checkbox v-model="selected" label="Sedimentary" value="Sedimentary"></v-checkbox>
             </v-card-actions>
             </v-card>
            </v-flex>
    <v-flex xs12 sm6 offset sm-3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/rock2.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Ignite</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Ignite" value="Ignite"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 lg3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/rock3.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Metamorphic</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Metamorphic" value="Metamorphic"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex><v-flex xs12 sm6 offset sm-3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/rock4.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Rock</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Rock" value="Rock"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex>
          </v-layout>
        </v-container>
        <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
        <v-btn flat @click.native="e1 = 2">Not Applicable</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm6 offset sm-3>
              <v-card>
              <v-card-media
              class="white--text"
              height="200px"
              src="/static/img/plant1.jpeg"
              >
              </v-card-media>
              <v-card-title>
              <div>
                <span class="black--text">Demo1</span><br>
                <span>Blue color</span><br>
                <span>Life span 4-5 years</span>
              </div>
             </v-card-title>
             <v-card-actions>
              <v-checkbox v-model="selected" label="Demo1" value="Demo1"></v-checkbox>
             </v-card-actions>
             </v-card>
            </v-flex>
    <v-flex xs12 sm6 offset sm-3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/plant2.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Demo2</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Demo2" value="Demo2"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 lg3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/plant3.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Demo3</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Demo3" value="Demo3"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex><v-flex xs12 sm6 offset sm-3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/plant4.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Demo4</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Demo4" value="Demo4"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex>
          </v-layout>
        </v-container>
        <!--<v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>-->
        <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
        <v-btn flat @click.native="e1 = 3">Not Applicable</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 sm6 offset sm-3>
              <v-card>
              <v-card-media
              class="white--text"
              height="200px"
              src="/static/img/fish4.jpeg"
              >
              </v-card-media>
              <v-card-title>
              <div>
                <span class="black--text">Nemo</span><br>
                <span>Blue color</span><br>
                <span>Life span 4-5 years</span>
              </div>
             </v-card-title>
             <v-card-actions>
              <v-checkbox v-model="selected" label="Nemo" value="Nemo"></v-checkbox>
             </v-card-actions>
             </v-card>
            </v-flex>
    <v-flex xs12 sm6 offset sm-3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/fish1.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Jellyfish</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Jellyfish" value="Jellyfish"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 lg3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/fish2.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Goldfish</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Goldfish" value="Goldfish"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex><v-flex xs12 sm6 offset sm-3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="/static/img/fish3.jpeg"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <span class="black--text">Fish</span><br>
            <span>Blue color</span><br>
            <span>Life span 4-5 years</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-checkbox v-model="selected" label="Fish" value="Fish"></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-flex>
          </v-layout>
        </v-container>
        <!--<v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>-->
        <v-btn color="primary" @click.native="e1 = 4">Submit</v-btn>
        <v-btn flat>Not Applicable</v-btn>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 s6>
              
            </v-flex>
          </v-layout>
        </v-container>
        <!--<v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>-->
        <v-btn color="primary" @click.native="e1 = 1">Submit</v-btn>
        
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
  export default {
    data () {
      return {
        e1: 0,
        selected: ['John']
      }

    }
  }
</script>