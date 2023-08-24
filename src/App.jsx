import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Benefits from './components/Benefits';
import Articles from './components/Articles';
import Footer from './components/Footer';
import './styles/style.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
      <Introduction />
      <Benefits />
      <Articles />
      <Footer />
    </div>
  )
}

export default App
