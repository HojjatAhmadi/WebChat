import React, { Component } from 'react';

class MainContainer extends Component {

    Message= '';
    static textarea = undefined;
    static container = undefined;
    state = {
        reply: undefined,
        replyId: -1
    }

    render() { 
        if(this.props.State.chatSelected != undefined){
            return (
                <main className='relative h-full flex flex-col justify-start items-center gap-3 p-3'>
                    <div className="relative p-6 flex items-center justify-start space-x-4 w-full rounded-md text-white" style={{backgroundColor: '#2680eb'}}>
                        <div className="shrink-0">
                            <img className="size-12 rounded-full object-contain bg-gray-300" src={this.props.State.chatSelected.img} alt=""/>
                        </div>
                        <div>
                            <div className="text-xl font-medium text-black text-white">{this.props.State.chatSelected.userName}</div>
                        </div>
                    </div>
                    <div onClick={(e)=>{this.container = e.target;}} className="chatSide w-full h-full max-h-full flex flex-col justify-start items-center overflow-y-auto">
                        {this.createChatBox()}
                    </div>
                    <div className='relative w-full h-max flex flex-col justify-start items-end bg-white rounded-md p-3 gap-3'>
                        {this.state.reply != undefined ? 
                            (<div className='replyMessage w-full h-max bg-white border-l-4 p-3 rounded-md' style={{top : '-60%', borderColor: '#2680eb'}}>
                                <span>
                                    {this.state.reply}
                                </span>
                                <button onClick={
                                    ()=>{this.setState({reply: undefined})}
                                } className="close w-5 h-5 absolute top-4 right-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                                </button>
                            </div>)
                            : (<></>)
                        }
                        <div className="sendMessage relative w-full h-max flex justify-start items-end gap-3">
                            <button className='w-10 h-10 flex justify-center items-center rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill='#D8D8DA'><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z"/></svg>
                            </button>
                            <textarea onClick={(e)=>{this.textarea = e.target}} rows="1" onInput={(e)=>{
                                this.Message = e.target.value; 
                                e.target.value = this.Message;
                                if (e.target) {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                }
                                }} type="text" className='w-11/12 h-auto m-0 mb-2 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:ring-0 focus-visible:ring-0 max-h-52' style={{outline: 'none'}} placeholder='type a message...'></textarea>
                            <button className='w-10 h-10 flex justify-center items-center rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill='#D8D8DA'><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>
                            </button>
                            <button onClick={()=>{this.props.sendMessage(this.Message , this.state.replyId); if(this.textarea != undefined){this.textarea.value='';this.Message = ''}
                                if(this.container != undefined){
                                    this.container.scrollTop = this.container.scrollHeight;
                                }
                                this.setState({reply : undefined , replyId: -1})
                                }} className='sendBtn w-10 h-10 flex justify-center items-center rounded-full' style={{backgroundColor: '#2680eb'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m600-200-56-57 143-143H300q-75 0-127.5-52.5T120-580q0-75 52.5-127.5T300-760h20v80h-20q-42 0-71 29t-29 71q0 42 29 71t71 29h387L544-624l56-56 240 240-240 240Z"/></svg>
                            </button>
                        </div>
                    </div>
                </main>
            );
        }
    }

    createChatBox(){
        let chatBoxArray= [];
        this.props.State.message.forEach((m,index) => {
            if(m.from == this.props.State.chatSelected.userId){
                chatBoxArray.push(
                    <div className="chatbox w-full h-max flex flex-col justify-center items-start">
                        <div className="top w-max h-max flex justify-center items-start">
                            <div className="img-side w-16 h-full">
                                {index+1 > this.props.State.message.length ? (this.props.State.message[index+1].from != m.from ? <img src={this.returnUserObject(this.props.State.user.userId).img} alt="" className='bg-gray-300 w-10 h-10 rounded-full object-contain' /> : undefined) : 
                                    <img src={this.returnUserObject(this.props.State.chatSelected.userId).img} alt="" className='bg-gray-300 w-10 h-10 rounded-full object-contain' />
                                }
                            </div>
                            <div className="bottom relative w-max h-max flex flex-col justify-center items-end gap-2">
                                <div className="textChat max-w-sm h-max flex flex-col justify-center items-start py-1 px-5 rounded-md gap-2" dir='ltr' style={{backgroundColor: 'white'}}>
                                    {
                                        m.reply != undefined ? (
                                            <div className="textChatReply max-full h-max flex justify-center items-center p-2 rounded-md border-l-4" dir='ltr'>
                                                {this.findReplyMessage(m.reply)}
                                            </div>
                                        )
                                        : undefined
                                    }
                                    {m.text}
                                </div>
                                <span className='text-gray-500'>{m.time}</span>
                                <button onClick={()=>{this.setReply(m)}} className='reply flex justify-center items-center rounded-full absolute'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
            else if(m.from == this.props.State.user.userId){
                chatBoxArray.push(
                    <div className="chatbox w-full h-24 flex flex-col justify-center items-start" dir='rtl'>
                        <div className="top w-max h-max flex justify-center items-start">
                            <div className="img-side w-16 h-full">
                                {index+1 > this.props.State.message.length ? (this.props.State.message[index+1].from != m.from ? <img src={this.returnUserObject(this.props.State.user.userId).img} alt="" className='bg-gray-300 w-10 h-10 rounded-full object-contain' /> : undefined) : 
                                    <img src={this.props.State.user.img} alt="" className='bg-gray-300 w-10 h-10 rounded-full object-contain' />
                                }
                            </div>
                            <div className="bottom w-max h-max flex flex-col justify-center items-end gap-2">
                                <div className="textChat text-white max-w-sm h-max flex flex-col justify-center items-start py-1 px-5 rounded-md gap-2" dir='ltr' style={{backgroundColor: '#2680eb'}}>
                                    {
                                        m.reply != undefined ? (
                                            <div className="textChatReply2 max-full h-max flex justify-center items-center p-2 rounded-md border-l-4" dir='ltr'>
                                                {this.findReplyMessage(m.reply)}
                                            </div>
                                        )
                                        : undefined
                                    }
                                    {m.text}
                                </div>
                                <span className='text-gray-500'>{m.time}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return chatBoxArray;
    }

    setReply(message){
        this.setState({reply: message.text})
        this.setState({replyId: message.textId})
    }

    findReplyMessage(replyId){
        let message = '';
        this.props.State.message.forEach(e => {
            if(e.textId == replyId){
                message = e.text;
                return message;
            }
        })
        return message
    }

    returnUserObject(id){
        let objectUser = '';
        this.props.State.chat.forEach(e => {
            if (e.userId == id){
                objectUser = e;
                return
            }
        })
        return objectUser;
    }
}
 
export default MainContainer;