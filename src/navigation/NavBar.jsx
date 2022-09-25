import { Link, Outlet } from "react-router-dom"

function NavBar() {


    return (
        <div className="flex flex-col">
            <div className="h-12 bg-gradient-to-r from-purple-600 justify-end to-purple-900 flex items-center p-8 rounded-b-lg">
                <ul className='text-white font-semibold flex text-xl space-x-2 font-sans'>
                    <li className=" cursor-pointer inline-block border border-violet-600 rounded py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white"><Link to='ordem-servico/cadastro'>Cadastro O.S.</Link></li>
                    <li className="cursor-pointer inline-block border border-violet-600 rounded py-2 px-4 bg-violet-600 hover:bg-violet-700 text-white"><Link to='ordem-servico/consulta'>Consulta O.S.</Link></li>
                </ul>

            </div>
            <Outlet />
        </div>

    )
}

export default NavBar
