// import React from 'react';


// class PhotosModal extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             show: false,
//             currentPic: this.props.images[0],
//             currentIdx: 0,
//             currentList: this.props.images.slice(0, 8),
//         }
//         this.popUp = this.popUp.bind(this)
//         this.shut = this.shut.bind(this)
//         this.nextPhoto = this.nextPhoto.bind(this)
//     }


   

//     popUp(){
//         this.setState({
//             show: true
//         })
//     }

//     shut(){
//         this.setState({
//             show: false
//         })
//     }

//     nextPhoto(image){
//         // if(image){
//         //     this.setState({
//         //         currentPic: image,
//         //         currentIdx: this.props.images.indexOf(image),
//         //         currentList: this.props.images.slice((this.currentIdx-3), (this.currentIdx + 4))
//         //     })
//         // } else {
//         //     this.setState({
//         //         currentPic: this.props.images[this.currentIdx+1],
//         //         currentIdx: (this.currentIdx+=1),
//         //         currentList: this.props.images.slice((this.currentIdx-3), (this.currentIdx + 4))
//         //     })
//         // }
        

//     }


//     render(){
//         return ( 
//             <div>
                
                
//             </div>
//         )
//     }
// }

// export default PhotosModal;