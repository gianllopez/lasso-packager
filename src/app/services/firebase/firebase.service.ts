import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'

@Injectable({ providedIn: 'root' })
export class FirebaseService {

  constructor(private storage: AngularFireStorage) {};

  async uploadCover(cover: File): Promise<string> {
    let id = (Math.random() + 1).toString(36).substring(2),
    path = `loaded-covers/${id}-${cover?.name}`,
    uploadRes = await this.storage.upload(path, cover),
    coverUrl = await uploadRes.ref.getDownloadURL();
    return coverUrl;
  };

};
