import React, { Component } from "react"
import "./st.css"
import { Link } from 'react-router-dom';


export const Home1 = () => {
    return (
        <div className={"home-home-wrapper"}>
            <div className= {"home-home"}>
                <div className = {"home-overlap"}>
                    <img className={"home-image"} src={"Hero-uchicago-campus.jpeg"} />
                    <div className={"home-menu-bar"}>
                        <div className={"home-text-wrapper"}>AVA</div> 
                    </div>
                    <div className={"home-home-box"}>
                        <h1 className={"home-h-1"}>Welcome to AVA!</h1>
                        
                            <img className={"home-material-symbols-face-outline"} src={"material-symbols-face-outline.svg"} />
                            <div className={"home-div"}> 
                                <div className="mt-4">
                                    <Link className={"btn btn-primary px-5 mr-3"} to="/signup">Create New Account</Link>
                                    <Link className={"btn px-5"} to="/login">Login to Your Account</Link>
                                </div>
                            </div>
                       
                    </div>
                    <div className={"home-sign-up-page"}>
                        <div className={"home-overlap-group"}>
                            <img className={"home-image-1"} src={"Hero-uchicago-campus.jpeg"} />
                            <div className={"home-div-wrapper"}>
                                <div className={"home-text-wrapper"}>AVA</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}