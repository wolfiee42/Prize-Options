import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from "react-icons/ai";
const NavBar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products/:id', name: 'ProductDetail' },
        { id: 5, path: '/404', name: 'NotFound' },
    ];
    const [open, setOpen] = useState(false)


    return (
        <nav className="p-5">
            <div onClick={() => setOpen(!open)} className="text-3xl md:hidden">
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
                }

            </div>
            <ul className={`md:flex justify-end items-center gap-10 absolute md:static bg-gray-300 px-4 ${open ? 'top-16' : '-top-60'} duration-500`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;