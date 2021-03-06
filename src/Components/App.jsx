import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';
import youtube from "../API/youtubeAPI";


class App extends React.Component {
  state = { videos: [] , selectedVideo:null};

  componentDidMount(){
    this.onTermSubmit('');
  }

  onTermSubmit = async (term) => {
    //var response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${term}&key=${YT_API}`);
    var response = await youtube.get("/search", {
      params:{
          q:term
      }
    });

    this.setState({ videos: response.data.items,selectedVideo: response.data.items[0] });
  };

  onVideoSelect=(video)=>{
    //console.log(video);
    this.setState({selectedVideo:video});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/*  I have {this.state.videos.length} videos  */}
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="six wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
