import React from 'react'



const Banner = React.forwardRef(({data},ref)=> {
    return (
        <div className='swiper-container banner' ref={ref}>
            <div className="swiper-wrapper">
            {
                data.map(item=>(
                    <div key={item.id} className='swiper-slide'>
                        <img src={item.picUrl} alt=""/>
                    </div>
                ))
            }
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
})
Banner.displayName = 'Banner';
export default Banner;
