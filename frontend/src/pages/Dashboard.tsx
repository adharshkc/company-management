import AdminDashboard from "@components/ui/templates/AdminDashboardTemplate"
import useAdminStore from "../zustand/AdminStore"

const Dashboard = () => {

  const {admin} = useAdminStore()
  console.log(admin)
  return (
    <AdminDashboard adminUsername = {admin}/>
  )
}

export default Dashboard