<template>
  <NuxtLink :to="url" class="block font-bold text-2xl md:text-sm lg:text-base decoration-yellow-400 decoration-2 underline-offset-4"
    :class="{ underline: route.path == url, disabled: !active }">
    {{ name }}
  </NuxtLink>
</template>


<script lang="ts" setup>
const route = useRoute()
defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  url: {
    type: String,
    default: '/',
    required: true
  },
  active: {
    type: Boolean,
    default: true,
  },
  underline: {
    type: Boolean,
    default: false
  },
})

</script>
