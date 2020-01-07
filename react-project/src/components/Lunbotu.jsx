import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
class Lunbotu extends React.Component {
    constructor() {
        super();
        this.state = {
            img: [
                'https://www.rv28.com/data/attachment/portal/202001/01/194626ectzmxod68cdd1mf.jpg',
                'https://www.rv28.com/data/attachment/forum/201912/27/100022wlrlwkojjvrjdhhu.jpg',
                'https://www.rv28.com/data/attachment/portal/201912/26/123901kck7622a962tc8oq.jpg',
                'https://www.rv28.com/data/attachment/forum/201909/21/190818rx0z0606sh6qxiiy.jpg.thumb.jpg',
                'https://www.rv28.com/data/attachment/portal/201912/20/074536ha475pp50r3x7p4r.jpg'
            ],
        }
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite={true}
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => console.log('slide to', index)}
                >
                    {this.state.img.map(val => (
                        <img
                            src={val}
                            className="lunbotu"
                            alt=""
                            key={val}
                        // onLoad={() => {
                        //     // fire window resize event to change height
                        //     window.dispatchEvent(new Event('resize'));
                        //     this.setState({ imgHeight: 'auto' });
                        // }}
                        />
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}
export default Lunbotu;