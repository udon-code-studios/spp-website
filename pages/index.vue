<template>
  <div class="min-h-screen bg-gray-900 text-gray-400">
    <!-- Subpar Programming Banner -->
    <div class="flex justify-center items-center py-16 gap-6 text-4xl font-extrabold font-mono ">
      <img src="/spooky_light_500x500.png" class="h-12 rounded-2xl" />
      subpar programming
    </div>

    <!-- Navigation Bar -->
    <NavBar class="sticky top-0" />

    <!-- Home Page Content -->
    <div class="max-w-3xl mx-auto py-16 space-y-6 text-gray-400">
      <p class="text-2xl font-semibold">What is Subpar Programming?</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>

      <div class="-mx-16 px-16 py-8 mt-8 space-y-6 shadow-md rounded-lg bg-blue-100 text-gray-600">
        <p class="text-2xl font-semibold">Technologies used in this website</p>

        <div class="flex space-x-6">
          <a href="https://nuxtjs.org" target="_blank">
            <SvgNuxtLogo class="-mb-3 h-11 text-black" />
          </a>
          <p>
            <a href="https://nuxtjs.org" target="_blank" class="hover:underline text-blue-500">NuxtJS</a>
            - a free and open source web application framework based on
            <a href="https://vuejs.org" target="_blank" class="hover:underline text-blue-500">Vue.js</a>,
            <a href="https://nodejs.org" target="_blank" class="hover:underline text-blue-500">Node.js</a>,
            <a href="https://webpack.js.org" target="_blank" class="hover:underline text-blue-500">Webpack</a>
            and
            <a href="https://babeljs.io" target="_blank" class="hover:underline text-blue-500">Babel.js</a>.
          </p>
        </div>

        <div class="flex space-x-6">
          <a href="https://tailwindcss.com" target="_blank">
            <SvgTailwindLogo class="h-7" />
          </a>
          <p>
            <a href="https://tailwindcss.com" target="_blank" class="hover:underline text-blue-500">Tailwind CSS</a>
            - "<em>A utility-first CSS framework for rapidly building custom user interfaces.</em>"
          </p>
        </div>

        <div
          class="
            flex
            justify-center
            items-center
            py-1
            rounded-lg
            border-2 border-gray-900
            space-x-2
            hover:bg-gray-900
            hover:text-gray-400
            duration-200
          "
        >
          <code>Find the source code for this site on</code>
          <SvgGitHubLogo class="h-10" />
          <code>GitHub.</code>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </div>

    <!-- Page Footer -->
    <Footer class="relative bottom-0" />
  </div>
</template>

<script>
export default {};
</script>
