<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <chat />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Chat from '@/components/molecules/Chat/Chat'

export default {
  name: 'MessageInfo',
  components: {
    Chat
  },
  asyncData ({ params }) {
    console.log(params)
  }
}
</script>

<style lang="scss" scoped>

</style>
