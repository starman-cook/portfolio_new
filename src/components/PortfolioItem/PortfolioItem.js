import React from 'react'
import './PortfolioItem.css'

const PortfolioItem = (props) => {
    return (
        <div onClick={props.click} className={"PortfolioItem"}>
            <p className={"PortfolioItem__text"}>{props.text}</p>
        </div>
    )
}

export default PortfolioItem