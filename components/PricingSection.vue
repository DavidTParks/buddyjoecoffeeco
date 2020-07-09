<template>
<div class="bg-gray-900" id="pricing">
  <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
    <div class="text-center">
      <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
        Pricing
      </h2>
      <p class="mt- text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
        Join the Buddy Joe Coffee Club
      </p>
      <p class="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-300 sm:mt-5 sm:text-2xl sm:leading-8">
        Get your coffee monthly without being pressed for time.
      </p>
    </div>
  </div>

  <div class="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
    <div class="relative z-0">
      <div class="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative lg:grid lg:grid-cols-7">
          <div class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
            <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
              <div class="flex-1 flex flex-col">
                <div class="bg-white px-6 py-10">
                  <div>
                    <h2 class="text-center text-2xl leading-8 font-medium text-gray-900">
                      1 Bag
                    </h2>
                    <div class="mt-4 flex items-center justify-center">
                      <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                        <span class="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span class="font-extrabold">
                          15
                        </span>
                      </span>
                      <span class="text-xl leading-7 font-medium text-gray-400">
                        /month
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                  <ul>
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        Access to preview blends
                      </p>
                    </li>
                    <li class="mt-4 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        Upgrade any time
                      </p>
                    </li>
                    <li class="mt-4 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        24/7 delivery
                      </p>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <label for="location" class="block text-sm leading-5 font-medium text-gray-700">Blend</label>
                    <select v-model="oneBagBlend" id="location" class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                      <option value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452190482584&v=35161535774872&g=146537&fn=1&ft=3&dp=$15.00&rdp=1&rup=1500">Cowboy Blend</option>
                      <option selected value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452197626008&v=35161565331608&g=146537&fn=1&ft=3&dp=$15.00&rdp=1&rup=1500">Breakfast Blend</option>
                      <option value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452194480280&v=35161548751000&g=146537&fn=1&ft=3&dp=$15.00&rdp=1&rup=1500">French Roast</option>
                    </select>
                  </div>
                  <div class="mt-4">
                    <div class="rounded-lg shadow-md">
                      <a :href="oneBagBlend" target="_blank" class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                        Subscribe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
            <div class="relative z-10 rounded-lg shadow-xl">
              <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-primary-600"></div>
              <div class="absolute inset-x-0 top-0 transform translate-y-px">
                <div class="flex justify-center transform -translate-y-1/2">
                  <span class="inline-flex rounded-full bg-primary-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                    Most popular
                  </span>
                </div>
              </div>
              <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                <div>
                  <h2 class="text-center text-3xl leading-9 font-semibold text-gray-900 sm:-mx-6">
                    2 Bags
                  </h2>
                  <div class="mt-4 flex items-center justify-center">
                    <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900 sm:text-6xl">
                      <span class="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span class="font-extrabold">
                        28
                      </span>
                    </span>
                    <span class="text-2xl leading-8 font-medium text-gray-400">
                      /month
                    </span>
                  </div>
                </div>
              </div>
              <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                <ul>
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      Quia rem est sed impedit magnam
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      Dolorem vero ratione voluptates
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      Qui sed ab doloribus voluptatem dolore
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      Laborum commodi molestiae id et fugiat
                    </p>
                  </li>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                      Nam ut ipsa nesciunt culpa modi dolor
                    </p>
                  </li>
                </ul>
                <div class="mt-8">
                    <label for="location" class="block text-sm leading-5 font-medium text-gray-700">Blend</label>
                    <select v-model="twoBagBlend" id="location" class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                      <option value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452190482584&v=35161535807640&g=146537&fn=1&ft=3&dp=$28.00&rdp=1&rup=2800">Cowboy Blend</option>
                      <option value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452197626008&v=35161565397144&g=146537&fn=1&ft=3&dp=$28.00&rdp=1&rup=2800">Breakfast Blend</option>
                      <option value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452194480280&v=35161548783768&g=146537&fn=1&ft=3&dp=$28.00&rdp=1&rup=2800" selected>French Roast</option>
                    </select>
                  </div>
                <div class="mt-4">
                  <div class="rounded-lg shadow-md">
                    <a :href="twoBagBlend" target="_blank" class="block w-full text-center rounded-lg border border-transparent bg-primary-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary transition ease-in-out duration-150">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
            <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
              <div class="flex-1 flex flex-col">
                <div class="bg-white px-6 py-10">
                  <div>
                    <h2 class="text-center text-2xl leading-8 font-medium text-gray-900">
                      3 Bags
                    </h2>
                    <div class="mt-4 flex items-center justify-center">
                      <span class="px-3 flex items-start text-6xl leading-none tracking-tight text-gray-900">
                        <span class="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span class="font-extrabold">
                          40
                        </span>
                      </span>
                      <span class="text-xl leading-7 font-medium text-gray-400">
                        /month
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                  <ul>
                    <li class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        Pariatur quod similique
                      </p>
                    </li>
                    <li class="mt-4 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        Sapiente libero doloribus
                      </p>
                    </li>
                    <li class="mt-4 flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                        Vel ipsa esse repudiandae
                      </p>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <label for="location" class="block text-sm leading-5 font-medium text-gray-700">Blend</label>
                    <select v-model="threeBagBlend" id="location" class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                      <option value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452190482584&v=35161535840408&g=146537&fn=1&ft=3&dp=$40.00&rdp=1&rup=4000" selected>Cowboy Blend</option>
                      <option value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452197626008&v=35161565429912&g=146537&fn=1&ft=3&dp=$40.00&rdp=1&rup=4000">Breakfast Blend</option>
                      <option value="https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452194480280&v=35161548816536&g=146537&fn=1&ft=3&dp=$40.00&rdp=1&rup=4000">French Roast</option>
                    </select>
                  </div>
                  <div class="mt-4">
                    <div class="rounded-lg shadow-md">
                      <a href="#" class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base leading-6 font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                        Subscribe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      oneBagBlend: 'https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452197626008&v=35161565331608&g=146537&fn=1&ft=3&dp=$15.00&rdp=1&rup=1500',
      twoBagBlend: 'https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452194480280&v=35161548783768&g=146537&fn=1&ft=3&dp=$28.00&rdp=1&rup=2800',
      threeBagBlend: 'https://buddy-joe-coffee-co.myshopify.com/tools/checkout/buy_button/add_to_cart?p=5452190482584&v=35161535840408&g=146537&fn=1&ft=3&dp=$40.00&rdp=1&rup=4000',
    }
  }
}
</script>