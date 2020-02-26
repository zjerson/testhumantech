import React from 'react';
import { NavLink } from 'react-router-dom';

const LIST_ROUTES = [
    { route: '/', label: 'Dashboard' },
    { route: '/movies', label: 'Peliculas' },
    { route: '/shifts', label: 'Turnos' },
    { route: '/administrators', label: 'Administradores' },
    { route: '/profile', label: 'Perfil' },
];

const AppSidebar = () => {

    const listNavLinks = LIST_ROUTES.map(({ route, label }, idx) => (
        <li key={idx + 1}>
            <NavLink exact to={route} className='py-2 px-4 block' activeClassName='active-route'>{label}</NavLink>
        </li>
    ));

    return (
        <aside className='w-64 h-full py-4 border-r border-gray-300'>
            <nav>
                <ul>
                    {listNavLinks}
                </ul>
            </nav>
        </aside>
    )
};

export default AppSidebar;