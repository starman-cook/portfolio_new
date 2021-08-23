import React, {useEffect, useRef, useState} from 'react'
import './MainPage.css'
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

const MainPage = () => {

    const parallax = useRef(null)
    const page = useRef(null)
    const mountOne = useRef(null)
    const mountTwo = useRef(null)
    const mountThree = useRef(null)
    const fog = useRef(null)

    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        function onScroll() {
            let currentPosition = window.pageYOffset
            setScrollTop(currentPosition <= 0 ? 0 : currentPosition)
            let w = page.current.clientWidth
            let h = page.current.clientHeight
            let h_b = parallax.current.clientHeight
            console.log(scrollTop)
            let p = scrollTop / h * 100
            let p_b = scrollTop / h_b * 100
            let o = 1 - 1 / 150 * p_b
            let o_2 = 1 - 1 / 150 * p_b
            let o_3 = 1 - 1 / 550 * p_b
            let o_4 = 1 - 1 / 850 * p_b

            if (p <= 100) {
                fog.current.style.display = "block"
                let z_1 = 1 + (w / 10000 * p_b)
                fog.current.style.transform = 'scale(' + z_1 + ')'
                fog.current.style.opacity = o

                let z_2 = 1 + (w / 2000000 * p);
                mountOne.current.style.transform = 'scale(' + z_2 + ')'
                mountOne.current.style.opacity = o_2


                let hr = w / 2000 * p_b;
                let z_3 = 1 + (w * 0.00003 * p_b);
                mountTwo.current.style.transform = 'translate3d(' + hr + 'px, 0, 0) scale(' + z_3 + ')'
                mountTwo.current.style.opacity = o_3


                let hr_2 = w / 140 * p_b
                let z_4 = 1 + (w * 0.000001 * p_b)
                mountThree.current.style.transform = 'translate3d(' + hr_2 + 'px, 0, 0) scale(' + z_4 + ')'
                mountThree.current.style.opacity = o_4
            }
            else {
                fog.current.style.display = "none"
            }

        }

        console.log(scrollTop)
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);



    }, [scrollTop])
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

    return (
        <div>
            <div className="page" ref={page}>
                <div className="parallax"  ref={parallax}>
                    <div className="parallax__mountain parallax__mountain--1" ref={mountOne}/>
                    <div className="parallax__mountain parallax__mountain--2" ref={mountTwo}/>
                    <div className="parallax__mountain parallax__mountain--3" ref={mountThree}/>
                    <div className="parallax__fog" id="parallax__fog" ref={fog}/>
                </div>
            </div>
            <div className={"blankArea"} />
            <h1 className={"MainPage__title"}>Pasha M</h1>
            <h1 className={"MainPage__subTitle"}>Web-developer</h1>
            <div className={"blankArea"} />
            <PortfolioItem />
        </div>
    )
}

export default MainPage