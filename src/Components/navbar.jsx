import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', to: '/home', current: false },
  { name: 'Tentang', to: '/tentang', current: false },
  { name: 'Coba Sekarang', href: '#', current: true },
  { name: 'Tutorial', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-warna2 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-950 hover:bg-yellow-300 hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <h1 className='font-IBM'>Dimengerti</h1>
                </div> */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                     <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-950 text-warna1' : 'text-gray-950 hover:bg-gray-950 hover:text-warna1',
                          'rounded-md px-3 py-2 text-sm font-IBM font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                      {item.name}
                   </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full font-IBM bg-gray-950 p-1 text-gray-950 hover:text-warna1 hover:bg-gray-950"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <h1>Dimengerti</h1>
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full font-IBM bg-gray-950 p-1 text-gray-950 hover:text-warna1 hover:bg-gray-950">
                    
                      {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                      <h1>Apps</h1>
                    </Menu.Button>
                  </div>
                  
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                 <Link
                 key={item.name}
                 to={item.to}
                 className={classNames(
                   item.current ? 'bg-gray-900 text-warna1' : 'text-gray-950 hover:bg-gray-950 hover:text-warna1',
                   'block rounded-md px-3 py-2 text-base font-IBM font-medium'
                 )}
                 aria-current={item.current ? 'page' : undefined}
               >
                 {item.name}
               </Link>
             ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
