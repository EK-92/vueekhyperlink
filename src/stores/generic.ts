import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'

export const genericStore = defineStore('theme', () => {
  const isMenuOpen = ref(false)
  const location = useRoute()
  const localStorageDarkTheme = useLocalStorage('darkTheme', 'true')
  const localStorageTriangularLayout = useLocalStorage('triangularLayout', 'false')
  const darkTheme = ref(true)
  const triangularLayout = ref(false)

  if (localStorageDarkTheme.value) {
    darkTheme.value = JSON.parse(localStorageDarkTheme.value)
  }
  if (localStorageTriangularLayout.value) {
    triangularLayout.value = JSON.parse(localStorageTriangularLayout.value)
  }
  const onHistoryPage = computed(() => location.path.slice(1) === 'history')
  const showTrianglesButton = computed(
    () => onHistoryPage.value && JSON.parse(localStorageTriangularLayout.value) === false
  )
  const showRectanglesButton = computed(
    () => onHistoryPage.value && JSON.parse(localStorageTriangularLayout.value) === true
  )

  function toggleTheme() {
    isMenuOpen.value = !isMenuOpen.value
    darkTheme.value = !darkTheme.value
    localStorageDarkTheme.value = JSON.stringify(darkTheme.value)
  }

  function toggleLayout() {
    isMenuOpen.value = !isMenuOpen.value
    triangularLayout.value = !triangularLayout.value
    localStorageTriangularLayout.value = JSON.stringify(triangularLayout.value)
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  return {
    darkTheme,
    isMenuOpen,
    onHistoryPage,
    showRectanglesButton,
    showTrianglesButton,
    triangularLayout,
    toggleLayout,
    toggleTheme,
    toggleMenu
  }
})
