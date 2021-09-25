<template>
  <div class="grid grid-cols-5">
    <!-- Profile Image -->
    <div class="col-span-2 p-4 justify-self-center self-center">
      <img src="~/assets/people/abel_boy.jpg" class="w-64 rounded-3xl" />
    </div>

    <!-- Profile Content -->
    <div class="col-span-3 p-4 space-y-2">
      <!-- Name -->
      <div class="text-2xl font-semibold">Literal Monkey</div>
      <!-- Role -->
      <div><strong>Role:</strong> Professional Pooper</div>
      <!-- Resume -->
      <div>
        <strong>Resume/CV:</strong> <a href="/resume-chen-abel-2021-09-17.pdf" target="_blank"><u>chen-abel-2021-09-17.pdf</u></a>
      </div>
      <!-- Quote -->
      <div class="italic font-serif">"YEET! YEET! YEET! YEET! YEET! YEET!"</div>
      <!-- Links -->
      <div class="flex pl-1 space-x-2 items-center">
        <a href="https://www.linkedin.com/in/leo6" target="_blank">
          <IconsLinkedin class="h-8 hover:text-gray-200 duration-200" />
        </a>
        <a href="https://github.com/leo6liu" target="_blank">
          <IconsGithub class="h-9 hover:text-gray-200 duration-200" />
        </a>
        <a href="mailto:leo.battalora@gmail.com" target="_blank">
          <IconsMail class="h-9 hover:text-gray-200 duration-200" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>