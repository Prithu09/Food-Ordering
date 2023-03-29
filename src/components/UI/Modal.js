import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backop = function ()

{
    return <div className={classes.Backop}></div>
}


const ModalOverlay = function(props)
{
    return <div className={classes.Modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = function (props)
{
    return <>
   {ReactDom.createPortal( <Backop/>, portalElement)};
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
    </>
}

export default Modal ;