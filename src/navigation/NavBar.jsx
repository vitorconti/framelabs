import { Link, Outlet } from "react-router-dom"
import imgLogo from '../assets/frame.png'
function NavBar() {


    return (
        <div className="flex flex-col">
            <div className="h-12 bg-gradient-to-r from-purple-600 justify-between items-center to-purple-900 flex flex-row p-8">
                <div>
                    <img src={imgLogo} className="rounded-full w-12 h-12" />
                </div>
                <div>
                    <ul className='text-white font-semibold flex text-xl space-x-2 font-sans'>
                        <li className=" cursor-pointer inline-block border border-violet-600 rounded py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white"><Link to='ordem-servico/cadastro'>Cadastro O.S.</Link></li>
                        <li className="cursor-pointer inline-block border border-violet-600 rounded py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white"><Link to='ordem-servico/consulta'>Consulta O.S.</Link></li>
                    </ul>
                </div>


            </div>
            <Outlet />
        </div>

    )
}

export default NavBar
