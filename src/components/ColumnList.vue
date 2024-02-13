<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shasow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            class="rounded-circle border border-light w-25 my-3"
            alt="column.title"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string; // ? 设置avatar可选
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      // Array是一个数组构造函数，没办法断言为一个类型，ProType可以传入一个泛型
      // 如果需要将构造函数断言成一个类型，则可以使用PropType来操作
      type: Array as PropType<ColumnProps[]>, // 将数组断言为 ColumnProps类型数组
      required: true
    }
  },
  setup (props) {
    // 利用计算属性 处理传过来的的数据中 avatar没值情况 有本地空值图片代替
    const columnList = computed(() => {
      return props.list.map((column) => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.jpg')
        }
        return column
      })
    })
    return {
      columnList
    }
  }
})
</script>

<style></style>
