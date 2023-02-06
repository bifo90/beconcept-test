import { useEffect, useState } from "react"
import { classNames } from "../utils/lib"

export default function DataTable({ data, params }) {
    const [dataTable, setDataTable] = useState(data)
    useEffect(() => {
        let filterTime = params.get('loading-time')
        if (filterTime.length > 0) {
            const filterData = dataTable.filter(item => item.result <= filterTime)
            setDataTable(filterData)
        }
    },[])
    return (
        <div className="px-4 sm:px-6 lg:px-8">

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                      >
                        Metric
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Result
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {
                        dataTable.map((result) => (
                            <tr key={result.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">{result.title}</td>
                                <td className={classNames(result.result < 0.25 ? 'text-green-500' : 'text-red-500' ,'whitespace-nowrap px-3 py-4 text-sm ')}>{result.result}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{result.date}</td>
                            </tr>
                        ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>        
    )
}