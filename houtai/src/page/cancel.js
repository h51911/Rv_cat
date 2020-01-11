import React from 'react'
import { Button } from 'antd'





class Cancel extends React.Component{

    render(){
        return(
            <div>
                <table style={{width:'80vw',border:'1px solid #99999'}}>
                    <thead>
                        <tr>
                            <td>用户名</td>
                            <td>密码</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>吴文峰</td>
                            <td>123456</td>
                            <td><Button>删除</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cancel