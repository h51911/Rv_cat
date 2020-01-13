import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
import axios from "axios";
import qs from "qs";
import { message, Button } from "antd";
import { useParams, withRouter } from "react-router-dom";
const StyledComponents = styled.div`
  .login {
    height: 100vh;
    background-color: #6fb3e0;
    overflow: hidden;

    form {
      margin: 150px auto;
      width: 375px;
      height: 330px;
      border: 4px solid #000;
      background-color: #fff;

      h3 {
        text-align: center;
        font-size: 27px;
        width: 291px;
        border-bottom: 1px solid #ccc;
        margin: 30px auto;
        color: #478fca;
      }

      input {
        box-sizing: border-box;
        padding: 5px 4px;
        display: block;
        margin: 10px auto;
        width: 291px;
        height: 34px;
        border: 1px solid #ccc;
      }

      .btn {
        display: block;
        margin: auto;
        margin-top: 30px;
        width: 291px;
        height: 34px;
        background-color: #357ebd;
        color: #fff;
        text-align: center;
        line-height: 34px;
        cursor: pointer;
      }

      p {
        margin: 10px auto;
        text-align: center;
        font-size: 13px;
      }

      .zong {
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #428bca;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;
export default withRouter(
  class Login extends WeElement {
    render() {
      return h(
        StyledComponents,
        null,
        h(
          "div",
          {
            className: "login"
          },
          h(
            "form",
            {
              action: ""
            },
            h("h3", null, this.text, "\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF"),
            h("input", {
              ref: "text",
              type: "text",
              placeholder: "\u5B66\u53F7/\u8EAB\u4EFD\u8BC1\u53F7\u7801"
            }),
            h("input", {
              ref: "password",
              type: "password",
              placeholder: "\u5BC6\u7801"
            }),
            h(
              "div",
              {
                className: "btn",
                onClick: this.login.bind(this)
              },
              "\u767B\u5F55"
            ),
            h(
              "p",
              null,
              "New Student System\u4F53\u9A8C\u5168\u65B0\u5B66\u5458\u7CFB\u7EDF"
            ),
            h(
              "div",
              {
                className: "zong"
              },
              "\u5B66\u4E60\u603B\u7ED3\u5165\u53E3"
            )
          )
        )
      );
    }

    componentWillMount() {
      this.text = "";
      let role = window.location.href.split("?")[1].split("=")[1] * 1;

      if (role == 1) {
        this.text = "学生";
      } else if (role == 2) {
        this.text = "教师";
      } else if (role == 3) {
        this.text = "教务";
      }
    }

    login() {
      let _ = this;

      if (this.refs.text.value || this.refs.password.value) {
        let role = window.location.href.split("?")[1].split("=")[1] * 1;
        let params = {
          userID: this.refs.text.value,
          password: this.refs.password.value,
          role
        };
        params = qs.stringify(params);
        axios.post("http://localhost:8888/login", params).then(function(data) {
          if (data.data.length) {
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("userID", _.refs.text.value);
            sessionStorage.setItem("password", _.refs.password.value);

            if (role == 1) {
              _.props.history.push("/alayout/smessage1");
            } else if (role == 2) {
              _.props.history.push("/teacher/tmessage1");
            } else if (role == 3) {
              _.props.history.push("/admin/addstudent");
            }
          } else {
            message.error("账号或密码错误", 3);
          }
        });
      } else {
        message.warning("请填写账号或密码", 3);
      }
    }
  }
);
