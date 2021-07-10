import { Component } from '@angular/core';
import { FilterOption } from 'src/app/shared/shared.models';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']})
export class FilterComponent {

  current: FilterOption = {
    icon: 'assets/icons/filter/tracks.svg',
    option: 'tracks'
  };

};
