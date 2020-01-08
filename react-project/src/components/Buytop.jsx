import React from 'react';
class Buytop extends React.Component {
    constructor() {
        super();
        this.state = {
            imgarr: [
                {
                    title: '房车大全',
                    imgurl: 'https://www.rv28.com/rv28/touch/daquan.png'
                },
                {
                    title: '房车展会',
                    imgurl: 'https://www.rv28.com/rv28/touch/zhanhui.png',
                },
                {
                    title: '房车租赁',
                    imgurl: 'https://www.rv28.com/rv28/touch/zulin.png',
                },
                {
                    title: '论坛社区',
                    imgurl: 'https://www.rv28.com/rv28/touch/bbs.png',
                },
                {
                    title: '搜索附近',
                    imgurl: 'https://www.rv28.com/rv28/touch/fujin.png'
                },
            ],
        }
    }
    render() {
        return (
            <>
                <ul className="buytop">
                    {
                        this.state.imgarr.map((item, index) => {
                            return (
                                <li key={item.imgurl}>
                                    <img src={item.imgurl} alt="" />
                                    <span>{item.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        );
    }
}
export default Buytop;