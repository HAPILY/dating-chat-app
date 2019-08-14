<template>
  <div>
    <v-navigation-drawer class="nav-drawer" v-model="drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="header" app>
      <v-app-bar-nav-icon class="hamburger-icon" @click.stop="drawer = !drawer" />
      <div class="justify-space-between transition-list">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="header-icon"
        >
          <nuxt-link :to="item.to">
            <v-icon>{{ item.icon }}</v-icon>
            <div class="header-name">{{ item.title }}</div>
          </nuxt-link>
        </div>
      </div>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-map-marker-question',
          title: '性格診断',
          to: '/Personality'
        },
        {
          icon: 'mdi-image-album',
          title: '恋愛コラム',
          to: '/Column'
        },
        {
          icon: 'mdi-magnify',
          title: '探す',
          to: '/TopPersonality'
        },
        {
          icon: 'mdi-account',
          title: 'マイページ',
          to: '/Mypage'
        }
      ],
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss" scoped>
@include media (xl, lg) {
  .header {
    position: initial;
  }
}
@include media (xl, lg, md) {
  .nav-drawer, .hamburger-icon {
    display: none;
  }
  .transition-list {
    display: flex;
  }
  .header {
    &-icon {
      width: 70px;
      margin: 0 10px;
      text-align: center;

      > a {
        color: color(white, base)
      }
    }

    &-name {
      font-size: 14px;
    }
  }
}

@include media (sm) {
  .transition-list {
    display: none;
  }
  .nav-drawer {
    a {
      padding: 10px;
      color: color(white, base);
      .v-list-item__action {
        margin-right: 10px !important;
      }
    }
  }
}
</style>
