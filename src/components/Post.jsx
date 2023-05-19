import { useParams } from "react-router-dom"
import { Navigate, useNavigate, Routes, Route } from "react-router-dom"

function Post() {
    //Hooks useParams, useNavigate
    const params = useParams()
    const nav = useNavigate()

    //Navigate (auto redirect)
    const status = 200
    if (status === 404) {
        return <Navigate to='/notFound'></Navigate>
    }

    //Hook useNavigate
    const click = () => {
        console.log("Redirecting...")
        nav('/about')
    }

    return (
        <div>
            <h1>Post: {params.id}</h1>
            <button onClick={click}>Click me</button>
            <Routes>
                <Route path='/show' element={<h1>Show</h1>}></Route>
            </Routes>
        </div>
    )
}

export default Post