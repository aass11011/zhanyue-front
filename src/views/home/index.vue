<template>
  <div class="zh-home">
    <div class="zh-container">
      <!-- 主栏：文章流 -->
      <div class="zh-main">
        <div class="zh-tabbar">
          <span class="zh-tab zh-tab--active">推荐</span>
          <span class="zh-tab">文章</span>
        </div>

        <n-skeleton v-if="loading" v-for="i in 3" :key="i" text class="mb-16" />

        <n-empty
          v-else-if="articleList.length === 0"
          class="py-60"
          description="暂无文章，请到后台管理系统发布"
        />

        <div v-else class="zh-feed">
          <div v-for="item in articleList" :key="item.id" class="zh-feed-item">
            <!-- 左侧投票区 -->
            <div class="zh-vote">
              <div class="zh-vote-btn zh-vote-btn--up" @click="like(item)">
                <span class="zh-vote-arrow"></span>
              </div>
              <div class="zh-vote-count">{{ item.voteCount ?? 0 }}</div>
              <div class="zh-vote-btn" @click="dislike(item)">
                <span class="zh-vote-arrow zh-vote-arrow--down"></span>
              </div>
            </div>

            <!-- 正文区 -->
            <div class="zh-body">
              <div class="zh-author">
                <span class="zh-avatar" :style="{ background: avatarColor(item.author) }">
                  {{ authorInitial(item) }}
                </span>
                <div class="zh-author-info">
                  <span class="zh-author-name">{{ item.author || '占月明' }}</span>
                  <span class="zh-author-time">{{ formatTime(item.createdTime) }}</span>
                </div>
              </div>

              <div class="zh-title" @click="goDetail(item)">{{ item.title }}</div>
              <div class="zh-excerpt" @click="goDetail(item)">{{ excerpt(item.content) }}</div>

              <div class="zh-actions">
                <span class="zh-action" @click="like(item)">
                  <span class="zh-action-icon">▲</span>赞同
                </span>
                <span class="zh-action" @click="goDetail(item)">
                  <span class="zh-action-icon">💬</span>阅读全文
                </span>
                <span class="zh-action" @click="favorite(item)">
                  <span class="zh-action-icon">★</span>收藏
                </span>
                <span class="zh-action" @click="share(item)">
                  <span class="zh-action-icon">↗</span>分享
                </span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="totalPages > 1" class="zh-pagination">
          <n-pagination
            v-model:page="currentPage"
            :page-count="totalPages"
            @update:page="fetchData"
          />
        </div>
      </div>

      <!-- 侧栏 -->
      <div class="zh-side">
        <div class="zh-card">
          <div class="zh-card-title">热门文章</div>
          <div
            v-for="(item, i) in hotList"
            :key="item.id"
            class="zh-hot-item"
            @click="goDetail(item)"
          >
            <span class="zh-hot-index">{{ i + 1 }}</span>
            <span class="zh-hot-title">{{ item.title }}</span>
          </div>
        </div>

        <div class="zh-card">
          <div class="zh-card-title">关于本站</div>
          <p class="zh-about">
            本前台页面与占月明后台管理系统联动，后台发布的文章会自动展示在此页面。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getArticleListApi } from '@/api/article'

const router = useRouter()
const message = window.$message

const articleList = ref([])
const loading = ref(true)
const currentPage = ref(1)
const pageSize = ref(10)
const totalPages = ref(1)

const fetchData = async () => {
  loading.value = true
  try {
    const res = await getArticleListApi({
      pageIndex: currentPage.value - 1,
      pageSize: pageSize.value,
      sort: 'createdTime desc',
    })
    articleList.value = res?.data?.content || []
    totalPages.value = res?.data?.totalPages || 1
  }
  catch (e) {
    articleList.value = []
    totalPages.value = 1
  }
  finally {
    loading.value = false
  }
}

// 侧栏热门：按发布时间倒序取前 5
const hotList = computed(() => [...articleList.value].slice(0, 5))

const authorInitial = item => (item.author || '占').slice(0, 1)

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

const stripHtml = (html = '') => String(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

const excerpt = (content = '') => {
  const text = stripHtml(content)
  return text.length > 110 ? `${text.slice(0, 110)}…` : text
}

const goDetail = item => router.push(`/article/${item.id}`)

// 互动仅为前端演示，不真正落库
const like = (item) => {
  item.voteCount = (item.voteCount ?? 0) + 1
  message.success('已赞同')
}
const dislike = (item) => {
  message.info('已反对')
}
const favorite = () => message.success('已收藏')
const share = () => {
  navigator.clipboard?.writeText(window.location.href).then(() => message.success('链接已复制'))
}

onMounted(fetchData)
</script>

<style scoped>
.zh-home {
  min-height: 100%;
  background: #f6f6f6;
  padding: 20px 16px 40px;
}

.zh-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.zh-main {
  flex: 1;
  min-width: 0;
}

/* 顶部 tab */
.zh-tabbar {
  display: flex;
  align-items: center;
  gap: 24px;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  padding: 0 20px;
  height: 50px;
  margin-bottom: 12px;
}

.zh-tab {
  font-size: 15px;
  color: #444;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 3px solid transparent;
}

.zh-tab--active {
  color: #0084ff;
  border-bottom-color: #0084ff;
  font-weight: 600;
}

/* 文章卡片 */
.zh-feed {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 2px;
}

.zh-feed-item {
  display: flex;
  padding: 16px 20px;
  border-bottom: 1px solid #f0f2f5;
  transition: background 0.2s;
}

.zh-feed-item:last-child {
  border-bottom: none;
}

.zh-feed-item:hover {
  background: #fafbfc;
}

/* 投票区 */
.zh-vote {
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.zh-vote-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #8590a6;
  background: #fff;
  transition: all 0.2s;
}

.zh-vote-btn:hover {
  border-color: #0084ff;
  color: #0084ff;
}

.zh-vote-arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 6px solid currentColor;
}

.zh-vote-arrow--down {
  border-bottom: none;
  border-top: 6px solid currentColor;
}

.zh-vote-count {
  font-size: 15px;
  color: #444;
  font-weight: 600;
}

/* 正文区 */
.zh-body {
  flex: 1;
  min-width: 0;
  margin-left: 14px;
}

.zh-author {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.zh-avatar {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
}

.zh-author-info {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}

.zh-author-name {
  font-size: 14px;
  color: #175199;
  font-weight: 600;
}

.zh-author-time {
  font-size: 13px;
  color: #8590a6;
}

.zh-title {
  font-size: 18px;
  font-weight: 600;
  color: #121212;
  line-height: 1.4;
  cursor: pointer;
  margin-bottom: 6px;
}

.zh-title:hover {
  color: #0084ff;
}

.zh-excerpt {
  font-size: 14px;
  color: #444;
  line-height: 1.7;
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.zh-actions {
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 12px;
}

.zh-action {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #646464;
  cursor: pointer;
  transition: color 0.2s;
}

.zh-action:hover {
  color: #0084ff;
}

.zh-action-icon {
  font-size: 12px;
}

/* 分页 */
.zh-pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

/* 侧栏 */
.zh-side {
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 20px;
}

.zh-card {
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  padding: 16px 18px;
  margin-bottom: 16px;
}

.zh-card-title {
  font-size: 16px;
  font-weight: 600;
  color: #121212;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f2f5;
}

.zh-hot-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  cursor: pointer;
}

.zh-hot-item:hover .zh-hot-title {
  color: #0084ff;
}

.zh-hot-index {
  width: 18px;
  font-size: 15px;
  font-weight: 600;
  color: #0084ff;
  flex-shrink: 0;
}

.zh-hot-item:nth-child(n + 4) .zh-hot-index {
  color: #8590a6;
}

.zh-hot-title {
  font-size: 14px;
  color: #1a1a1a;
  line-height: 1.5;
  transition: color 0.2s;
}

.zh-about {
  font-size: 13px;
  color: #646464;
  line-height: 1.8;
  margin: 0;
}

@media (max-width: 768px) {
  .zh-side {
    display: none;
  }
}
</style>
