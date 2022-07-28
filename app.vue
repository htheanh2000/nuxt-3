<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-white"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
<style>
html, body {
    overflow-x: hidden;
    width: 100%;
}

a,p, span, h1,h2,h3,h4,h5,h6,h7 {
  color: #000;
}
button {
  color: #000;
}


</style>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
</script>
