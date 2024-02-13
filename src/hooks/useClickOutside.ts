import { ref, onMounted, onUnmounted, Ref } from 'vue'

// 判断是否点击到了 一个dom元素外面
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  // 告诉用户是否点到了外面
  const isClickOutside = ref(false)
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })

  return isClickOutside
}

export default useClickOutside
