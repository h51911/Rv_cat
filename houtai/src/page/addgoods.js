import React from 'react'
import Api from '../Api'
import $ from 'jquery';
import axios from 'axios'
import 'antd/dist/antd.css';
import { Input } from 'antd';
class Addgoods extends React.Component {
    state = {
        img: ''
    }
    add = () => {
        var fileObj = "";
        var imgData = "";
        let that = this
        $("#myFile").change(function () {
            // 构造一个文件渲染对象
            var reader = new FileReader();
            // 得到文件列表数组
            fileObj = $(this)[0].files[0];
            // 拿到文件数据
            reader.readAsDataURL(fileObj);

            reader.onload = function () {
                // 获取文件信息
                imgData = reader.result;
                // 显示图片
                that.setState({
                    img: imgData
                })
                $("#logo").attr("src", imgData);
                $("#logo").show();

            }

        });


    }
    baocun = async () => {
        let routeId = this.keydown.state.value
        let routeName = this.keydown1.state.value
        let routePrice = this.keydown2.state.value
        // console.log(num, num1, num2, this.state.img)
        let imgList = this.state.img
       
        let {data} = await axios.post('http://localhost:5200/goods/tianjia', {
          
                routeId,
                routeName,
                routePrice,
                imgList
            
        })
        if(data.code==1){
            alert('ok')
        }else{
            alert('失败')
        }
    }
    render() {
        return (
            <div>
                <Input placeholder=" 商品id" style={{ marginBottom: 20 }} ref={el => this.keydown = el} />
                <Input placeholder=" 商品描述" style={{ marginBottom: 20 }} ref={el => this.keydown1 = el} />
                <Input placeholder=" 商品价格" style={{ marginBottom: 20 }} ref={el => this.keydown2 = el} />
                <br />
                <br />
                <br />
                添加图片
                <br />

                <input type="file" id="myFile" onClick={this.add} />


                <p><img id="logo" src={require('../1.jpg')} alt="" className="login" style={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%'
                }} /></p>
                <button onClick={this.baocun}>保存</button>
            </div>
        )
    }
}
export default Addgoods