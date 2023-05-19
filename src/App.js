import Header from './components/header'
//import FeedbackItem from './components/FeedbackItem'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

//Demostracion de useParams y NestedRoutes
// import Post from './components/Post'

function App(){
    /*
    Construyendo un array de lo que regresa
    la funcion useState
        param 1: Nombre del estate
        param 2: Funcion para actualizar este state
    */

    //return JSX
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                            <FeedbackForm ></FeedbackForm>
                            <FeedbackStats></FeedbackStats>
                            <FeedbackList />
                            </>
                        }>
                        </Route>
                        
                        <Route path='/about' element={<About/>}></Route>
                        {/* <Route path='/post/*' element={<Post/>}></Route> */}
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App