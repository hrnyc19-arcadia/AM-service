import React from 'react';
import ReactDOM from 'react-dom';
// import PhotosModal from './PhotosModal.jsx';
import SaveModal from './SaveModal.jsx';
import ShareModal from './ShareModal.jsx';
import axios from 'axios';


class Main extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            homeId: Number(window.location.href.split('/')[window.location.href.split('/').length - 1].slice(1, 4)),
            images: [],
            ext: '',
            show: false,
            currentPic: '',
            currentIdx: 0
        }
        this.popUp = this.popUp.bind(this)
        this.shut = this.shut.bind(this)
        this.nextPhoto = this.nextPhoto.bind(this)
    }

    componentDidMount(){
        // console.log(Number(window.location.href.split('/')[window.location.href.split('/').length - 1].slice(1)))
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
                ext: extr,
                currentPic: ints[0]
            })
        })
    }

    popUp(){
        this.setState({
            show: true
        })
        document.getElementById('main').classList.add('background')
    }

    shut(){
        this.setState({
            show: false
        })
        document.getElementById('main').classList.remove('background')
    }

    nextPhoto(i){
        if(i === 1){
            this.setState({
                currentPic: this.state.currentIdx === (this.state.images.length - 1 )? this.state.images[0] : this.state.images[this.state.currentIdx + 1],
                currentIdx: this.state.currentIdx === (this.state.images.length - 1 )?  0 : (this.state.currentIdx += 1)       
            })
        } else if (i === (-1)){
            this.setState({
                currentPic: this.state.currentIdx === 0 ? this.state.images[this.state.images.length -1] : this.state.images[this.state.currentIdx - 1],
                currentIdx: this.state.currentIdx === 0 ?  (this.state.images.length - 1) : (this.state.currentIdx -= 1)  
            })
        }
        console.log(this.state.currentIdx)

    }

    render(){
        
        return (
            <div class={this.state.show ? 'background' : ''}>
                {this.state.show ? (
                <div>
                    
                    {/* <section id='carousel-grid'> */}
                    <div id='carousel-row'>
                            <div class='carousel-col' id='x-out' onClick={this.shut}>X</div>
                            <div class='carousel-col' onClick={() => {this.nextPhoto((-1))}}>
                                <i  class="left"></i>
                            </div>
                            {/* <div class='carousel-col'> */}
                                 <img class='carousel-col' id='main-carousel-img' src={this.state.currentPic.image} alt={this.state.currentPic.type} /> 
                            {/* </div> */}
                            <div class='carousel-col' onClick={() => {this.nextPhoto(1)}} >
                                <i class="right"></i>
                            </div>
                    </div>
                    {/* </section> */}  
                    <section id='carousel-grid'>
                    <div id='carousel-row'>
                             {this.state.images.map((image)=>{
                                 return (
                                 <div class='carousel-image' id='interior'>
                                     <img key={image.id} src={image.image} alt={image.type} />
                                 </div>)
                             })}
                    </div>  
                    </section> 
                </div>
                    ) : (
                <div>
                <section id='sharesaveviewgrid'>
                        {/* <div id='sharesaveviewgrid'> */}
                            <SaveModal images={this.state.images}/>
                            <ShareModal images={this.state.images} ext={this.state.ext}/>
                            <div>
                                 <button class='staticbtn' onClick={this.popUp} > View Photos </button>
                            </div>
                        {/* </div> */}   
                </section>
                <section id='grid' className='outer'>
                    <div class='image' id='exterior'>
                         <img src={this.state.ext.image} />
                        <div id="item-overlay top"> </div>
                    </div>
                    <div id='gridholder'>
                        <div id='grid' className='inner'>
                            {this.state.images.map((image)=>{
                                return (
                                <div class='image' >
                                <img src={image.image}  />
                                <div id="item-overlay top"> </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </section>
                </div>
                    )}
        </div>  )   
    };

}

ReactDOM.render(<Main/>, document.getElementById('main'))