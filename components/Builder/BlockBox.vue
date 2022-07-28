<template>
  <div class="relative" @click="onDropdownOpen = !onDropdownOpen" ref="target">
    <div
      class="block font-bold lg:text-base decoration-yellow-400 decoration-2 underline-offset-4 flex min-w-20 justify-center cursor-pointer"
      :class="{ underline: route.path.includes('block') }">
       <NuxtLink to="/block/1/view"> <p class="mr-2">Block</p></NuxtLink>
      <!-- <img src="@/assets/icons/down.svg" /> -->
    </div>
    <!-- <transition name="dropdown">
      <div v-if="onDropdownOpen" class="absolute border-1 bg-white rounded-lg top-0 w-full ">
        <NuxtLink to="/block/AMO/21"> <p class="font-bold text-sm my-2 text-center">Block 21</p></NuxtLink>
        <NuxtLink to="/block/AMO/23"> <p class="font-bold text-sm my-2 text-center">Block 23</p></NuxtLink>
      </div>
    </transition> -->
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const onDropdownOpen = useState('onDropdownOpen', () => false)
const block = useState('block', () => (route.params.block_id || ''))
const target = ref(null)

onClickOutside(target, () => onDropdownOpen.value = false)
onBeforeUpdate(() => {
  block.value = route.params.block_id as string || ''
})

</script>