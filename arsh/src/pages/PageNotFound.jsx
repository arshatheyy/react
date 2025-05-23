import { Link, useNavigate} from "react-router-dom"
import image from "../pages/image.png"

const  PageNotFound = () => {
     
      const navigate = useNavigate()

      const handleclick = () => {
        navigate("/login")
      }



    return(
        <div>
           <h1>this page is not found error 404</h1>
           <Link to="/Login">Login in</Link>
           <img className="w-full" src={image} alt="404" />
           <button onClick={handleclick}>Login in</button>
        </div>
    )

}


export default PageNotFound;