import React from 'react';
import ReactDOM from 'react-dom';
import PhotosModal from './PhotosModal.jsx';
import SaveModal from './SaveModal.jsx';
import ShareModal from './ShareModal.jsx';
import axios from 'axios';


class Main extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            homeId: Number(window.location.href.split('/')[window.location.href.split('/').length - 1].slice(1, 4)),
            images: [],
            ext: ''
        }
    }

    componentDidMount(){
        console.log(Number(window.location.href.split('/')[window.location.href.split('/').length - 1].slice(1)))
        this.getImagesForMainCarousel();
        
    }

    getImagesForMainCarousel(){
        //replace with getting url id end
        axios.get('/images/' + this.state.homeId)
        .then((data)=>{
            var data = data.data
            var ints = data.filter((el)=>{
                return (el.type === 'interior');
            })
            var extr = data.filter((el)=>{
                return (el.type === 'exterior');
            })[0]
            console.log(extr)
            this.setState({
                images: ints,
                ext: extr
            })
        })
    }

    render(){
        // console.log('Checking params to render')
        // console.log(match)
        return (
            <div>
                
                {/* <button id='staticbtn' >heyyy</button> if window width is less than make transparent button */}
                
                <section id='sharesaveviewgrid'>
                    <SaveModal images={this.state.images}/>
                    <ShareModal images={this.state.images}/>
                    <PhotosModal images={this.state.images}/>
                </section>
                
                {/* <ShareModal images={this.state.images}/> */}
                <section id='grid' className='outer'>
                    <div class='image' id='exterior'>
                         <img src={this.state.ext.image} alt={this.state.ext.type} />
                        <div id="item-overlay top"> </div>
                    </div>
                    <div id='gridholder'>
                        
                        <div id='grid' className='inner'>
                            {this.state.images.map((image)=>{
                                return (
                                <div class='image' id='interior'>
                                <img key={image.id} src={image.image} alt={image.type} />
                                <div id="item-overlay top"> </div>
                             </div>)
                     })}
                     
                        </div>
                    
                    </div>
                    

                </section>
                {/* <ModalConductor /> */}
            </div> 
        )    
    };
}

ReactDOM.render(<Main/>, document.getElementById('main'))