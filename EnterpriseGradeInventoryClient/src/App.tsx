import { useRoutes } from "react-router-dom";
import Router from "./routes";

function App() {
  const router = useRoutes(Router);
  return <>{router}</>;
}

export default App;
