<template>
  <div class="flex flex-col w-1/6 bg-gray-800 text-gray-400">
    <div class="flex flex-col py-4 items-center">
      <!-- Return Home Link-->
      <NuxtLink to="/" class="text-lg font-semibold">
        <div
          class="
            flex
            items-center
            px-4
            py-2
            rounded-xl
            space-x-2
            hover:shadow-lg
            hover:bg-gray-400
            hover:text-gray-800
            duration-200
          "
        >
          <IconsCottageOutlined class="h-6" />
          <p>SPP Home</p>
        </div>
      </NuxtLink>
    </div>

    <!-- child elements go here -->
    <slot />

    <!-- Footer Links -->
    <div class="absolute bottom-0 flex self-center py-8 space-x-3 bg-gray-800 text-gray-400">
      <a href="https://twitter.com/subpar_program" target="_blank">
        <IconsTwitter class="h-7 hover:text-gray-200 duration-200" />
      </a>
      <a href="https://github.com/subparprogramming" target="_blank">
        <IconsGithub class="h-7 hover:text-gray-200 duration-200" />
      </a>
      <a href="mailto:subparprogramming@googlegroups.com" target="_blank">
        <IconsMailOutline class="h-7 hover:text-gray-200 duration-200" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
};
</script>