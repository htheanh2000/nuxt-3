<template>
  <div class="container w-10/12 m-auto">
    <h1 class="text-4xl font-bold">Availibility</h1>
    <div class="my-8 ">
      <img class="w-full" src="@/assets/images/availibility/room-type/1.svg" />
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const viewMode = useState('viewMode', () => 'Status')

</script>

<style>
.bg-dark-blue {
  background-color: #22385F;
}
</style>