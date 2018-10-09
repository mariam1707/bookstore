import React,{Component} from 'react';
import {connect} from 'react-redux';


import ArtistView from '../components/ArtistView';
import HeaderMenu from './HeaderMenu';


import {fetchMusicRequest,fetchMusicUpdateSaga} from '../actions/music'

class App extends Component {
    state ={      
        selectedId: undefined,
        isOpenModal:false,
    }
    componentDidMount(){
        this.props.fetchMusicRequest();
    }  
    handleOpenModalWindow = ()=>{        
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        })
        console.log('IsOpenModal',this.isOpenModal);
    }
    render(){       
        return(
            <div>                            
                <HeaderMenu />
                <div className='wrap-track-view'>
                {!this.props.music.length ? (
                    <div>WAIT PLS</div>
                ):(this.props.music.map((track, id) => (  
                    <div key={id}>  
                        <ArtistView 
                        track={track} 
                        trackid={id} 
                        artistClick={this.handleArtistView}
                        update = {this.props.fetchMusicUpdateSaga}/>                        
                    </div>
                    )))
                }    
               
                </div>   
                
                                    
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        music: state.music.music,
    })
};
const mapDispatchToProps = {
    fetchMusicRequest,
    fetchMusicUpdateSaga
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
