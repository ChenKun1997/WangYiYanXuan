import React from 'react'
import { withRouter } from 'react-router-dom'

function Cate({data,history}) {
    return (
        <div className='cate'>
            {
                data.map(item=>(
                    <div 
                        className='cate-item' 
                        key={item.id}
                        onClick={()=>{
                            history.push({pathname:'/category',state:{id:item.id}})
                        }}
                    >
                        <img src={item.picUrl} alt=""/>
                        <span>{item.text}</span>
                    </div>
                ))
            }
        </div>
    )
}
export default withRouter(Cate);