import React from "react";
import "./style.css"

export const SignInPage =() =>{
    return (
        <div className={"sign-in-page-sign-in-page-wrapper"}>
            <div className={"sign-in-page-sign-in-page"}>
                <div className={"sign-in-page-overlap-group" }>
                    <img className={"sign-in-page-image"} src={"image-1.png"} />
                    <div className={"sign-in-page-menu-bar"}>
                        <h1 className={"sign-in-page-text-wrapper"}>AVA</h1>
                    </div>
                    <div className={"sign-in-page-home-box"}>
                        <div className={"sign-in-page-email"}>
                        <div className={"sign-in-page-div"} />
                        <div className={"sign-in-page-text-wrapper-2"}>UChicago Email</div>
                    </div>
                    <div className={"sign-in-page-password"}>
                        <div className={"sign-in-page-div"} />
                        <div className={"sign-in-page-text-wrapper-2"}>Password</div>
                    </div>
                    <div className={"sign-in-page-go"}>
                        <img className={"sign-in-page-material-symbols-arrow-forward"} src={"material-symbols-arrow-forward-1. svg"} />
                        <div className={"sign-in-page-text-wrapper-3"}>Go</div>
                    </div>
                    <div className={"sign-in-page-sign-in"}>
                        <img className={"sign-in-page-material-symbols-chat-bubble-outline"} src={"material-symbols-chat-bubble-outline.svg"}/>
                        <div className={"sign-in-page-text-wrapper-4"}>Sign In</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}