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
                <button class='sharesavebtn' onClick={this.popUp} > Save
                <div id='inliners'>
                <svg viewBox="0 0 100 100"> 
                <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"></path>
                </svg>
                </div>
                
              
                 </button>
                <Modal id='modal' show={this.state.show} >
                     <Modal.Header>
                     <Modal.Title >
                     <button id='x' onClick={this.shut} > X </button>
                     </Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                       
                     <h4 class='h4txt'>Save</h4>
                       
                       <p class='ptxt' >Save to Your List</p>
                       <p class='ptxt' >Name:</p>
                    </Modal.Body>
                     <Modal.Footer>
                    </Modal.Footer>
                 </Modal>
            </div>
        )
    }
}

    export default SaveModal;