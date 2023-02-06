import Sidebar from './Sidebar'
import Navbar from './Navbar'
import TransitionSidebar from './TransitionSidebar'
import useStateApp from '../store/store'
import { Outlet } from 'react-router-dom'

export default function Layout({ children }) {
    const toggleSidebar = useStateApp((state) => state.setSidebarOpen)
    return (
        <div>
            <TransitionSidebar handleClick={toggleSidebar} />
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                <Sidebar handleClick={toggleSidebar} />
            </div>
            <div className="flex flex-1 flex-col md:pl-64">
                <Navbar handleClick={toggleSidebar} />
                {children}
            </div>
        </div>        
    )
}