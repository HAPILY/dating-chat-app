<template>
  <div class="mypage-container">
    <div class="image-wrap">
      <BackgroundImage :profile="profile" />
      <FaceImage :profile="profile" />
    </div>
    <div class="profile">
      <BasicProfileEdit :profile="profile" />
      <div class="header-label">
        詳細プロフィール
      </div>
      <DetailProfileEdit :profile="profile" />
    </div>
    <div class="btn-wrap">
      <v-btn
        class="send-btn"
        color="primary"
        dark
        @click="onSubmit"
      >
        更新
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BackgroundImage from '@/components/molecules/BackgroundImage/BackgroundImage'
import FaceImage from '@/components/molecules/FaceImage/FaceImage'
import BasicProfileEdit from '@/components/organisms/BasicProfileEdit/BasicProfileEdit'
import DetailProfileEdit from '@/components/organisms/DetailProfileEdit/DetailProfileEdit'

export default {
  name: 'Profile',
  components: {
    BackgroundImage,
    FaceImage,
    BasicProfileEdit,
    DetailProfileEdit
  },
  computed: {
    ...mapGetters('mypage', {
      getProfile: 'profile'
    }),
    profile () {
      return this.getProfile
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
        name: this.profile.name,
        age: this.profile.age,
        gender: this.profile.gender,
        prefecture: this.profile.prefecture,
        detail: this.profile.detail,
        background: this.profile.background,
        face: this.profile.face
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
