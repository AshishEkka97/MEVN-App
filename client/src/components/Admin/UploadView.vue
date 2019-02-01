<template>
  <v-container>
  <input type="file" capture="camera" accept="image/*" style="display:none" name="image" @change="none" id="image" ref="fileInput">
  
  <v-btn small @click="$refs.fileInput.click()">
      
      <span>Image</span>
      <v-icon small>add_photo_alternate</v-icon>
      
  </v-btn>
  <img :src = "fullpath" width="120" height="60">
</v-container>
</template>

<script>
  import UploadService from '../../services/UploadService'
  export default {
    data:() => {
      return {
        selectedFile: null,
        filepath: '/static/public/uploads',
        filename: '',
        fullpath: ''
      }
    },

    methods: {

      async none() {
        console.log("Here 1")
        this.selectedFile = event.target.files[0]
        if(this.selectedFile){
          console.log(this.selectedFile)
          const fd = new FormData()
          fd.append('image', this.selectedFile, this.selectedFile.name)
          const res = await UploadService.post(fd)
          console.log(res)
          this.filename = res.data
          this.fullpath = this.filepath + "/" + this.filename
        }
      }
    }
  }
</script>