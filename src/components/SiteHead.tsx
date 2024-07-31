import { LogoIcon } from '@/components/Icons'
import { MenuIcon } from './Icons';

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink
} from '@/components/ui/navigation-menu'


import { navList } from '@/components/mock/nav-list'


const SiteHeader = () => {
    return (
        <header className='bg-gradient-to-r md:from-white md:from-60% md:to-[#800A7A] md:to-40% py-[23px]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='w-[60%] flex justify-between items-center'>

                        <a href="/">
                            <LogoIcon />
                        </a>

                        <NavigationMenu className='hidden md:flex'>
                            <NavigationMenuList className='gap-10'>
                                {navList.map(item => (
                                    <NavigationMenuItem key={item.label}>
                                        <NavigationMenuLink href={item.path}>
                                            {item.label}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className='w-[40%] justify-between items-center pl-12 pr-4  hidden md:flex'>
                        <a
                            className='flex items-center gap-4 text-white before:content-[url("./phone-icon.svg")]'
                            href='tel:+998712005400'
                        >
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.318 14.634C11.6695 13.6957 10.3043 12.3305 9.366 10.682L10.604 9.798C11.016 9.50378 11.1431 8.94807 10.9 8.504C10.1271 7.08968 9.66222 5.52779 9.536 3.921C9.49479 3.40093 9.0607 2.99993 8.539 3H4.077C3.56413 2.99989 3.13431 3.3878 3.082 3.898C3.027 4.428 3 4.962 3 5.5C3 14.06 9.94 21 18.5 21C19.038 21 19.572 20.973 20.102 20.918C20.6122 20.8657 21.0001 20.4359 21 19.923V15.461C21.0001 14.9393 20.5991 14.5052 20.079 14.464C18.4722 14.3378 16.9103 13.8729 15.496 13.1C15.0519 12.8569 14.4962 12.984 14.202 13.396L13.318 14.634ZM8.744 8.668L6.844 10.025C7.05628 10.5713 7.30691 11.102 7.594 11.613L7.627 11.671C8.74328 13.6324 10.3676 15.2567 12.329 16.373L12.387 16.406C12.898 16.6931 13.4287 16.9437 13.975 17.156L15.332 15.256C16.4959 15.7952 17.7312 16.1646 19 16.353V18.99C18.834 18.997 18.667 19 18.5 19C11.044 19 5 12.956 5.001 5.5C5.001 5.333 5.004 5.166 5.01 5H7.647C7.83535 6.26884 8.20478 7.50409 8.744 8.668Z" fill="#F1B301" />
                                </svg>
                            </span>
                            <span>
                                <span className='block text-sm'>(+99871)</span>
                                <span className='block text-2xl font-bold'>
                                    200-54-00
                                </span>
                            </span>
                        </a>

                        <span className='w-[1px] h-11 bg-white'></span>

                        <span className='flex gap-4'>
                            <span className='flex items-center gap-4 text-white'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H7ZM7 10H5V20H19V10H17V12H15V10H9V12H7V10ZM15 6V8H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6Z" fill="#F1B301" />
                                </svg>
                            </span>
                            <span>
                                <span className='block text-2xl text-white font-bold'>
                                    Korzina
                                </span>
                                <span className='block text-sm text-white'>0.00 UZS</span>
                            </span>
                        </span>

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </span>
                    </div>
                    <span className='md:hidden'>
                        <MenuIcon />
                    </span>
                </div>
            </div>
        </header>
    )
}

export default SiteHeader
