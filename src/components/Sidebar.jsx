import useStateApp from '../store/store'
import {classNames} from '../utils/lib'
import { Link, useSearchParams, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation()
    const navigation = useStateApp((state) => state.navigation)
    return (
        <div className="flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
            alt="Your Company"
          />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.href == location.pathname ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>        
    )
}