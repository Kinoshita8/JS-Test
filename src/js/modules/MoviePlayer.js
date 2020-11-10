export default class MoviePlayer {
  constructor() {
    this.$movie = document.querySelector('.movie_player');
    this.$thumbnail = document.querySelector('.movie_thumbnail');
    this.player;

    this.bind();
  }

  /**
   * イベント付与
   */
  bind() {
    //api読み込み
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  /**
   * 動画を読み込む
   */
  onYouTubeIframeAPIReady() {
    this.player = new YT.Player('player', {
      videoId: 'MSlrYulkUo4',
      events: {
        onReady: this.onPlayerReady,
      },
    });
  }

  /**
   * 動画を再生する
   */
  onPlayerReady(e) {
    e.target.playVideo();
  }

  /**
   *動画を一時停止する
   */
  onPlayerPause() {
    this.player.pauseVideo();
  }
}
