import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import LoadingSpinner from "../components/LoadingSpinner";
import Spinner from "../components/Spinner";
import { Titleize } from "../utils/lib";

function setUpQuery(fetch_api) {
    const api = fetch_api;
    const parameters = {
      url: encodeURIComponent('https://developers.google.com')
    };
    let query = `${api}?`;
    for (const key in parameters) {
      query += `${key}=${parameters[key]}`;
    }
    return query;
  }


export default function Lighthouse() {
    const [features, setFeatures] = useState([])
    const [list, setList] = useState([])
    const title = "Lighthouse Schema"
    const [isLoading, setIsLoading] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        const input = e.target.querySelector('input[name=url]')
        setIsLoading(true)
        const url = setUpQuery(input.value);
        fetch(url)
        .then(response => response.json())
        .then(json => {
          const lighthouse = json.lighthouseResult;
          const audits = lighthouse.audits
          const lighthouseMetrics = {
            'First Contentful Paint': audits['first-contentful-paint']?.displayValue,
            'Speed Index': audits['speed-index']?.displayValue,
            'Time To Interactive': audits['interactive']?.displayValue,
            'First Meaningful Paint': audits['first-meaningful-paint']?.displayValue,
            'First CPU Idle': audits['first-cpu-idle']?.displayValue,
            'Estimated Input Latency': audits['estimated-input-latency']?.displayValue
          };          
          setFeatures(lighthouseMetrics)
          const obj = {website: input.value, date: new Date().toLocaleDateString('it-IT'), items: [lighthouseMetrics]}
          setList(prevState => [...prevState, obj]);  
          setIsLoading(false)
        })
    }
    return (
        <Layout>
            <Dashboard title={title}>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                    Website Url
                </label>                
                <form action="" className="flex" onSubmit={handleClick}>
                    <input 
                        type="text" 
                        name="url" 
                        placeholder="Put URL Here..." 
                        id="url"
                        defaultValue='https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
                        className="block w-3/4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <button 
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
                        type="submit"
                        >
                            Send Request
                    </button>

                </form>
                <div className="flex flex-wrap items-center">
                {
                    isLoading ? (
                        <LoadingSpinner />
                    ) : (
                        Object.keys(features).map((key, index) => (
                            <div key={index} className="w-1/8">
                                <Spinner />
                                <p className="">{key}</p>
                            </div>
                        ))
                    )   
                }
                </div>
                {
                    !list.length == 0 && (
                        <>
                        <h2 className="mt-16 text-2xl font-bold">Historic Research</h2>
                        <table className="min-w-full divide-y divide-gray-300 my-8">
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {
                                    list.map((row,i) => (  
                                        Object.keys(row).map((key, index) => (
                                            <tr key={index}>
                                                <td>{Titleize(key)}</td>
                                                {
                                                    typeof(row[key]) == "object" ? (
                                                        <td>                                              
                                                            {
                                                                Object.keys(row[key]).map((el,i) => (
                                                                    <ul key={i}>
                                                                        <li>{JSON.stringify(row[key][el])}</li>
                                                                    </ul>
                                                                ))

                                                            }
                                                        </td>
                                                    ) : (
                                                        <td>{row[key]}</td>
                                                    )
                                                }
                                                
                                            </tr>
                                        ))
                                    ))
                                }
                            </tbody>
                        </table>
                        </>
                        )
                    }

            </Dashboard>
        </Layout>
    )
}

