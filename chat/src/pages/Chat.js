import React, { Component } from "react";
import Headerchat from "../components/Headerchat";
import Footer from '../components/Footer';
import { auth } from "../services/firebase";
import { db } from "../services/firebase";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    const chatArea = this.myRef.current;
    try {
      db.ref("chats").on("value", snapshot => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        chats.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ chats });
        chatArea.scrollBy(0, chatArea.scrollHeight);
        this.setState({ loadingChats: false });
      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  
  async callOpenAIAPI(prompt) {
    console.log("Calling the OpenAI API");
    
    const APIBody = {
      "model": "davinci:ft-personal-2023-05-05-05-53-08",
      "prompt": prompt,
      "temperature": 0.7,
      "max_tokens": 60,
      "top_p":0.47,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0
    }

  await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + "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"
      },
      body: JSON.stringify(APIBody)
    }).then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    }).then((data) => {
      window.alert(data.choices[0].text.split("\n\n")[0]);
      console.log(data.choices[0].text);
    }).catch((error) => {
      console.error(error);
    });
    
  }


  /* call API when prompt is submitted*/
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
        db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
        type: 'prompt'
      });

      await this.callOpenAIAPI(this.state.content)
    
      this.setState({ content: '' });
      console.log('cleared content');

      chatArea.scrollBy(0, chatArea.scrollHeight);
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  filterItems (data, field, value) {
    if (field != null) {
      return data.filter((item) => {
        return item[field] === value;
      })
    }
  }

  render() {
    return (
      <div className= "chat">
        <div className="imageback">
          <div className="chat-area" ref={this.myRef}>
          <Headerchat></Headerchat>
            {/* loading indicator */}
            {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div> : ""}
            {/* chat area */}
            {this.state.chats.filter(chat => {return chat.uid === this.state.user.uid}).map(chat => {
              return <p key={chat.timestamp} className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")}>
                {chat.content}
                <br />
                <span className="chat-time float-right">{this.formatTime(chat.timestamp)}</span>
              </p>
            })}
          </div>
          <form onSubmit={this.handleSubmit} className="mx-3">
            <textarea className="form-control" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <button type="submit" className="btn btn-submit px-5 mt-4">Send</button>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
