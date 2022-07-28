<template>
  <div class="relative w-screen h-screen overflow-scroll hidden-scroll-bar">
    <div class="origin-top-left" :style="`${width < 1024 ? 'transform: scale(2)' : ''}`">
      <img class="w-screen" src="@/assets/images/siteplan/bg-siteplan.png" />
        <!-- // circle layer -->
        <div v-if="viewMode == 'View Amenities'" v-for="site in siteplan" class="absolute z-1  flex flex-col-reverse items-center card"
          :style="`top: ${site.top}vw; left: ${site.left}vw;`">
          <div class="card__img z-10">
            <img :src="site.circle" class=" w-5 mx-1" />
          </div>
          <div class="card__info w-40 bg-white  rounded-xl flex flex-col px-2 py-2 justify-center ">
            <img v-if="site.img" class="rounded-xl w-full h-fit " :src="site.img" />
            <span class="text-center text-sm font-bold text-black">{{ site.name }} </span>
          </div>
        </div>
      </div>
    <!-- Top right button -->
    <div class="fixed right-0 top-25">
      <button v-for="mode in ['Siteplan', 'View Amenities']" :key="mode"
        class="h-8 rounded-full bg-white mr-4 px-4 text-gray text-sm border-gray" @click="viewMode = mode"
        :class="{ active: viewMode == mode }">{{ mode }} </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import siteplan from "~~/mockup/data/siteplan";
import { useScreenOrientation } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const {orientation} = useScreenOrientation()
onMounted(() => {
  window.scrollTo({ top: 600, left:10, behavior: 'smooth' })
})
definePageMeta({
  layout: 'page',
})
const viewMode = useState('viewMode', () => 'View Amenities')

</script>

<style lang="scss">
.siteplan {
  .storey {
    display: none;
  }

  .block {
    display: none;
  }
}

.card {
	&__info {
		display: none;
	}

	&:hover {
		z-index: 10;
	}

	&:hover>.card__info {
		display: flex;
	}
  transform: translate(-50%, -100%);
}

.active {
  background-color: #22385F;
  color: #fff;
}

.hidden-scroll-bar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
  }
}

</style>
