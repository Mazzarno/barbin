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
     <div
      class="px-4 pt-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
        <h5
        class="py-2 tracking-wide bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] opacity-80 drop-shadow-md text-4xl font-semibold"
      >
        Le Chauffage
      </h5>
  </div>
    <!-- PARTENAIRE -->
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
          class="swiper"
          :loop="false"
          :autoplay="true"
          :pagination="true"
          :grabCursor="true"
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
    <div><h1>ABOUS US</h1></div>
    <div><h1>Nos certification</h1></div>
    <div><h1>CHAUFFAGE</h1></div>
    <div><h1>Nos partenaire</h1></div>

    <div><h1>PLOMBERIE</h1></div>

    <div><h1>Sanitaire</h1></div>
    <div><h1>MAPS</h1></div>
  </div>
</template>

<script lang="ts" setup></script>
<script>
export default {
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
