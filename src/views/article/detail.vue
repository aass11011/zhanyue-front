<template>
  <div class="zh-detail">
    <div class="zh-detail-container">
      <n-skeleton v-if="loading" text :repeat="6" />

      <template v-else-if="article">
        <div class="zh-detail-back" @click="router.back()">‹ 返回</div>

        <article class="zh-detail-card">
          <h1 class="zh-detail-title">{{ article.title }}</h1>

          <div class="zh-detail-author">
            <span class="zh-avatar" :style="{ background: avatarColor(article.author) }">
              {{ authorInitial }}
            </span>
            <div>
              <div class="zh-author-name">{{ article.author || '占月明' }}</div>
              <div class="zh-author-time">{{ formatTime(article.createdTime) }}</div>
            </div>
          </div>

          <div class="zh-detail-content" v-html="article.content"></div>

          <div class="zh-detail-actions">
            <div class="zh-vote" @click="voteCount++">
              <span class="zh-vote-arrow"></span>
              <span class="zh-vote-text">赞同 {{ voteCount }}</span>
            </div>
            <div class="zh-vote zh-vote--down" @click="dislike">
              <span class="zh-vote-arrow zh-vote-arrow--down"></span>
            </div>
            <span class="zh-action">★ 收藏</span>
            <span class="zh-action" @click="share">↗ 分享</span>
          </div>
        </article>
      </template>

      <n-empty v-else class="py-60" description="文章不存在或已被删除" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getArticleDetailApi } from '@/api/article'

const route = useRoute()
const router = useRouter()
const message = window.$message

const article = ref(null)
const loading = ref(true)
const voteCount = ref(0)

const authorInitial = computed(() => (article.value?.author || '占').slice(0, 1))

const avatarColor = author => {
  const colors = ['#0084FF', '#0088A8', '#6B7A99', '#8E6F47', '#5F8E3E', '#A8443A']
  const name = author || '占'
  let hash = 0
  for (let i = 0; i < name.length; i++)
    hash = (hash * 31 + name.charCodeAt(i)) % 997
  return colors[hash % colors.length]
}

const formatTime = (t) => {
  if (!t)
    return ''
  return String(t).replace('T', ' ').slice(0, 16)
}

const dislike = () => message.info('已反对')

const share = () => {
  navigator.clipboard?.writeText(window.location.href).then(() => message.success('链接已复制'))
}

onMounted(async () => {
  const id = route.params.id
  try {
    const res = await getArticleDetailApi({ id })
    article.value = res?.data || null
    voteCount.value = 0
  }
  catch (e) {
    article.value = null
  }
  finally {
    loading.value = false
  }
})
</script>

<style scoped>
.zh-detail {
  min-height: 100%;
  background: #f6f6f6;
  padding: 20px 16px 40px;
}

.zh-detail-container {
  max-width: 760px;
  margin: 0 auto;
}

.zh-detail-back {
  font-size: 14px;
  color: #8590a6;
  cursor: pointer;
  margin-bottom: 14px;
  display: inline-block;
}

.zh-detail-back:hover {
  color: #0084ff;
}

.zh-detail-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  padding: 32px 36px;
}

.zh-detail-title {
  font-size: 24px;
  font-weight: 700;
  color: #121212;
  line-height: 1.4;
  margin: 0 0 20px;
}

.zh-detail-author {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 24px;
  border-bottom: 1px solid #f0f2f5;
}

.zh-avatar {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.zh-author-name {
  font-size: 15px;
  font-weight: 600;
  color: #175199;
}

.zh-author-time {
  font-size: 13px;
  color: #8590a6;
  margin-top: 2px;
}

.zh-detail-content {
  font-size: 16px;
  color: #1a1a1a;
  line-height: 1.8;
  word-break: break-word;
}

.zh-detail-content :deep(p) {
  margin-bottom: 16px;
}

.zh-detail-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 12px 0;
}

.zh-detail-content :deep(h1),
.zh-detail-content :deep(h2),
.zh-detail-content :deep(h3) {
  font-weight: 700;
  margin: 24px 0 12px;
  color: #121212;
}

.zh-detail-content :deep(blockquote) {
  border-left: 3px solid #0084ff;
  padding-left: 16px;
  color: #646464;
  margin: 16px 0;
}

.zh-detail-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
  padding-top: 20px;
  border-top: 1px solid #f0f2f5;
}

.zh-vote {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 132, 255, 0.08);
  color: #0084ff;
  border-radius: 30px;
  padding: 7px 18px;
  cursor: pointer;
  transition: background 0.2s;
  user-select: none;
}

.zh-vote:hover {
  background: rgba(0, 132, 255, 0.15);
}

.zh-vote--down {
  padding: 7px 14px;
}

.zh-vote-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid currentColor;
  display: inline-block;
}

.zh-vote-arrow--down {
  border-bottom: none;
  border-top: 7px solid currentColor;
}

.zh-vote-text {
  font-size: 14px;
  font-weight: 600;
}

.zh-action {
  font-size: 14px;
  color: #646464;
  cursor: pointer;
  padding: 7px 12px;
  border-radius: 4px;
  transition: all 0.2s;
}

.zh-action:hover {
  color: #0084ff;
  background: #f7f8fa;
}
</style>
