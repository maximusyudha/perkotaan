import AdminMenu from "./component/index";
import RootLayout from "../layout";

const Admin = () => { 
  return (
    <RootLayout hideNavbar hideFooter>
      <AdminMenu />
    </RootLayout>
  );
}

export default Admin;
