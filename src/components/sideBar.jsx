import React, { Component } from 'react';
import AccountInfo from '../modals/changeInfoAcc';

class SideBar extends Component {
    state= {
        accountInfo: false
    }
    render() { 
        return (
            <side className='w-80 h-full flex flex-col justify-start items-center gap-3 p-3'>
                <AccountInfo show={this.state.accountInfo} state={this.props.State} closeInfAcc={this.closeInfAccModal.bind(this)} changeAccInfo={this.props.changeAccInfo}/>
                <div onClick={this.openAccountInfo.bind(this)} className="inf-acc relative p-6 flex items-center justify-start space-x-4 w-full cursor-pointer rounded-md">
                    <div className="shrink-0">
                        <img className="size-12 rounded-full" src={this.props.State.user.img} alt=""/>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">{this.props.State.user.userName}</div>
                        <p className="text-slate-500">@{this.props.State.user.userId}</p>
                    </div>
                    <div className='absolute' style={{right : '5px'}}>
                        {this.props.State.user.notf > 0 ? (<div className="bouble"></div>) : undefined}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D8D8DA"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                    </div>
                </div>
                <div className='w-full h-full bg-white rounded-md flex flex-col justify-start items-center'>
                    <div className="input-side w-11/12 h-10 flex justify-around items-center rounded-3xl mt-5 mx-20 mb-10" style={{backgroundColor: '#f5f6fa' , color: '#C6C7C9'}}>
                        <input type="text" className='w-3/4 bg-transparent' placeholder='search'/>
                        <img src="./images/search.png" alt="" style={{width: '20px'}}/>
                    </div>
                    <div className='w-full h-full flex flex-col justify-start items-start'>
                        {
                            this.createChat.bind(this)()
                        }
                    </div>
                </div>
            </side>
        );
    }

    openAccountInfo(){
        this.setState({accountInfo : 'active'})
    }

    closeInfAccModal(){
        this.setState({accountInfo : ''})
    }

    createChat(){
        let chatArray = [];
        this.props.State.chat.forEach(e => {
            if(e.userId != this.props.State.user.userId){
                let className = 'ts'
                if(this.props.State.chatSelected == e){
                    className = 'active'
                }
                const message = this.returnMessageObject(e.lastText);
                chatArray.push(
                    <div id={e.idChat} onClick={(e)=>{this.props.chatSelected(e.target.getAttribute('id'))}} className={`chat relative h-20 flex items-center justify-start space-x-4 w-full cursor-pointer hover:bg-white p-3 rounded-r-md transition-shadow ${className}`}>
                        <div id={e.idChat} className="shrink-0">
                            <img id={e.idChat} className="size-10 rounded-full object-contain" style={{backgroundColor: '#f5f6fa'}}  src={e.img} alt=""/>
                        </div>
                        <div id={e.idChat}>
                            <div id={e.idChat} className="text-base font-medium text-black">{e.userName}</div>
                            <p id={e.idChat} className="text-xs text-slate-500">
                                {this.createLastMessage(message)}
                            </p>
                        </div>
                        <div id={e.idChat} className='absolute' style={{right: '10px' , bottom: '20px'}}>
                            {e.newChat > 0 ? (<div className="bouble flex justify-center items-center text-white" style={{width: '20px' , height: '20px'}}>{e.newChat}</div>) : undefined}
                        </div>
                        <span className='text-gray-500 font-sans text-xs absolute' style={{top: '15px', right: '5px'}}>{message.time}</span>
                    </div>
                )
            }
        })
        return chatArray;
    }

    createLastMessage(message){
        if(message.from == this.props.State.user.userId){
            return ('you: '+message.text)
        }
        else{
            let fromName = '';
            this.props.State.chat.forEach(c => {
                if(c.userId == message.from){
                    fromName = c.userName;
                    return fromName;
                }
            })
            return (fromName+': '+message.text)
        }
    }

    returnMessageObject(id){
        let message = ''
        this.props.State.message.forEach(e => {
            if(e.textId == id){
                message = e;
            }
        })
        return message;
    }
}
 
export default SideBar;