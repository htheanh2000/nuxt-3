<template>
  <div class="h-20 "></div>
  <nav class="fixed w-screen h-20 z-100 bg-white border-gray-200 px-2 py-2.5 rounded  ">
    <div class="flex flex-wrap justify-between items-center m-auto">
      <NuxtLink href="/">
        <img id="logo"  src="@/assets/images/mogul-logo.svg" alt="Logo" />
      </NuxtLink>
      <div class="w-full w-auto flex items-center hidden lg:flex">
        <ul class="flex justify-start flex-row xl:space-x-8 md:space-x-2 items-center text-sm font-medium mx-4 align-baseline">
          <ProjectLogo/>
          <NavLink name="Site Plan" url="/"></NavLink>
          <BlockBox/>
          <NavLink name="Unit Type" url="/unit-type" ></NavLink>
          <NavLink name="Schematic Diagram" url="/schematic-diagram" ></NavLink>
        </ul>
       <EnquireButton/>
      </div>
      <MenuMobile/>
      <DevelopLogo/>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import MenuMobile from "./MenuMobile.vue";
import BlockBox from "./BlockBox.vue";
import NavLink from "./NavLink.vue";
import EnquireButton from "./EnquireButton.vue";
</script>

<style lang="scss">
#logo {
  width: 90px;
}

#cdl_logo {
  width: 60px;
}

.disabled {
  cursor: default;
  pointer-events: none;
  text-decoration: none;
  color: grey;
}
</style>
