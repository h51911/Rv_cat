import React from 'react';

export function withStorage(InnerComponent){
    let user = localStorage.getItem('user');
    if(user){
        user = JSON.parse(user);
    }
    // history,location,match
    // return function OuterComponent(props){
    //     // console.log('OuterComponent',props)
    //      return <InnerComponent {...props} user={user}>{props.children}</InnerComponent>
    // }
    return class OuterComponent extends React.Component{
        render(){
            return <InnerComponent {...this.props} user={user}>{this.props.children}</InnerComponent>
        }
    }
}