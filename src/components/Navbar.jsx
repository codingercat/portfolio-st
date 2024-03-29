import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className = "header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-slate-50 
        items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text font-poppins">ST</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-bold font-lemon">
            <NavLink to="/about" className={({isActive}) => isActive ? 
            'text-blue-500' : 'text-black'}> 
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 
            'text-blue-500' : 'text-black'}> 
                Projects
            </NavLink>
        </nav>

    </header>
  )
}

export default Navbar