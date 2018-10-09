import React, {Component} from 'react';
import {connect} from 'react-redux';

import TrackView from '../components/TrackView';
import HeaderMenu from './HeaderMenu';

import {fetchMusicRequest} from '../actions/music';

class TrackPage extends Component {
    componentDidMount(){
        this.props.fetchMusicRequest();
    }
    render(){
        return(
            <div>
                <HeaderMenu />
                {console.log(this.props)}
                {!this.props.music ? <div className="Loader">WAIT PLS</div> :
                <TrackView track={this.props.music[this.props.match.params.id]}/> }
            </div>
        )
    }
}

function mapStateToProps(state){
    return( {
       music: state.music.music
    })
}

const mapDispatchToProps = {
    fetchMusicRequest
}

export default connect(mapStateToProps,mapDispatchToProps)(TrackPage);