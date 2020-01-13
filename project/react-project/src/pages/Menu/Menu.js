import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledComponents = styled.div`
  .menu {
    overflow: hidden;
    height: 100vh;
    background-color: #6699cc;

    a:hover {
      color: #0000ff;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
    }

    ul {
      width: 450px;
      margin: 125px auto;
    }

    p {
      color: #fff;
      font-size: 13px;
      text-align: center;
    }

    li {
      text-align: center;
      line-height: 30px;
    }

    .l1 {
      border: 1px solid #000;
      height: 30px;
    }

    .l2 {
      border-bottom: 1px solid #000;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      height: 30px;
      line-height: 30px;
    }

    .l3 {
      border-bottom: 1px solid #000;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      height: 30px;
      line-height: 30px;
    }
  }
`;

class Menu extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        {
          className: "menu"
        },
        h(
          "ul",
          null,
          h("p", null, "\u6B22\u8FCE\u4F7F\u7528"),
          h(
            "p",
            null,
            "\u6842\u6797\u7535\u5B50\u79D1\u6280\u5927\u5B66\u5317\u6D77\u6821\u533A\u2014\u2014\u2014\u2014\u5236\u4F5C\u4EBA\uFF1A\u8881\u8D85"
          ),
          h(
            "p",
            null,
            "\u8BF7\u9009\u62E9\u76F8\u5E94\u7684\u5B50\u529F\u80FD\u6A21\u5757"
          ),
          h(
            "li",
            {
              className: "l1"
            },
            h(
              Link,
              {
                to: "/login?id=1"
              },
              "\u5B66\u751F\u9009\u8BFE\u7CFB\u7EDF"
            )
          ),
          h(
            "li",
            {
              className: "l2"
            },
            h(
              Link,
              {
                to: "/login?id=2"
              },
              "\u6559\u5E08\u4FE1\u606F\u7CFB\u7EDF"
            )
          ),
          h(
            "li",
            {
              className: "l3"
            },
            h(
              Link,
              {
                to: "/login?id=3"
              },
              "\u6559\u52A1\u7BA1\u7406\u7CFB\u7EDF"
            )
          ),
          h(
            "p",
            null,
            "\u6280\u672F\u652F\u6301\uFF1A\u6842\u6797\u7535\u5B50\u79D1\u6280\u5927\u5B66\u8BA1\u7B97\u673A\u5DE5\u7A0B\u5B66\u9662\u2014\u2014\u8881\u8D85"
          ),
          h("p", null, "\u6307\u5BFC\u8001\u5E08\uFF1A\u8001\u8C22")
        )
      )
    );
  }
}

export default Menu;
