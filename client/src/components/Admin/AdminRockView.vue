
<template>
  <div>
    <h2>Rocks</h2>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="Rock name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.desc" label="Rock Desc"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <input type="file" capture="camera" accept="image/*" style="display:none" name="image" @change="none" id="image" ref="fileInput">
                <v-btn small @click="$refs.fileInput.click()">
                  <span>Add Image</span>
                  <v-icon small>add_photo_alternate</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-card width="145">
                  <v-card-media :src = "fullpath" height="100">
                  </v-card-media>
                  <v-card-text>
                   {{editedItem.imageUrl}}
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      :headers="headers"
      :items="rocks"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-start">{{ props.item.name }}</td>
        <td class="text-xs-start">{{ props.item.desc }}</td>
        <td class="text-xs-start">
          <v-card width="100">
            <v-card-media :src = "'/static/public/uploads/' + props.item.imageUrl" height=60>
            </v-card-media>
          </v-card>
        </td>
        <td class="justify-start layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Refresh</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import RocksService from '../../services/RocksService'
  import UploadService from '../../services/UploadService'
  export default {

 
  
     beforeMount:function(){

   if(this.$store.state.isUserLoggedIn && this.$store.state.user.isAdmin){
     
   }else
    {
      this.$store.commit('SET_LAYOUT','login-layout')
      this.$router.push('/login')
    }
    },


    data: () => ({
      dialog: false,
      selectedFile: null,
      filepath: '/static/public/uploads',
      filename: '',
      fullpath: '/static/img/dummy.jpg',
      headers: [
        {
          text: 'Rock Id',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Rock', value: 'name' },
        { text: 'Desription', value: 'desc' },
        { text: 'Image', value: 'imageUrl' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      rocks: [],
      editedIndex: -1,
      arrayIndex: -1,
      editedItem: {
        name: '',
        desc: '',
        imageUrl: '',
      },
      defaultItem: {
        name: '',
        desc: '',
        imageUrl: '',
      }
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
        const rocks = await RocksService.index()
        console.log(rocks.data)
        this.rocks = rocks.data
      },

      editItem (item) {
        this.editedIndex = item.id
        this.arrayIndex = this.rocks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.filename = this.editedItem.imageUrl
        this.fullpath = this.filepath + "/" + this.filename
        this.dialog = true
      },

      async deleteItem (item) {
        const sindex = this.rocks.indexOf(item)
        var flag = null
        confirm('Are you sure you want to delete this item?') && (flag = await RocksService.delete(item.id))
        console.log(flag)
        if(flag) {
          this.rocks.splice(sindex, 1)
        }
      },

      close () {
        this.fullpath = '/static/img/dummy.jpg'
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      async save () {
        if (this.editedIndex > -1) {
          const editedRock = await RocksService.put(this.editedItem.id, this.editedItem)
          console.log(editedRock.data)
          Object.assign(this.rocks[this.arrayIndex], editedRock.data)
        } else {
          const newRock = await RocksService.post(this.editedItem)
          console.log(newRock.data)
          this.rocks.push(newRock.data)
        }
        this.close()
      },

      async none(event) {
        console.log("Here 1")
        this.selectedFile = event.target.files[0]
        if(this.selectedFile){
          console.log(this.selectedFile)
          const fd = new FormData()
          fd.append('image', this.selectedFile, this.selectedFile.name)
          const res = await UploadService.post(fd)
          console.log(res)
          this.editedItem.imageUrl = res.data
          this.filename = this.editedItem.imageUrl
          this.fullpath = this.filepath + "/" + this.filename
        }
      }
    }
  }
</script>