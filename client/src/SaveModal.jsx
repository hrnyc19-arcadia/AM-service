import React from 'react';
import {Modal} from 'react-bootstrap';


class SaveModal extends React.Component {
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
            show: true
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
                <button class='sharesavebtn' onClick={this.popUp} > Save </button>
                <Modal id='modal' show={this.state.show} >
                     <Modal.Header>
                     <Modal.Title >
                     <button id='x' onClick={this.shut} > X </button>
                     </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                       
                     <p>Save</p>
                       
                       <p>Save to Your List</p>
                       <p>Name:</p>
                    </Modal.Body>
                     <Modal.Footer>
                    </Modal.Footer>
                 </Modal>
            </div>
        )
    }
}

    export default SaveModal;