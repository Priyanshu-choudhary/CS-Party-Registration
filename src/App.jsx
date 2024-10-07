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

      <DownloadFile/>
    </div>
  )
}

export default App
