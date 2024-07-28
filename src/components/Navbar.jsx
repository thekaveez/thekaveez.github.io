import { FaLinkedin } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">           
            <span className="text-2xl font-bold ml-2">thekaveez.me</span>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
        </div>
    </nav>
  )
}

export default Navbar