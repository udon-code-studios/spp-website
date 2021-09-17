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
        Subpar Programming (SPP) is a team of inexperienced engineers and developers producing subpar projects, guides, and
        blog posts in hopes of one day producing something which could be deemed not-subpar. Learn more about the team
        on the <a href="/people" class="hover:underline text-blue-400">People</a> page, or check out some of the subpar
        source code hosted on our
        <a href="https://github.com/subparprogramming" target="_blank" class="hover:underline text-blue-400">GitHub</a>.
      </p>

      <!-- spp-website Technology Stack -->
      <div class="-mx-16 px-16 py-8 space-y-6 shadow-md rounded-lg bg-blue-100 text-gray-600">
        <p class="text-2xl text-center font-bold font-serif text-gray-900">
          What technologies were used to create this website?
        </p>

        <!-- Frontend Tools -->
        <hr class="border-2 border-gray-600 rounded-full" />
        <p class="text-2xl font-semibold">Frontend Tools</p>
        <div class="grid grid-cols-5 gap-y-4 items-center">
          <!-- NuxtJS -->
          <div class="col-span-2 justify-self-center">
            <a href="https://nuxtjs.org" target="_blank">
              <SvgNuxtLogoRect class="h-11 text-black" />
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
              <SvgTailwindLogoRect class="h-7" />
            </a>
          </div>
          <div class="col-span-3">
            <p>
              <a href="https://tailwindcss.com" target="_blank" class="hover:underline text-blue-500">Tailwind CSS</a>
              - "<em>A utility-first CSS framework for rapidly building custom user interfaces.</em>" It enables
              developers to style webpages without ever needing to leave the HTML.
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
              <SvgGitHubLogoSquare class="h-10" />
              <code>GitHub.</code>
            </div>
          </a>
        </div>

        <!-- Backend Services -->
        <hr class="border-2 border-gray-600 rounded-full" />
        <p class="text-2xl font-semibold">Backend Services</p>
        <div class="grid grid-cols-5 gap-y-4 items-center">
          <!-- NGINX -->
          <div class="col-span-2 justify-self-center">
            <a href="https://www.nginx.com" target="_blank">
              <SvgNginxLogoRect class="h-16" />
            </a>
          </div>
          <div class="col-span-3">
            <p>
              For this site,
              <a href="https://www.nginx.com" target="_blank" class="hover:underline text-blue-500">NGINX</a> is used as
              the web server and SSL handshake provider. It serves a static site generated from the NuxtJS framework.
            </p>
          </div>

          <!-- Certbot -->
          <div class="col-span-2 justify-self-center">
            <a href="https://certbot.eff.org" target="_blank">
              <SvgCertbotLogoRect class="h-10" />
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
              <SvgDockerLogoRect class="-mt-4 h-14" />
            </a>
          </div>
          <div class="col-span-3">
            <p>
              The NGINX and Certbot hosting services described above are deployed as a multi-container application using
              <a href="https://docs.docker.com/compose" target="_blank" class="hover:underline text-blue-500"
                >Docker Compose</a
              >. This enables the site to quickly move between host providers with minimal environment setup and
              configuration.
            </p>
          </div>
        </div>

        <!-- Link to https-docker GitHub Page -->
        <div>
          <a href="https://github.com/subparprogramming/https-docker" target="_blank">
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
              <code>See the containerized HTTPS server configuration process on</code>
              <SvgGitHubLogoSquare class="h-10" />
              <code>GitHub.</code>
            </div>
          </a>
        </div>

        <!-- Resume Backend Services -->
        <div class="grid grid-cols-5 gap-y-4 items-center">
          <!-- Google Cloud Platform -->
          <div class="col-span-2 justify-self-center">
            <a href="https://cloud.google.com" target="_blank">
              <SvgGcpLogoRect class="h-14" />
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
        <hr class="border-2 border-gray-600 rounded-full" />
        <p class="text-2xl font-semibold">Version Control System</p>
        <div class="grid grid-cols-5 gap-y-4 items-center">
          <!-- Git -->
          <div class="col-span-2 justify-self-center">
            <a href="https://git-scm.com" target="_blank">
              <SvgGitLogoRect class="h-16" />
            </a>
          </div>
          <div class="col-span-3">
            <p>
              Linus Torvald's world-renowned
              <a href="https://git-scm.com" target="_blank" class="hover:underline text-blue-500">Git</a> software is a
              free and open source distributed version control system. The master branch for all Subpar Programming
              projects, including this website are hosted on Microsoft
              <a href="https://github.com/subparprogramming" target="_blank" class="hover:underline text-blue-500"
                >GitHub</a
              >.
            </p>
          </div>
        </div>
      </div>

      <!-- Closing Text and Inspirational Quotes-->
      <p class="pt-8">
        This body of text down here serves no informational or informative purpose. It simply is to create the illusion
        that there is a lot to say about the goings-on at Subpar Programming. In a flailing attempt to make having read
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
        "<em class="font-serif"
          >The people who are crazy enough to think they can change the world are the ones who do.</em
        >"<br />&emsp;— Steven Paul Jobs
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
