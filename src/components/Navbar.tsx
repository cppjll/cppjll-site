import logo from '../images/bun.png'

export default function NavBar() {
    return (
        <div className='w-screen bg-secondary-focus'>
            <div className='navbar md:max-w-4xl mx-auto bg-secondary-focus'>
                {/* The left of the navbar, has hamburger menu on mobile, logo and pages on desktop */}
                <div className='navbar-start'>
                    <div className='hidden md:flex'>
                        <a href="/" className="btn btn-ghost normal-case text-xl text-accent hover:scale-[1.05] justify-center"><img src={logo.src} className="w-7 mx-2"></img>CPP JLL</a>
                    </div>
                </div>
                {/* The center of the navbar, has logo on mobile, nothing on desktop */}
                <div className='navbar-center md:hidden'>   
                    <a href="/" className="btn btn-ghost normal-case text-xl text-accent mx-3 pr-8"><img src={logo.src} className="w-7 mr-3"></img>CPP JLL</a>
                </div>
                {/* The right of the navbar, has dorpdown menu on mobile, text on desktop */}
                <div className='navbar-end'>
                    <ul className='hidden md:flex menu menu-horizontal px-2 text-accent'>
                        <li><a className="hover:text-green-100" href="/events">Events</a></li>
                        <li><a className="hover:text-green-100" href="/board">Board</a></li>
                    </ul>   
                    <details className='dropdown'>
                        <summary tabIndex={0} className='btn btn-ghost md:hidden'>
                            {/* Menu bar thing */}
                            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </summary>
                        <ul className='menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-slate-100 text-accent rounded-box w-52'>
                            <li><a className="hover:text-green-100" href="/events">Events</a></li>
                            <li><a className="hover:text-green-100" href="/board">Board</a></li>
                        </ul>
                    </details> 
                </div>
            </div>
        </div>
    )
}