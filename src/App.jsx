import Botones from "./components/Botones"
import GoogleMaps from "./components/GoogleMaps"
import Nombre from "./components/Nombre"
import Video from "./components/Video"
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'
function App() {

  return (
    <div className="App">
      <div className="container-fluid  wrapper h-100">
        <div className="row w-100 h-50 d-flex justify-content-center align-items-center">
          <div className="col-6 columna d-flex justify-content-center align-items-center">
          <Botones/>
          </div>
          <div className="col-6 columna d-flex justify-content-center align-items-center">
          <GoogleMaps/>
          </div>
        
        </div>
        <div className="row h-50 d-flex justify-content-center align-items-center">
          <div className="col-6 columna d-flex justify-content-center align-items-center">
          <Video/>
          </div>
          <div className="col-6 columna d-flex justify-content-center align-items-center">
          <Nombre/>
          </div>        
        </div>
      </div>      
    </div>
  )
}

export default App
