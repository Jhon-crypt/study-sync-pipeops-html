import { DashboardHeader } from "../components/header/dashboard"
import Dashboard from "../components/section/dashboardSection"
import Sidebar from "../components/sidebar/sidebar"

export default function Page(){

    return (

        <>

            <DashboardHeader title="Dashboard" icon="bi-list"/>
            <Dashboard />
            <Sidebar />

        </>

    )

}