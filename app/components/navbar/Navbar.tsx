import { Link } from '@remix-run/react';
import { Bars3Icon } from '@heroicons/react/24/outline';

export const NavBar = () => {
    return (
        <header className='bg-white drop-shadow'>
            <nav
                className='mx-auto flex items-center justify-between p-6 lg:px-8'
                aria-label='Global'
            >
                <div className='flex lg:flex-none mr-8'>
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                </div>
                <div className='flex lg:flex-1'>
                    <Link to='/' className='-m-1.5 p-1.5'>
                        <img
                            className='h-8 w-120'
                            src='/logo.png'
                            alt='Your Company'
                        />
                        <span className='sr-only'>YooDooh demo</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};
