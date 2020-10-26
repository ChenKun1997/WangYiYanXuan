import React ,{useEffect,useRef,useState} from 'react'
import './style.scss';
export default function LazyImg(props) {
    const [show, setShow] = useState(false)
    const [src, setSrc] = useState('')
    const ref = useRef(null)
    const srcRef = useRef('')
    const load = useRef(null)
    useEffect(() => {
      srcRef.current = props.src
    }, [props])
   useEffect(() => {
     let curEl = ref.current
       let _io = new IntersectionObserver(
        entries => { 
          entries.forEach(item => {
              if(item.intersectionRatio && load.current !== srcRef.current){ 
                let img = new Image()
                img.src = srcRef.current;
                img.onload =()=>{
                  setShow(true)
                  setSrc(srcRef.current)
                  load.current =srcRef.current;
                  img = null;
              //  typeof props.loadEnd === "function" && props.loadEnd(item)
              //   } 
              // }else if(item.intersectionRatio && load.current === props.src){
              //   typeof props.appear === "function" && props.appear(item)  
              // }else if(!item.intersectionRatio  && load.current === props.src){
              //   typeof props.hide === "function" && props.hide(item)  
              // }
                }
              }
          })
        }
      );
    _io.observe(curEl)
    return () => {
        _io.unobserve(curEl);
        _io = null
    }
   }, [])
        return <>
             <div ref={ref} >
                {show?<img src={show?src:''} alt=""/> :( props.unSK? "": <div className={"gu " + props.className}></div>)}
            </div>
         </>
}