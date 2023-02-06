import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";
import useStateApp from "../store/store";

export default function Home() {
    const stats = useStateApp((state) => state.websiteStats)
    const title = `Benvenuto ${useStateApp.getState().user.name} ${useStateApp.getState().user.last_name}!` 
    return (
        <Layout>
            <Dashboard title={title}>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Last 30 days</h3>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                        </div>
                    ))}
                </dl>
            </Dashboard>
        </Layout>
    )
}