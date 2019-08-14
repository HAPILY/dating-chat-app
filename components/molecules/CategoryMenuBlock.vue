<template>
  <a :href="url">
    <v-card class="menu-block row">
      <div class="left-container">
        <v-icon>{{ icon }}</v-icon>
      </div>
      <div class="center-container">
        {{ title }}
      </div>
      <div class="right-container">
        <v-icon>mdi-chevron-right</v-icon>
      </div>
    </v-card>
  </a>
</template>

<script>
export default {
  name: 'CategoryMenuBlock',
  props: ['url', 'icon', 'title']
}
</script>

<style scoped>
.menu-block {
  display: flex;
  width: 95%;
  min-height: 48px;
  margin: 0 auto;
  padding: 10px;
}
.left-container {
  margin-right: 10px;
}
.center-container {
}
.right-container {
  margin-left: auto;
}
</style>
