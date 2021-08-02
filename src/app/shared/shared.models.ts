import { SafeResourceUrl } from '@angular/platform-browser';

export interface Song {
  title: string;
  album: string;
  artist: string;
  cover: string;
  duration: string;
  deezer_url?: string;
  spotify_url?: string;
  url?: string;
};

export interface CustomSafeUrl {
  url: string;
  safeUrl: SafeResourceUrl;
};
