import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MenuItemModal({MenuItem,show,handleClose}) {
    console.log(MenuItem)
    return (
        MenuItem?
        <Modal style={{opacity:1}} show={show} onHide={handleClose} id="menuItemModal">
            <Modal.Header id="menuItemHeader">
                <Modal.Title id="menuItemTitle">
                    <b >{MenuItem.name}</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body id="modalBody">
                <img id="menuItemImage" src={MenuItem.image} alt={MenuItem.name}/>
            <p id="menuItemDescription">{MenuItem.description}</p>
            </Modal.Body>
            <Modal.Footer id="menuItemFooter">
                <b><p id="menuItemFooterPrice">${MenuItem.price} </p></b>
            </Modal.Footer>
        </Modal>: <></>
     );
}

export default MenuItemModal;