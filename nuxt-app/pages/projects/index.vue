<template>
  <div class="max-w-3xl mx-auto py-16 space-y-6 text-gray-400">
    <p class="text-4xl font-semibold font-serif">Projects.</p>
    <p class="font-serif">
      This is an introductory sentence about the various SPP projects...
    </p>

    <div class="grid grid-flow-row grid-cols-2 gap-8">
      <a href="https://fox.subparprogramming.org" target="_blank">
        <div class="rounded-3xl overflow-hidden">
          <img src="~/assets/projects/tqbf.png" class="w-full rounded-t-3xl" />
          <div class="bg-blue-100 text-gray-700 pt-3 p-4 flex justify-between">
            <p class="font-bold">The Quick Brown Fox</p>
            <div class="flex space-x-1">
              <IconsReact class="h-6" />
              <IconsTypescript class="h-6" />
              <IconsTailwind class="h-6" />
              <IconsNext class="h-6" />
            </div>
          </div>
        </div>
      </a>
      <a href="https://algosim.subparprogramming.org" target="_blank">
        <div class="rounded-3xl overflow-hidden">
          <img
            src="~/assets/projects/algosim.png"
            class="w-full rounded-t-3xl"
          />
          <div class="bg-blue-100 text-gray-700 pt-3 p-4 flex justify-between">
            <p class="font-bold">AlgoSim v1.0</p>
            <div class="flex space-x-1">
              <IconsGo class="h-6" />
              <IconsReact class="h-6" />
              <IconsTailwind class="h-6" />
              <IconsNext class="h-6" />
            </div>
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
