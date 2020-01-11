import React from 'react'
import "../style/Backtop.scss";
class Backtop extends React.Component {
    constructor() {
        super();
    }
    back = () => {
        window.scrollTo(0, 0)
    }
    componentDidMount() {
        window.onscroll = () => {
            if (window.scrollY <= 200) {
                this.e.style.display = "none";
            } else {
                this.e.style.display = "block";
            }
        }
    }
    componentWillUnmount() {
        window.onscroll = null;
    }
    render() {
        return (
            <div ref={(e) => { this.e = e }} className="backtop" onClick={this.back}>
                <div className="ic">
                    <span className="iconfont icon-upward"></span>
                </div>
            </div>
        )

    }
}
export default Backtop;