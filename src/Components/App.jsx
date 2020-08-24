import React from "react";

import SearchBar from "./SearchBar";
import youtube from "../API/youtubeAPI";

class App extends React.Component {
  onTermSubmit = async (term) => {
    var response=await youtube.get("/search", {
      q: term,
    });

    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
