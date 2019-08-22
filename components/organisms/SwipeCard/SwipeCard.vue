<template>
  <v-layout
    class="tinder"
    @touchstart="start"
    @touchmove="move"
    @touchend="end"
    @touchcancel="end"
    @mousedown="start"
    @mousemove="move"
    @mouseup="end"
    @mouseout="end"
  >
    <transition-group @leave="leave" @afterLeave="reset">
      <div
        v-for="(content, index) in contents"
        :key="content.id"
        class="card"
      >
        <v-card
          class="card-wrapper"
          :style="isCur(index) ? mainCardStyle() : bentchCardStyle(index)"
        >
          <v-img class="avatar" :src="content.src">
            <v-card-title class="title align-end fill-height">
              {{ content.name }}
              <v-spacer />
              <div v-if="content.age">
                <div class="age">
                  {{ content.age }}
                </div>
              </div>
            </v-card-title>
          </v-img>
        </v-card>
      </div>
    </transition-group>
  </v-layout>
</template>

<script>
const initStatus = () => ({
  touchId: null,
  start: {},
  move: {},
  ratio: 0,
  result: null
})
let resizeTimer

export default {
  name: 'SwipeCard',
  props: {
    contents: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      cardStatus: 'normal',
      size: {
        top: 0,
        width: 0,
        height: 0
      },
      moveStatus: initStatus()
    }
  },
  computed: {
    nowKey () {
      if (this.cardStatus === 'leave') {
        return null
      }
      return this.contents[0] && this.contents[0].id
    },
    checkFace () {
      const difX = this.moveStatus.move.x - this.moveStatus.start.x
      const type = difX <= -50 ? 'Nope' : difX >= 50 ? 'Like' : 'None'
      return type
    }
  },
  mounted () {
    this.size = {
      top: this.$el.offsetTop,
      width: this.$el.offsetWidth,
      height: this.$el.offsetHeight
    }
    window.onresize = this.getSize
  },
  methods: {
    getSize () {
      clearInterval(resizeTimer)
      resizeTimer = setTimeout(() => {
        this.size = {
          top: this.$el.offsetTop,
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight
        }
      }, 300)
    },
    isCur (index) {
      return index === 0 && this.contents[index].id === this.nowKey
    },
    reset () {
      this.cardStatus = 'normal'
      this.moveStatus = initStatus()
    },
    start (e) {
      if (this.moveStatus.touchId !== null || this.cardStatus === 'leave') {
        return
      }
      this.cardStatus = 'move'
      let pageX, pageY
      if (e.type === 'touchstart') {
        pageX = e.changedTouches[0].pageX
        pageY = e.changedTouches[0].pageY
      } else {
        pageX = e.clientX
        pageY = e.clientY
      }
      // identifier: タッチを開始すると割り振られる、ユニークな識別番号
      this.moveStatus = {
        touchId:
          e.type === 'touchstart' ? e.changedTouches[0].identifier : 'mouse',
        start: {
          x: pageX,
          y: pageY
        },
        move: {}
      }
    },
    move (e) {
      e.preventDefault()
      if (
        this.moveStatus.touchId === null ||
        this.cardStatus === 'leave' ||
        (e.type === 'touchmove' &&
          this.moveStatus.touchId !== e.changedTouches[0].identifier)
      ) {
        return
      }
      this.cardStatus = 'move'
      let pageX, pageY
      if (e.type === 'touchmove') {
        pageX = e.changedTouches[0].pageX
        pageY = e.changedTouches[0].pageY
      } else {
        pageX = e.clientX
        pageY = e.clientY
      }
      this.moveStatus.move = {
        x: pageX,
        y: pageY
      }
    },
    end (e) {
      if (
        e.type === 'touchstart' &&
        this.moveStatus.touchId !== e.changedTouches[0].identifier
      ) {
        return
      }
      if (this.cardStatus === 'leave') {
        return
      }
      if (this.checkFace === 'Like' || this.checkFace === 'Nope') {
        this.shiftCard(this.checkFace)
      } else {
        this.reset()
      }
    },
    leave (el, done) {
      const { start, move } = this.moveStatus
      let x = move.x - start.x || 0
      let y = move.y - start.y || 0
      x += this.size.width * (x < 0 ? -0.5 : 0.5)
      y *= x / (move.x - start.x)
      const ratio = x / (this.size.width * 0.5)
      const rotate = (ratio / (0.8 / 0.5)) * 15
      const duration =
        this.moveStatus.touchId === null
          ? 800
          : 300
      el.className += ` ${this.moveStatus.result}`
      el.style.opacity = 0
      el.style.transform = `translate3d(${x}px,${y}px,0) rotate(${rotate}deg)`
      el.style.transition = `all ${duration}ms ease`
      setTimeout(done, duration)
    },
    shiftCard (type) {
      this.cardStatus = 'leave'
      this.moveStatus.result = type
      const item = this.contents.shift()
      this.submit(type, item)
    },
    mainCardStyle () {
      const style = { zIndex: 10 }
      if (this.cardStatus === 'normal') {
        style.transform = 'scale(1) translate3d(0,0,0) rotate(0deg)'
        style.transition = 'none'
      } else if (this.cardStatus === 'move') {
        const { start, move } = this.moveStatus
        const x = move.x - start.x || 0
        const y = move.y - start.y || 0

        const ratio = x / (360 * 0.5)
        this.moveStatus.ratio = ratio
        // 10度で回転
        const rotate = 10 * ratio
        style.transform = `translate3d(${x}px,${y}px,0) rotate(${rotate}deg) scale(1.05)`
        style.transition = 'none'
      }
      return style
    },
    bentchCardStyle (index) {
      if ((index === 1 && this.cardStatus === 'leave') || index > 1) {
        return {
          zIndex: -1,
          opacity: 0
        }
      }
      const style = { zIndex: 9 }
      if (this.cardStatus === 'normal') {
        style.transform = 'scale3d(0.95,0.95,1)'
        style.transition = 'all 500ms ease'
      } else if (this.cardStatus === 'move') {
        let ratio = this.moveStatus.ratio
        if (ratio > 1) {
          ratio = 1
        } else if (ratio < -1) {
          ratio = -1
        }
        style.transform = `scale3d(${Math.abs(ratio) * 0.05 +
          0.95},${Math.abs(ratio) * 0.05 + 0.95},1)`
        style.transition = 'none'
      } else if (this.cardStatus === 'leave') {
        style.transform = 'scale3d(1,1,1)'
        style.transition = 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }
      return style
    },
    submit (type, item) {}
  }
}
</script>

<style lang="scss" scoped>
.card {
  top: 50px;
  left: 10px;
  width: 95%;
  position: absolute;
  display: block;
}
.card-wrapper {
  background: color(white, base);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: color(white, base);
  padding: 10px;
  width: 360px;
  height: 360px;
  margin: 0 auto;
}
.v-move {
  transition: none !important;
}
.avatar {
  background: color(black, dark);
  width: 340px;
  height: 340px;
}
.title {
  font-size: 36px !important;
  padding: 5px;
}
.age {
  font-size: 24px;
}
</style>
