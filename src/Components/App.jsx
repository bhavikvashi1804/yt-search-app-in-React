import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../API/youtubeAPI";


class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    //var response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${term}&key=${YT_API}`);
    var response = await youtube.get("/search", {
      params:{
          q:term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/*  I have {this.state.videos.length} videos  */}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
