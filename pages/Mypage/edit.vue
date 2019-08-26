<template>
  <div class="mypage-container">
    <div class="image-wrap">
      <BackgroundImage :profile="profile" />
      <FaceImage :profile="profile" />
    </div>
    <div class="profile">
      <v-text-field
        v-model="name"
        class="input-name"
        label="名前"
      />
      <v-textarea
        v-model="detail"
        class="input-detail"
        label="自己紹介"
        rows="10"
        auto-grow
      />
      <div class="header-label">
        詳細プロフィール
      </div>
      <v-text-field
        v-model="age"
        class="input-age"
        label="年齢"
        type="number"
      />
      <v-select
        v-model="prefecture"
        :items="prefectureList"
        class="input-prefecture"
        label="都道府県"
      ></v-select>
    </div>
    <div class="btn-wrap">
      <v-btn
        class="send-btn"
        color="primary"
        @click="onSubmit"
        dark
      >
        更新
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CONST from '@/const'
import BackgroundImage from '@/components/molecules/BackgroundImage/BackgroundImage'
import FaceImage from '@/components/molecules/FaceImage/FaceImage'

export default {
  name: 'Profile',
  components: {
    BackgroundImage,
    FaceImage
  },
  data () {
    return {
      prefectureList: CONST.Prefecture
    }
  },
  computed: {
    ...mapGetters('mypage', {
      getProfile: 'profile'
    }),
    profile () {
      return this.getProfile
    },
    name: {
      get () {
        return this.profile.name
      },
      set (newVal) {
        if (this.name !== newVal) {
          this.updateProfileState({ type: 'name', value: newVal })
        }
      }
    },
    detail: {
      get () {
        return this.profile.detail
      },
      set (newVal) {
        if (this.detail !== newVal) {
          this.updateProfileState({ type: 'detail', value: newVal })
        }
      }
    },
    age: {
      get () {
        return this.profile.age
      },
      set (newVal) {
        if (this.age !== newVal) {
          this.updateProfileState({ type: 'age', value: newVal })
        }
      }
    },
    prefecture: {
      get () {
        return this.profile.prefecture
      },
      set (newVal) {
        if (this.prefecture !== newVal) {
          this.updateProfileState({ type: 'prefecture', value: newVal })
        }
      }
    },
    background () {
      return 'https://placehold.jp/650x650.png'
    },
    face () {
      return 'http://placehold.jp/24/cc9999/993333/650x650.png'
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions('mypage', {
      updateProfileState: 'updateProfileState',
      fetchProfile: 'fetchProfile',
      updateProfile: 'updateProfile'
    }),
    async fetch () {
      this.profile.name || await this.fetchProfile()
    },
    async onSubmit () {
      const newProfile = {
        name: this.name,
        age: this.age,
        prefecture: this.prefecture,
        detail: this.detail,
        background: this.background,
        face: this.face
      }
      await this.updateProfile(newProfile)
    }
  }
}
</script>

<style lang="scss" scoped>
@include media (sm) {
  .header-label {
    font-size: 22px;
    margin: 10px 10px 30px 10px !important;
    font-weight: bold;
  }
  .btn-wrap {
    margin: 0 10px 20px;

    .send-btn {
      width: 100%;
    }
  }
}

@include media (xl, lg, md) {
  .btn-wrap {
    margin: 0 10px 20px;
    text-align: right;
  }
}

.mypage-container {
  position: relative;

  .image-wrap {
    height: 350px;
  }

  .header-label {
    font-size: 22px;
    margin: 10px 10px 30px 0px;
    font-weight: bold;
  }

  .profile {
    padding: 10px;
  }
}
</style>
