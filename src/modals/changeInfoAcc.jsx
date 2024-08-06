import React, { Component } from 'react';
import AccountChange from './changeAcc';

class AccountInfo extends Component {

    newUserInfo = {username: this.props.state.user.userName, userId: this.props.state.user.userId, phone: this.props.state.user.phone, email: this.props.state.user.email}
    state = {
        changeBioLen: this.props.state.user.bio.length,
        openAccChange: [false,'']
    }

    render() { 
        return (
            <modal className={`${this.props.show} w-screen h-screen fixed z-10 justify-center items-center`}>
                <AccountChange show={this.state.openAccChange[0]} type={this.state.openAccChange[1]} state={this.props.state} closeModal={this.closeModal.bind(this)} changeAccInfo={this.props.changeAccInfo}/>
                <div className='w-1/4 h-max rounded-md shadow-sm relative flex flex-col justify-start items-center' style={{backgroundColor: 'white'}}>
                    <div className='w-full h-max p-3 mb-3'>
                        <button className="close w-5 h-5" onClick={this.props.closeInfAcc}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </button>
                    </div>
                    <button className='profile relative w-max h-max rounded-full border-4 flex justify-center items-center overflow-hidden'>
                        <img src={this.props.state.user.img} className='w-24 h-24 rounded-full' alt="" />
                        <div className='w-full h-10 absolute camera flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"/></svg>
                        </div>
                    </button>
                    <div className="w-full flex justify-center">
                        <h4 className='font-bold'>{this.props.state.user.userName}</h4>
                    </div>
                    <div className="w-full flex justify-center mb-3">
                        <span className='text-sm' style={{color: '#2680eb'}}>online</span>
                    </div>
                    <div className="w-full flex justify-center items-start gap-3 px-3">
                        <textarea name="" id="" className='resize-none w-11/12' onInput={
                            (e)=>{
                                let value= e.target.value;
                                this.setState({changeBioLen: value.length});
                                e.target.style.height = 'auto';
                                e.target.style.height = `${e.target.scrollHeight}px`;
                            }
                        }>{this.props.state.user.bio}</textarea>
                        <span style={(70 - this.state.changeBioLen) < 0 ? {color : 'red'} : {color : 'black'}}>{70 - this.state.changeBioLen}</span>
                    </div>
                    <div className="w-full flex justify-center items-start gap-3 text-white p-3 mb-3" style={{backgroundColor: '#2680eb'}}>
                        <span>Any details like age , where were you live ...</span>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3 p-3 relative changeUserInfo" onClick={()=>{
                        this.setState({openAccChange : ['active','name']});
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                        <span>Name</span>
                        <span style={{color: '#2680eb', right: '15px'}} className='absolute'>{this.props.state.user.userName}</span>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3 p-3 relative changeUserInfo" onClick={()=>{
                        this.setState({openAccChange : ['active','phone']});
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                        <span>Phone</span>
                        <span style={{color: '#2680eb', right: '15px'}} className='absolute'>{this.props.state.user.phone}</span>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3 p-3 relative changeUserInfo" onClick={()=>{
                        this.setState({openAccChange : ['active','username']});
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                        <span>username</span>
                        <span style={{color: '#2680eb', right: '15px'}} className='absolute'>@{this.props.state.user.userId}</span>
                    </div>
                    <div className="w-full flex justify-center items-start gap-3 text-white p-3 my-3" style={{backgroundColor: '#2680eb'}}>
                        <span>People can find you by username</span>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3 mb-3 p-3 relative changeUserInfo">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                        <span>logout</span>
                    </div>
                    {/* <div className="w-full h-max flex justify-between">
                        <button onClick={()=>{this.props.changeAccInfo(this.newUserInfo)}} className='p-3 bg-green-700 text-white rounded-md'>
                            Save Change
                        </button>
                        <button className='p-3 bg-red-700 text-white rounded-md' onClick={this.props.closeInfAcc}>
                            Cancel
                        </button>
                    </div> */}
                </div>
            </modal>
        );
    }

    isNumeric(str) {
        if (typeof str !== 'string') return false;
        return !isNaN(str) && !isNaN(parseFloat(str));
    }

    closeModal(){
        this.setState({openAccChange : [false,'']});
    }
}
 
export default AccountInfo;