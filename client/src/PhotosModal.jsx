import React from 'react';
import {Modal} from 'react-bootstrap';

class PhotosModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false,
            currentPic: this.props.images[0],
            currentIdx: 0,
            currentList: this.props.images.slice(0, 8),
            properties: {
                duration: Infinity,
                transitionDuration: 10,
                infinite: true,
                indicators: true,
                arrows: true
              }
        }
        this.popUp = this.popUp.bind(this)
        this.shut = this.shut.bind(this)
        this.nextPhoto = this.nextPhoto.bind(this)
    }

   

    popUp(){
        this.setState({
            show: true
        })
    }

    shut(){
        this.setState({
            show: false
        })
    }

    nextPhoto(image){
        if(image){
            this.setState({
                currentPic: image,
                currentIdx: this.props.images.indexOf(image),
                currentList: paddedImgList.slice((this.currentIdx-3), (this.currentIdx + 4))
            })
        } else {
            this.setState({
                currentPic: this.props.images[this.currentIdx+1],
                currentIdx: (this.currentIdx+=1),
                currentList: paddedImgList.slice((this.currentIdx-3), (this.currentIdx + 4))
            })
        }
        

    }


    render(){
        return ( 
            <div>
                <button class='staticbtn' onClick={this.popUp} > View Photos </button>
                <Modal id='photomodal' show={this.state.show}>
                
                    <Modal.Title >
                         <div>
                         <button id='x' onClick={this.shut} > X </button>
                         </div>
                     </Modal.Title>
               
                     <Modal.Body>
                           <div id='gallery'>
                               { this.state.currentList.map((image)=>{
                                       return (
                                       <div class='thumbnail'>
                                           <img key={image.id} src={image.image} alt={image.type} value={image} onClick={this.nextPhoto(event.target.value)} />
                                           <div id="item-overlay top"> </div>
                                       </div>)
                                })
                                }         
                           </div>
                   
                     </Modal.Body>
                     <Modal.Footer>
                     </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default PhotosModal;