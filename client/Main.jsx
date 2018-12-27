import React from 'react'
import ReactDOM from 'react-dom'
import ModalConductor from 'ModalConductor'

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            homeId: 0,
            images: []
        }
    }

    componentDidMount(){
        getImagesForMainCarousel()
    }

    getImagesForMainCarousel(){
        axios.get('/photos')
        .then((data)=>{
            this.setState({
                images: data.data
            })
        })
    }



    render(){
        return (
            <div>
                <section class='parent'>
                <div class="ext-image" >
                <img src="" alt="main"/>
                    <div class="item-overlay top"> </div>
                </div>
                {this.images.map((image)=>{
                    return (
                        <div class="int-image">
                        <img src={image.image_path} alt="interior" />
                            <div class="item-overlay top"> </div>
                        </div>
                    )
                })}
                </section>
                <ModalConductor />
            </div> 
        )
        
    }
}

ReactDOM.render(<Main/>, document.getElementById('main'))