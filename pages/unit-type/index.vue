<template>
  <div class="container mx-auto">
    <p class="ml-5 md:ml-5 mb-0 text-6xl font-bold cursor-pointer ">Unit type</p>
    <div class="flex flex-wrap items-center justify-start">
      <div v-for="unit in unitTypes" :key="unit.unit_type_id">
        <NuxtLink  class="flex items-center p-5 mb-5 md:mb-0 md:p-10 cursor-pointer" :to="'/unit-type/'+unit.unit_type_id">
          <img class="w-50 mr-5" :src="unit.url" />
          <div>
            <p class="md:mb-8 text-2xl md:text-6xl  font-bold mt-4">{{ unit.unit_type_id }}</p>
            <p class="mb-2 md:mb-8 text-xl md:text-4xl  mt-2 md:mt-4 max-w-80">{{ unit.description }} </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import unitTypes from '@/mockup/data/unitTypes';
definePageMeta({
  layout: 'page',
})
</script>