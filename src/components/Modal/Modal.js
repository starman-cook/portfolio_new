import React from 'react'

import "react-image-gallery/styles/css/image-gallery.css";

import './Modal.css'
import ImageGallery from 'react-image-gallery';



const Modal = (props) => {
    return (
        <>
            <div onClick={props.close} className={"Modal__bg"} />
            <div className={"Modal"}>
                <ImageGallery items={props.imagesAndDetails} />
            </div>
        </>
    )
}

export default Modal