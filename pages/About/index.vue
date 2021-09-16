<template>
  <a href="/">
    <div class="min-h-screen bg-gray-900 text-gray-400">
      <div class="flex justify-center items-center space-x-9">
        <div class="flex flex-col items-center">
          <div class="flex justify-center items-center space-x-9">
            <img src="/spooky_light_500x500.png" class="w-64 rounded-3xl" />
            <div class="space-y-4 font-serif font-bold">
              <p class="text-8xl">Oh No!</p>
              <p class="text-3xl">
                The page you were looking for was not found . . .
                <br />
                . . . likely due to some <em>subpar programming</em> 😅
              </p>
              <p>click anywhere to return to <u>subparprogramming.org</u></p>
            </div>
          </div>
          <div class="flex justify-center mt-12">
            <code>error code: 404</code>
          </div>
        </div>
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