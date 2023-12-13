import { Routes, Route, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { Sidenav, DashboardNavbar, Footer } from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "@/api/axios";
import { ADMIN_PROTECTED_URL } from "@/api/axios";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      navigate("/auth/sign-in");
      return;
    }

    const validateToken = async () => {
      try {
        const res = await axios.get(
          ADMIN_PROTECTED_URL,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.statusText) throw new Error("Not Authorized");
      } catch (error) {
        console.error(error);
        navigate("/auth/sign-in");
      }
    };

    validateToken();
  }, [navigate]);


  const handleLogout = async () => {
    Swal.fire({
      title: "Hotel Room Booking System",
      text: "Are you sure want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("token");

        Swal.fire({
          title: "Hotel Room Booking System",
          text: "Logged Out!",
          icon: "success",
        }).then(() => {
          navigate("/auth/sign-in");
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar onClick={handleLogout} />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              )),
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
