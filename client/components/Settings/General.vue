<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">Appearance</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="mt-3 font-weight-bold body-2">Site name</label>
          <v-text-field
            type="text"
            required
            placeholder="Site name"
            outlined
            dense
          ></v-text-field>
          <label class="mt-3 font-weight-bold body-2">Site description</label>
          <v-text-field
            type="text"
            required
            placeholder="Site description"
            outlined
            dense
          ></v-text-field>
          <label class="mt-3 font-weight-bold body-2">Logo</label>
          <UploadImages
            :max="1"
            max-error="Max files exceed"
            upload-msg="upload product images"
            file-error="images files only accepted"
            clear-all="Clear"
            @changed="handleImages"
          />
          <label class="mt-3 font-weight-bold body-2">Favicon</label>
          <UploadImages
            :max="1"
            max-error="Max files exceed"
            upload-msg="upload product images"
            file-error="images files only accepted"
            clear-all="Clear"
            @changed="handleImages"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">Links</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Android App </label>
          <v-text-field
            type="text"
            required
            dense
            value="https://rbsoft.org/downloads/sms-gateway/sms-gateway.apk"
            outlined
          ></v-text-field>
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">Copyright</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Name</label>
          <v-text-field
            type="text"
            required
            dense
            value=""
            outlined
          ></v-text-field>
          <label class="font-weight-bold body-2">URL</label>
          <v-text-field
            type="text"
            required
            dense
            value=""
            outlined
          ></v-text-field>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
import UploadImages from 'vue-upload-drop-images'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'General',
  components: {
    UploadImages,
  },
  methods: {
    handleImages(files) {
      console.log(files)
    },
  },
}
</script>
<style lang="scss">
@import './settings-style.scss';

.beforeUpload .icon[data-v-69bb59a3] {
  width: 100px;
  margin: auto;
  display: block;
}
.error[data-v-69bb59a3] {
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 15px;
}
.v-application .error {
  background-color: #ffff !important;
  border-color: var(--v-error-base) !important;
}
.container[data-v-69bb59a3] {
  width: 100%;
  height: 100%;
  background: #f7fafc;
  border: 0.5px solid #a3a8b141;
  border-radius: 10px;
  padding: 1px;
  position: relative;
}
</style>
