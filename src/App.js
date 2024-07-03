import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FirebaseProvider } from "./utils/Firebase";

function App() {
  return (
    <FirebaseProvider>
      <Navbar />
      <Outlet />
    </FirebaseProvider>
  );
}

export default App;
