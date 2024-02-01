<template>
  <div class="scroll-smooth">
    <!-- HEADER -->
    <section
      id="header"
      class="w-full h-screen bg-fixed bg-cover bg-center flex flex-col justify-around items-center"
      style="background-image: url(/img/salle_de_bain.jpg)"
    >
      <div></div>
      <div
        id="title"
        class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-[#E5EBF3] bg-opacity-40 backdrop-blur-xl rounded-xl drop-shadow-4xl shadow-2xl text-center"
      >
        <h1
          class="p-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
        >
          BARBIN CPS
          <br />
          Le spécialiste Chauffage Plomberie et Sanitaire
          <br />
          dans l'Oise et le Val d'Oise
        </h1>
      </div>
      <div
        @click="goToAbout"
        id="scroll"
        class="cursor-pointer mx-auto scroll self-end rounded-full bg-[#E5EBF3] bg-opacity-40 backdrop-blur-xl drop-shadow-4xl shadow-2xl text-center p-6 hover:shadow hover:bg-[#d1d7e0]"
      ></div>
    </section>
    <!-- A PROPOS / CONTACT I -->
    <section
      id="about"
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="lg:pr-10">
          <h5
            id="title_about"
            class="pb-5 text-4xl font-bold tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent"
          >
            BARBIN CPS
            <br />
            Spécialiste Chauffage Plomberie et Sanitaire
            <span class="inline-block">depuis 1991</span>
          </h5>
          <p id="text1_about" class="mb-6 text-gray-900 text-lg">
            Bienvenue chez BARBIN CPS, votre partenaire de confiance en matière
            de chauffage, plomberie et sanitaire depuis 1991. Forts de notre
            expertise, nous sommes fiers de vous offrir des services de qualité,
            alliant rapidité d'intervention et savoir-faire dans l'Oise et le
            Val-d'Oise.
          </p>
          <p id="text2_about" class="mb-6 text-gray-900 text-lg">
            Notre équipe de professionnels qualifiés met tout en œuvre pour
            répondre à vos besoins en matière de chauffage, plomberie et
            sanitaire, que ce soit pour des installations, des réparations ou
            des entretiens.
          </p>
        </div>
        <div class="flex place-items-center">
          <NuxtImg
            id="image_about"
            loading="lazy"
            class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/img/chauffe-eau.jpg"
            alt="Chauffe eau dans salle de bain"
          />
        </div>
      </div>

      <div class="flex items-center justify-center mt-6">
        <p
          id="text3_about"
          class="text-lg font-bold bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent"
        >
          Besoin d'une intervention d'urgence, d'un devis gratuit ou vous voulez
          simplement prendre un rendez-vous ?
        </p>
      </div>
      <div class="flex items-center justify-center mt-6">
        <a
          id="cta_about"
          href="/"
          class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-opacity-90 backdrop-blur-xl drop-shadow-4xl shadow-2xl bg-[#03045E] hover:bg-[#023E8A] hover:shadow"
        >
          Contactez nous
        </a>
      </div>
    </section>
    <!-- CHAUFFAGE -->
    <section
      id="chauffage"
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5
        id="title_chauffage"
        class="pb-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Le Chauffage
      </h5>
      <div class="relative">
        <div class="absolute inset-0">
          <div
            id="bg_chauffage"
            class="absolute inset-y-0 z-0 w-full h-full bg-[#E5EBF3] bg-opacity-40 backdrop-blur-xl rounded-xl lg:w-3/4"
          ></div>
        </div>
        <div class="relative p-5">
          <div
            class="lg:gap-12 lg:row-gap-8 lg:grid lg:grid-cols-2 items-center"
          >
            <div class="lg:gap-12 lg:row-gap-5 lg:grid lg:grid-cols-2">
              <div class="relative">
                <div class="relative">
                  <div class="flex items-center justify-start">
                    <i
                      id="block1_logo_chauffage"
                      class="mdi mdi-water-boiler mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                    ></i>
                  </div>
                  <h6
                    id="block1_title_chauffage"
                    class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  >
                    Installation de chaudière
                  </h6>
                  <p id="block1_text_chauffage" class="text-sm text-gray-900">
                    L'installation d'une chaudière neuve par BARBIN CPS vous
                    garantit une efficacité énergétique optimale, réduisant
                    ainsi les coûts de chauffage tout en minimisant l'impact
                    environnemental. De plus, cela vous assure une installation
                    sécurisée et conforme aux normes.
                  </p>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-start">
                  <i
                    id="block2_logo_chauffage"
                    class="mdi mdi-file-sign mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  id="block2_title_chauffage"
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Entretien de chaudière
                </h6>
                <p id="block2_text_chauffage" class="text-sm text-gray-900">
                  Un entretien de chaudière régulier effectué par BARBIN CPS
                  prolonge la durée de vie de l'appareil, évitant ainsi les
                  pannes coûteuses et assurant un fonctionnement fiable. De
                  plus, cette pratique permet d'optimiser l'efficacité
                  énergétique, réduisant les dépenses en énergie.
                </p>
              </div>
              <div>
                <div class="flex justify-start lg:mt-0">
                  <i
                    id="block3_logo_chauffage"
                    class="mdi mdi-tools mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  id="block3_title_chauffage"
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Intervention d'urgence et réparation
                </h6>
                <p id="block3_text_chauffage" class="text-sm text-gray-900">
                  Les interventions de BARBIN CPS garantissent un rétablissement
                  rapide du chauffage, assurant ainsi le confort des occupants.
                  De plus, notre expertise garantit des solutions durables,
                  minimisant les risques de récidive des problèmes et assurant
                  la sécurité continue de l'installation.
                </p>
              </div>
              <div>
                <div class="flex items-center justify-start mt-8 lg:mt-0">
                  <i
                    id="block4_logo_chauffage"
                    class="mdi mdi-fire mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  id="block4_title_chauffage"
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Expert Gaz/Fioul
                </h6>
                <p id="block4_text_chauffage" class="text-sm text-gray-900">
                  BARBIN CPS intervient sur un grand nombre de marques de
                  chaudière, assurant ainsi des solutions sur mesure pour
                  l'efficacité énergétique et le confort thermique. Cette
                  expertise diversifiée vous offre la possibilité de prendre des
                  décisions éclairées et d'optimiser le fonctionnement de votre
                  système de chauffage en fonction de vos préférences.
                </p>
              </div>
            </div>
            <div id="image_chauffage">
              <swiper
                class="mySwiper mt-8 rounded-xl shadow-2xl"
                :loop="true"
                :autoplay="{
                  delay: 3000,
                }"
                :pagination="false"
                :grabCursor="false"
                :modules="modules"
              >
                <swiper-slide
                  v-for="chaudiere in chaudieres"
                  :key="chaudiere.id"
                  class="rounded-xl shadow-2xl"
                >
                  <a
                    :href="chaudiere.lien"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NuxtImg
                      class="lg:object-cover w-full rounded-xl shadow-2xl h-96"
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
    </section>
    <!-- CERTIFICATIONS -->
    <section
      id="certifications"
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5
        class="mb-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Nos Certifications
      </h5>

      <div class="mx-auto max-w-screen-2xl">
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
                class="flex h-[200px] w-[200px] items-center justify-center rounded-lg"
              >
                <NuxtImg
                  loading="lazy"
                  class="h-[200px] w-[200px] object-cover transition delay-100 hover:scale-110 duration-300"
                  :src="certification.img"
                  :alt="certification.nom"
                />
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- PLOMBERIE -->
    <section
      id="plomberie"
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20"
    >
      <h5
        class="mb-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        La Plomberie
      </h5>
      <div class="grid gap-10 lg:grid-cols-2">
        <div>
          <h6
            class="mb-2 text-lg font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
          >
            Installation et rénovation
          </h6>
          <p class="text-lg text-gray-900">
            Un entretien de chaudière régulier effectué par BARBIN CPS prolonge
            la durée de vie de l'appareil, évitant ainsi les pannes coûteuses et
            assurant un fonctionnement fiable. De plus, cette pratique permet
            d'optimiser l'efficacité énergétique, réduisant les dépenses en
            énergie.
          </p>
          <h6
            class="mb-2 mt-5 text-lg font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
          >
            Intervention d'urgence et réparation
          </h6>
          <p class="text-lg text-gray-900">
            Un entretien de chaudière régulier effectué par BARBIN CPS prolonge
            la durée de vie de l'appareil, évitant ainsi les pannes coûteuses et
            assurant un fonctionnement fiable. De plus, cette pratique permet
            d'optimiser l'efficacité énergétique, réduisant les dépenses en
            énergie.
          </p>
        </div>

        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <NuxtImg
              loading="lazy"
              class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="/img/plomberie2.jpg"
              alt=""
            />
            <NuxtImg
              loading="lazy"
              class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="/img/plomberie1.jpg"
              alt=""
            />
          </div>
          <div class="px-3">
            <NuxtImg
              loading="lazy"
              class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="/img/plomberie3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- PARTENAIRES -->
    <section
      id="partenaires"
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5
        class="tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Nos Partenaires
      </h5>

      <div class="mx-auto max-w-screen-2xl">
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
    </section>
    <!-- SANITAIRE -->
    <section
      id="sanitaire"
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h5
        class="pb-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Le Sanitaire
      </h5>
      <div class="relative">
        <div class="absolute inset-0">
          <div
            class="absolute inset-y-0 z-0 w-full h-full bg-[#E5EBF3] bg-opacity-40 backdrop-blur-xl rounded-xl lg:w-3/4"
          ></div>
        </div>
        <div class="relative p-5">
          <div
            class="lg:gap-12 lg:row-gap-8 lg:grid lg:grid-cols-2 items-center"
          >
            <div class="lg:gap-12 lg:row-gap-5 lg:grid lg:grid-cols-2">
              <div class="relative">
                <div class="relative">
                  <div class="flex items-center justify-start">
                    <i
                      class="mdi mdi-shower mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                    ></i>
                  </div>
                  <h6
                    class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  >
                    Installation Sanitaire
                  </h6>
                  <p class="text-sm text-gray-900">
                    BARBIN CPS vous garentis des installations sanitaires,
                    telles que toilettes, éviers, lavabos, douches, baignoires
                    et chauffe-eau conforments, fiables et sécurisées,
                    respectant les normes et minimisant les risques de pannes ou
                    de problèmes futurs.
                  </p>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-start">
                  <i
                    class="mdi mdi-file-sign mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Entretien de chauffe-eau et adoucisseur
                </h6>
                <p class="text-sm text-gray-900">
                  Faire appel à BARBIN CPS pour l'entretien de chauffe-eau et
                  d'adoucisseur garantit un fonctionnement optimal de ces
                  équipements, prolongeant ainsi leur durée de vie. De plus,
                  cette expertise assure une maintenance conforme aux normes,
                  contribuant à la performance énergétique et à la qualité de
                  l'eau.
                </p>
              </div>
              <div>
                <div class="flex justify-start lg:mt-0">
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
                  Les interventions de BARBIN CPS assurent un rétablissement
                  rapide de tout équipement sanitaire tels que les fuites d'eau,
                  les obstructions ou les dysfonctionnements des équipements.
                  L'expertise de BARBIN CPS garantit des interventions précises
                  et durables, assurant la fiabilité des équipements sanitaires.
                </p>
              </div>
              <div>
                <div class="flex items-center justify-start mt-8 lg:mt-0">
                  <i
                    class="mdi mdi-magnify mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Expert sanitaire
                </h6>
                <p class="text-sm text-gray-900">
                  BARBIN CPS, expert dans le catalogue sanitaire pour
                  l'installation et la réparation en pièces détachées des
                  équipements assure des solutions précises et compatibles,
                  garantissant ainsi une mise ou remise en état efficace et
                  durable.
                </p>
              </div>
            </div>
            <div>
              <swiper
                class="mySwiper mt-8 rounded-xl shadow-2xl"
                :loop="true"
                :autoplay="{
                  delay: 3000,
                }"
                :pagination="false"
                :grabCursor="false"
                :modules="modules"
              >
                <swiper-slide
                  v-for="sdb in sdbs"
                  :key="sdb.id"
                  class="rounded-xl shadow-2xl"
                >
                  <NuxtImg
                    class="lg:object-cover w-full rounded-xl shadow-2xl h-96"
                    :src="sdb.img"
                    :alt="sdb.nom"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- CONTACT II -->
    <section
      class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    ></section>
  </div>
</template>

<script>
import { useGsap } from "#gsap";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  mounted() {
    // ANIMATION ABOUT
    let tlAbout = useGsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scrub: 1,
        start: "top 80%",
        endTrigger: "#text2_about",
        end: "top 50%",
        toggleActions: "restart reverse none none",
      },
    });

    tlAbout
      .to("#title_about", { x: -100, y: -100, duration: 0, opacity: 0 })
      .to("#text1_about", { x: -100, y: 0, duration: 0, opacity: 0 })
      .to("#text2_about", { x: -100, y: 100, duration: 0, opacity: 0 })
      .to("#image_about", { x: 100, y: 0, duration: 0, opacity: 0 })
      .to("#text3_about", { x: 0, y: 100, duration: 0, opacity: 0 })
      .to("#cta_about", { x: 0, y: 0, duration: 0, opacity: 0 })
      .to("#title_about", { x: 0, y: 0, duration: 3, opacity: 1 })
      .to("#text1_about", { x: 0, y: 0, duration: 3, opacity: 1 })
      .to("#image_about", { x: 0, y: 0, duration: 3, opacity: 1 })
      .to("#text2_about", { x: 0, y: 0, duration: 3, opacity: 1 })
      .to("#text3_about", { x: 0, y: 0, duration: 3, opacity: 1 })
      .to("#cta_about", { x: 0, y: 0, duration: 3, opacity: 1 });

    // ANIMATION CHAUFFAGE
    let tlChauffage = useGsap.timeline({
      scrollTrigger: {
        trigger: "#chauffage",
        scrub: 4,
        start: "top 80%",
        endTrigger: "#image_chauffage",
        end: "top 50%",
        markers: true,
        toggleActions: "restart reverse none none",
      },
    });

    tlChauffage
      //SETUP
      .to("#title_chauffage", {
        x: -10,
        y: -10,
        scale: 3,
        duration: 0,
        opacity: 0,
      })
      .to("#bg_chauffage", {
        x: 0,
        y: -10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#block1_logo_chauffage", {
        x: -10,
        y: -10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#block1_title_chauffage", {
        x: -10,
        y: -10,
        scale: 1.5,
        duration: 0,
        opacity: 0,
      })
      .to("#block1_text_chauffage", {
        x: -10,
        y: -10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#block2_logo_chauffage", {
        x: 10,
        y: -10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#block2_title_chauffage", {
        x: 10,
        y: -10,
        scale: 1.5,
        duration: 0,
        opacity: 0,
      })
      .to("#block2_text_chauffage", {
        x: 10,
        y: -10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#block3_logo_chauffage", {
        x: -10,
        y: 10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#block3_title_chauffage", {
        x: -10,
        y: 10,
        scale: 1.5,
        duration: 0,
        opacity: 0,
      })
      .to("#block3_text_chauffage", {
        x: -10,
        y: 10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#block4_logo_chauffage", {
        x: 10,
        y: 10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#block4_title_chauffage", {
        x: 10,
        y: 10,
        scale: 1.5,
        duration: 0,
        opacity: 0,
      })
      .to("#block4_text_chauffage", {
        x: 10,
        y: 10,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      .to("#image_chauffage", {
        x: 10,
        y: 0,
        scale: 1,
        duration: 0,
        opacity: 0,
      })
      //ANIMATION
      .to("#title_chauffage", { x: 0, y: 0, scale: 1, duration: 3, opacity: 1 })
      .to("#bg_chauffage", { x: 0, y: 0, scale: 1, duration: 3, opacity: 1 })
      .to("#block1_logo_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block1_title_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block1_text_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block2_logo_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block2_title_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block2_text_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#image_chauffage", { x: 0, y: 0, scale: 1, duration: 3, opacity: 1 })
      .to("#block3_logo_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block3_title_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block3_text_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block4_logo_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block4_title_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      })
      .to("#block4_text_chauffage", {
        x: 0,
        y: 0,
        scale: 1,
        duration: 3,
        opacity: 1,
      });
  },

  methods: {
    goToAbout() {
      useGsap.to(window, { duration: 0, scrollTo: "#about" });
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { modules: [Autoplay, Pagination, Navigation] };
  },
  data() {
    return {
      partenaires: [
        {
          nom: "Frisquet",
          img: "/img/logo/frisquet.png",
          lien: "https://www.frisquet.fr",
          id: 1,
        },
        {
          nom: "De Dietrich",
          img: "/img/logo/dedietrich.png",
          lien: "https://www.dedietrich.org",
          id: 2,
        },
        {
          nom: "Viessmann",
          img: "/img/logo/viessmann.png",
          lien: "https://www.viessmann.fr/",
          id: 3,
        },
        {
          nom: "ELM Leblanc",
          img: "/img/logo/ELM.png",
          lien: "https://elmleblanc.fr",
          id: 4,
        },
        {
          nom: "Chappee",
          img: "/img/logo/chappee.png",
          lien: "https://www.chappee.fr",
          id: 4,
        },
        {
          nom: "Atlantic",
          img: "/img/logo/atlantic.png",
          lien: "https://www.atlantic.fr",
          id: 5,
        },
        {
          nom: "Acova",
          img: "/img/logo/acova.png",
          lien: "https://www.acova.fr",
          id: 6,
        },
        {
          nom: "Grohe",
          img: "/img/logo/grohe.png",
          lien: "https://www.grohe.fr",
          id: 7,
        },
        {
          nom: "Hansgrohe",
          img: "/img/logo/hansgrohe.png",
          lien: "https://www.hansgrohe.fr",
          id: 8,
        },
        {
          nom: "Toto",
          img: "/img/logo/toto.png",
          lien: "https://www.toto.fr",
          id: 9,
        },
        {
          nom: "Franke",
          img: "/img/logo/franke.png",
          lien: "https://www.franke.fr",
          id: 10,
        },
        {
          nom: "Nicoll",
          img: "/img/logo/nicoll.png",
          lien: "https://www.nicoll.fr",
          id: 11,
        },
        {
          nom: "Allia",
          img: "/img/logo/allia.png",
          lien: "https://www.allia.fr",
          id: 12,
        },
        {
          nom: "Geberit",
          img: "/img/logo/geberit.png",
          lien: "https://www.geberit.fr",
          id: 13,
        },
      ],
      certifications: [
        {
          nom: "Reconnu Garant de l’Environnement",
          img: "/img/logo/rge.png",
          lien: "https://www.ecologie.gouv.fr/label-reconnu-garant-lenvironnement-rge",
          id: 1,
        },
        {
          nom: "Qualibat",
          img: "/img/logo/qualibat.png",
          lien: "/",
          id: 2,
        },
        {
          nom: "Professionnel du Gaz",
          img: "/img/logo/pg.png",
          lien: "https://lesprofessionnelsdugaz.com/pg/18653",
          id: 3,
        },
      ],
      chaudieres: [
        {
          nom: "Chaudière Viessmann",
          img: "/img/chaudiere_viessmann.jpg",
          lien: "https://www.viessmann.fr",
          id: 1,
        },
        {
          nom: "Chaudière Frisquet",
          img: "/img/chaudiere_frisquet.jpg",
          lien: "https://www.frisquet.fr",
          id: 2,
        },
        {
          nom: "Chaudière De Dietrich",
          img: "/img/chaudiere_dedietrich.jpg",
          lien: "https://www.dedietrich-thermique.fr",
          id: 3,
        },
        {
          nom: "Chaudière Chappee",
          img: "/img/chaudiere_chappee.jpg",
          lien: "https://www.chappee.com",
          id: 4,
        },
        {
          nom: "Chaudière ELM Leblanc",
          img: "/img/chaudiere_ELM_Leblanc.jpg",
          lien: "https://www.elmleblanc.fr",
          id: 5,
        },
      ],
      sdbs: [
        {
          nom: "Salle de bain avec toilette",
          img: "/img/salle_de_bain_toilette1.jpg",
          id: 1,
        },
        {
          nom: "Salle de bain avec toilette",
          img: "/img/salle_de_bain_toilette2.jpg",
          id: 2,
        },
        {
          nom: "Salle de bain avec toilette",
          img: "/img/salle_de_bain_toilette3.jpg",
          id: 3,
        },
        {
          nom: "Salle de bain",
          img: "/img/salle_de_bain1.jpg",
          id: 4,
        },
        {
          nom: "Carrelage de douche",
          img: "/img/carrelage_douche.jpg",
          id: 5,
        },
        {
          nom: "Toilette avec accès handicapé",
          img: "/img/toilette_handicap.jpg",
          id: 6,
        },
      ],
    };
  },
};
</script>

<style>
.scroll {
  width: 60px;
  height: 60px;
  border: 2px solid #03045e;
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 18px;
    width: 18px;
    height: 18px;
    border-left: 2px solid #03045e;
    border-bottom: 2px solid #03045e;
    transform: rotate(-45deg);
  }
}

@keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}
</style>
