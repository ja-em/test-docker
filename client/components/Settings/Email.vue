<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">Registration</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="mt-3 font-weight-bold body-2">Subject</label>
          <v-text-field
            type="text"
            required
            placeholder="Site name"
            outlined
            dense
          ></v-text-field>
          <label class="mt-3 font-weight-bold body-2">Email</label>

          <SettingsTuiEditor />
        </div>
      </div>
    </div>
    <!--  -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">Reset Password</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Subject </label>
          <v-text-field
            type="text"
            required
            dense
            value="https://rbsoft.org/downloads/sms-gateway/sms-gateway.apk"
            outlined
          ></v-text-field>
          <label class="mt-3 font-weight-bold body-2">Email</label>

          <SettingsTuiEditor />
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">Reset Password Link</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Subject</label>
          <v-text-field
            type="text"
            required
            dense
            value=""
            outlined
          ></v-text-field>
          <label class="font-weight-bold body-2">Email</label>
          <SettingsTuiEditor />
        </div>
      </div>
    </div>
    <!--  -->
    <!--  -->
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">User Limits Update</div>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label class="font-weight-bold body-2">Subject</label>
          <v-text-field
            type="text"
            required
            dense
            value=""
            outlined
          ></v-text-field>
          <label class="font-weight-bold body-2">Email</label>
          <SettingsTuiEditor />
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Email',
  components: {},
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
