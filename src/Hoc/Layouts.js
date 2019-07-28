import React,{ Component} from 'react';
import Header from '../Components/Header_footer/Header'
const layout=( props )=>{
    return <div>
       <Header/>
       {props.children}
       END This is Footer
    </div>
}
export default layout