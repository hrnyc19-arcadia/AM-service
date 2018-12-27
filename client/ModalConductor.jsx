

class ModalConductor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mainPageIsSmallerThan743: false,
            photoModalIsSmallerThan735: false
        }
    }


    ComponentDidMount(){
        checkAndSetWindowSizeSmallOrLarge()
    };

    checkAndSetWindowSizeSmallOrLarge(component){
        //figure out where to conditionally render
    };

    render(){
        return (<div>
            <SaveModal />
            <ShareModal />
            <PhotoCarouselModal/>
        </div>)
    }
};