<template >
  <div class="">
    <!-- building and background image-->
    <div class="relative " :class="{ 'md:w-1/2': route.params.mode == 'half' }">
      <Block1 />
      <img src="@/assets/images/block-view/enchante.jpg" class="w-screen absolute top-0 -z-1" />
    </div>

    <!-- scroll picker -->
    <!-- <div class="fixed hidden md:block" style="right: 20px;; top:120px">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink v-if="floor < 14" :to="`/block/${floor + 1}/${route.params.mode}`" class="mb-4 cursor-pointer">
          <img src="@/assets/icons/up.svg" />
        </NuxtLink>
        <button class=" text-white font-bold text-5xl rounded-lg w-20 h-20" style="background-color:#22385F">
          {{ floor }}
        </button>
        <NuxtLink v-if="floor > 1" :to="`/block/${floor - 1}/${route.params.mode}`" class="mt-4 cursor-pointer">
          <img src="@/assets/icons/down.svg" />
        </NuxtLink>
      </div>
    </div> -->


    <!-- detail view -->
    <div v-if="route.params.mode != 'view'" class="h-full fixed bg-white top-15 md:top-20 right-0 z-10"
      :style="`width: ${route.params.mode == 'half' && !mobile? '50%' : '100%'}`">
      <NuxtLink v-if="route.params.mode == 'half'" :to="`/block/${floor}/full`"
        class="absolute w-8 h-22 bg-white -left-8 rounded-l-[16px] items-center justify-center cursor-pointer hidden md:flex">
        <img src="@/assets/icons/left.svg" />
      </NuxtLink>
      <div class=" h-full overflow-scroll hiden-scrollbar" :class="{
        'md:px-20': route.params.mode == 'full',
      }">
        <!-- open full screen btn -->
        <div>
          <!-- header -->
          <div class="px-8 " :class="{ 'mt-8': !mobile }">
            <p v-if="route.params.mode == 'full' || mobile" class="text-xl md:text-2xl cursor-pointer text-black mt-5 mb-5 md:m-0">
              <NuxtLink :to="`/block/${floor}/view`">Block{{ route.params.floor }} &lt; </NuxtLink>
              <NuxtLink :to="`/block/${floor}/half`">Block{{ route.params.floor }} half &lt; </NuxtLink>
              <span>Block{{ route.params.floor }} full</span>
            </p>
          </div>
          <!-- content -->
          <div class="flex flex-col-reverse md:flex-col">
            <div class="p-8">
              <h3 class="text-2xl font-md mt-4">Apartment Type</h3>
              <p class="mt-4">D2, A3, C1, A2, D4, D1, B2, B1, B4B, C2B</p>
              <h3 class="text-2xl font-md mt-4">Unit(s) Available</h3>
              <p class="mt-4">0/10</p>
              <button class="text-white font-md text-xl py-1 rounded-full px-6 bg-red-500 mt-4">Sold out</button>
            </div>
            <div class="fixed hidden md:block" style="right:20px; top:120px">
              <div class="flex flex-col items-center justify-center">
                <NuxtLink v-if="floor < 14" :to="`/block/${floor + 1}/${route.params.mode}`"
                  class="mb-4 cursor-pointer">
                  <img src="@/assets/icons/up.svg" />
                </NuxtLink>
                <button class=" text-blue border-yellow-500 border-width-2 font-bold text-5xl rounded-[16px] w-20 h-20">
                  {{ floor }}
                </button>
                <NuxtLink v-if="floor > 1" :to="`/block/${floor - 1}/${route.params.mode}`" class="mt-4 cursor-pointer">
                  <img src="@/assets/icons/down.svg" />
                </NuxtLink>
              </div>
            </div>

            <img :src="FLOORS[floor - 1]" class="w-10/12 mx-auto md:mb-40" />
          </div>
        </div>
      </div>
    </div>


    <!-- footer -->
    <!-- <div class="fixed z-1 w-screen bottom-0 bg-white h-20 md:h-25">
      <div class="container flex flex-wrap justify-between items-center mx-auto p-4">
        <div class="hidden w-full md:flex justify-between items-center">
          <div>
            <h3 class="font-black text-2xl">2/10 Units Available</h3>
            <p class="text-2xl italic text-stone-600">Unit type(s): C1-R, B2-R</p>
          </div>
          <p class="text-blue-600 text-7xl font-bold " style="color:#22385F">Floor {{ floor }}</p>
        </div>
        <div class="md:hidden">
          <EnquireButton />
        </div>
      </div>
    </div> -->

  </div>
</template>


<script lang="ts" setup>
import EnquireButton from '~~/components/Builder/EnquireButton.vue';
import Block1 from '../../../components/Block.vue'
import FLOORS from '@/mockup/data/floorplans'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()

definePageMeta({
  layout: 'page',
})

const route = useRoute()

const floor = useState('floor', () => parseInt(route.params.floor as string) || 1)
const mobile = useState('mobile', () => width.value < 768)
onMounted(() => {
  floor.value = parseInt(route.params.floor as string) || 1
  mobile.value = width.value < 768
})



</script>

<style lang="scss">
polygon {
  fill: #ffffff00 !important;
  stroke: none !important;
}

polygon:hover {
  fill: #f8cc28 !important;
  stroke-miterlimit: 10;
  stroke-width: 5px;
}

.cls-1 {
  fill: none;
  stroke: none;
}

.floor_details {
  width: 100%;
  padding: 20px;
  padding-bottom: 100px;
}

.transform-left-50 {
  transform: translateX(-50%);
}

.-left-25 {
  left: -25%
}

.mobile-building-height {
  height: 1590px
}

.floor {
  opacity: 0;

  &:hover {
    opacity: 1;
  }
}

.hiden-scrollbar::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}
</style>

