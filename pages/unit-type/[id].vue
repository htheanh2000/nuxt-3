<template>
  <div class="container mx-auto mt-10">
    <div class="flex justify-around">
      <div class="flex flex-col">
        <NuxtLink class="mb-8 text-xl cursor-pointer" to="/unit-type">Unit type &lt; {{ id }}</NuxtLink>
        <span class="text-6xl font-bold">{{ id }}</span>
        <span class="font-bold text-xl mt-4">{{ unitType?.description }}</span>
        <span class="font-bold text-xl ">65 sq m / 700 sq ft</span>

        <span class="font-bold text-xl my-4">Legend:</span>
        <span>DB: Distribution Box</span>
        <span>SC: Shoe Cabinet</span>
        <span>ST:Storage</span>
        <span>WIW: Walk-in-Wardrobe/Closet</span>
        <span>WD:Integrated Washer Dryer</span>
        <span>W&D: Washer and Dryer</span>
        <span>F:Fridge</span>
        <span>WC:Water Closet</span>
        <span>PES:Private Enclosed Space</span>
      </div>
      <!-- @/assets/images/unit-types/AG_UA1.svg -->
      <div class="">
        <img class="w-150" :src="$config.SUPABASE_STORAGE_URL + unitType?.url" />
      </div>

      <div class="flex flex-col">
        <span class="text-xl font-bold">Schematic Diagram</span>
        <button class="text-white  font-bold py-2 px-2 rounded my-2 flex items-center"
          style="background-color: #22385F ">Block 16 <img class="ml-2" src="@/assets/icons/down-white.svg" /></button>
       
        <v-select class="hover:bg-white" background-color="#fff"  outlined :items="blocks" label="blocks"></v-select>
      </div>
    </div>

    <div class="flex mt-24 justify-between">
      <h2 class="text-6xl font-bold mr-20">VR Tour</h2>
      <img src="@/assets/images/vr-tour.png" />
      <!-- This line make it img center -->
      <h2 class="text-6xl font-bold mr-20 invisible">VR Tour</h2>
    </div>

    <div class="flex mt-24 justify-between">
      <h2 class="text-6xl font-bold mr-20">Photo Gallery</h2>
      <div>
        <img src="@/assets/images/vr-tour.png" />
        <div class="flex">
          <img src="@/assets/icons/unit-type-icon/left.svg" />
          <div v-for="i in 5" :key="i" class="w-20 h-20 rounded-xl bg-black m-4" style="background-color: #C4C4C4;">
          </div>
          <img src="@/assets/icons/unit-type-icon/right.svg" />
        </div>
      </div>
      <!-- This line make it img center -->
      <h2 class="text-6xl font-bold mr-20 invisible">Photo Gallery</h2>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useProject } from '~~/stores/project';

definePageMeta({
  layout: 'page',
})
const project = useProject()
const route = useRoute()
const id = route.params.id as string
const unitType = project.unit_types.find((unit) => unit.unit_type_id === id)
const blocks = ["1st","3rd", "7th"]
</script>