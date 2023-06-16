import './App.css'
import { Header } from './Component/Header'
// import { Page } from './Component/Pages/Profil'
import { Routeur } from './Component/Routes'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routeur/>
    </div>
  )
}

export default App


{/* <div className="App">
<DataContextProvider>
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="*" element={<Error />} />
      </Routes>
   </BrowserRouter>
</DataContextProvider>
</div> */}

