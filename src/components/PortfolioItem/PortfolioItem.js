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
            {props.linkGitHub && <a target={"_blanc"} className={"PortfolioItem__link"} href={props.linkGitHub}>{props.textLinkGitHub}</a>}
            {props.linkProject && <a target={"_blanc"} className={"PortfolioItem__link"} href={props.linkProject}>{props.textLinkProject}</a>}

            {isModal ? <Modal
                close={toggleModal}
                imagesAndDetails={props.imagesAndDetails}
            /> : null}
        </>
    )
}

export default PortfolioItem