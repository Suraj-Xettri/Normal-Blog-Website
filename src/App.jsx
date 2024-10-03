import BlogList from "./components/BlogList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <Header/>
    <Hero />
    <BlogList />
    <Footer/>
  </div>
  )
}

export default App
