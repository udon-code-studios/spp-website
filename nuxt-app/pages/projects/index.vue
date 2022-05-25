<template>
  <div class="max-w-3xl mx-auto py-16 space-y-6 text-gray-400">
    <p class="text-4xl font-semibold font-serif">Projects.</p>
    <p class="font-serif">
      This is an introductory sentence about the various SPP projects...
    </p>

    <div class="grid grid-flow-row grid-cols-2 gap-8">
      <!-- TheQuickBrownFox -->
      <a href="https://fox.subparprogramming.org" target="_blank">
        <div class="rounded-3xl overflow-hidden">
          <img src="~/assets/projects/tqbf.png" class="w-full rounded-t-3xl" />
          <div
            class="flex flex-col space-y-2 bg-blue-100 text-gray-700 pt-3 p-4"
          >
            <div class="flex justify-between">
              <p class="font-bold">The Quick Brown Fox</p>
              <div class="flex space-x-1">
                <IconsReact class="h-6" />
                <IconsTypescript class="h-6" />
                <IconsTailwind class="h-6" />
                <IconsNext class="h-6" />
              </div>
            </div>
            <p class="text-sm">
              A stylish web app with the best hiragana and katakana charts you
              will ever see.
            </p>
          </div>
        </div>
      </a>

      <!-- AlgoSim -->
      <a href="https://algosim.subparprogramming.org" target="_blank">
        <div class="rounded-3xl overflow-hidden">
          <img
            src="~/assets/projects/algosim.png"
            class="w-full rounded-t-3xl"
          />
          <div
            class="flex flex-col space-y-2 bg-blue-100 text-gray-700 pt-3 p-4"
          >
            <div class="flex justify-between">
              <p class="font-bold">AlgoSim v1.0</p>
              <div class="flex space-x-1">
                <IconsGo class="h-6" />
                <IconsReact class="h-6" />
                <IconsTailwind class="h-6" />
                <IconsNext class="h-6" />
              </div>
            </div>
            <p class="text-sm">
              A web app which lets users simulate custom algorithms on
              historical stock data.
            </p>
          </div>
        </div>
      </a>

      <!-- BibleDev -->
      <a href="https://bible.subparprogramming.org" target="_blank">
        <div class="rounded-3xl overflow-hidden col-span-2">
          <img
            src="~/assets/projects/bibledev.png"
            class="w-full rounded-t-3xl"
          />
          <div
            class="flex flex-col space-y-2 bg-blue-100 text-gray-700 pt-3 p-4"
          >
            <div class="flex justify-between">
              <p class="font-bold">BibleDev</p>
              <div class="flex space-x-1">
                <IconsMongo class="h-6" />
                <IconsReact class="h-6" />
                <IconsTailwind class="h-6" />
                <IconsNext class="h-6" />
              </div>
            </div>
            <p class="text-sm">
              A community-driven project to document the development history of
              the Holy Bible.
            </p>
          </div>
        </div>
      </a>

      <!-- Tread -->
      <a
        href="https://www.figma.com/file/TWYV7xecdrEHwpqji7a0ZE/Daily-Workout-Design-Draft-2?node-id=0%3A1"
        target="_blank"
      >
        <div class="rounded-3xl overflow-hidden col-span-2">
          <img src="~/assets/projects/tread.png" class="w-full rounded-t-3xl" />
          <div
            class="flex flex-col space-y-2 bg-blue-100 text-gray-700 pt-3 p-4"
          >
            <div class="flex justify-between">
              <p class="font-bold">Tread</p>
              <div class="flex space-x-1">
                <IconsFigma class="h-6" />
              </div>
            </div>
            <p class="text-sm">
              A mobile app design concept for a barefoot running transition app
              called Tread.
            </p>
          </div>
        </div>
      </a>
    </div>

    <p class="font-serif">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</template>

<script>
export default {
  layout: "page",
};
</script>

<style></style>
