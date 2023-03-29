import { Link } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";


function Navbar() {
    
    return (
     <div className="main">
      <div>
      <Link to="/"><img id="logo"src="https://www.engagebay.com/assets/img/engagebay-logo.svg" alt="netlogo" /></Link>
      </div>
    
      <div >
      <select name="" id="">
          <option value="">Product</option>
          <option value="">Discusses</option>
          <option value="">Task</option>
          <option value="">Tracking time</option>
          <option value="">Project Home</option>
      </select>
      </div>
      <div><p>Pricing</p></div>
      <div >
      <select name="" id="">
          <option value="">Resource</option>
          <option value="">Discusses</option>
          <option value="">Task</option>
          <option value="">Tracking time</option>
          <option value="">Project Home</option>
      </select>
      </div>
      <div >
      <select name="" id="">
      <option value="">Free Tools</option>
          <option value="">UMT Builder</option>
          <option value="">Email Signature</option>
          <option value="">Email Tracker</option>
        </select>
      </div>
      <div><p>Blog</p></div>
        <div><Link to="/login">Login</Link></div>
     <div><button  className="btn">Free Demo</button></div>
     <div ><Link to="/signup"><button  className="btn1">Free Signup</button></Link></div>
    
     </div>
    );
  }
  export default Navbar;
  