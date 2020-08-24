import React from "react";

import SearchBar from "./SearchBar";
import VideoList from './VideoList';
import youtube from "../API/youtubeAPI";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    var response = await youtube.get("/search", {
      q: term,
    });

    //console.log(response);
    this.setState({videos:response.data.items})
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/*  I have {this.state.videos.length} videos  */}
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
