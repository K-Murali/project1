import React from "react";
import {useState}  from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {


  const search=()=>{
    let c=document.getElementsByClassName("form-control me-2")[0].value
    let a=document.getElementsByClassName("dropdown-menu")[0]
    a.innerHTML=a.innerHTML+`<li><a class='dropdown-item' href='#'>${item}</a></li>`
    setitem(c)
  }
  const [item,setitem]=useState("kakinada")
  return (
    <>


        <nav className={`navbar navbar-expand-lg bg-${props.theme==="dark"?"dark-subtle":"light-subtle"}`} data-bs-theme={`${props.theme}`}
      
      
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Home">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  {props.latest}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.dropdown}
                </a>
                <ul className="dropdown-menu">
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                {props.about}
                </Link>
              </li> <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                {props.contact}
                </a>
              </li>
          
            </ul>

            <div className="form-check form-switch  mx-3 my-2">
  <label className={`form-check-label text-${props.theme==="light"?"dark":"light"}`}htmlFor="flexSwitchCheckDefault">{props.theme==="light"?"dark":"light"} mode</label>
  <input className="form-check-input" type="checkbox" onClick={props.mode} role="switch" id="flexSwitchCheckDefault"/>
</div>
            <form className="d-flex" role="search">
              <input
                
                className="form-control me-2 ms-3"
                type="search"
                placeholder="Search here"
                aria-label="Search"
              />
              <button
                type="button"
                onClick={search}
                className={`btn  btn-md btn-outline-${props.theme==='light'?"success":"light"} mx-1`}
              > search
              </button>
            </form>
          </div>
        </div>
      </nav>
       
{/* </nav> */}
    </>
  );
}
