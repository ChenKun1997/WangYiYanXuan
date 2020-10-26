import React from 'react';
import LazyImg from '../../../../plugin/LazyImg';
import AppScroll from '../../../../components/app-scroll'

export default function List({data}){
    return (
        <div className='list-wrap'>
            <AppScroll className='scroll'>
            {
                data.map(({category,itemList})=>(
                    <div className='list' key={category.id}>
                        <h3 className='category_item_title'>{category.name}</h3>
                        <h3 className='category_item_title'>{category.frontName}</h3>
                        <ul className='goods_list'>
                            {
                                itemList.map((item)=>(
                                    <li key={item.id} className='item_goods'>
                                        <div>
                                            <LazyImg src={item.listPicUrl} alt=""/>
                                            {
                                                item.listPromBanner ?
                                                <div>
                                                    <div>
                                                        <h4>{item.listPromBanner.promoTitle}</h4>
                                                        <h5>{item.listPromBanner.promoSubTitle}</h5>
                                                    </div>
                                                    <p>{item.listPromBanner.content} </p>
                                                </div>:
                                                <p>{item.simpleDesc}</p>
                                            }
                                        </div>
                                        <h2>{item.name}</h2>
                                        <p>
                                            <span> ￥{ item.retailPrice }</span>
                                            { item.counterPrice && <span>￥{item.counterPrice}</span> }
                                        </p>   
                                        <p>
                                            {item.itemTagList && item.itemTagList.map(i=>(
                                                <span key={i.tagId}>
                                                    {i.name}
                                                </span>
                                            ))}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
            </AppScroll>
        </div>
    )
}