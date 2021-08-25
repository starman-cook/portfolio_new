import React, {useState} from 'react'
import './PortfolioItem.css'
import Modal from "../Modal/Modal";

const PortfolioItem = (props) => {
    const [isModal, setIsModal] = useState(false)
    const toggleModal = () => {
        setIsModal(!isModal)
    }
    return (
        <>
            <div onClick={toggleModal} className={"PortfolioItem"}>
                <p  className={"PortfolioItem__text"}>{props.text}</p>
            </div>
            <a target={"_blanc"} className={"PortfolioItem__link"} href={props.link}>Github repository</a>

            {isModal ? <Modal
                close={toggleModal}
                imagesAndDetails={props.imagesAndDetails}
            /> : null}
        </>
    )
}

export default PortfolioItem