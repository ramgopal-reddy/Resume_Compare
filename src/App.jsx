import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Main from './Components/Main';
import { AnimatedBackground } from 'animated-backgrounds';
import { ChakraProvider } from '@chakra-ui/react';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
    <div>
      <AnimatedBackground animationName="starryNight" 
       blendMode="difference" />
      {/* Background animation top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        {/* <div
          className="relative left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] aspect-[1155/678] w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-400 to-indigo-400 dark:from-pink-600 dark:to-indigo-700 opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        /> */}
      </div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div> */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold">
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white dark:bg-gray-800 p-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <main className="relative px-6 pt-32 lg:px-8 z-10">
        <div className="mx-auto max-w-2xl py-24 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className=" px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Powerful tools to grow your business and streamline your workflow.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {['Fast', 'Secure', 'Scalable'].map((title, i) => (
            <div key={i} className="rounded-xl bg-white dark:bg-gray-700 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className=" text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Ready to get started?</h2>
        <p className="mt-4 text-lg">
          Join hundreds of businesses that trust us to grow and scale.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-gray-100"
          >
            Start Free Trial
          </a>
        </div>
      </section>



      {/* Footer */}
      <div className=" px-6 py-10 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>

      <Main/>

      {/* Background animation bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] aspect-[1155/678] w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-400 dark:from-pink-600 dark:to-indigo-700 opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
