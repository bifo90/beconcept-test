import { create } from 'zustand'
import {
    HomeIcon,
    UsersIcon,
    ChartBarIcon
  } from '@heroicons/react/24/outline'

const useStateApp = create((set) => ({
    login: localStorage.getItem("login") ? true : false,
    sidebarIsOpen: false,
    setSidebarOpen: () => set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen})),
    navigation: [
        { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
        { name: 'PageSpeed', href: '/pagespeed', icon: ChartBarIcon, current: false },
        { name: 'Lighthouse', href: '/lighthouse', icon: UsersIcon, current: false }
    ],
    userNavigation: [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' }
    ],
    user: {
        email: "stefanobifolco@gmail.com",
        password: "password",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        name: "Stefano",
        last_name: "Bifolco"
    },
    websiteStats: [
        { name: 'Total Subscribers', stat: '71,897' },
        { name: 'Avg. Open Rate', stat: '58.16%' },
        { name: 'Avg. Click Rate', stat: '24.57%' },
    ],
    websitePages: [
        { handle: "about" },
        { handle: "products-index" },
        { handle: "sale" }
    ],
    loadingRanges: [
        "0.2", "0.4", "0.6", "0.8", ">0.8"
    ],
    results: [
            

        { id: 1,
            title: "First Contentful Paint",
            result: Math.random().toFixed(2),
            date: "2022-11-20"
        },
        { id: 2,
            title: "Speed Index",
            result: Math.random().toFixed(2),
            date: "2022-11-20"
        },
        { id: 3,
            title: "Largest Contentful Paint",
            result: Math.random().toFixed(2),
            date: "2022-11-20" 
        },

        { id: 4,
            title: "First Contentful Paint",
            result: Math.random().toFixed(2),
            date: "2022-11-20" 
        },
        { id: 5,
            title: "Speed Index",
            result: Math.random().toFixed(2),
            date: "2022-11-20" 
        },
        { id: 6,
            title: "Largest Contentful Paint",
            result: Math.random().toFixed(2),
            date: "2022-11-20" 
        },                              
        { id: 7,
            title: "First Contentful Paint",
        result: Math.random().toFixed(2),
        date: "2022-11-22"  
        },
        {   id: 8,
            title: "Speed Index",
        result: Math.random().toFixed(2),
        date: "2022-11-22"  
        },
        { id: 9,
            title: "Largest Contentful Paint",
        result: Math.random().toFixed(2),
        date: "2022-11-22"  
        }  ,                              
        { id: 10,
            title: "First Contentful Paint",
        result: Math.random().toFixed(2),
        date: "2022-11-22"  
        },
        { id: 11,
            title: "Speed Index",
        result: Math.random().toFixed(2),
        date: "2022-11-22"  
        },
        { id: 12,
            title: "Largest Contentful Paint",
        result: Math.random().toFixed(2),
        date: "2022-11-22"  
        }    
    ]                            
}))
export default useStateApp