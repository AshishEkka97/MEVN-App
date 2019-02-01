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
                <v-text-field v-model="editedItem.imageUrl" label="Image URL"></v-text-field>
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
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.desc }}</td>
        <td class="text-xs-right">{{ props.item.imageUrl }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import RocksService from '../services/RocksService'
  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Rock Id',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Rock', value: 'name' },
        { text: 'Desription', value: 'desc' },
        { text: 'Image URL', value: 'imageUrl' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      rocks: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        desc: '',
        image: '',
      },
      defaultItem: {
        name: '',
        desc: '',
        image: '',
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
        this.editedIndex = this.rocks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.rocks.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.rocks.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      async save () {
        if (this.editedIndex > -1) {
          const editedRock = await RocksService.put(this.editedItem.id, this.editeItem)
          console.log(editedRock.data)
          //Object.assign(this.rocks[this.editedIndex.id], editedRock)
          this.initialize()
        } else {
          const newRock = await RocksService.post(this.editedItem)
          console.log(newRock.data)
          this.rocks.push(newRock.data)
        }
        this.close()
      }
    }
  }
</script>
