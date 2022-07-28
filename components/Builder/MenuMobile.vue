<template >
  <div class="fixed w-screen bg-white left-0 top-0 flex flex-col items-center lg:hidden">
    <!-- Header -->
    <div class="flex flex-wrap justify-between items-center w-screen p-4 h-15">
      <NuxtLink to="/">
        <img id="logo" src="@/assets/images/mogul-logo.svg" alt="Logo" />
      </NuxtLink>
      <button class="block lg:hidden" @click="isOpen = !isOpen">
        <img v-if="isOpen" src="@/assets/icons/close.svg" />
        <img v-else src="@/assets/icons/open.svg" />
      </button>
    </div>
    <!-- Container -->
    <transition name="appear" >
      <div v-if="isOpen" class="flex h-screen flex-col items-center ">
        <div class="mb-15 flex flex-col items-center">
          <NuxtLink to="/">
            <img class="w-40" src="@/assets/images/project-logo/logo.jpg" href="Logo" />
          </NuxtLink>
          <div class="m-7" ref="target">
            <BlockBox />
          </div>
          <div class="m-7">
            <NavLink name="Unit Type" url="/unit-type"></NavLink>
          </div>
          <div class="m-7">
            <NavLink name="Schematic Diagram" url="/schematic-diagram"></NavLink>
          </div>
        </div>
        <img class="w-30 mb-8" src="@/assets/images/developer-logo/1.jpg" />
      </div>
    </transition>

  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import BlockBox from './BlockBox.vue';
import NavLink from './NavLink.vue';

const route = useRoute()
const isOpen = useState('isOpen', () => false)
const target = ref()

watch(route, () => {
  isOpen.value = false
})

</script>

<style >
.appear-enter-active,
.appear-leave-active {
  transition: all 0.3s ease-in-out;
  transform: translateX(0);
}

.appear-enter-from,
.appear-leave-to {
  transform: translateX(100%);
}
</style>