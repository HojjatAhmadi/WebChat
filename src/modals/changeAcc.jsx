import React, { Component } from 'react';

class AccountChange extends Component {
    render() { 
        if(this.props.type == 'name'){
            return (
                <modal className={`${this.props.show} w-screen h-screen fixed z-20 justify-center items-center`}>
                    <div className='w-38 h-max rounded-md shadow-sm relative flex flex-col justify-start items-center' style={{backgroundColor: 'white'}}>
                        <div className='w-full h-max p-3 mb-3 flex gap-3'>
                            <button className="close w-5 h-5" onClick={()=>{this.props.closeModal();document.querySelector('.nameInput').value = '';}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </button>
                            <h2 className='font-bold'>Edit Name</h2>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start gap-3 p-3 relative">
                            <span className='m-0' style={{color: '#2680eb'}}>Name</span>
                            <input type="text" className='w-full nameInput border-b-4' style={{borderColor: '#2680eb'}} placeholder={`${this.props.state.user.userName}`}/>
                        </div>
                        <div className="w-full flex justify-center items-start gap-3 text-white p-3 mb-3" style={{backgroundColor: '#2680eb'}}>
                            <span>you can not use this letters [@,#] in your name</span>
                        </div>
                        <div className="w-full flex justify-end items-center gap-3 p-3 relative">
                            <button className='ModalButton px-3 py-1 rounded-md' onClick={()=>{this.props.closeModal();document.querySelector('.nameInput').value = '';}}>cancel</button>
                            <button className='ModalButton px-3 py-1 rounded-md' onClick={
                                ()=>{
                                    const name = document.querySelector('.nameInput').value;
                                    if(!(name.includes('@') || name.includes('#'))){
                                        this.props.changeAccInfo([name , 'name']);
                                    }
                                    else{
                                        alert('name incorrect')
                                    }
                                }
                            }>save</button>
                        </div>
                    </div>
                </modal>
            );
        }
        else if(this.props.type == 'phone'){
            return (
                <modal className={`${this.props.show} w-screen h-screen fixed z-20 justify-center items-center`}>
                    <div className='w-38 h-max rounded-md shadow-sm relative flex flex-col justify-start items-center' style={{backgroundColor: 'white'}}>
                        <div className='w-full h-max p-3 mb-3 flex gap-3'>
                            <button className="close w-5 h-5" onClick={()=>{this.props.closeModal();document.querySelector('.nameInput').value = '';}}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </button>
                            <h2 className='font-bold'>Edit Phone</h2>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start gap-3 p-3 relative">
                            <span className='m-0' style={{color: '#2680eb'}}>Phone</span>
                            <input type="text" className='w-full nameInput border-b-4' style={{borderColor: '#2680eb'}} placeholder={`${this.props.state.user.phone}`}/>
                        </div>
                        <div className="w-full flex justify-center items-start gap-3 text-white p-3 mb-3" style={{backgroundColor: '#2680eb'}}>
                            <span>your phone number should start with + and have more than 12 character</span>
                        </div>
                        <div className="w-full flex justify-end items-center gap-3 p-3 relative">
                            <button className='ModalButton px-3 py-1 rounded-md' onClick={()=>{this.props.closeModal();document.querySelector('.nameInput').value = '';}}>cancel</button>
                            <button className='ModalButton px-3 py-1 rounded-md' onClick={
                                ()=>{
                                    const name = document.querySelector('.nameInput').value;
                                    if(name[0] == '+' && name.length >= 12){
                                        this.props.changeAccInfo([name , 'phone']);
                                    }
                                    else{
                                        alert('phone incorrect!')
                                    }
                                }
                            }>save</button>
                        </div>
                    </div>
                </modal>
            );
        }
        else{
            return(
                <modal className={`${this.props.show} w-screen h-screen fixed z-20 justify-center items-center`}>
                    <div className='w-38 h-max rounded-md shadow-sm relative flex flex-col justify-start items-center' style={{backgroundColor: 'white'}}>
                        <div className='w-full h-max p-3 mb-3 flex gap-3'>
                            <button className="close w-5 h-5" onClick={this.props.closeInfAcc}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </button>
                            <h2 className='font-bold'>Edit username</h2>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start gap-3 p-3 relative">
                            <span className='m-0' style={{color: '#2680eb'}}>@username</span>
                            <input type="text" className='w-full nameInput border-b-4' style={{borderColor: '#2680eb'}} placeholder={`@${this.props.state.user.userId}`}/>
                        </div>
                        <div className="w-full flex justify-center items-start gap-3 text-white p-3 mb-3" style={{backgroundColor: '#2680eb'}}>
                            <span>you can use a-z 0-9 and underscores</span>
                        </div>
                        <div className="w-full flex justify-end items-center gap-3 p-3 relative">
                            <button className='ModalButton px-3 py-1 rounded-md' onClick={()=>{this.props.closeModal();document.querySelector('.nameInput').value = '';}}>cancel</button>
                            <button className='ModalButton px-3 py-1 rounded-md' onClick={
                                ()=>{
                                    const name = document.querySelector('.nameInput').value;
                                    if(this.checkValidUsername(name)){
                                        this.props.changeAccInfo([name , 'username']);
                                        document.querySelector('.nameInput').value = '';
                                    }
                                    else{
                                        alert('username incorrect!')
                                    }
                                }
                            }>save</button>
                        </div>
                    </div>
                </modal>
            )
        }
    }

    checkValidUsername(username){
        for(let i=0 ; i<username.length ; ++i){
            if(!(('a'.charCodeAt(0) <= username[i].charCodeAt(0) && username[i].charCodeAt(0) <= 'z'.charCodeAt(0)) || ('0'.charCodeAt(0) <= username[i].charCodeAt(0) && username[i].charCodeAt(0) <= '9'.charCodeAt(0)) || username[i] == '_')){
                return false;
            }
        }
        return true;
    }
}
 
export default AccountChange;