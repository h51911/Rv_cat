import React, {
    Component
} from 'react';

import '../style/Hot.scss'
import AboutUs from '../components/AboutUs';
class Hot extends Component {

    render() {
        return (
            /* 列表 */
        <div style={{background:'white'}} className={'hot_car'}>
        {/* Hot */}
           <ul>
               <li>
                    <img src="https://www.rv28.com/data/attachment/portal/201903/25/094647qlov7slz7x0lzmtx.jpg.thumb.jpg" alt=""/>
                    <p className={'p1'}>长城览众风骏C4房车</p>
                    <p className={'p2'}>23.88万</p>
               </li>
               <li>
                    <img src="https://www.rv28.com/data/attachment/portal/201903/25/094647qlov7slz7x0lzmtx.jpg.thumb.jpg" alt=""/>
                    <p className={'p1'}>长城览众风骏C4房车</p>
                    <p className={'p2'}>23.88万</p>
               </li><li>
                    <img src="https://www.rv28.com/data/attachment/portal/201903/25/094647qlov7slz7x0lzmtx.jpg.thumb.jpg" alt=""/>
                    <p className={'p1'}>长城览众风骏C4房车</p>
                    <p className={'p2'}>23.88万</p>
               </li><li>
                    <img src="https://www.rv28.com/data/attachment/portal/201903/25/094647qlov7slz7x0lzmtx.jpg.thumb.jpg" alt=""/>
                    <p className={'p1'}>长城览众风骏C4房车</p>
                    <p className={'p2'}>23.88万</p>
               </li><li>
                    <img src="https://www.rv28.com/data/attachment/portal/201903/25/094647qlov7slz7x0lzmtx.jpg.thumb.jpg" alt=""/>
                    <p className={'p1'}>长城览众风骏C4房车</p>
                    <p className={'p2'}>23.88万</p>
               </li><li>
                    <img src="https://www.rv28.com/data/attachment/portal/201903/25/094647qlov7slz7x0lzmtx.jpg.thumb.jpg" alt=""/>
                    <p className={'p1'}>长城览众风骏C4房车</p>
                    <p className={'p2'}>23.88万</p>
               </li><li>
                    <img src="https://www.rv28.com/data/attachment/portal/201903/25/094647qlov7slz7x0lzmtx.jpg.thumb.jpg" alt=""/>
                    <p className={'p1'}>长城览众风骏C4房车</p>
                    <p className={'p2'}>23.88万</p>
               </li>
           </ul>
        {/* 底部 */}
        <AboutUs></AboutUs>
       </div>)
    }
}
export default Hot;