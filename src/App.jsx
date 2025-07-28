import React, { Component } from 'react';
import './App.css';
class App extends Component {
   menuClick(){
    const obj = document.getElementById("nav-list");
    // obj.style.display="block";
    obj.classList.toggle("active");
  }
  render() {
    return (
      <>
        <header>
          <nav classname="nav">
               <div className='logo'>MANHWA RAGE</div>
            <ul id="nav-list">
              <li>Home</li>
              <li>Category</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div className='menu' onClick={()=>this.menuClick()} >
              &#9776;
            </div>
          </nav>
        </header>
        <section>
            <h1>Welcome to My Responsive Website</h1>
            <p>This design adopts that various screen sizes</p>
        </section>
        <footer>Copyright @ all rights are reserved 2025 --</footer>
      </>
    );
  }
}

export default App;
