import React from "react";
import "./style.css";
export const ChatPage = () => {
    return (
        <div className= {"chat-page-chat-page-wrapper"}>
            <div className={"chat-page-chat-page"}>
                <div className={"chat-page-overlap"}>
                    <img className={ "chat-page-image"} src={"image-1 .png"} />
                    <div className= {"chat-page-menu-bar" }>
                        <h1 className={"chat-page-text-wrapper"}>AVA</h1>
                    </div>
                    <div className={"chat-page-home-box"}>
                        <div className={"chat-page-overlap-group"}>
                            <img className={"chat-page-chat-box"}src={"chat-box.svg"} />
                            <p className={"chat-page-p"}>How can I help you today?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}