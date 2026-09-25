import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return <ErrorBoundary><ThemeProvider><Home /></ThemeProvider></ErrorBoundary>;
}
