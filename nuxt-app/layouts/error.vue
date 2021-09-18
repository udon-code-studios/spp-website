<template>
  <a href="/">
    <div class="flex flex-col justify-center items-center space-y-20 min-h-screen bg-gray-900 text-gray-400">
      <div class="flex justify-center items-center space-x-10">
        <img src="/spooky_light_500x500.png" class="w-64 rounded-3xl" />
        <div class="space-y-4 font-serif font-bold">
          <p class="text-8xl">Oh No!</p>
          <p class="text-3xl">
            An error occured . . .
            <br />
            likely due to some <em>subpar programming</em> 😅
          </p>
          <p>click anywhere to return to <u>subparprogramming.org</u></p>
        </div>
      </div>
      <div class="flex justify-center space-x-2">
        <code>error code: {{ error.statusCode }} </code>
        <code v-if="error.statusCode === 401">(unauthorized)</code>
        <code v-if="error.statusCode === 404">(page not found)</code>
        <code v-if="error.statusCode === 500">(internal server error)</code>
        <code v-if="error.statusCode === 502">(bad gateway)</code>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style>
</style>