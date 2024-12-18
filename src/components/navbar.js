import { Fragment } from 'react'
import * as React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {GatsbyImage, StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby"
import {theme} from "../theme/global-style"
import {ModeContext} from "./ModeProvider"
import {useContext} from "react"

import Buttontoggle from "./buttontoggle"
import {Image} from "react-bootstrap"

// importing logos


const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Productivity', href: '/productivity', current: false },
    { name: 'Blogs', href: '/blogs', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar( { location}) {
    const [darkMode, toggleDarkMode] = useContext(ModeContext);

    navigation.forEach(item=> item.current = false);
    navigation.forEach(item=> {
            if (location.pathname.includes(item.href)) {
                item.current = true;
                if (location.pathname !== "/" && item.name !== "Home") {
                    item.current = false;
                }
            }
            else {
                item.current = false;
            };
        }
    );

    return (
        <Disclosure as="nav" className={darkMode ? "bg-dark-nav sticky top-0 w-full z-50 mb-20 ": "bg-gray-100 sticky top-0 w-full z-50 mb-20 "}>
            {({ open }) => (
                <>

                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" >
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-white">
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
                                <div className="flex flex-shrink-0 items-center">
                                    <StaticImage
                                        className="h-8 w-auto"
                                        src="../../images/icons8-code-64.png"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                onClick={() => {
                                                    navigation.forEach(item=> {
                                                            if (location.pathname.includes(item.href) && item.name !== "Home" || item.name === "Home" && location.pathname.length ===1) {
                                                                item.current = true;
                                                            }
                                                            else {
                                                                item.current = false;
                                                            };
                                                        }
                                                    );
                                                }}
                                                to={item.href}
                                                className={classNames(
                                                    (location.pathname.includes(item.href) && item.name !== "Home" || item.name === "Home" && location.pathname.length ===1) ? darkMode ? 'bg-dark-nav-elements text-white' :'bg-gray-300 text-black'  : darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-black hover:bg-gray-200 hover:text-gray-900',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center ml-3" onClick={toggleDarkMode}>
                                <label className="relative cursor-pointer p-2" htmlFor="light-switch">
                                    <svg className="dark:hidden fill-black" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            className="fill-slate-600"
                                            d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                                        />
                                        <path className="fill-slate-600" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                                    </svg>
                                    <svg className="hidden dark:block fill-black" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                        <path className="fill-slate-400" d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                                        <path
                                            className="fill-slate-500"
                                            d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                                        />
                                    </svg>
                                    <span className="sr-only">Switch to light / dark version</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}

                                    className={classNames(
                                        (location.pathname.includes(item.href) && item.name !== "Home" || item.name === "Home" && location.pathname.length ===1) ? darkMode ? 'bg-dark-nav-elements text-white' :'bg-gray-300 text-black'  : darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-black hover:bg-gray-200 hover:text-gray-900',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

