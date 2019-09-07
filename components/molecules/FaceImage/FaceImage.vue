<template>
  <div class="face-image">
    <v-img :src="profile.face" />
    <v-btn v-if="isEdit" color="white" icon>
      <v-icon>mdi-camera</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'FaceImage',
  props: {
    profile: {
      type: Object,
      required: true
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.face-image {
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 168px;
  height: 168px;
  padding: 1px;
  box-shadow: none;

  > div {
    border-radius: 100%;
  }
  > button {
    position: absolute;
    right: 0;
    background-color: rgb(0, 0, 0, 1);
    border: 1px solid color(white, base);
  }
}

@include media (xl, lg, md) {
  .face-image {
    top: 165px;
    left: 90px;
    margin-top: 0;
  }
}

@include media (sm) {
  .face-image {
    top: 165px;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
