<template>
  <div
    class="flex justify-center items-center py-4 gap-4 bg-gray-800 text-gray-400 text-xl font-semibold"
  >
    <NuxtLink
      to="/"
      class="p-4 rounded-xl hover:bg-gray-400 hover:text-gray-800 duration-200"
      >Home</NuxtLink
    >
    <NuxtLink
      to="/projects"
      class="p-4 rounded-xl hover:bg-gray-400 hover:text-gray-800 duration-200"
    >
      Projects
    </NuxtLink>
    <NuxtLink
      to="/ideas"
      class="p-4 rounded-xl hover:bg-gray-400 hover:text-gray-800 duration-200"
      >Ideas</NuxtLink
    >
    <NuxtLink
      to="/blog"
      class="p-4 rounded-xl hover:bg-gray-400 hover:text-gray-800 duration-200"
      >Blog</NuxtLink
    >
    <NuxtLink
      to="/people"
      class="p-4 rounded-xl hover:bg-gray-400 hover:text-gray-800 duration-200"
      >People</NuxtLink
    >
  </div>
</template>

<script>
export default {};
</script>

<style>
.nuxt-link-exact-active {
  font-weight: bold;
  text-decoration-line: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 3px;
}
</style>
