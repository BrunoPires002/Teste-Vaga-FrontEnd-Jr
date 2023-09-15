import React from 'react';
import ReactDOM from 'react-dom';
import './style-modal.css';
import './index.css';

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="img">
            <img></img>
          </div>
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 className='title'>
              title
            </h2>
          <h2 className="value">
            R$ 1.499,90
          </h2>

          <h2 className="desc">
            Many desktop publishing packages and web page editors now many desktop publishing
          </h2>

          <h2 className="more">
            <a href="">Veja mais detalhes do produto</a>
          </h2>
          
          <h2 className="quant">
            <button className="menos"> - </button>
            <p>1</p>
            <button className="mais"> + </button>
          </h2>
          
          <button id="myBtn" className="btn">COMPRAR</button>

          </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;