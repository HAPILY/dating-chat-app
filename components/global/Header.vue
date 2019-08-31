<template>
  <div>
    <v-navigation-drawer v-model="drawer" class="nav-drawer" app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-badge
              v-if="item.icon === 'mdi-gnome' && visit"
              color="primary"
              overlap
              class="align-self-center"
            >
              <template v-slot:badge>
                <span>!</span>
              </template>
              <v-icon>{{ item.icon }}</v-icon>
            </v-badge>
            <v-icon v-else>{{ item.icon }}</v-icon>
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
            <v-badge
              v-if="item.icon === 'mdi-gnome' && visit"
              color="primary"
              overlap
              class="align-self-center"
            >
              <template v-slot:badge>
                <span>!</span>
              </template>
              <v-icon>{{ item.icon }}</v-icon>
            </v-badge>
            <v-icon v-else>{{ item.icon }}</v-icon>
            <div class="header-name">
              {{ item.title }}
            </div>
          </nuxt-link>
        </div>
      </div>
      <v-toolbar-title v-text="title" />
      <div class="setting-icon">
        <nuxt-link class="setting-link" to="/Profile/setting">
          <v-btn class="setting-btn-sp" icon>
            <v-icon>mdi-settings</v-icon>
          </v-btn>
        </nuxt-link>
        <v-menu bottom left>
          <template v-slot:activator="{ on }">
            <v-btn class="setting-btn-pc" icon v-on="on">
              <v-icon>mdi-settings</v-icon>
            </v-btn>
          </template>
          <v-list class="setting-item">
            <v-list-item
              v-for="(item, i) in settingItems"
              :key="i"
            >
              <nuxt-link :to="item.to">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CONST from '@/const'

export default {
  name: 'Header',
  data () {
    return {
      drawer: false,
      items: CONST.Header.items,
      settingItems: CONST.Setting.items,
      title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapGetters('visit', {
      getList: 'list'
    }),
    visit () {
      const list = this.getList
      return list.some((v) => {
        return v.isChecked
      })
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
  .setting-btn-sp {
    display: none;
  }
  .setting-item {
    border-bottom: 1px solid #FFF;

    &:last-child {
      border-bottom: none;
    }

    > a {
      display: inline-block;
      width: 100%;
      padding: 14px;

      &:hover {
        background-color: rgba(217, 217, 217, 0.3);
      }
    }
  }
}

@include media (sm) {
  .transition-list {
    display: none;
  }
  .nav-drawer {
    z-index: 11;
    a {
      padding: 10px;
      color: color(white, base);
      .v-list-item__action {
        margin-right: 10px !important;
      }
    }
  }
  .setting-btn-pc {
    display: none;
  }
}
.setting-icon {
  position: absolute;
  right: 0;
  margin-right: 20px;
}
</style>
