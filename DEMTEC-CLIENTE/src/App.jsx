import './App.css'
import AppRoutes from './routes'
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


function App() {

  return (
    <AppRoutes />
  )
}

export default App
