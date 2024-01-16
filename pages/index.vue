<template>
  <!-- HEADER -->
  <div>
    <div
      class="w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-center"
      style="background-image: url(/img/salle_de_bain.jpg);"
    >
      <div
        class="w-fit bg-white bg-opacity-40 backdrop-blur-xl rounded-xl drop-shadow-4xl shadow-2xl text-center"
      >
        <h1
          class="p-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
        >
          BARBIN CPS
          <br />
          Le spécialiste Chauffage Plomberie et Sanitaire
        </h1>
      </div>
    </div>
    <!-- ABOUT -->
    <div
      class="px-4 mt-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="lg:pr-10">
          <h5
            class="mb-4 text-4xl font-bold tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent"
          >
            BARBIN CPS
            <br />
            Spécialiste Chauffage Plomberie et Sanitaire
            <span class="inline-block">
              depuis 1991
            </span>
          </h5>
          <p class="mb-6 text-gray-900 text-lg">
            Bienvenue chez BARBIN CPS, votre partenaire de confiance en matière
            de chauffage, plomberie et sanitaire depuis 1991. Forts de notre
            expertise, nous sommes fiers de vous offrir des services de qualité,
            alliant rapidité d'intervention et savoir-faire dans l'Oise et le
            Val-d'Oise.
          </p>
          <p class="mb-6 text-gray-900 text-lg">
            Notre équipe de professionnels qualifiés met tout en œuvre pour
            répondre à vos besoins en matière de chauffage, plomberie et
            sanitaire, que ce soit pour des installations, des réparations ou
            des entretiens.
          </p>
        </div>
        <div class="flex place-items-center">
          <NuxtImg
            loading="lazy"
            class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/img/chauffe-eau.jpg"
            alt="Chauffe eau dans salle de bain"
          />
        </div>
      </div>
    </div>
    <!-- CHAUFFAGE -->
    <div
      class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="absolute inset-0">
        <div
          class="absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4"
        ></div>
        <h5
          class="p-8 absolute tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
        >
          Le Chauffage
        </h5>
      </div>
      <div class="relative pt-2">
        <div class="grid gap-12 row-gap-8 lg:grid-cols-2 items-center">
          <div class="grid gap-12 row-gap-5 md:grid-cols-2">
            <div class="relative">
              <div class="relative">
                <div
                  class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
                >
                  <i
                    class="mdi mdi-water-boiler mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Installation de chaudière
                </h6>
                <p class="text-sm text-gray-900">
                  L'installation d'une chaudière neuve par BARBIN CPS vous
                  garantit une efficacité énergétique optimale, réduisant ainsi
                  les coûts de chauffage tout en minimisant l'impact
                  environnemental. De plus, cela vous assure une installation
                  sécurisée et conforme aux normes.
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-file-sign mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Entretien de chaudière
              </h6>
              <p class="text-sm text-gray-900">
                Un entretien de chaudière régulier effectué par BARBIN CPS
                prolonge la durée de vie de l'appareil, évitant ainsi les pannes
                coûteuses et assurant un fonctionnement fiable. De plus, cette
                pratique permet d'optimiser l'efficacité énergétique, réduisant
                les dépenses en énergie.
              </p>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-tools mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Intervention d'urgence et réparation
              </h6>
              <p class="text-sm text-gray-900">
                Les interventions de BARBIN CPS garantissent un rétablissement
                rapide du chauffage, assurant ainsi le confort des occupants. De
                plus, notre expertise garantit des solutions durables,
                minimisant les risques de récidive des problèmes et assurant la
                sécurité continue de l'installation.
              </p>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-fire mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Expert Gaz/Fioul
              </h6>
              <p class="text-sm text-gray-900">
                BARBIN CPS intervient sur un grand nombre de marques de
                chaudière, assurant ainsi des solutions sur mesure pour
                l'efficacité énergétique et le confort thermique. Cette
                expertise diversifiée vous offre la possibilité de prendre des
                décisions éclairées et d'optimiser le fonctionnement de votre
                système de chauffage en fonction de vos préférences.
              </p>
            </div>
          </div>
          <div>
            <swiper
              class="mySwiper"
              :loop="true"
              :autoplay="{
                delay: 3000,
              }"
              :pagination="false"
              :grabCursor="false"
              :modules="modules"
            >
              <swiper-slide v-for="chaudiere in chaudieres" :key="chaudiere.id">
                <a
                  :href="chaudiere.lien"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NuxtImg
                    class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    :src="chaudiere.img"
                    :alt="chaudiere.nom"
                  />
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <!-- CERTIFICATIONS -->
    <div
      class="px-4 pt-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5
        class="tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Nos Certifications
      </h5>

      <div class="mx-auto max-w-screen-2xl pt-8 sm:pt-16 px-4 lg:px-6">
        <swiper
          class="swiper"
          :loop="false"
          :autoplay="true"
          :pagination="true"
          :grabCursor="true"
          :breakpoints="{
            1500: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            430: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            300: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }"
        >
          <swiper-slide
            v-for="certification in certifications"
            :key="certification.id"
          >
            <a
              :href="certification.lien"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="flex h-[300px] w-[300px] items-center justify-center rounded-lg"
              >
                <NuxtImg
                  loading="lazy"
                  class="h-[300px] w-[300px] object-cover transition delay-100 hover:scale-110 duration-300"
                  :src="certification.img"
                  :alt="certification.nom"
                />
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- PLOMBERIE -->
    <div
      class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="absolute inset-0">
        <div
          class="absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4"
        ></div>
        <h5
          class="p-8 absolute tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
        >
          La Plomberie
        </h5>
      </div>
      <div class="relative pt-2">
        <div class="grid gap-12 row-gap-8 lg:grid-cols-2 items-center">
          <div class="grid gap-12 row-gap-5 md:grid-cols-2">
            <div class="relative">
              <div class="relative">
                <div
                  class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
                >
                  <i
                    class="mdi mdi-water-boiler mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Installation de chaudière
                </h6>
                <p class="text-sm text-gray-900">
                  L'installation d'une chaudière neuve par BARBIN CPS vous
                  garantit une efficacité énergétique optimale, réduisant ainsi
                  les coûts de chauffage tout en minimisant l'impact
                  environnemental. De plus, cela vous assure une installation
                  sécurisée et conforme aux normes.
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-file-sign mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Entretien de chaudière
              </h6>
              <p class="text-sm text-gray-900">
                Un entretien de chaudière régulier effectué par BARBIN CPS
                prolonge la durée de vie de l'appareil, évitant ainsi les pannes
                coûteuses et assurant un fonctionnement fiable. De plus, cette
                pratique permet d'optimiser l'efficacité énergétique, réduisant
                les dépenses en énergie.
              </p>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-tools mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Intervention d'urgence et réparation
              </h6>
              <p class="text-sm text-gray-900">
                Les interventions de BARBIN CPS garantissent un rétablissement
                rapide du chauffage, assurant ainsi le confort des occupants. De
                plus, notre expertise garantit des solutions durables,
                minimisant les risques de récidive des problèmes et assurant la
                sécurité continue de l'installation.
              </p>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-fire mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Expert Gaz/Fioul
              </h6>
              <p class="text-sm text-gray-900">
                BARBIN CPS intervient sur un grand nombre de marques de
                chaudière, assurant ainsi des solutions sur mesure pour
                l'efficacité énergétique et le confort thermique. Cette
                expertise diversifiée vous offre la possibilité de prendre des
                décisions éclairées et d'optimiser le fonctionnement de votre
                système de chauffage en fonction de vos préférences.
              </p>
            </div>
          </div>
          <div>
            <swiper
              class="mySwiper"
              :loop="true"
              :autoplay="{
                delay: 3000,
              }"
              :pagination="false"
              :grabCursor="false"
              :modules="modules"
            >
              <swiper-slide v-for="chaudiere in chaudieres" :key="chaudiere.id">
                <a
                  :href="chaudiere.lien"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NuxtImg
                    class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    :src="chaudiere.img"
                    :alt="chaudiere.nom"
                  />
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <!-- PARTENAIRES -->
    <div
      class="px-4 pt-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5
        class="tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Nos Partenaires
      </h5>

      <div class="mx-auto max-w-screen-2xl pt-8 sm:pt-16 px-4 lg:px-6">
        <swiper
          class="mySwiper"
          :loop="true"
          :autoplay="{
            delay: 2500,
          }"
          :pagination="false"
          :grabCursor="true"
          :modules="modules"
          :breakpoints="{
            1500: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            430: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            300: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }"
        >
          <swiper-slide v-for="partenaire in partenaires" :key="partenaire.id">
            <a
              :href="partenaire.lien"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="flex h-[200px] w-[200px] items-center justify-center rounded-lg"
              >
                <NuxtImg
                  loading="lazy"
                  class="h-[200px] w-[200px] object-cover transition delay-100 hover:scale-110 duration-300"
                  :src="partenaire.img"
                  :alt="partenaire.nom"
                />
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- SANITAIRE -->
    <div
      class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="absolute inset-0">
        <div
          class="absolute inset-y-0 z-0 w-full h-full bg-gray-100 lg:w-3/4"
        ></div>
        <h5
          class="p-8 absolute tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
        >
          Le Sanitaire
        </h5>
      </div>
      <div class="relative pt-2">
        <div class="grid gap-12 row-gap-8 lg:grid-cols-2 items-center">
          <div class="grid gap-12 row-gap-5 md:grid-cols-2">
            <div class="relative">
              <div class="relative">
                <div
                  class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
                >
                  <i
                    class="mdi mdi-water-boiler mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Installation de chaudière
                </h6>
                <p class="text-sm text-gray-900">
                  L'installation d'une chaudière neuve par BARBIN CPS vous
                  garantit une efficacité énergétique optimale, réduisant ainsi
                  les coûts de chauffage tout en minimisant l'impact
                  environnemental. De plus, cela vous assure une installation
                  sécurisée et conforme aux normes.
                </p>
              </div>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-file-sign mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Entretien de chaudière
              </h6>
              <p class="text-sm text-gray-900">
                Un entretien de chaudière régulier effectué par BARBIN CPS
                prolonge la durée de vie de l'appareil, évitant ainsi les pannes
                coûteuses et assurant un fonctionnement fiable. De plus, cette
                pratique permet d'optimiser l'efficacité énergétique, réduisant
                les dépenses en énergie.
              </p>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-tools mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Intervention d'urgence et réparation
              </h6>
              <p class="text-sm text-gray-900">
                Les interventions de BARBIN CPS garantissent un rétablissement
                rapide du chauffage, assurant ainsi le confort des occupants. De
                plus, notre expertise garantit des solutions durables,
                minimisant les risques de récidive des problèmes et assurant la
                sécurité continue de l'installation.
              </p>
            </div>
            <div>
              <div
                class="flex items-center justify-center w-10 h-10 mb-3 rounded-full"
              >
                <i
                  class="mdi mdi-fire mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                ></i>
              </div>
              <h6
                class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
              >
                Expert Gaz/Fioul
              </h6>
              <p class="text-sm text-gray-900">
                BARBIN CPS intervient sur un grand nombre de marques de
                chaudière, assurant ainsi des solutions sur mesure pour
                l'efficacité énergétique et le confort thermique. Cette
                expertise diversifiée vous offre la possibilité de prendre des
                décisions éclairées et d'optimiser le fonctionnement de votre
                système de chauffage en fonction de vos préférences.
              </p>
            </div>
          </div>
          <div>
            <swiper
              class="mySwiper"
              :loop="true"
              :autoplay="{
                delay: 3000,
              }"
              :pagination="false"
              :grabCursor="false"
              :modules="modules"
            >
              <swiper-slide v-for="chaudiere in chaudieres" :key="chaudiere.id">
                <a
                  :href="chaudiere.lien"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <NuxtImg
                    class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                    :src="chaudiere.img"
                    :alt="chaudiere.nom"
                  />
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10437.496973778312!2d2.4392452!3d49.1555043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e647e648cf9b73%3A0xeccf53f4212f3c17!2sBarbin!5e0!3m2!1sfr!2sfr!4v1705412942285!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style="border: 0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { modules: [Autoplay, Pagination, Navigation] }
  },
  data() {
    return {
      partenaires: [
        {
          nom: 'Frisquet',
          img: '/img/logo/frisquet.png',
          lien: 'https://www.frisquet.fr',
          id: 1,
        },
        {
          nom: 'De Dietrich',
          img: '/img/logo/dedietrich.png',
          lien: 'https://www.dedietrich.org',
          id: 2,
        },
        {
          nom: 'Viessmann',
          img: '/img/logo/viessmann.png',
          lien: 'https://www.viessmann.fr/',
          id: 3,
        },
        {
          nom: 'ELM Leblanc',
          img: '/img/logo/ELM.png',
          lien: 'https://elmleblanc.fr',
          id: 4,
        },
        {
          nom: 'Chappee',
          img: '/img/logo/chappee.png',
          lien: 'https://www.chappee.fr',
          id: 4,
        },
        {
          nom: 'Atlantic',
          img: '/img/logo/atlantic.png',
          lien: 'https://www.atlantic.fr',
          id: 5,
        },
        {
          nom: 'Acova',
          img: '/img/logo/acova.png',
          lien: 'https://www.acova.fr',
          id: 6,
        },
        {
          nom: 'Grohe',
          img: '/img/logo/grohe.png',
          lien: 'https://www.grohe.fr',
          id: 7,
        },
        {
          nom: 'Hansgrohe',
          img: '/img/logo/hansgrohe.png',
          lien: 'https://www.hansgrohe.fr',
          id: 8,
        },
        {
          nom: 'Toto',
          img: '/img/logo/toto.png',
          lien: 'https://www.toto.fr',
          id: 9,
        },
        {
          nom: 'Franke',
          img: '/img/logo/franke.png',
          lien: 'https://www.franke.fr',
          id: 10,
        },
        {
          nom: 'Nicoll',
          img: '/img/logo/nicoll.png',
          lien: 'https://www.nicoll.fr',
          id: 11,
        },
        {
          nom: 'Allia',
          img: '/img/logo/allia.png',
          lien: 'https://www.allia.fr',
          id: 12,
        },
        {
          nom: 'Geberit',
          img: '/img/logo/geberit.png',
          lien: 'https://www.geberit.fr',
          id: 13,
        },
      ],
      certifications: [
        {
          nom: 'Reconnu Garant de l’Environnement',
          img: '/img/logo/rge.png',
          lien:
            'https://www.ecologie.gouv.fr/label-reconnu-garant-lenvironnement-rge',
          id: 1,
        },
        {
          nom: 'Qualibat',
          img: '/img/logo/qualibat.png',
          lien: '/',
          id: 2,
        },
        {
          nom: 'Professionnel du Gaz',
          img: '/img/logo/pg.png',
          lien: 'https://lesprofessionnelsdugaz.com/pg/18653',
          id: 3,
        },
      ],
      chaudieres: [
        {
          nom: 'Chaudière Viessmann',
          img: '/img/chaudière_viessmann.jpg',
          lien: 'https://www.viessmann.fr',
          id: 1,
        },
        {
          nom: 'Chaudière Frisquet',
          img: '/img/chaudière_frisquet.jpg',
          lien: 'https://www.frisquet.fr',
          id: 2,
        },
        {
          nom: 'Chaudière De Dietrich',
          img: '/img/chaudière_dedietrich.jpg',
          lien: 'https://www.dedietrich-thermique.fr',
          id: 3,
        },
        {
          nom: 'Chaudière Chappee',
          img: '/img/chaudière_chappee.jpg',
          lien: 'https://www.chappee.com',
          id: 4,
        },
        {
          nom: 'Chaudière ELM Leblanc',
          img: '/img/chaudière_ELM_Leblanc.jpg',
          lien: 'https://www.elmleblanc.fr',
          id: 5,
        },
      ],
    }
  },
}
</script>

<style>
.parallax {
  /* The image used */
  background-image: url('/img/salle_de_bain.jpg');
  /* Set a specific height */
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
