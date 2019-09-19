<template>
  <div class="background-image">
    <v-img
      :src="profile.background"
      aspect-ratio="1"
      max-height="250"
    />
    <v-btn v-if="isEdit" color="white" icon>
      <v-icon>mdi-camera</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'BackgroundImage',
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
.background-image {
  display: flex;
  align-items: flex-end;
  background-color: color(black, base);

  > button {
    position: absolute;
    right: 0;
    background-color: rgb(0, 0, 0, 0.7);
    border: 1px solid color(white, base);
  }
}
</style>
