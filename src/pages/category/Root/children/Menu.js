import React from 'react';
import AppScroll from '../../../../components/app-scroll'

export default function Menu({data,selected,onChange}) {
    return (
        <div className='menu'>
            <AppScroll className='scroll'>
            {
                data.map(item=>(
                    <div
                     key={item.id}
                     className={`menu-item ${selected === item.id ? 'active' : ''}`}
                     onClick={()=>{onChange(item.id)}}
                    >
                        {item.text}
                    </div>
                ))
            }
            </AppScroll>
        </div>
    )
}
