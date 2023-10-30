import logo from '../images/bun.png'
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {
    return (
        <div className='navbar bg-secondary-focus '>
            {/* The left of the navbar, has hamburger menu on mobile, logo and pages on desktop */}
            <div className='navbar-start'>
                <details className='dropdown'>
                    <summary tabIndex={0} className='btn btn-ghost md:hidden'>
                        <AiOutlineMenu color='black' className='w-6 h-6 text-secondary'></AiOutlineMenu>
                    </summary>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-slate-100 text-accent rounded-box w-52'>
                        <li><a href="/events">Events</a></li>
                    </ul>
                </details>
            </div>
            {/* The center of the navbar, has logo on mobile, nothing on desktop */}
            <div className='navbar-center md:hidden'>   
                <a href="/" className="btn btn-ghost normal-case text-xl text-accent mx-3"><img src={logo.src} className="w-7 mr-3"></img>CPP JLL</a>
            </div>
            <div className='navbar-end'>
                <div className='hidden md:flex'>
                    <ul className='menu menu-horizontal px-1 text-accent'>
                        <li><a href="/events">Events</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}