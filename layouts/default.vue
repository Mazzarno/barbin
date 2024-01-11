<template>
  <div class="relative z-0">
    <!-- NAVBAR -->
    <nav
      :class="{ 'hidden-navbar': !showNavbar }"
      class="navbar inset-x-0 top-0 fixed z-40 bg-white opacity-95 w-full rounded-b-lg shadow-2xl"
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
            class="transition delay-100 hover:scale-105 duration-300 h-20 ml-5"
            alt="BARBIN C.P.S logo"
          />
        </NuxtLink>
        <ul class="items-center hidden space-x-8 lg:flex">
          <li>
            <NuxtLink to="/" aria-label="Chauffage" title="Chauffage">
              <h1
                class="link-btn text-xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors  hover:text-[#03045E]  delay-100 hover:scale-105 duration-300"
              >
                Chauffage
              </h1>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink href="/" aria-label="Plomberie" title="Plomberie">
              <h1
                class="link-btn text-xl mt-6 p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors  hover:text-[#03045E] delay-100 hover:scale-105 duration-300"
              >
                Plomberie
              </h1>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" aria-label="Sanitaire" title="Sanitaire">
              <h1
                class="link-btn text-xl p-4 mt-6 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors  hover:text-[#03045E]  delay-100 hover:scale-105 duration-300"
              >
                Sanitaire
              </h1>
            </NuxtLink>
          </li>
          <li>
            <h1
              @click="contact()"
              :class="{ hidden: showContact }"
              class="link-btn text-xl p-4 mt-6 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors  hover:text-[#03045E]  delay-100 hover:scale-105 duration-300"
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
            class="rounded focus:outline-none focus:shadow-outline text-2xl p-4 tracking-wide font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors  hover:text-[#03045E]  delay-100 hover:scale-105 duration-300"
            @click="drawer()"
          >
            <svg
              class="w-10 font-semibold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors duration-200 hover:text-[#03045E]"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- DRAWER -->
    <aside
      :class="openDrawer ? 'drawer-open' : 'drawer-close'"
      class="drawer w-80 z-50 fixed bg-white top-0 h-screen shadow-2xl"
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
    <main class="min-h-screen">
      <slot />
    </main>
    <!-- FOOTER -->
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
