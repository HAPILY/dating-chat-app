# dating-chat-app

## preparation

- Nodebrew
- Node.js above v11.0.0

References
https://qiita.com/sinmetal/items/154e81823f386279b33c

## environment

- Nuxt.js (https://nuxtjs.org)
- Vuetify.js
- Axios, Progressive Web App (PWA) Support
- ESLint
- Single Page App

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Database Design

```
"users": {
  "userID1": {
    "first-name": "長谷川",
    "last-name": "太一朗",
    "nickname": "太一朗",
    "email": "hasegawa.taichiro@gmail.com",
    "password": "$2a$15$f.ATuemHXrOhKhHNR8O0hOnrJ7lZcOTxMqgNXJM.WZcrtUVABAkPe",
    "user-verified": 1,
    "sex": "male",
    "introduction": "`初めましてー！
                    プロフ読んでくれてありがとうございます♪
                    お互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)
                    ちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`",
    "last-login": 20170520
  },
  "userID2": {
    "first-name": "帯川",
    "last-name": "実春",
    "nickname": "みはる",
    "email": "hasegawa.taichiro@gmail.com",
    "password": "$2a$15$f.ATuemHXrOhKhHNR8O0hOnrJ7lZcOTxMqgNXJM.WZcrtUVABAkPe",
    "user-verified": 1,
    "sex": "female",
    "introduction": "`初めましてー！
                    プロフ読んでくれてありがとうございます♪
                    お互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)
                    ちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`",
    "last-login": 20170520
  },
  "userID3": {
    "first-name": "福與",
    "last-name": "崇文",
    "nickname": "たかちゃん",
    "email": "hasegawa.taichiro@gmail.com",
    "password": "$2a$15$f.ATuemHXrOhKhHNR8O0hOnrJ7lZcOTxMqgNXJM.WZcrtUVABAkPe",
    "user-verified": 0,
    "sex": "else",
    "introduction": "`初めましてー！
                    プロフ読んでくれてありがとうございます♪
                    お互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)
                    ちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`",
    "last-login": 20170520
  }
},

"user-image": {
  "userID1": {
    "main-image": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
    "sub-image1": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
    "sub-image2": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg"
  },
  "userID2": {
    "main-image": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
    "sub-image1": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
    "sub-image2": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg"
  },
  "userID3": {
    "main-image": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
    "sub-image1": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
    "sub-image2": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg"
  },
},

"footprint": {
  "footID1": {
    "from": "userID1",
    "to": "userID2",
    "verified": 1,
    "timestamp": 20170520150000
  },
  "footID2": {
    "from": "userID1",
    "to": "userID3",
    "verified": 0,
    "timestamp": 20170520150000
  }
},

"rooms": {
  "roomID1": {
    "userID1": true,
    "userID2": true
    "block": {
      "blocked": false
    }
  },
  "roomID2": {
    "userID1": true,
    "userID3": true
    "block": {
      "blocked": true,
      "blocked-user": "userID3"
    }
  }
},

"room-messages": {
  "roomID1": {
      "messageID1": {
          "userID": "userID1",
          "message": "こんにちは、太一郎です。よろしくお願いします。",
          "timestamp": 20170520150000
      },
      "messageID2": {
          "userID": "userID2",
          "message": "みはるです。よろしくお願いします。",
          "timestamp": 20170521010000
      },
      "messageID3": { ... }
  },
  "roomID2": { ... }
},

"timeline": {
  "timelineID1": {
    "userID": "userID1",
    "images": {
      "image1": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
      "image2": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg"
    },
    "message": "`初めましてー！
                プロフ読んでくれてありがとうございます♪
                お互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)
                ちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`",
    "timestamp": 20170521010000
  }
},

"like-timeline": {
  "timelineID1": {
    "users": {
      "userID1": true,
      "userID2": true
    }
  }
},

"comments-timeline": {
  "timelineID1": {
      "messageID1": {
          "userID": "userID1",
          "message": "こんにちは、太一郎です。よろしくお願いします。",
          "timestamp": 20170520150000
      },
      "messageID2": {
          "userID": "userID2",
          "message": "みはるです。よろしくお願いします。",
          "timestamp": 20170521010000
      },
      "messageID3": { ... }
  }
},

"blogs": {
  "blogID1" {
    "image": "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg",
    "message": "`初めましてー！
                プロフ読んでくれてありがとうございます♪
                お互いに思いやりを忘れず、くだらない事でも笑い合えて、いつまでも一人の男性として好きでいられる方と出会えることが出来ればと思っています( *´艸｀)
                ちょっと天然でのんびり屋さんなとこありますけど、どうぞ宜しくお願いします(笑)`",
    "timestamp": 20170521010000
  }
},

"like-blogs": {
  "blogID1": {
    "users": {
      "userID1": true,
      "userID2": true
    }
  }
},

"comments-blogs": {
  "blogID1": {
      "messageID1": {
          "userID": "userID1",
          "message": "こんにちは、太一郎です。よろしくお願いします。",
          "timestamp": 20170520150000
      },
      "messageID2": {
          "userID": "userID2",
          "message": "みはるです。よろしくお願いします。",
          "timestamp": 20170521010000
      },
      "messageID3": { ... }
  }
},

```