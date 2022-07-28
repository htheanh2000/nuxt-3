<template>
  <button
    class="bg-yellow-400 hover:bg-blue-700 text-black hover:text-white font-bold py-2 px-2 lg:px-4 rounded " 
    :class="{invisible: !visible}">
    Enquire Now
  </button>
</template>

<script lang="ts" setup>
defineProps({
  visible: {
    type: Boolean,
    default: true
  },
 
})
</script>