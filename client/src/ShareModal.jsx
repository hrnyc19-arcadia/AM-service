import React from 'react';
import {Modal} from 'react-bootstrap';


class ShareModal extends React.Component {
    constructor(props, context){
        super(props, context)
        this.state = {
           show: false
        }
        this.popUp = this.popUp.bind(this)
        this.shut = this.shut.bind(this)
    }

    popUp(){
        this.setState({
            show:true
        })
    }

    shut(){
        this.setState({
            show:false
        })
    }


    render(){
        return(
            <div>
                <button class='sharesavebtn' onClick={this.popUp} > Share </button>
                <Modal id='modal' show={this.state.show} >
                     <Modal.Header>
                     <Modal.Title >
                         <div>
                         <button id='x' onClick={this.shut} > X </button>
                         </div>
                     </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>

                       <p>Share</p>
                       
                        <p>Check out this awesome listing on Airbnb: Small house in Paris Center 5p - Houses for Rent in Paris-2E-Arrondissement</p>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Email</li>
                            <li>Messenger</li>
                            <li>Copy Link</li>
                            <li>Embed</li>
                        </ul>
                    </Modal.Body>
                     <Modal.Footer>
                    </Modal.Footer>
                 </Modal>
            </div>
        )
    }
}

    export default ShareModal;