import React from "react"
import "./style.css"

export const Home = () => {
    return (
        <div className={"home-home-wrapper"}>
            <div className= {"home-home"}>
                <div className = {"home-overlap"}>
                    <img className={"home-image"} src={"image-1.png"} />
                    <div className={"home-menu-bar"}>
                        <div className={"home-text-wrapper"}>AVA</div> 
                    </div>
                    <div className={"home-home-box"}>
                        <h1 className={"home-h-1"}>Welcome to AVA!</h1>
                        <div className={"home-sign-up"}>
                            <img className={"home-material-symbols-face-outline"} src={"material-symbols-gace-outline.svg"} />
                            <div className={"home-div"}>Sign Up</div>
                        </div>
                        <div className={"home-sign-in"}>
                            <img className={"home-material-symbols-chat-bubble-outline"} src = {"material-symbols-chat-bubble-outline.svg"} />
                            <div className={"home-text-wrapper-2"}>Sign In</div>
                        </div>
                </div>
                <div className={"home-sign-up-page"}>
                    <div className={"home-overlap-group"}>
                        <img className={"home-image-1"} src={"image-1.png"} />
                        <div className={"home-div-wrapper"}>
                            <div className={"home-text-wrapper"}>AVA</div>
                        </div>
                        <div className={"home-home-box-2"}>
                            <div className={"home-sign-up-2"}>
                                <img className = {"home-material-symbols-face-outline"} src={"materials-symbols-face-outline.svg"} />
                                <div className={"home-div"}>Sign Up</div>
                            </div>
                            <div className={"home-email"}>
                                <div className={"home-div-2"} />
                                <div className={"home-text-wrapper-3"}>Password</div>
                            </div>
                            <div className={"home-go"}>
                                <img className={"home-material-symbols-arrow-forward"} src={"materials-symbols-arrow-forward.svg"} />
                                <div className={"home-text-wrapper-4"}>Go</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}