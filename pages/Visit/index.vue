<template>
  <div class="visit my-4">
    <div v-for="item in list" :key="item.id">
      <nuxt-link :to="`/${item.id}`">
        <v-card class="visit-list my-2 mx-auto d-flex">
          <v-list-item-avatar class="visit-icon-wrap" min-width="80px">
            <v-img
              class="visit-icon"
              width="80px"
              height="80px"
              :src="item.src"
            />
          </v-list-item-avatar>

          <div class="visit-info">
            <v-card-title class="visit-title">
              {{ item.name }} {{ item.age }}歳 {{ item.prefecture }}
            </v-card-title>

            <v-card-text class="visit-time">
              {{ visitTime(item.visitTime) }}
            </v-card-text>
          </div>
          <v-chip
            v-if="!item.isChecked"
            class="visit-label"
            color="red"
            label
          >
            New
          </v-chip>
        </v-card>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Visit',
  computed: {
    ...mapGetters('visit', {
      getList: 'list'
    }),
    list () {
      return this.getList
    },
    visitTime () {
      return function (time) {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()

        const lastMessageDate = new Date(time)
        const lastMessageYear = lastMessageDate.getFullYear()
        const lastMessageMonth = lastMessageDate.getMonth() + 1
        const lastMessageDay = lastMessageDate.getDate()
        if (`${year} ${month} ${day}` === `${lastMessageYear} ${lastMessageMonth} ${lastMessageDay}`) {
          return `${lastMessageDate.getHours()}:${lastMessageDate.getMinutes()}`
        } else {
          return `${lastMessageDate.getMonth() + 1}/${lastMessageDay}`
        }
      }
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions('visit', {
      fetchList: 'fetchList',
      updateChecked: 'updateChecked'
    }),
    async fetch () {
      await this.fetchList()
    }
  },
  async beforeDestroy () {
    await this.updateChecked(this.list)
  }
}
</script>

<style lang="scss" scoped>
.visit {
  &-list {
    padding: 25px;
  }

  &-icon {
    &-wrap {
      width: 80px !important;
      height: 80px !important;
      border-radius: 50% !important;
    }
  }

  &-info {
    position: relative;
    width: 80%;
    margin: 0 20px;
    padding: 0 0 20px;
  }

  &-label {
    padding: 0px 10px;
    font-size: 12px;
  }

  &-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  &-time {
    position: absolute;
    bottom: 0;
    font-size: 12px;
  }
}
@include media (sm) {
  .visit {
    &-list {
      padding: 15px;
    }
    &-title {
      font-size: 16px;
    }
    &-info {
      margin: 0;
      padding: 0 20px 20px 0;
    }
  }
}
</style>
