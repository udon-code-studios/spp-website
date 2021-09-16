<template>
  <div class="min-h-screen bg-gray-900 text-gray-400">
    <!-- Subpar Programming Banner -->
    <div class="flex justify-center items-center py-16 gap-6 text-4xl font-extrabold font-mono">
      <img src="/spooky_light_500x500.png" class="h-12 rounded-2xl" />
      subpar programming
    </div>

    <!-- Navigation Bar -->
    <NavBar class="sticky top-0" />

    <!-- Home Page Content -->
    <div class="max-w-2xl mx-auto py-16 space-y-6 text-gray-400">
      <p class="text-2xl font-semibold">What is Subpar Programming?</p>
      <p>
        Subpar Programming is a team of inexperienced engineers and developers producing subpar projects, guides, and
        blog posts in hopes of one day producing something which could be deemed not-subpar. Learn more about the team
        on the <a href="/people" class="hover:underline text-blue-400">People</a> page, or check out some of the subpar
        source code hosted on our
        <a href="https://github.com/subparprogramming" target="_blank" class="hover:underline text-blue-400">GitHub</a>.
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
        This body of text down here serves no informational or informative purpose. It simply is to create the illusion
        that there is a lot to say about the goings-on at Subpar Programming. In a desparate attempt to make having read
        this paragraph worthwhile, let us share with you a few inspirational quotes:
      </p>
      <p class="text-center">
        "<em class="font-serif"
          >I grasped the meaning of the greatest secret that human poetry and human thought and belief have to impart:
          The salvation of man is through love and in love.</em
        >"<br />&emsp;— Victor Emil Frankl
      </p>
      <p class="text-center">
        There is no 'i' in team "<em class="font-serif">but there is in win.</em>"<br />&emsp;— Michael Jeffrey Jordan
      </p>
      <p class="text-center">
        "<em class="font-serif">The people who are crazy enough to think they can change the world are the ones who do.</em>"<br />&emsp;—
        Steven Paul Jobs
      </p>
    </div>

    <!-- Page Footer -->
    <Footer class="relative bottom-0" />
  </div>
</template>

<script>
export default {};
</script>
