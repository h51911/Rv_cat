import React from 'react'
import {Icon,Button,Input } from 'antd'
import axios from 'axios'
import './updata.css'
class UpdateUser extends React.Component{

    chuanUser =async (e) => {
        let val = e.target.value;
       if(val){
        let {data} = await axios.get('http://localhost:5200/user/one',{
            params:{username:val}
        })
       if(data.code==1){
           alert('此用户不存在')
       }
       }else{
           console.log('你没输入')
       }
    }
    update=async()=>{
        let username = this.num1.state.value
        let password = this.num2.state.value
        let {data} = await axios.get('http://localhost:5200/user/repair',{
            params:{username,password}
        })
       if(data=='success'){
           alert('修改成功')
       }
    }
    render(){
        return(<div>
            <form className='updata'>
            <div className='shuru'>
            <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
            <Input type='text' placeholder='请输入需修改的用户名' ref={el=>this.num1=el} onBlur={this
            .chuanUser} id='userName' />
            </div>
            <div className='psw'>
            <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
            <Input type="password" placeholder='输入6位数新密码' id='password' ref={el=>this.num2=el} />
            </div>
            <Button type="danger" style={{margin:'0 auto'}} onClick={this.update}>修改密码</Button>
            </form>
        </div>)
    }
}

export default UpdateUser