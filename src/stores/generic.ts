import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'

export const genericStore = defineStore('theme', () => {
  const isMenuOpen = ref(false)
  const location = useRoute()
  const localStorageDarkTheme = useLocalStorage('darkTheme', 'true')
  const darkTheme = ref(true)

  if (localStorageDarkTheme.value) {
    darkTheme.value = JSON.parse(localStorageDarkTheme.value)
  }
  const onHistoryPage = computed(() => location.path.slice(1) === 'history')

  function toggleTheme() {
    isMenuOpen.value = !isMenuOpen.value
    darkTheme.value = !darkTheme.value
    localStorageDarkTheme.value = JSON.stringify(darkTheme.value)
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  return {
    darkTheme,
    isMenuOpen,
    onHistoryPage,
    toggleTheme,
    toggleMenu
  }
})
