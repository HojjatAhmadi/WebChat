import React, { Component } from 'react';
import SideBar from './components/sideBar';
import MainContainer from './components/mainContainer';

class App extends Component {
    state= {
        user: {
            uniqId: 0, userName: 'Hojjat', userId: 'ahmadi_hojjat', notf: 0, img: './images/profile.jpg', phone: '+989035153036', bio: 'nothing here...' 
        },
        chat: [
            {idChat: 1, userName: 'Ali', userId:'ali2152', newChat: 0, img: './images/ali.jpeg', lastText: 2},
        ],
        message: [
            {text: 'hello, Hojjat how are you? Umm... me and Hossein want to go out wana come with us?', time: '05:14', from: 'ali2152', to: 'ahmadi_hojjat' , textId: 0},
            {text: 'hi Ali yes! im coming with you', time: '05:20', from: 'ahmadi_hojjat', to: 'ali213142' , textId: 1 , reply: 0},
            {text: 'tnk, you =)', time: '05:20', from: 'ali2152', to: 'ahmadi_hojjat' , textId: 2 , reply: 1}
        ],
        chatSelected : undefined,
    }

    render() { 
        return (
            <app className='w-11/12 h-5/6 p-1 flex justify-start items-center rounded-md' style={{backgroundColor: '#f5f6fa'}}>
                <SideBar State={this.state} chatSelected={this.chatSelected.bind(this)} changeAccInfo={this.changeAccInfo.bind(this)}/>
                <MainContainer sendMessage={this.createMessage.bind(this)} State={this.state}/>
                <a href='' className='absolute bottom-2 w-max h-max px-5 py-1 flex justify-center items-center gap-3 rounded-md text-white' style = {{backgroundColor: '#2680eb', right: '50%'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    Hojjat Ahmadi
                </a>
            </app>
        );
    }

    changeAccInfo(userArr){
        let userInfo = this.state.user;
        if(userArr[1] == 'name' && userArr[0] != this.state.user.userName){
            userInfo.userName = userArr[0];
        }
        else if(userArr[1] == 'phone' && userArr[0] != this.state.user.phone){
            userInfo.phone = userArr[0];
        }
        else if(userArr[1] == 'username' && userArr[0] != this.state.user.userId){
            userInfo.userId = userArr[0];
        }
        this.setState({user : userInfo})
    }

    chatSelected(id){
        let chat ;
        this.state.chat.map(e => {
            if(e.idChat == id){
                chat = e;
                return;
            }
        })
        this.setState({chatSelected : chat}) 
    }

    createMessage(text , idReply){
        if(text.length>0){
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;
            
            let textId = this.state.message[this.state.message.length-1].textId+1;
            let from = this.state.user.userId;
            let to = this.state.chatSelected.userId;
            let reply = undefined
            if(idReply != -1){
                reply = idReply;
            }
            const message = {text: text, time: `${hours}:${minutes}`, from: from, to: to, textId: textId , reply: reply};
            let newMessage = this.state.message;
            newMessage.push(message);
            this.setState({message: newMessage});
            
            this.setState({chat : this.state.chat.map(chat=>{
                if(chat == this.state.chatSelected){
                    chat.lastText = textId;
                }
                return chat;
            })})
        }
    }
}
 
export default App;