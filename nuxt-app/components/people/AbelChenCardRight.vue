<template>
  <div class="grid grid-cols-5">
    <!-- Profile Content -->
    <div class="col-span-3 p-4 space-y-2 text-right">
      <!-- Name -->
      <div class="text-2xl font-semibold">Abel Chen</div>
      <!-- Role -->
      <div><strong>Role:</strong> Developer / Writer</div>
      <!-- Resume -->
      <div>
        <strong>Resume/CV:</strong> <a href="/resume-chen-abel-2021-09-17.pdf" target="_blank"><u>chen-abel-2021-09-17.pdf</u></a>
      </div>
      <!-- Quote -->
      <div class="italic font-serif">"I'm so f*cking good at taking dumps in people's faces."</div>
      <!-- Links -->
      <div class="flex pl-1 space-x-2 justify-end items-center">
        <a href="https://www.linkedin.com/in/abel-chen-75172a1b7" target="_blank">
          <IconsLinkedin class="h-8 hover:text-gray-900 duration-200" />
        </a>
        <a href="https://github.com/Ramenable" target="_blank">
          <IconsGithub class="h-9 hover:text-gray-900 duration-200" />
        </a>
        <a href="mailto:achen383@gatech.edu" target="_blank">
          <IconsMail class="h-9 hover:text-gray-900 duration-200" />
        </a>
      </div>
    </div>

    <!-- Profile Image -->
    <div class="col-span-2 p-4 justify-self-center self-center">
      <img src="~/assets/people/abel_chen_1000x1000.jpg" class="w-64 rounded-3xl" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>