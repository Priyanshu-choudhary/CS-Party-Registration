import NeonCard from "./Cards/NeonCard"
import Header from "./Headers/Header"
import HeroPage from "./Hero/HeroPage"
import DownloadFile from "./Registration/DownloadFile"
import Form from "./Registration/Form"
import StudentForm from "./Registration/FormTesing"

function App() {
  return (
    <div >
      <div className="p-4 ">
        <Header />
        <div style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
          <video width="600" autoplay controls loop>
            <source src="./Tatti.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="mt-10 md:flex " >
        <HeroPage />
        <Form />
      </div>
      <div>

      </div>
      <div className="mt-20">
        <NeonCard />
      </div>

      {/* <DownloadFile/> */}
    </div>
  )
}

export default App
