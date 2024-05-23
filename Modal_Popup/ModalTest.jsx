import { useState } from "react";
import Modal from "./Modal";
import "../Modal_Popup/Modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal 
        header={<h1>Alex's Header</h1>}
        footer={<h1>Alex's footer</h1>}
        onClose={onClose} body={<div>Alex's Customized Body</div>} />
      )}
    </div>
  );
};

export default ModalTest;
