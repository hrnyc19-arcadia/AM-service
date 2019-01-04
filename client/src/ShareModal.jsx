import React from 'react';
import {Modal} from 'react-bootstrap';


class ShareModal extends React.Component {
    constructor(props){
        super(props)
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

                       <h4 class='h4txt'>Share</h4>
                       
                        <p class='ptxt2'>Check out this awesome listing on Airbnb: {this.props.ext.description}</p>
                        <ul>
                            <li class='ptxt2'>Facebook</li>
                            <li class='ptxt2'>Twitter</li>
                            <li class='ptxt2'>Email</li>
                            <li class='ptxt2'>Messenger</li>
                            <li class='ptxt2'>Copy Link</li>
                            <li class='ptxt2'>Embed</li>
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