<!--------------------------------
 - @Author: Ronnie Zhang
 - @LastEditor: Ronnie Zhang
 - @LastEditTime: 2023/12/05 21:28:22
 - @Email: zclzone@outlook.com
 - Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 --------------------------------->

<template>
  <div class="p-12">


    <!-- 栏目二：内容区域 -->
    <div class="grid grid-cols-5 gap-12 mb-12">
      <n-card class="col-span-2" segmented>
        <template #header>
          <div class="flex items-center justify-between w-full">
            <span class="font-semibold">📝 订单分析</span>
            <div class="flex items-center gap-4">
              <n-select
                v-model="selectedStock"
                :options="stockOptions"
                placeholder="选择股票"
                :style="{ width: '160px' }"
                @update:value="fetchDateOptions"
              />
              <n-select
                v-if="selectedStock"
                v-model="selectedDate"
                :options="dateOptions"
                placeholder="选择日期"
                :style="{ width: '160px' }"
                @update:value="fetchOrderAnalysisDetail"
              />
            </div>
          </div>
        </template>
        <div class="space-y-6">
          <p class="text-14 opacity-70">
            {{ orderAnalysisDetail || '请选择股票和日期查看订单分析详情' }}
          </p>
        </div>
      </n-card>

      <n-card title="💡 股票观点" segmented class="col-span-3">
        <div class="flex items-center gap-2 mb-16 flex-wrap">
          <n-radio-group v-model:value="opinionViewer" name="viewer" size="small">
            <n-radio-button
              v-for="v in opinionViewerList"
              :key="v"
              :value="v"
              :label="v"
            />
          </n-radio-group>
          <n-select
            v-model:value="opinionType"
            :options="opinionTypeList.map(t => ({ label: t.dictName, value: t.id }))"
            placeholder="观点类型"
            clearable
            :style="{ width: '140px' }"
            size="small"
          />
        </div>
        <div v-if="opinionFilteredList.length > 0" class="opinion-timeline">
          <n-timeline>
            <n-timeline-item
              v-for="item in opinionFilteredList"
              :key="item.id"
              :time="item.dates"
              type="default"
            >
              <div class="opinion-item-header">
                <span v-if="item.stockName" class="opinion-stock">
                  {{ item.stockName }} ({{ item.stockCode }})
                </span>
                <span v-else class="opinion-stock">观点</span>
              </div>
              <div class="opinion-content" v-html="item.content"></div>
            </n-timeline-item>
          </n-timeline>
        </div>
        <div v-else class="text-14 opacity-50 text-center py-20">
          暂无观点数据
        </div>
      </n-card>
    </div>
    <!-- 栏目一：大盘分析 -->
    <div class="mb-12">
      <n-card title="📊 大盘分析" class="w-full">
        <div class="market-layout">
          <!-- 左侧：日历 -->
          <div class="market-calendar">
            <div class="calendar-nav">
              <n-button size="small" @click="calendarYear--; buildCalendar()">&laquo;</n-button>
              <n-select
                v-model:value="calendarYear"
                :options="yearOptions"
                :style="{ width: '80px' }"
                size="small"
                @update:value="buildCalendar"
              />
              <span class="text-14 font-semibold">年</span>
              <n-select
                v-model:value="calendarMonth"
                :options="monthOptions"
                :style="{ width: '64px' }"
                size="small"
                @update:value="buildCalendar"
              />
              <span class="text-14 font-semibold">月</span>
              <n-button size="small" @click="calendarYear++; buildCalendar()">&raquo;</n-button>
            </div>
            <div class="calendar-weekdays">
              <span v-for="d in weekDays" :key="d" class="weekday-cell">{{ d }}</span>
            </div>
            <div class="calendar-grid">
              <div
                v-for="(day, idx) in calendarDays"
                :key="idx"
                class="calendar-day"
                :class="{
                  'has-data': day && marketDateSet.has(day.dateStr),
                  'is-selected': day && day.dateStr === selectedMarketDate,
                  'is-other-month': day && day.isOtherMonth
                }"
                @click="day && selectMarketDate(day.dateStr)"
              >
                <span v-if="day">{{ day.day }}</span>
              </div>
            </div>
          </div>
          <!-- 右侧：分析内容 -->
          <div class="market-analysis">
            <template v-if="!selectedMarketDate">
              <div class="text-14 opacity-50 text-center pt-40">请点击日历日期查看大盘分析</div>
            </template>
            <template v-else-if="!selectedMarketRecords.length">
              <div class="text-14 opacity-50 text-center pt-40">{{ selectedMarketDate }} 暂无大盘分析数据</div>
            </template>
            <template v-else>
              <div class="analysis-list">
                <div v-for="item in selectedMarketRecords" :key="item.id" class="analysis-item">
                  <div class="analysis-item-header">
                    <h4>{{ item.title || '大盘分析' }}</h4>
                    <span class="text-12 opacity-50">{{ item.createdTime }}</span>
                  </div>
                  <div class="analysis-fields">
                    <div v-for="field in item.list" :key="field.id" class="analysis-field">
                      <span class="field-label">{{ field.fieldName }}</span>
                      <span class="field-value">{{ field.fieldValue }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </n-card>
    </div>
    <!-- 栏目三：数据表格 -->
    <div class="grid grid-cols-2 gap-12 mb-12">
      <n-card title="📈 基金趋势" segmented>
        <div class="h-320">
          <VChart :option="chartOption1" autoresize />
        </div>
      </n-card>

      <n-card segmented>
        <template #header>
          <div class="flex items-center justify-between w-full">
            <span class="font-semibold">📖 股票案例</span>
            <n-button v-if="caseDetail" size="tiny" @click="caseDetail = null">
              ✕
            </n-button>
          </div>
        </template>
        <!-- 列表视图 -->
        <div v-if="!caseDetail" class="case-list">
          <div v-if="caseList.length === 0" class="text-14 opacity-50 text-center py-40">
            暂无案例数据
          </div>
          <div
            v-for="item in caseList"
            :key="item.id"
            class="case-item"
            @click="caseDetail = item"
          >
            <div class="case-title">{{ item.title }}</div>
            <div class="case-meta">
              <span v-if="item.stockName">{{ item.stockName }}</span>
              <span v-if="item.caseDate">{{ item.caseDate }}</span>
              <span v-if="item.category">{{ item.category }}</span>
            </div>
          </div>
        </div>
        <!-- 详情视图 -->
        <div v-else class="case-detail">
          <h3 class="case-detail-title">{{ caseDetail.title }}</h3>
          <div class="case-detail-meta">
            <span v-if="caseDetail.stockName">{{ caseDetail.stockName }} ({{ caseDetail.stockCode }})</span>
            <span v-if="caseDetail.caseDate">{{ caseDetail.caseDate }}</span>
            <span v-if="caseDetail.category">{{ caseDetail.category }}</span>
          </div>
          <div class="case-detail-content" v-html="caseDetail.content"></div>
        </div>
      </n-card>
    </div>

    <!-- 栏目四：行为分析 -->
    <n-card title="📋 行为分析" segmented>
      <vxe-table
        :data="behaviourTableData"
        :loading="behaviourLoading"
        :column-config="{ resizable: true }"
        border
        stripe
        round
        max-height="600"
        size="small"
      >
        <vxe-column field="stockName" title="股票名称" width="140" fixed="left">
          <template #default="{ row }">
            <span class="font-semibold">{{ row.stockName }}</span>
          </template>
        </vxe-column>
        <vxe-column
          v-for="idx in behaviourMaxRecordCount"
          :key="idx"
          :title="'记录' + idx"
          min-width="300"
        >
          <template #default="{ row }">
            <div v-if="row.records && row.records[idx - 1]" class="behaviour-cell">
              <div class="behaviour-date">{{ row.records[idx - 1].createdTime }}</div>
              <div class="behaviour-analysis">{{ row.records[idx - 1].analysis || '-' }}</div>
              <div v-if="row.records[idx - 1].tradingPlan" class="behaviour-plan">
                计划: {{ row.records[idx - 1].tradingPlan }}
              </div>
              <div
                v-if="getImageList(row.records[idx - 1]).length"
                class="behaviour-images"
              >
                <img
                  v-for="(url, imgIdx) in getImageList(row.records[idx - 1])"
                  :key="imgIdx"
                  :src="url"
                  class="behaviour-image"
                  @click="previewImage(url)"
                />
              </div>
            </div>
            <span v-else class="opacity-40">-</span>
          </template>
        </vxe-column>
      </vxe-table>
      <div v-if="!behaviourLoading && behaviourTableData.length === 0" class="empty-state">
        暂无行为分析数据
      </div>
    </n-card>

    <!-- 图片预览遮罩 -->
    <div v-if="showPreview" class="preview-mask" @click.self="showPreview = false">
      <div class="preview-close" @click="showPreview = false">×</div>
      <img :src="previewImageUrl" class="preview-img" alt="预览" />
    </div>
  </div>
</template>

<script setup>
import { BarChart, LineChart } from 'echarts/charts'
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'
import { getStockListApi } from "@/api/stock/basic/index.js";
import { getOrderAnalysisApi, getOrderAnalysisDetailApi } from "@/api/stock/analysis/index.js";
import { getStockSseFundsApi } from "@/api/stock/sse/index.js";
import { getBehaviourListAllApi } from "@/api/stock/behaviour/index.js";
import { getStockOptionListApi, getDictDataListByTypeApi } from "@/api/stock/option/index.js";
import { getStockMarketRecordApi } from "@/api/stock/market/index.js";
import { getStockCaseListApi } from "@/api/stock/case/index.js";
import { ref, onMounted, computed, watch, nextTick } from "vue";


const stockList = ref([])
const selectedStock = ref('')
const selectedDate = ref('')
const dateOptions = ref([])
const fundData = ref([])
const orderAnalysisDetail = ref('')
const behaviourLoading = ref(false)
const behaviourTableData = ref([])
const behaviourMaxRecordCount = ref(0)
const showPreview = ref(false)
const previewImageUrl = ref('')
const opinionList = ref([])
const opinionViewer = ref('')
const opinionViewerList = ref([])
const opinionType = ref('')
const opinionTypeList = ref([])

// 大盘分析日历
const marketRecords = ref([])
const selectedMarketDate = ref('')
const calendarYear = ref(new Date().getFullYear())
const calendarMonth = ref(new Date().getMonth() + 1)

const weekDays = ['日', '一', '二', '三', '四', '五', '六']

const yearOptions = computed(() => {
  const currentYear = new Date().getFullYear()
  const years = []
  for (let y = currentYear - 5; y <= currentYear + 1; y++) {
    years.push({ label: String(y), value: y })
  }
  return years
})

const monthOptions = computed(() => {
  return Array.from({ length: 12 }, (_, i) => ({
    label: String(i + 1),
    value: i + 1
  }))
})

// 按日期(createdTime)分组的记录集合
const marketDateSet = computed(() => {
  const set = new Set()
  marketRecords.value.forEach((r) => {
    const dateStr = (r.createdTime || '').split(' ')[0]
    if (dateStr) set.add(dateStr)
  })
  return set
})

const selectedMarketRecords = computed(() => {
  if (!selectedMarketDate.value) return []
  return marketRecords.value.filter((r) => {
    const dateStr = (r.createdTime || '').split(' ')[0]
    return dateStr === selectedMarketDate.value
  })
})

const calendarDays = ref([])

const buildCalendar = () => {
  const y = calendarYear.value
  const m = calendarMonth.value
  const firstDay = new Date(y, m - 1, 1).getDay() // 0=Sun
  const daysInMonth = new Date(y, m, 0).getDate()
  const daysInPrevMonth = new Date(y, m - 1, 0).getDate()

  const days = []
  // 上月末尾填充
  for (let i = firstDay - 1; i >= 0; i--) {
    const d = daysInPrevMonth - i
    const pm = m === 1 ? 12 : m - 1
    const py = m === 1 ? y - 1 : y
    days.push({
      day: d,
      dateStr: `${py}-${String(pm).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      isOtherMonth: true
    })
  }
  // 当月
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      day: d,
      dateStr: `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      isOtherMonth: false
    })
  }
  // 下月开头填充 (fill to 42 cells = 6 rows)
  const remaining = 42 - days.length
  for (let d = 1; d <= remaining; d++) {
    const nm = m === 12 ? 1 : m + 1
    const ny = m === 12 ? y + 1 : y
    days.push({
      day: d,
      dateStr: `${ny}-${String(nm).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
      isOtherMonth: true
    })
  }
  calendarDays.value = days
}

const selectMarketDate = (dateStr) => {
  selectedMarketDate.value = dateStr
}

const fetchMarketData = async () => {
  try {
    const res = await getStockMarketRecordApi({ sort: 'createdTime desc' })
    marketRecords.value = res?.data || []
  } catch (e) {
    // ignore
  }
}

const caseList = ref([])
const caseDetail = ref(null)

const fetchCaseData = async () => {
  try {
    const res = await getStockCaseListApi({ sort: 'caseDate desc' })
    caseList.value = res?.data || []
  } catch (e) {
    // ignore
  }
}

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
])

const chartOption1 = computed(() => {
  // 按日期分组
  const dateMap = new Map()
  fundData.value.forEach(item => {
    const date = item.statDate
    if (!dateMap.has(date)) {
      dateMap.set(date, [])
    }
    dateMap.get(date).push(item)
  })

  // 获取所有唯一日期并排序
  const dates = Array.from(dateMap.keys()).sort()

  // 获取所有唯一基金，存储完整信息
  const fundMap = new Map()
  fundData.value.forEach(item => {
    const key = item.secCode
    if (!fundMap.has(key)) {
      fundMap.set(key, {
        name: item.secName,
        data: [],
        rawData: [],
        baseValue: null
      })
    }
  })

  // 为每个基金填充数据并记录初始值
  dates.forEach((date, index) => {
    const dayData = dateMap.get(date)
    const dayDataMap = new Map(dayData.map(item => [item.secCode, item.totVol]))

    fundMap.forEach((fund, key) => {
      const value = dayDataMap.get(key)
      const numValue = value !== undefined ? Number(value) : null

      if (index === 0 && numValue !== null) {
        fund.baseValue = numValue
      }

      fund.rawData.push(numValue)
      fund.data.push(numValue)
    })
  })

  // 归一化数据（使曲线自适应显示趋势）
  const normalizeData = (data) => {
    const validData = data.filter(v => v !== null && v !== undefined)
    if (validData.length === 0) return data
    const min = Math.min(...validData)
    const max = Math.max(...validData)
    const range = max - min || 1
    return data.map(v => v !== null && v !== undefined ? (v - min) / range : null)
  }

  // 计算相对于初始值的百分比变化
  const calculatePercentChange = (data, baseValue) => {
    if (baseValue === null || baseValue === undefined) return data.map(() => null)
    return data.map(v => {
      if (v === null || v === undefined) return null
      return ((v - baseValue) / baseValue * 100)
    })
  }

  // 构建series，使用归一化数据显示，同时存储原始数据用于tooltip
  const seriesData = []
  const fundInfoMap = new Map()

  Array.from(fundMap.entries()).forEach(([code, fund]) => {
    const normalizedData = normalizeData(fund.data)
    const percentData = calculatePercentChange(fund.rawData, fund.baseValue)

    fundInfoMap.set(fund.name, {
      rawData: fund.rawData,
      percentData: percentData,
    })

    seriesData.push({
      name: fund.name,
      type: 'line',
      data: normalizedData,
      smooth: true,
      lineStyle: {
        width: 2,
      },
      symbol: 'circle',
      symbolSize: 4,
    })
  })

  return {
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const dateIndex = params[0].dataIndex
        let result = `<div style="font-weight: bold; margin-bottom: 8px;">${params[0].axisValue}</div>`
        params.forEach(param => {
          const fundInfo = fundInfoMap.get(param.seriesName)
          if (param.value !== null && fundInfo) {
            const rawValue = fundInfo.rawData[dateIndex]
            const percentValue = fundInfo.percentData[dateIndex]
            const sign = percentValue >= 0 ? '+' : ''
            result += `<div style="display: flex; align-items: center; margin: 4px 0;">
              <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: ${param.color}; margin-right: 8px;"></span>
              <span>${param.seriesName}: </span>
              <span style="margin-left: 4px;">${rawValue?.toLocaleString() || '-'}</span>
              <span style="margin-left: 8px; color: ${percentValue >= 0 ? '#10b981' : '#ef4444'}">(${sign}${percentValue?.toFixed(2) || '-'}%)</span>
            </div>`
          }
        })
        return result
      }
    },
    legend: {
      data: Array.from(fundMap.values()).map(f => f.name),
      bottom: 0,
      type: 'scroll',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: dates,
      axisLabel: {
        rotate: 45,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 1.2,
      axisLabel: {
        formatter: '{value}',
      },
    },
    series: seriesData,
  }
})

const chartOption2 = {
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147],
      type: 'line',
    },
  ],
}

const getImageList = (record) => {
  const urls = []
  if (record.stickFormList) {
    record.stickFormList.forEach((stick) => {
      if (stick.fileList) {
        stick.fileList.forEach((url) => urls.push(url))
      }
    })
  }
  return urls
}

const previewImage = (url) => {
  previewImageUrl.value = url
  showPreview.value = true
}

const fetchBehaviourData = async () => {
  behaviourLoading.value = true
  try {
    const res = await getBehaviourListAllApi({ sort: 'createdTime desc' })
    const records = res?.data || []

    // 按 stockCode 分组，每组内按 createdTime 降序排列
    const stockMap = new Map()
    records.forEach((item) => {
      const code = item.stockCode
      if (!code) return
      if (!stockMap.has(code)) {
        stockMap.set(code, [])
      }
      stockMap.get(code).push(item)
    })

    // 每组按时间降序
    let maxCount = 0
    stockMap.forEach((list) => {
      list.sort((a, b) => (b.createdTime || '').localeCompare(a.createdTime || ''))
      if (list.length > maxCount) maxCount = list.length
    })

    // 构建行数据
    const rows = stockList.value.map((stock) => {
      return {
        stockName: stock.stockFullName,
        stockCode: stock.stockCode,
        records: stockMap.get(stock.stockCode) || [],
      }
    })

    behaviourMaxRecordCount.value = maxCount
    behaviourTableData.value = rows
  } finally {
    behaviourLoading.value = false
  }
}

const fetchOpinionData = async () => {
  try {
    const [opinionRes, dictRes] = await Promise.all([
      getStockOptionListApi({ sort: 'createdTime desc' }),
      getDictDataListByTypeApi({ typeId: '27210aac-3474-42e8-8a94-198f282f7290' })
    ])
    opinionList.value = opinionRes?.data || []
    opinionTypeList.value = dictRes?.data || []

    // 从数据中提取唯一 viewer 列表
    const viewers = new Set()
    opinionList.value.forEach((item) => {
      if (item.viewer) viewers.add(item.viewer)
    })
    opinionViewerList.value = Array.from(viewers)
    if (opinionViewerList.value.length > 0 && !opinionViewer.value) {
      opinionViewer.value = opinionViewerList.value[0]
    }
    await nextTick()
    bindOpinionImageClicks()
  } catch (e) {
    // ignore
  }
}

const opinionFilteredList = computed(() => {
  let list = opinionList.value
  if (opinionViewer.value) {
    list = list.filter((item) => item.viewer === opinionViewer.value)
  }
  if (opinionType.value) {
    list = list.filter((item) => item.type === opinionType.value)
  }
  return list
})

const bindOpinionImageClicks = () => {
  document.querySelectorAll('.opinion-content img').forEach((img) => {
    img.style.cursor = 'pointer'
    img.style.maxWidth = '100%'
    img.style.height = 'auto'
    img.onclick = (e) => {
      previewImageUrl.value = e.target.src
      showPreview.value = true
    }
  })
}

watch(opinionViewer, async () => {
  opinionType.value = ''
  await nextTick()
  bindOpinionImageClicks()
})

watch(opinionFilteredList, async () => {
  await nextTick()
  bindOpinionImageClicks()
}, { deep: true })

const stockOptions = computed(() => {
  return stockList.value.map(item => ({
    label: item.stockFullName,
    value: item.stockCode
  }))
})

const fetchDateOptions = async (value) => {
  selectedStock.value = value
  if (!selectedStock.value) {
    dateOptions.value = []
    selectedDate.value = ''
    orderAnalysisDetail.value = ''
    return
  }
  const res = await getOrderAnalysisApi({ stockCode: selectedStock.value })
  // 假设接口返回的日期数据在 res.data.content 中，格式为 [{ date: '2024-01-01' }, ...]
  dateOptions.value = (res.data.content || []).map(item => ({
    label: item.date,
    value: item.date
  }))
}

const fetchOrderAnalysisDetail = async (value) => {
  selectedDate.value = value
  if (!selectedDate.value || !selectedStock.value) {
    orderAnalysisDetail.value = ''
    return
  }
  const res = await getOrderAnalysisDetailApi({
    stockCode: selectedStock.value,
    date: selectedDate.value
  })
  orderAnalysisDetail.value = res.data || '暂无分析数据'
}

onMounted(async ()=>{
  const [stockRes, fundRes] = await Promise.all([
    getStockListApi(),
    getStockSseFundsApi()
  ])
  stockList.value = stockRes.data.content || []
  fundData.value = fundRes.data || []
  fetchBehaviourData()
  fetchOpinionData()
  buildCalendar()
  fetchMarketData()
  fetchCaseData()
})
</script>

<style scoped>
/* 大盘分析 */
.market-layout {
  display: flex;
  gap: 24px;
}
.market-calendar {
  flex: 0 0 380px;
}
.calendar-nav {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 12px;
}
.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: #666;
  margin-bottom: 4px;
}
.weekday-cell {
  padding: 4px 0;
}
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}
.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid transparent;
}
.calendar-day:hover {
  background: #f0f0f0;
}
.calendar-day.has-data {
  background: #fde68a;
  border-color: #f59e0b;
  font-weight: 600;
}
.calendar-day.has-data:hover {
  background: #fcd34d;
}
.calendar-day.is-selected {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}
.calendar-day.is-other-month {
  color: #ccc;
}
.market-analysis {
  flex: 1;
  min-height: 400px;
  max-height: 460px;
  overflow-y: auto;
  border-left: 1px solid #ebeef5;
  padding-left: 24px;
}
.analysis-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.analysis-item {
  padding: 12px 16px;
  background: #f9fafb;
  border-radius: 8px;
}
.analysis-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.analysis-item-header h4 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}
.analysis-fields {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.analysis-field {
  display: flex;
  gap: 8px;
  font-size: 13px;
}
.field-label {
  color: #666;
  min-width: 80px;
  flex-shrink: 0;
}
.field-value {
  font-weight: 500;
  color: #333;
}

.behaviour-cell {
  line-height: 1.6;
}
.behaviour-date {
  font-size: 12px;
  color: #409eff;
  font-weight: 500;
  margin-bottom: 6px;
}
.behaviour-analysis {
  font-size: 13px;
  white-space: pre-wrap;
  word-break: break-word;
}
.behaviour-plan {
  font-size: 12px;
  color: #909399;
  margin-top: 4px;
  white-space: pre-wrap;
  word-break: break-word;
}
.behaviour-images {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}
.behaviour-image {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  cursor: pointer;
  transition: opacity 0.2s;
}
.behaviour-image:hover {
  opacity: 0.8;
}
.preview-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.preview-img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 4px;
}
.preview-close {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  user-select: none;
  z-index: 10000;
  transition: 0.2s;
}
.preview-close:hover {
  color: #ff4444;
}
/* 股票案例 */
.case-list {
  max-height: 360px;
  overflow-y: auto;
}
.case-item {
  padding: 10px 12px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.15s;
}
.case-item:last-child {
  border-bottom: none;
}
.case-item:hover {
  background: #f5f7fa;
}
.case-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}
.case-meta {
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: #999;
}
.case-detail {
  max-height: 460px;
  overflow-y: auto;
}
.case-detail-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
}
.case-detail-meta {
  display: flex;
  gap: 16px;
  font-size: 12px;
  color: #999;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebeef5;
}
.case-detail-content {
  font-size: 14px;
  line-height: 1.8;
  word-break: break-word;
}
.case-detail-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 8px 0;
}

.opinion-timeline {
  max-height: 500px;
  overflow-y: auto;
}
.opinion-item-header {
  margin-bottom: 6px;
}
.opinion-stock {
  font-size: 14px;
  font-weight: 600;
}
.opinion-content {
  font-size: 13px;
  line-height: 1.7;
  word-break: break-word;
}
.opinion-content :deep(img) {
  max-width: 100%;
  max-height: 300px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 8px 0;
  border-radius: 4px;
  transition: transform 0.2s;
}
.opinion-content :deep(img):hover {
  transform: scale(1.02);
}
</style>
