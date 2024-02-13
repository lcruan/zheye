<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
      >{{ title }}</a
    >
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup () {
    const isOpen = ref(false)
    // vue3 中提供新建一个ref对象来获取dom节点 *注意记得将ref返回出去，否则不生效
    // 在setup中还不是dom节点类型，挂载后则是dom节点，所以初始类型则是两者的联合类型
    const dropdownRef = ref<null | HTMLElement>(null) // 类似于 vue2中 结构中定义的 ref来获取 dom对象
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }

    const isClickOutside = useClickOutside(dropdownRef)

    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })

    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style></style>
