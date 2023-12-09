import { Howl, Howler } from "howler";
import { getTrackUrl, getTrackDetail } from "@/service";
let timer = null;
export default class {
  constructor() {
    // 播放器的播放状态
    this.playing = false;
    this.duration = 0;
    this.progress = 0;
    this.index = 0;
    this.tracks = [];
    // 播放循环模式 0列表循环 1单曲循环
    this.loopMode = 0;
    this.currentTrackDetail = {};
    this.howl = null;
  }
  interval() {
    clearInterval(timer);
    timer = setInterval(() => {
      this.progress = this.howl.seek() / this.howl.duration();
    }, 1000);
  }
  replaceTracks(tracks, autoplayTrack) { 
    this.tracks = tracks;
    console.log(tracks);
    // 指定从autoplayTrack开始播放
    if (autoplayTrack) {
      this.index = this.tracks.indexOf(autoplayTrack);
    }
    this.playTrack(this.tracks[this.index]);
  }
  // 播放歌曲的方法
  async playTrack(track) {
    const [getTrackUrlError, response] = await getTrackUrl(track);
    const [getTrackDetailError, res] = await getTrackDetail(track);
    if (getTrackUrlError) return console.log("获取mp3 url异常");
    if (getTrackDetailError) return console.log("获取歌曲详情异常");
    const mp3Url = response.data.data[0].url;
    this.currentTrackDetail = res.data.songs[0];
    if (mp3Url) return this.mountAudioSource(mp3Url, true);
    this.playNextTrack();
  }

  mountAudioSource(url, autoplay = false) {
    Howler.unload();
    this.howl = new Howl({
      src: [url],
      html5: true,
      format: ["mp3"],
    });
    if (autoplay) this.play();
    this.howl.on("end", () => this.playNextTrack());
  }
  play() {
    // if (!this._howl) return;
    // if (this._howl.playing()) return;
    this.playing = true;
    this.duration = this.howl.duration();
    this.interval();
    this.howl.play();
  }
  pause() {
    this.playing = false;
    this.howl.pause();
  }
  toggle() {
    console.log(this);
    // console.log(this.playing);
    this.howl.playing() ? this.pause() : this.play();
  }
  // 获取需要播放的trackid
  playNextTrack() {
    const nextTrack = this.getNextTrack();
    this.playTrack(nextTrack);
    console.log("nextTrack:", nextTrack);
  }
  getNextTrack() {
    if (this.loopMode === 1) return this.tracks[this.index];
    const currentTrackIsLast = this.index + 1 === this.tracks.length;
    if (currentTrackIsLast && this.loopMode === 0)
      return this.tracks[(this.index = 0)];
    return this.tracks[++this.index];
  }
}
