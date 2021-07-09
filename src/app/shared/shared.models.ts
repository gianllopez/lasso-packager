export interface Song {
  title: string;
  album: string;
  album_type: 'album' | 'single';
  artist: string;
  cover: string;
  duration: string;
  explicit: boolean;
};
