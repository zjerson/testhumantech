import React from 'react';

import icon from './test-tube.png';

const AppHeader = () => {
    return (
        <header className='flex-shrink-0 h-16 px-10 border-b border-gray-300'>
            <div className='flex justify-between items-center h-full'>
                <figure>
                    <img className='w-12' src={icon} alt="test icon" />
                </figure>
                <div>
                    Admin
                </div>
            </div>
        </header>
    )
};

export default AppHeader;