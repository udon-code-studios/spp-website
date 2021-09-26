<template>
  <div class="relative min-h-screen bg-gray-900 text-gray-400">
    <!-- Subpar Programming Banner -->
    <div class="flex justify-center items-center py-16 gap-6 text-4xl font-extrabold font-mono">
      <img src="/spooky_light_500x500.png" class="h-12 rounded-2xl" />
      subpar programming
    </div>

    <!-- Navigation Bar -->
    <NavBar class="sticky top-0" />

    <!-- Home Page Content -->
    <div class="max-w-2xl mx-auto py-16 space-y-6 text-gray-400">
      <!-- Introduction -->
      <p class="text-2xl font-semibold">What is Subpar Programming?</p>
      <p class="pb-8">
        Subpar Programming (SPP) is a team of inexperienced engineers and developers producing subpar projects, guides,
        and blog posts in hopes of one day producing something which could be deemed not-subpar. Learn more about the
        team on the <a href="/people" class="hover:underline text-blue-400">People</a> page, or check out some of the
        subpar source code hosted on our
        <a href="https://github.com/subparprogramming" target="_blank" class="hover:underline text-blue-400">GitHub</a>.
      </p>

      <HomeTechStack class="-mx-16 px-16 py-8 shadow-md rounded-lg bg-blue-100 text-gray-700" />

      <!-- Closing Text and Inspirational Quotes-->
      <p class="pt-8">
        This body of text down here serves no informative purpose. It simply is to create the illusion that there is a
        lot to say about the goings-on at SPP. In a flailing attempt to make having read this paragraph worthwhile, let
        us share with you a few inspirational quotes:
      </p>
      <p class="text-center">
        "<em class="font-serif"
          >I grasped the meaning of the greatest secret that human poetry and human thought and belief have to impart:
          The salvation of man is through love and in love.</em
        >"<br />&emsp;— Victor Frankl
      </p>
      <p class="text-center">
        There is no 'i' in team "<em class="font-serif">but there is in win.</em>"<br />&emsp;— Michael Jordan
      </p>
      <p class="text-center">
        "<em class="font-serif"
          >The people who are crazy enough to think they can change the world are the ones who do.</em
        >"<br />&emsp;— Steve Jobs
      </p>
    </div>

    <!-- Page Footer -->
    <div class="p-12"></div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>
