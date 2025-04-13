import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ResumeComparator from './Components/Comparer';
import { AnimatedBackground } from 'animated-backgrounds';
import HrLine from './Components/HrLine';

const navigation = [
  { name: 'Our Features', href: '#resume' },
  { name: 'How It Works', href: '#resume' },
  { name: 'Resume Compare', href: '#resume' },
  { name: 'Why Choose Us', href: '#resume' },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-mono">
      <AnimatedBackground animationName="starryNight" blendMode="difference" />
      {/* Background animation top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50 shadow-md">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              ResumeCompare
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </nav>

        <HrLine />

        {/* Mobile Navigation */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white dark:bg-gray-800 p-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                ResumeCompare
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="mt-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
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
            Empower Your Career with Smarter Resume Comparisons
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Upload two resumes and get a detailed, side-by-side comparison in seconds.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#resume"
              className="inline-block rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-gray-100"
            >
              Get started
            </a>
          </div>
        </div>
      </main>

      <HrLine />

      {/* Resume Comparison Section */}
      <section id="resume" className="relative px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Compare Resumes</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Upload two resumes and get a detailed comparison.
          </p>
        </div>
        <ResumeComparator />
      </section>

      <HrLine />

      {/* Features Section */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover the tools and features that make resume comparison seamless and effective.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Fast', description: 'Get instant results with our optimized comparison engine.' },
            { title: 'Accurate', description: 'Detailed insights to help you make informed decisions.' },
            { title: 'Secure', description: 'Your data is encrypted and handled with utmost care.' },
          ].map((feature, i) => (
            <div key={i} className="rounded-xl bg-white dark:bg-gray-700 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <HrLine />

      {/* New CTA Section */}
      <section className="text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Ready to Compare Resumes?</h2>
        <p className="mt-4 text-lg">
          Join thousands of professionals who trust us to optimize their resumes and land their dream jobs.
        </p>
        <div className="mt-6">
          <a
            href="#resume"
            className="inline-block rounded-md bg-white px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-gray-100"
          >
            Start Comparing Now
          </a>
        </div>
      </section>

      <HrLine />

      {/* Footer */}
      <footer className="px-6 py-10 text-center text-gray-600 dark:text-gray-400">
        <p className="text-lg font-semibold">&copy; 2025 Resume Compare. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
          <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a>
          <a href="#" className="text-indigo-600 hover:underline">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
