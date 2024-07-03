import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FirebaseProvider } from "./utils/Firebase";
import notify from "./assets/img/notify.svg";

function App() {
  return (
    <FirebaseProvider>
      <div className="sm:visible sm:flex sm:flex-col gap-5 hidden items-center h-screen justify-center">
        <img src={notify} alt="notify" className="w-44" />
        <h1 className="font-bold text-2xl text-primaryBlue ">Accessible on desktop!</h1>
      </div>
      <div className="sm:hidden md:hidden">
        <Navbar />
        <Outlet />
      </div>
    </FirebaseProvider>
  );
}

export default App;
