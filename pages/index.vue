<template>
  <div class="min-h-screen bg-gray-900">
    <div class="flex justify-center items-center py-16 gap-6 text-gray-400 text-4xl font-extrabold font-mono">
      <img src="/spooky_light_square.png" class="h-12 rounded-2xl" />
      subpar programming
    </div>
    <NavBar />
    

    <div class="relative flex items-top justify-center">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
          <h2 class="text-2xl leading-7 font-semibold">
            Welcome to your Nuxt Application
          </h2>
          <p class="mt-3 text-gray-600">
            We recommend you take a look at the
            <a
              href="https://nuxtjs.org"
              target="_blank"
              class="text-green-500 hover:underline"
              >Nuxt documentation</a
            >, whether you are new or have previous experience with the
            framework.<br />
          </p>
          <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
            To get started, remove
            <code class="bg-gray-100 text-sm p-1 rounded border"
              >components/Tutorial.vue</code
            >
            and start coding in
            <code class="bg-gray-100 text-sm p-1 rounded border"
              >pages/index.vue</code
            >. Have fun!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
