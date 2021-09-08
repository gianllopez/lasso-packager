import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'] })
export class DownloadComponent {

  constructor(private deviceDetector: DeviceDetectorService) {};

  get isMobile(): boolean {
    return this.deviceDetector.isMobile();
  };

};
