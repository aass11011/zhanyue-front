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
            <n-select
              v-model="selectedStock"
              :options="stockOptions"
              placeholder="选择股票"
              :style="{ width: '160px' }"
            />
          </div>
        </template>
        <div class="space-y-6">
          <p class="text-14 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      <n-card title="📈 栏目C" segmented>
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
import {onMounted, computed} from "vue";


const stockList = ref([])
const selectedStock = ref('')

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
])

const chartOption1 = {
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [120, 200, 150, 80, 220, 180, 250],
      type: 'bar',
    },
  ],
}

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
    value: item.stockFullName
  }))
})

onMounted(async ()=>{
  const res = await getStockListApi()
  stockList.value = res.data.content || []
})
</script>
