<!--------------------------------
 - @Author: Ronnie Zhang
 - @LastEditor: Ronnie Zhang
 - @LastEditTime: 2023/12/05 21:28:22
 - @Email: zclzone@outlook.com
 - Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 --------------------------------->

<template>
  <div class="p-12">
    <!-- 栏目一：概览卡片 -->
    <div class="mb-12">
      <n-card title="📊 概览" class="w-full">
        <div class="grid grid-cols-4 gap-8">
          <div class="p-8 bg-primary/5 rounded-lg">
            <div class="text-32 font-bold text-primary">{{stockList[0]?.stockFullName}}</div>
            <div class="text-14 opacity-60 mt-4">Lorem ipsum dolor sit amet</div>
          </div>
          <div class="p-8 bg-success/5 rounded-lg">
            <div class="text-32 font-bold text-success">1,234</div>
            <div class="text-14 opacity-60 mt-4">Consectetur adipiscing elit</div>
          </div>
          <div class="p-8 bg-warning/5 rounded-lg">
            <div class="text-32 font-bold text-warning">567</div>
            <div class="text-14 opacity-60 mt-4">Sed do eiusmod tempor</div>
          </div>
          <div class="p-8 bg-error/5 rounded-lg">
            <div class="text-32 font-bold text-error">89</div>
            <div class="text-14 opacity-60 mt-4">Incididunt ut labore</div>
          </div>
        </div>
      </n-card>
    </div>

    <!-- 栏目二：内容区域 -->
    <div class="grid grid-cols-3 gap-12 mb-12">
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

      <n-card title="📌 栏目B" segmented>
        <div class="space-y-4">
          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <i class="i-fe:star text-warning mr-4"></i>
            <span class="text-14">Item 1</span>
          </div>
          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <i class="i-fe:heart text-error mr-4"></i>
            <span class="text-14">Item 2</span>
          </div>
          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <i class="i-fe:check-circle text-success mr-4"></i>
            <span class="text-14">Item 3</span>
          </div>
          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <i class="i-fe:alert-circle text-warning mr-4"></i>
            <span class="text-14">Item 4</span>
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

      <n-card title="📉 栏目D" segmented>
        <div class="h-320">
          <VChart :option="chartOption2" autoresize />
        </div>
      </n-card>
    </div>

    <!-- 栏目四：详细列表 -->
    <n-card title="📋 栏目E" segmented>
      <n-table
        :columns="columns"
        :data="tableData"
        :pagination="{ pageSize: 5 }"
      />
    </n-card>
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
import { ref, onMounted, computed } from "vue";


const stockList = ref([])
const selectedStock = ref('')
const selectedDate = ref('')
const dateOptions = ref([])
const fundData = ref([])
const orderAnalysisDetail = ref('')

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

const columns = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Status', key: 'status' },
  { title: 'Date', key: 'date' },
]

const tableData = [
  { id: '1', name: 'Lorem ipsum', status: 'Active', date: '2024-01-01' },
  { id: '2', name: 'Dolor sit', status: 'Inactive', date: '2024-01-02' },
  { id: '3', name: 'Amet consectetur', status: 'Active', date: '2024-01-03' },
  { id: '4', name: 'Adipiscing elit', status: 'Pending', date: '2024-01-04' },
  { id: '5', name: 'Sed do eiusmod', status: 'Active', date: '2024-01-05' },
  { id: '6', name: 'Tempor incididunt', status: 'Inactive', date: '2024-01-06' },
  { id: '7', name: 'Ut labore', status: 'Active', date: '2024-01-07' },
  { id: '8', name: 'Et dolore', status: 'Pending', date: '2024-01-08' },
]
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
})
</script>
