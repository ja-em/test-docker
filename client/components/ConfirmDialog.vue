<template>
  <v-dialog v-model="dialog" max-width="500" transition="slide-x-transition">
    <v-card
      class="dialog-shadow"
      style="box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px"
    >
      <div
        class="d-flex flex-no-wrap justify-space-between"
        style="color: rgb(204, 204, 204); background-color: rgb(37, 37, 38)"
      >
        <div class="mx-auto codicon codicon-dialog-warning mt-8">
          <v-icon
            style="font-size: 80px; flex: 0 0 48px; align-self: baseline"
            :color="info"
            >mdi-information</v-icon
          >
        </div>

        <div>
          <v-card-title class="">
            <div
              style="
                line-height: 22px;
                font-size: 18px;
                flex: 1;
                white-space: normal;
                word-wrap: break-word;
                min-height: 48px;
                margin-bottom: 8px;
                display: flex;
                align-items: center;
              "
              class="d-flex justify-center text-center"
            >
              {{ title }}
            </div>
          </v-card-title>
          <v-card-subtitle
            class="dialog-message-detail"
            style="color: rgb(187, 187, 187)"
          >
            Are you sure you want to proceed?
          </v-card-subtitle>

          <v-card-actions class="d-flex flex-row justify-center">
            <v-btn
              class="monaco-button monaco-text-button"
              style="
                color: rgb(255, 255, 255);
                background-color: rgb(58, 61, 65);
                margin: 4px 5px;
                padding: 5px 10px;
                width: fit-content;
              "
              @click="dialog = false"
              >No</v-btn
            >

            <v-btn
              class="monaco-button monaco-text-button"
              style="
                color: rgb(255, 255, 255);
                background-color: rgb(64, 169, 243);
                margin: 4px 5px;
                padding: 5px 10px;
                width: fit-content;
              "
              @click="$emit('confirm')"
              >Yes</v-btn
            >
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    dialog: false,
    info: '#ffd399',
  }),
}
</script>

<style scoped>
.monaco-action-bar .actions-container {
  display: flex;
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 100%;
  align-items: center;
}

.monaco-action-bar .action-item {
  display: block;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}

.monaco-workbench .codicon[class*='codicon-'] {
  font-size: 16px;
}

.monaco-action-bar .action-item .codicon,
.monaco-action-bar .action-item .icon {
  display: block;
}

.monaco-action-bar .action-item .codicon {
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
}

.monaco-dialog-box .dialog-toolbar-row .actions-container {
  justify-content: flex-end;
}

.monaco-dialog-box .dialog-toolbar-row {
  height: 22px;
  padding-bottom: 4px;
}

.v-dialog__content {
  align-items: flex-start;
  justify-content: flex-end;
}

.monaco-dialog-box {
  display: flex;
  flex-direction: column-reverse;
  width: min-content;
  min-width: 500px;
  max-width: 90vw;
  min-height: 75px;
  padding: 10px;
  transform: translateZ(0);
}

.monaco-dialog-box > .dialog-buttons-row {
  align-items: center;
  padding-right: 1px;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  /* padding: 20px 10px 10px; */
}

.monaco-dialog-box > .dialog-buttons-row > .dialog-buttons {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  overflow: hidden;
  margin-left: 67px;
}

.monaco-dialog-box > .dialog-buttons-row > .dialog-buttons > .monaco-button {
  width: fit-content;
  width: -moz-fit-content;
  padding: 5px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 4px 5px;
  outline-offset: 2px !important;
}

.monaco-workbench a {
  text-decoration: none;
}

.monaco-text-button {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 4px;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  align-items: center;
}

.monaco-dialog-box .dialog-message-row {
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 0 10px;
}

.monaco-dialog-box .dialog-message-row > .dialog-icon.codicon {
  flex: 0 0 48px;
  height: 48px;
  align-self: baseline;
  font-size: 48px;
}

.monaco-workbench .codicon[class*='codicon-'] {
  font-size: 16px;
}

.codicon[class*='codicon-'] {
  font: normal normal normal 16px/1 codicon;
  display: inline-block;
  text-decoration: none;
  text-rendering: auto;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.monaco-dialog-box .dialog-message-row .dialog-message-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 24px;
  user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  word-wrap: break-word;
  white-space: normal;
}

.monaco-dialog-box
  .dialog-message-row
  .dialog-message-container
  .dialog-message {
  line-height: 22px;
  font-size: 18px;
  flex: 1;
  white-space: normal;
  word-wrap: break-word;
  min-height: 48px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.monaco-dialog-box .dialog-message-row .dialog-message-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 24px;
  user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  word-wrap: break-word;
  white-space: normal;
}

.monaco-dialog-box
  .dialog-message-row
  .dialog-message-container
  .dialog-message-detail {
  line-height: 22px;
  flex: 1;
}
</style>
