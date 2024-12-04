import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import './index.css'; // CSS dosyasını burada import edin

const App = () => {
  return (
    <>
    <div className="bg-gray-700">
    <Navbar />
    <div className="px-5 py-6">
    <HeroSection />
    </div>
    </div>
    </>
  )
}

export default App
