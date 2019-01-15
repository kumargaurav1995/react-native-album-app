import React, { Component } from 'react';
import { ScrollView,  Linking,
    Text} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails'

class AlbumList extends Component {

    state = { albums: [] };


   componentWillMount(){
axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data}));
   }

   renderAlbums(){
     return  this.state.albums.map(albums => <Text key={albums.title} album={albums}/>
   
);
   }

    render(){
        console.log(this.state);
    return (
        <ScrollView>
    {this.renderAlbums()}
</ScrollView>
    );
}
}

export default AlbumList ;