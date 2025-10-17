import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RouteDetails from "./pages/RouteDetails"; // or "./pages/RouteDetail" if that's the file name
import RouteMap from "./components/RouteMap";
import AiChat from "./components/AiChat";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/route/:id" element={<RouteDetails />} />
            <Route path="/map/:id" element={<RouteMap plan={null} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
        <AiChat/>
      </div>
    </Router>
  );
}
