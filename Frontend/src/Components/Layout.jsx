import ProfileNav from "./ProfileNavbar";
import AdminNav from "./AdminNavBar";

const Layout = ({ children }) => {
  const status = sessionStorage.getItem("status");
  return (
    <div>
      {(() => {
        if (status === null) {
          return null;
        } else if (status === "admin") {
          return <AdminNav />;
        } else if (status === "profile") {
          return <ProfileNav />;
        }
      })()}
      {children}
    </div>
  );
};

export default Layout;
