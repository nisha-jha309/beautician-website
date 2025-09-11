import { useNavigate } from "react-router-dom";
import './nav.css'

 function Nav(){
    const navigate = useNavigate();
    return(
        <div className="Navbar">
            <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <img src="src\assets\brand.png" alt="" style={{width:"50px",height:"40px"}} onClick={()=>{ navigate("/offers")}}/>
            <strong style={{fontWeight:600,color:"white"}}>Glow Studio</strong>
            </div>
        <div className="nav-list">
        <div onClick={()=>{ navigate("/")}}>Home</div>
        <div onClick={()=>{
            navigate("/services")
        }}>Services</div>
        <div onClick={()=>{ navigate("/about") }}>About</div>
        <div onClick={()=>{ navigate("/contact")}}>Contact</div>
        </div>
        </div>
    )
}
export default Nav