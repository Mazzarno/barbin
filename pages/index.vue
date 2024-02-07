<template>
  <div class="scroll-smooth">
    <!-- CONTACT FORM -->
    <div
      :class="showForm ? 'contact_form-open' : 'contact_form-close'"
      v-if="showForm"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div
        class="relative w-auto my-6 mx-auto max-w-6xl overflow-hidden rounded-md drop-shadow-4xl shadow-xl hover:shadow-lg"
      >
        <!--content-->
        <div
          class="rounded-lg shadow-lg relative flex flex-col w-full bg-[#E5EBF3] bg-opacity-40 backdrop-blur-xl outline-none focus:outline-none"
        >
          <!--header-->
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-[#E5EBF3] border-opacity-40 rounded-t"
          >
            <h3
              class="text-xl bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold sm:text-center sm:text-2xl"
            >
              Nous contactez
            </h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-[#03045E] float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="toggleForm()"
            >
              <span
                class="bg-transparent text-[#03045E] h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div
            class="overflow-hidden relative rounded-md drop-shadow-4xl shadow-xl hover:shadow-lg"
          >
            <section class="inline-block w-full relative p-5 sm:p-10">
              <form>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="firstName"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    Nom / Prenom
                  </label>
                  <input
                    placeholder="Léon Dupond"
                    required=""
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#E5EBF3] backdrop-blur-xl rounded-xl drop-shadow-4xl shadow-2xl border border-gray-300 appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="lastName"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    Nom
                  </label>
                  <input
                    placeholder="Doe"
                    required=""
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#E5EBF3] backdrop-blur-xl rounded-xl drop-shadow-4xl shadow-2xl border border-gray-300 appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="email"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    E-mail
                  </label>
                  <input
                    placeholder="leon.dupont@example.fr"
                    required=""
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#E5EBF3] backdrop-blur-xl rounded-xl drop-shadow-4xl shadow-2xl border border-gray-300 appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="lastName"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    Nom
                  </label>
                  <input
                    placeholder="Doe"
                    required=""
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#E5EBF3] backdrop-blur-xl rounded-xl drop-shadow-4xl shadow-2xl border border-gray-300 appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="lastName"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    Nom
                  </label>
                  <input
                    required=""
                    type="text"
                    class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#E5EBF3] backdrop-blur-xl rounded-xl drop-shadow-4xl shadow-2xl border border-gray-300 appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div class="mt-4 mb-2 sm:mb-4">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <p class="text-xs text-gray-900 sm:text-sm">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="opacity-30 fixed inset-0 z-40 bg-black"></div>

    <!-- HEADER / CTA CONTACT I -->
    <section
      id="header"
      class="w-full h-screen bg-fixed bg-cover bg-center relative"
      style="background-image: url(/img/salle_de_bain.jpg);"
    >
      <div class="absolute bottom-5 z-10 left-1/2 transform -translate-x-1/2">
        <div
          @click="goToAbout"
          id="scroll"
          class="cursor-pointer mx-auto scroll rounded-full bg-[#E5EBF3] bg-opacity-40 backdrop-blur-xl drop-shadow-4xl shadow-2xl text-center p-6 hover:shadow hover:bg-[#d1d7e0]"
        ></div>
      </div>

      <div class="relative bg-gray-100 bg-opacity-80 h-screen">
        <div
          class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
        >
          <div class="flex items-center justify-between flex-row h-screen">
            <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h1
                class="bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md text-4xl font-semibold"
              >
                BARBIN CPS
                <br />
                Le spécialiste Chauffage Plomberie et Sanitaire
                <br />
                dans l'Oise et le Val d'Oise
              </h1>
              <p class="max-w-xl mb-4 text-base text-gray-900 md:text-lg">
                Bienvenue chez BARBIN CPS, votre partenaire de confiance pour
                des solutions de chauffage, plomberie et sanitaire de qualité.
              </p>
              <button
                @click="toggleForm()"
                class="overflow-hidden p-0.5 relative rounded-md drop-shadow-4xl shadow-xl hover:shadow-lg"
              >
                <div
                  class="glow-btn inset-0 w-[30px] h-[30px] absolute rotate-45"
                ></div>
                <div
                  class="inline-block w-full bg-[#E5EBF3] bg-opacity-40 backdrop-blur-xl rounded-md z-10 relative"
                >
                  <h1
                    class="uppercase py-3 px-6 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-bold"
                  >
                    Nous contactez
                  </h1>
                </div>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
    <!-- A PROPOS / CTA CONTACT II -->
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
        <button
          @click="toggleForm()"
          class="overflow-hidden p-0.5 relative rounded-md drop-shadow-4xl shadow-xl hover:shadow-lg"
        >
          <div
            class="glow-btn inset-0 w-[30px] h-[30px] absolute rotate-45"
          ></div>
          <div
            class="inline-block w-full bg-[#E5EBF3] bg-opacity-40 backdrop-blur-xl rounded-md z-10 relative"
          >
            <h1
              class="uppercase py-3 px-6 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-bold"
            >
              Nous contactez
            </h1>
          </div>
        </button>
      </div>
    </section>
    <!-- CHAUFFAGE -->
    <section
      id="chauffage"
      class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
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
      class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <h5
        id="title_certifications"
        class="mb-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Nos Certifications
      </h5>

      <div class="mx-auto max-w-screen-2xl">
        <swiper
          id="image_certifications"
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
      class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <h5
        id="title_plomberie"
        class="mb-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        La Plomberie
      </h5>
      <div class="grid gap-10 lg:grid-cols-2">
        <div>
          <h6
            id="block1_title_plomberie"
            class="mb-2 text-lg font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
          >
            Installation et rénovation
          </h6>
          <p id="block1_text_plomberie" class="text-lg text-gray-900">
            Un entretien de chaudière régulier effectué par BARBIN CPS prolonge
            la durée de vie de l'appareil, évitant ainsi les pannes coûteuses et
            assurant un fonctionnement fiable. De plus, cette pratique permet
            d'optimiser l'efficacité énergétique, réduisant les dépenses en
            énergie.
          </p>
          <h6
            id="block2_title_plomberie"
            class="mb-2 mt-5 text-lg font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
          >
            Intervention d'urgence et réparation
          </h6>
          <p id="block2_text_plomberie" class="text-lg text-gray-900">
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
              id="image1_plomberie"
              loading="lazy"
              class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="/img/plomberie2.jpg"
              alt=""
            />
            <NuxtImg
              id="image2_plomberie"
              loading="lazy"
              class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="/img/plomberie1.jpg"
              alt=""
            />
          </div>
          <div class="px-3">
            <NuxtImg
              id="image3_plomberie"
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
      class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <h5
        id="title_partenaires"
        class="tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Nos Partenaires
      </h5>

      <div class="mx-auto max-w-screen-2xl">
        <swiper
          id="image_partenaires"
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
      class="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20"
    >
      <h5
        id="title_sanitaire"
        class="pb-5 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Le Sanitaire
      </h5>
      <div class="relative">
        <div class="absolute inset-0">
          <div
            id="bg_sanitaire"
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
                      id="block1_logo_sanitaire"
                      class="mdi mdi-shower mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                    ></i>
                  </div>
                  <h6
                    id="block1_title_sanitaire"
                    class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  >
                    Installation Sanitaire
                  </h6>
                  <p id="block1_text_sanitaire" class="text-sm text-gray-900">
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
                    id="block2_logo_sanitaire"
                    class="mdi mdi-file-sign mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  id="block2_title_sanitaire"
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Entretien de chauffe-eau et adoucisseur
                </h6>
                <p id="block2_text_sanitaire" class="text-sm text-gray-900">
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
                    id="block3_logo_sanitaire"
                    class="mdi mdi-tools mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  id="block3_title_sanitaire"
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Intervention d'urgence et réparation
                </h6>
                <p id="block3_text_sanitaire" class="text-sm text-gray-900">
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
                    id="block4_logo_sanitaire"
                    class="mdi mdi-magnify mdi-24px bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                  ></i>
                </div>
                <h6
                  id="block4_title_sanitaire"
                  class="mb-2 font-semibold leading-5 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E]"
                >
                  Expert sanitaire
                </h6>
                <p id="block4_text_sanitaire" class="text-sm text-gray-900">
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
                id="image_sanitaire"
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
    <!-- CONTACT III -->
  </div>
</template>

<script>
import { useGsap } from '#gsap'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  mounted() {
    // ANIMATION ABOUT
    var tlAbout = useGsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        scrub: 1,
        end: () => '+=' + document.querySelector('#about').offsetHeight * 0.8,
        toggleActions: 'restart reverse none none',
      },
    })
    tlAbout
      .fromTo(
        '#title_about',
        { x: -100, y: -100, duration: 0, opacity: 0, scale: 1.5 },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#text1_about',
        { x: -100, y: 0, duration: 0, opacity: 0 },
        { x: 0, y: 0, duration: 3, opacity: 1 },
      )
      .fromTo(
        '#text2_about',
        { x: -100, y: 100, duration: 0, opacity: 0 },
        { x: 0, y: 0, duration: 3, opacity: 1 },
      )
      .fromTo(
        '#image_about',
        { x: 100, y: 0, duration: 0, opacity: 0 },
        { x: 0, y: 0, duration: 3, opacity: 1 },
      )
      .fromTo(
        '#text3_about',
        { x: 0, y: 100, duration: 0, opacity: 0 },
        { x: 0, y: 0, duration: 3, opacity: 1 },
      )
      .fromTo('#cta_about', { opacity: 0 }, { duration: 1, opacity: 1 })
    // ANIMATION CHAUFFAGE
    var tlChauffage = useGsap.timeline({
      scrollTrigger: {
        trigger: '#chauffage',
        start: 'top 90%',
        scrub: 1,
        end: () =>
          '+=' + document.querySelector('#chauffage').offsetHeight * 0.8,
        toggleActions: 'restart reverse none none',
      },
    })
    tlChauffage
      .fromTo(
        '#title_chauffage',
        {
          x: -100,
          y: -100,
          scale: 1.5,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#bg_chauffage',
        {
          x: 0,
          y: -10,
          scale: 1,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#block1_logo_chauffage, #block2_logo_chauffage, #block4_logo_chauffage, #block4_logo_chauffage',
        {
          x: -10,
          y: 0,
          scale: 1.25,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#block1_title_chauffage, #block2_title_chauffage, #block3_title_chauffage, #block4_title_chauffage',
        {
          x: -10,
          y: 0,
          scale: 1.25,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#image_chauffage',
        {
          x: 10,
          y: 0,
          scale: 1,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#block1_text_chauffage, #block2_text_chauffage, #block3_text_chauffage, #block4_text_chauffage',
        {
          x: -10,
          y: 0,
          scale: 1,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )

    //ANIMATION CERTIFICATION
    var tlPCertifications = useGsap.timeline({
      scrollTrigger: {
        trigger: '#certifications',
        start: 'top 90%',
        scrub: 1,
        end: () =>
          '+=' + document.querySelector('#certifications').offsetHeight,
        toggleActions: 'restart reverse none none',
      },
    })
    tlPCertifications
      .fromTo(
        '#title_certifications',
        {
          x: -100,
          y: -100,
          scale: 1.5,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#image_certifications',
        {
          x: -100,
          y: 0,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1 },
      )

    //ANIMATION PARTENAIRES
    var tlPartenaires = useGsap.timeline({
      scrollTrigger: {
        trigger: '#partenaires',
        start: 'top 90%',
        scrub: 1,
        end: () => '+=' + document.querySelector('#partenaires').offsetHeight,

        toggleActions: 'restart reverse none none',
      },
    })
    tlPartenaires
      .fromTo(
        '#title_partenaires',
        {
          x: -100,
          y: -100,
          scale: 1.5,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#image_partenaires',
        {
          x: -100,
          y: 0,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1 },
      )
    // ANIMATION PLOMBERIE

    var tlPlomberie = useGsap.timeline({
      scrollTrigger: {
        trigger: '#plomberie',
        start: 'top 90%',
        scrub: 1,
        end: () =>
          '+=' + document.querySelector('#plomberie').offsetHeight * 0.8,

        toggleActions: 'restart reverse none none',
      },
    })
    tlPlomberie
      .fromTo(
        '#title_plomberie',
        {
          x: -100,
          y: -100,
          scale: 1.5,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, scale: 1, duration: 3, opacity: 1 },
      )
      .fromTo(
        '#block1_title_plomberie, #block2_title_plomberie ',
        {
          x: -100,
          y: 0,
          scale: 1.25,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, scale: 1, duration: 3, opacity: 1 },
      )
      .fromTo(
        '#image1_plomberie',
        {
          x: 100,
          scale: 1.25,
          opacity: 0,
        },
        { x: 0, y: 0, scale: 1, duration: 3, opacity: 1 },
      )
      .fromTo(
        '#image3_plomberie',
        {
          x: 100,
          scale: 1.25,
          opacity: 0,
        },
        { x: 0, y: 0, scale: 1, duration: 3, opacity: 1 },
      )
      .fromTo(
        '#image2_plomberie',
        {
          x: 100,
          scale: 1.25,
          opacity: 0,
        },
        { x: 0, y: 0, scale: 1, duration: 3, opacity: 1 },
      )
      .fromTo(
        '#block1_text_plomberie, #block2_text_plomberie ',
        {
          x: -100,
          opacity: 0,
        },
        { x: 0, duration: 3, opacity: 1 },
      )
    // ANIMATION SANITAIRE

    var tlSanitaire = useGsap.timeline({
      scrollTrigger: {
        trigger: '#sanitaire',
        start: 'top 90%',
        scrub: 1,
        end: () =>
          '+=' + document.querySelector('#sanitaire').offsetHeight * 0.8,
        toggleActions: 'restart reverse none none',
      },
    })
    tlSanitaire
      .fromTo(
        '#title_sanitaire',
        {
          x: -100,
          y: -100,
          scale: 1.5,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#bg_sanitaire',
        {
          x: 0,
          y: -10,
          scale: 1,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#block1_logo_sanitaire, #block2_logo_sanitaire, #block4_logo_sanitaire, #block4_logo_sanitaire',
        {
          x: -10,
          y: 0,
          scale: 1.25,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#block1_title_sanitaire, #block2_title_sanitaire, #block3_title_sanitaire, #block4_title_sanitaire',
        {
          x: -10,
          y: 0,
          scale: 1.25,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#image_sanitaire',
        {
          x: 10,
          y: 0,
          scale: 1,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
      .fromTo(
        '#block1_text_sanitaire, #block2_text_sanitaire, #block3_text_sanitaire, #block4_text_sanitaire',
        {
          x: -10,
          y: 0,
          scale: 1,
          duration: 0,
          opacity: 0,
        },
        { x: 0, y: 0, duration: 3, opacity: 1, scale: 1 },
      )
  },

  methods: {
    goToAbout() {
      useGsap.to(window, { duration: 0, scrollTo: '#about' })
    },
    toggleForm() {
      this.showForm = !this.showForm
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { modules: [Autoplay, Pagination, Navigation] }
  },
  data() {
    return {
      showForm: false,
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
          img: '/img/chaudiere_viessmann.jpg',
          lien: 'https://www.viessmann.fr',
          id: 1,
        },
        {
          nom: 'Chaudière Frisquet',
          img: '/img/chaudiere_frisquet.jpg',
          lien: 'https://www.frisquet.fr',
          id: 2,
        },
        {
          nom: 'Chaudière De Dietrich',
          img: '/img/chaudiere_dedietrich.jpg',
          lien: 'https://www.dedietrich-thermique.fr',
          id: 3,
        },
        {
          nom: 'Chaudière Chappee',
          img: '/img/chaudiere_chappee.jpg',
          lien: 'https://www.chappee.com',
          id: 4,
        },
        {
          nom: 'Chaudière ELM Leblanc',
          img: '/img/chaudiere_ELM_Leblanc.jpg',
          lien: 'https://www.elmleblanc.fr',
          id: 5,
        },
      ],
      sdbs: [
        {
          nom: 'Salle de bain avec toilette',
          img: '/img/salle_de_bain_toilette1.jpg',
          id: 1,
        },
        {
          nom: 'Salle de bain avec toilette',
          img: '/img/salle_de_bain_toilette2.jpg',
          id: 2,
        },
        {
          nom: 'Salle de bain avec toilette',
          img: '/img/salle_de_bain_toilette3.jpg',
          id: 3,
        },
        {
          nom: 'Salle de bain',
          img: '/img/salle_de_bain1.jpg',
          id: 4,
        },
        {
          nom: 'Carrelage de douche',
          img: '/img/carrelage_douche.jpg',
          id: 5,
        },
        {
          nom: 'Toilette avec accès handicapé',
          img: '/img/toilette_handicap.jpg',
          id: 6,
        },
      ],
    }
  },
}
</script>

<style>
.contact_form {
  transition: all 330ms ease-out;
}
.contact_form-open {
  transform: translateX(0%);
}
.contact_form-close {
  transform: translateX(-100%);
}

.glow-btn {
  animation: move 5000ms linear infinite;
  offset-path: rect(0 100% 100% 0 round 20px);
  background: radial-gradient(#fff, #fff, transparent);
}
.glow {
  animation: move 5000ms linear infinite;
  offset-path: rect(0 100% 100% 0 round 20px);
  background: radial-gradient(#fff, #fff, transparent);
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

.scroll {
  width: 60px;
  height: 60px;
  border: 2px solid #03045e;
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
  &::before {
    content: '';
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
