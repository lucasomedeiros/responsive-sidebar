import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Disclosure, DisclosureButton } from '@headlessui/react';

const SideNavBar = () => {
    return (
    <div>
        <Disclosure as="nav">
            <DisclosureButton className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                <GiHamburgerMenu
                className="block md:hidden h-6 w-6"
                aria-hidden="true"
            />
            </DisclosureButton>
        </Disclosure>
    </div>
    );
};

export default SideNavBar;