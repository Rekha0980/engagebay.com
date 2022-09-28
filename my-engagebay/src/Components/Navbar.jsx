


function Navbar() {
    
    return (
     <div className="main">
      <div>
      <img id="logo"src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg" alt="netlogo" />
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
          <option value="">Free Tool</option>
          <option value="">Discusses</option>
          <option value="">Task</option>
        </select>
      </div>
      <div><p>Blog</p></div>
        <div><p>Login</p></div>
     <div><button  className="btn">Free Demo</button></div>
     <div ><button  className="btn1">Free Signup</button></div>
     </div>
    );
  }
  export default Navbar;
  