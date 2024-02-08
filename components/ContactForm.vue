<template>
  <div>
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
                    for="nom"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    Nom / Prénom
                  </label>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                    >
                      <i
                        class="mdi mdi-account-outline text-gray-600 mdi-18px"
                      ></i>
                    </div>
                    <input
                      type="name"
                      id="name"
                      class="bg-gray-50 border border-gray-100 text-sm rounded-lg block w-full ps-10 p-2.5 appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="Léon Dupont"
                    />
                  </div>
                </div>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="telephone"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    Téléphone
                  </label>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                    >
                      <i
                        class="mdi mdi-phone-outline text-gray-600 mdi-18px"
                      ></i>
                    </div>
                    <input
                      type="tel"
                      id="tel"
                      class="bg-gray-50 border border-gray-100 text-sm rounded-lg block w-full ps-10 p-2.5 appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="06.07.89.01.49"
                    />
                  </div>
                </div>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="email"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    E-mail
                  </label>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                    >
                      <i
                        class="mdi mdi-email-outline text-gray-600 mdi-18px"
                      ></i>
                    </div>
                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border border-gray-100 text-sm rounded-lg block w-full ps-10 p-2.5 appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="name@flowbite.com"
                    />
                  </div>
                </div>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="email"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    Adresse
                  </label>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                    >
                      <i class="mdi mdi-map-outline text-gray-600 mdi-18px"></i>
                    </div>
                    <input
                      type="adresse"
                      id="adresse"
                      class="bg-gray-50 border border-gray-100 text-sm rounded-lg block w-full ps-10 p-2.5 appearance-none focus:outline-none focus:shadow-outline"
                      placeholder="16 rue du Général Leclerc, 60260 LAMORLAYE"
                    />
                  </div>
                </div>
                <div class="mb-1 sm:mb-2">
                  <label
                    for="email"
                    class="inline-block mb-1 bg-gradient-to-b from-[#03045E] to-[#023E8A] bg-clip-text text-transparent transition-colors hover:text-[#03045E] drop-shadow-md font-semibold"
                  >
                    Demande
                  </label>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                    >
                      <i
                        class="mdi mdi-wrench-outline text-gray-600 mdi-18px"
                      ></i>
                    </div>
                    <select
                      id="demande"
                      class="bg-gray-50 border border-gray-100 text-sm rounded-lg block w-full ps-10 p-2.5 appearance-none focus:outline-none focus:shadow-outline"
                    >
                      <option>Entretien de chaudière</option>
                      <option>Intervention plomberie</option>
                      <option>Intervention chauffage</option>
                      <option>Autres</option>
                    </select>
                  </div>
                </div>
                <div class="flex items-center mb-4">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded"
                  />
                  <label
                    for="checkbox-1"
                    class="ms-2 text-sm font-medium text-gray-800"
                  >
                    J'accepte la
                    <nuxt-link
                      to="/politique_de_confidentialité"
                      class="text-[#03045E] hover:underline"
                    >
                      politique de confidentialité
                    </nuxt-link>
                    du site.
                  </label>
                </div>
                <div class="mt-4 mb-2">
                  <button
                    @click="toggleForm()"
                    class="overflow-hidden p-0.5 relative rounded-md drop-shadow-4xl shadow-xl hover:shadow-lg inline-flex items-center justify-center w-full"
                  >
                    <div
                      class="glow-btn inset-0 w-[30px] h-[30px] absolute rotate-45"
                    ></div>
                    <div
                      class="inline-block w-full bg-[#03045E] bg-opacity-80 backdrop-blur-xl rounded-md z-10 relative"
                    >
                      <h1
                        class="uppercase py-3 px-6 text-gray-100 hover:text-gray-300 drop-shadow-md font-bold"
                      >
                        Envoyer
                      </h1>
                    </div>
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="opacity-30 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>
<script>
export default {
  methods: {
    toggleForm() {
      this.showForm = !this.showForm
    },
    data() {
      return {
        showForm: false,
      }
    },
  },
}
</script>
