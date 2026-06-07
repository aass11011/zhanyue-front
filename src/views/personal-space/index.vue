<template>
  <div class="p-12" @click="handlePageClick">
    <!-- 背景音乐视频 -->
    <video
      ref="videoRef"
      class="bg-music-video"
      :src="videoUrl"
      loop
      autoplay
      playsinline
      @click.stop="togglePlay"
    ></video>

    <!-- 播放提示按钮 -->
<!--    <button-->
<!--      v-if="!isPlaying"-->
<!--      class="play-hint-btn"-->
<!--      @click.stop="togglePlay"-->
<!--    >-->
<!--      <span class="play-icon">▶</span>-->
<!--      <span>点击播放音乐</span>-->
<!--    </button>-->
    <div class="carousel-container">


      <!-- 椭圆走马灯核心 -->
      <div class="ellipse-carousel" @mouseenter="stopRotate" @mouseleave="startRotate">
        <div
          class="carousel-item"
          v-for="(img, index) in imageList"
          :key="index"
          :style="getItemStyle(index)"
          @click="selectImg(index)"
        >
          <img :src="img" alt="照片" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 视频地址
const videoUrl = ref('video/1769516741198.mp4')

// 视频引用
const videoRef = ref(null)
const isPlaying = ref(false)

// 切换播放状态
const togglePlay = async () => {
  const video = videoRef.value
  if (!video) return

  try {
    if (isPlaying.value) {
      video.pause()
      isPlaying.value = false
    } else {
      await video.play()
      isPlaying.value = true
    }
  } catch (err) {
    console.log('播放失败:', err)
  }
}

// 页面点击触发播放（解决浏览器自动播放限制）
const handlePageClick = () => {
  if (!isPlaying.value) {
    togglePlay()
  }
}
// 替换成你的图片地址（本地/网络都可以）
const imageList = ref([
  'img/personal/0493.jpg',
  'img/personal/20190121_215706.jpg',
  'img/personal/20190404_111805.jpg',
  'img/personal/1773582091856.png',
  'img/personal/IMG_1178.JPG',
  'img/personal/P30420-220015.jpg',
  'img/personal/P20260208-174705.jpg',
  'img/personal/P20260512-175427.jpg',
])

// 旋转控制
let rotateTimer = null
const rotateAngle = ref(0) // 整体旋转角度
const selectedIndex = ref(-1) // 选中的图片

// 开始自动旋转
const startRotate = () => {
  rotateTimer = setInterval(() => {
    rotateAngle.value += 0.3
  }, 30)
}

// 停止旋转
const stopRotate = () => {
  clearInterval(rotateTimer)
}

// 点击选中图片
const selectImg = (index) => {
  selectedIndex.value = index
}

// 计算每个图片的椭圆位置 + 近大远小
const getItemStyle = (index) => {
  const total = imageList.value.length
  const itemAngle = (index / total) * Math.PI * 2 + rotateAngle.value / 180 * Math.PI

  // 椭圆轨道参数（可自行调节大小）
  const ellipseA = 320 // 长轴
  const ellipseB = 140 // 短轴

  // 计算位置
  const x = Math.cos(itemAngle) * ellipseA
  const y = Math.sin(itemAngle) * ellipseB

  // 近大远小（Z轴深度 + 缩放）
  const z = Math.sin(itemAngle) * 80 // 深度
  const scale = 0.9 + Math.sin(itemAngle) * 0.4 // 缩放：越近越大

  // 透明度：近实远虚
  const opacity = 0.7 + Math.sin(itemAngle) * 0.3

  return {
    transform: `translate(${x}px, ${y}px) translateZ(${z}px) scale(${scale})`,
    opacity: opacity,
    zIndex: Math.round(z), // 近的覆盖远的
    border: selectedIndex.value === index ? '3px solid #42b983' : '2px solid #fff',
  }
}

onMounted(() => {
  startRotate()
})

onUnmounted(() => {
  clearInterval(rotateTimer)
})
</script>

<style scoped>
.carousel-container {
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  text-align: center;
  padding: 20px;
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 60px;
  font-weight: 500;
}

/* 走马灯容器：开启 3D 透视 */
.ellipse-carousel {
  position: relative;
  width: 100%;
  height: 460px;
  margin: 0 auto;
  perspective: 1200px; /* 3D 透视关键 */
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

/* 图片项 */
.carousel-item {
  position: absolute;
  width: 160px;
  height: 220px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
}

/* 悬停效果 */
.carousel-item:hover {
  transform: scale(1.15) !important;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

/* 背景音乐视频 */
.bg-music-video {
  position: fixed;
  top: 50px;
  right: 20px;
  width: 120px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
  opacity: 0.8;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.bg-music-video:hover {
  opacity: 1;
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

/* 播放提示按钮 */
.play-hint-btn {
  position: fixed;
  top: 130px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(66, 185, 131, 0.9);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  z-index: 999;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}

.play-hint-btn:hover {
  background: #42b983;
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(66, 185, 131, 0.4);
}

.play-icon {
  font-size: 16px;
}
</style>
