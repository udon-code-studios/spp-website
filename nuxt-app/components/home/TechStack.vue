<template>
  <!-- spp-website Technology Stack -->
  <div class="space-y-6">
    <p class="text-2xl text-center font-bold font-serif text-gray-900">
      What technologies were used to create this website?
    </p>

    <!-- Frontend Tools -->
    <hr class="border-2 border-gray-700 rounded-full" />
    <p class="text-2xl font-semibold">Frontend Tools</p>
    <div class="grid grid-cols-5 gap-y-4 items-center">
      <!-- NuxtJS -->
      <div class="col-span-2 justify-self-center">
        <a href="https://nuxtjs.org" target="_blank">
          <img src="~/assets/home/nuxtLogoRect.svg" alt="NuxtJS Logo" class="h-11 text-black" />
        </a>
      </div>
      <div class="col-span-3">
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

      <!-- Tailwind CSS-->
      <div class="col-span-2 justify-self-center">
        <a href="https://tailwindcss.com" target="_blank">
          <img src="~/assets/home/tailwindLogoRect.svg" alt="Tailwind CSS Logo" class="h-7" />
        </a>
      </div>
      <div class="col-span-3">
        <p>
          <a href="https://tailwindcss.com" target="_blank" class="hover:underline text-blue-500">Tailwind CSS</a>
          - "<em>A utility-first CSS framework for rapidly building custom user interfaces.</em>" It enables developers
          to style webpages without ever needing to leave the HTML.
        </p>
      </div>
    </div>

    <!-- Link to spp-website GitHub Page -->
    <div>
      <a href="https://github.com/subparprogramming/spp-website" target="_blank">
        <div
          class="
            flex flex-wrap
            justify-center
            items-center
            text-center
            p-2
            rounded-xl
            border-2 border-blue-100
            space-x-2
            hover:bg-gray-900
            hover:text-gray-400
            duration-200
          "
        >
          <code>Find the source code for this site on</code>
          <IconsGithub class="h-10" />
          <code>GitHub.</code>
        </div>
      </a>
    </div>

    <!-- Hosting Services -->
    <hr class="border-2 border-gray-700 rounded-full" />
    <p class="text-2xl font-semibold">Hosting Services</p>
    <div class="grid grid-cols-5 gap-y-4 items-center">
      <!-- NGINX -->
      <div class="col-span-2 justify-self-center">
        <a href="https://www.nginx.com" target="_blank">
          <img src="~/assets/home/nginxLogoRect.svg" alt="Nginx Logo" class="h-16" />
        </a>
      </div>
      <div class="col-span-3">
        <p>
          For this site,
          <a href="https://www.nginx.com" target="_blank" class="hover:underline text-blue-500">NGINX</a> is used as a
          reverse proxy server and SSL handshake provider. It serves the Nuxt app with Server-Side Rendering (SSR).
        </p>
      </div>

      <!-- Certbot -->
      <div class="col-span-2 justify-self-center">
        <a href="https://certbot.eff.org" target="_blank">
          <img src="~/assets/home/certbotLogoRect.svg" alt="Certbot Logo" class="h-10" />
        </a>
      </div>
      <div class="col-span-3">
        <p>
          <a href="https://certbot.eff.org" target="_blank" class="hover:underline text-blue-500">Certbot</a> uses
          <a href="https://letsencrypt.org" target="_blank" class="hover:underline text-blue-500">Let's Encrypt</a>
          SSL certificates to enable HTTPS connections. It automatically checks to renew these certificates every 12
          hours.
        </p>
      </div>

      <!-- Docker -->
      <div class="col-span-2 justify-self-center">
        <a href="https://www.docker.com" target="_blank">
          <img src="~/assets/home/dockerLogoRect.svg" alt="Docker Logo" class="-mt-4 h-14" />
        </a>
      </div>
      <div class="col-span-3">
        <p>
          The Nuxt server, as well as the NGINX and Certbot hosting services described above, are deployed as a
          multi-container application using
          <a href="https://docs.docker.com/compose" target="_blank" class="hover:underline text-blue-500">
            Docker Compose</a
          >. This enables the site to quickly move between hosts with minimal environment setup and configuration.
        </p>
      </div>
      
      <!-- Google Cloud Platform -->
      <div class="col-span-2 justify-self-center">
        <a href="https://cloud.google.com" target="_blank">
          <img src="~/assets/home/gcpLogoRect.svg" alt="GCP Logo" class="h-14" />
        </a>
      </div>
      <div class="col-span-3">
        <p>
          The containerized <u>subparprogramming.org</u> site is deployed on a
          <a href="https://cloud.google.com" target="_blank" class="hover:underline text-blue-500"
            >Google Cloud Platform</a
          >
          (GCP) Compute Engine instance.
        </p>
      </div>
    </div>

    <!-- Version Control System -->
    <hr class="border-2 border-gray-700 rounded-full" />
    <p class="text-2xl font-semibold">Version Control</p>
    <div class="grid grid-cols-5 gap-y-4 items-center">
      <!-- Git -->
      <div class="col-span-2 justify-self-center">
        <a href="https://git-scm.com" target="_blank">
          <img src="~/assets/home/gitLogoRect.svg" alt="Git Logo" class="h-16" />
        </a>
      </div>
      <div class="col-span-3">
        <p>
          Linus Torvald's world-renowned
          <a href="https://git-scm.com" target="_blank" class="hover:underline text-blue-500">Git</a> software is a free
          and open source distributed version control system. The master branch for all Subpar Programming projects,
          including this website are hosted on Microsoft
          <a href="https://github.com/subparprogramming" target="_blank" class="hover:underline text-blue-500">GitHub</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>