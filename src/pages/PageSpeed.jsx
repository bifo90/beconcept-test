import Layout from "../components/Layout";
import useStateApp from "../store/store";
import {Titleize} from '../utils/lib'
import Dashboard from "../components/Dashboard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DataTable from "../components/DataTable";

export default function PageSpeed() {
    const state = useStateApp.getState()
    const title = "Get a fast report of your website page"
    const [pages, setPages] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const results = state.results
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setPages(json))
        
    },[])
    return (
        <Layout>
            <Dashboard title={title}>
                <form className="w-full md:ml-0" action="#" method="GET">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                        Website
                    </label>
                    <select
                        id="website"
                        name="website"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        defaultValue="Select a website"
                    >
                        {pages.length > 0 && pages.map((page) => (
                            <option key={page.website} value={page.website}>{Titleize(page.website)}</option>
                        ))}
                    </select>                    
                    <label htmlFor="website-page" className="block text-sm font-medium text-gray-700">
                        Page
                    </label>
                    <select
                        id="website-page"
                        name="website-page"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        defaultValue="Select a page"
                    >
                        {state.websitePages.map((page) => (
                            <option key={page.handle} value={page.handle}>{Titleize(page.handle)}</option>
                        ))}
                    </select>     
                    <label htmlFor="loading-time" className="block text-sm font-medium text-gray-700">
                        Loading Time
                    </label>
                    <select
                        id="laoding-time"
                        name="loading-time"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        defaultValue="Select a page"
                    >
                        <option value="">Select if you want to filter speed page</option>
                        {state.loadingRanges.map((time) => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>                                    
                    <div className="flex justify-end mt-4">
                        <button type="submit" className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Confirm</button>
                    </div>                    
                </form>
                {
                    (searchParams.get("website-page"))?.length > 0 && (searchParams.get("website"))?.length > 0 && (
                        <DataTable data={results} params={searchParams} />
                    )
                }
            </Dashboard>
        </Layout>
    )
}