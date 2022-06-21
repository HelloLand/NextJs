import Head from "next/head";
import { Fragment } from "react";
import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <Fragment>
        <Head>
          <title>Extreme Meetup Spots</title>
          <meta
            name="description"
            content="Ultimate meetup locations, for the adrenaline rush!"
          ></meta>
        </Head>
        <div>
          <h3>#TheDanny</h3>
          <YouTube videoId="xQ_IQS3VKjA" opts={opts} onReady={this._onReady} />
          <h3>Adrenaline Rush</h3>
          <YouTube videoId="nRxSUkZYeOE" opts={opts} onReady={this._onReady} />
        </div>
      </Fragment>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}
