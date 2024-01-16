<template>
  <div class="relative z-0">
    <!-- NAVBAR -->
    <nav
      :class="{ 'hidden-navbar': !showNavbar }"
      class="navbar inset-x-0 top-0 fixed z-40 bg-white bg-opacity-40 backdrop-blur-xl rounded-b-xl drop-shadow-4xl shadow-2xl w-full"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink
          to="/"
          aria-label="BARBIN C.P.S"
          title="BARBIN C.P.S"
          class="inline-flex items-center"
        >
          <NuxtImg
            loading="lazy"
            src="/logo_nav.svg"
            class="transition delay-100 hover:scale-105 duration-300 h-16 ml-5"
            alt="BARBIN C.P.S logo"
          />
        </NuxtLink>
        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <NuxtLink to="/" aria-label="Chauffage" title="Chauffage">
              <h1
                class="link-btn text-xl mt-3 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent hover:text-[#03045E] transition delay-100 hover:scale-105 duration-100"
              >
                Chauffage
              </h1>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/" aria-label="Plomberie" title="Plomberie">
              <h1
                class="link-btn text-xl mt-3 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent hover:text-[#03045E] transition delay-100 hover:scale-105 duration-100"
              >
                Plomberie
              </h1>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" aria-label="Sanitaire" title="Sanitaire">
              <h1
                class="link-btn text-xl p-4 mt-3 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent hover:text-[#03045E] transition delay-100 hover:scale-105 duration-100"
              >
                Sanitaire
              </h1>
            </NuxtLink>
          </li>
          <li>
            <h1
              @click="contact()"
              :class="{ hidden: showContact }"
              class="link-btn text-xl p-4 mt-3 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent hover:text-[#03045E] transition delay-100 hover:scale-105 duration-100"
            >
              Contact
            </h1>
            <div :class="{ 'hidden-contact': !showContact }">
              <a href="tel:0344212704">
                <h1
                  class="tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
                >
                  <i class="mdi mdi-phone-classic mdi-16px"></i>
                  03 44 21 27 04
                </h1>
              </a>
              <a href="tel:0607890149">
                <h1
                  class="tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
                >
                  <i class="mdi mdi-phone mdi-16px"></i>
                  06 07 89 01 49
                </h1>
              </a>
              <a href="mailto:contact@barbincps.fr">
                <h1
                  class="tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
                >
                  <i class="mdi mdi-email mdi-16px"></i>
                  contact@barbincps.fr
                </h1>
              </a>
            </div>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Ouvrir le menu mobile"
            title="Menu mobile"
            class="rounded focus:outline-none focus:shadow-outline text-2xl p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] delay-100 hover:scale-105 duration-300"
            @click="drawer()"
          >
            <i class="mdi mdi-menu"></i>
          </button>
        </div>
      </div>
    </nav>

    <!-- DRAWER -->
    <aside
      :class="openDrawer ? 'drawer-open' : 'drawer-close'"
      class="drawer w-80 z-50 fixed bg-white bg-opacity-40 backdrop-blur-xl rounded-b-xl drop-shadow-4xl shadow-2xl top-0 h-screen"
    >
      <div class="flex pr-2 justify-end">
        <button
          @click="drawer()"
          class="text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
        >
          <i class="mdi mdi-close"></i>
        </button>
      </div>

      <NuxtLink
        to="/"
        aria-label="BARBIN C.P.S"
        title="BARBIN C.P.S"
        class="inline-flex items-center"
      >
        <NuxtImg
          loading="lazy"
          src="/logo_nav.svg"
          class="h-16 ml-20 @tailwind utilities;"
          alt="BARBIN C.P.S logo"
        />
      </NuxtLink>

      <div class="flex flex-col justify-around items-center h-5/6">
        <ul class="list-none">
          <!--  <li class="my-8">
            <NuxtLink to="/">
              <span
                class="mdi mdi-home-outline mdi-24px text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              ></span>
              <span
                class="ml-3 text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              >
                Accueil
              </span>
            </NuxtLink>
          </li>-->
          <li class="my-8">
            <NuxtLink to="/">
              <span
                class="mdi mdi-water-outline mdi-24px text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              ></span>
              <span
                class="ml-3 text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              >
                Plomberie
              </span>
            </NuxtLink>
          </li>
          <li class="my-8">
            <NuxtLink to="">
              <span
                class="mdi mdi-home-thermometer-outline mdi-24px text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              ></span>
              <span
                class="ml-3 text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              >
                Chauffage
              </span>
            </NuxtLink>
          </li>
          <li class="my-0">
            <NuxtLink class="text-white" to="">
              <span
                class="mdi mdi-shower mdi-24px text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              ></span>
              <span
                class="ml-3 text-2xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              >
                Sanitaire
              </span>
            </NuxtLink>
          </li>
        </ul>
        <span class="inline-flex justify-center">
          <h1
            @click="contact()"
            :class="{ hidden: showContact }"
            class="text-xl p-4 mt-6 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
          >
            Contact
          </h1>
          <div :class="{ 'hidden-contact': !showContact }">
            <a href="tel:0344212704">
              <h1
                class="tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              >
                <i class="mdi mdi-phone-classic mdi-16px"></i>
                03 44 21 27 04
              </h1>
            </a>
            <a href="tel:0607890149">
              <h1
                class="tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              >
                <i class="mdi mdi-phone mdi-16px"></i>
                06 07 89 01 49
              </h1>
            </a>
            <a href="mailto:contact@barbincps.fr">
              <h1
                class="tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              >
                <i class="mdi mdi-email mdi-16px"></i>
                contact@barbincps.fr
              </h1>
            </a>
          </div>
        </span>
      </div>
    </aside>
    <!-- CTA 
    <div
      class="z-40 rounded-full fixed bottom-1/4 right-1/2 p-12 bg-white bg-opacity-40 backdrop-blur-xl drop-shadow-4xl shadow-xl"
    >
      <i class="mdi mdi-phone-outline"></i>
    </div>
-->
    <main class="min-h-screen">
      <slot />
    </main>
    <!-- FOOTER -->
    <footer
      class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="sm:col-span-2">
          <NuxtLink
            to="/"
            aria-label="BARBIN C.P.S"
            title="BARBIN C.P.S"
            class="inline-flex items-center"
          >
            <NuxtImg
              loading="lazy"
              src="/logo_nav.svg"
              class="transition delay-100 hover:scale-105 duration-300 h-16"
              alt="BARBIN C.P.S logo"
            />
          </NuxtLink>
          <div class="mt-6 lg:max-w-sm">
            <p class="text-sm text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p class="mt-4 text-sm text-gray-800">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div class="space-y-2 text-sm">
          <p class="text-base font-bold tracking-wide text-gray-900">
            Contacts
          </p>
          <div class="flex">
            <p class="mr-1 text-gray-800">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              850-123-5021
            </a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              info@lorem.mail
            </a>
          </div>
          <div class="flex">
            <p class="mr-1 text-gray-800">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row"
      >
        <p class="text-sm text-gray-600">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
        <ul
          class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
        >
          <li>
            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Plan du Site
            </a>
          </li>
          <li>
            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Politique de Confidentialité
            </a>
          </li>
          <li>
            <a
              href="/"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Mentions Légales
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    showContact: false,
    showNavbar: true,
    lastScrollPosition: 0,
    scrollOffset: 128,
    openDrawer: false,
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    drawer() {
      this.openDrawer = !this.openDrawer
    },
    contact() {
      this.showContact = !this.showContact
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
  },
}
</script>

from-[#03045E] to-[#023E8A]
<style scoped>
.link-btn:hover {
  filter: drop-shadow(0 0 1rem #023e8a);
}

.hidden-contact {
  display: none;
}
.navbar {
  transform: translateY(0);
  transition: transform 300ms linear;
}

.navbar.hidden-navbar {
  transform: translateY(-100%);
}
.drawer {
  transition: all 330ms ease-out;
}
.drawer-open {
  transform: translateX(0%);
}
.drawer-close {
  transform: translateX(-100%);
}

#WaterFlame {
  animation: waterflame 2s linear infinite normal none;
}

@keyframes waterflame {
  0% {
    transform: translateY(0px);
    transform: skewX(-10px);
  }
  50% {
    transform: translateY(-100px);
    transform: skewX(10px);
    opacity: 0;
  }
}

@keyframes water {
  50% {
    transform: translateY(0px);
    transform: skewX(-10px);
    opacity: 100;
  }
  100% {
    transform: translateY(-100px);
    transform: skewX(10px);
    opacity: 0;
  }
}
</style>
