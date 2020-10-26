import React from 'react'

export default function newGoods({data}) {
    return (
        <div className='new-goods'>
            {
                data.map(item=>(
                    <div className='new-goods-item' key={item.id}>
                        <img src={item.picUrl} alt=""/>
                        <h3>{item.name}</h3>
                        <p>￥{item.retailPrice}</p>
                    </div>
                ))
            }
        </div>
    )
}
