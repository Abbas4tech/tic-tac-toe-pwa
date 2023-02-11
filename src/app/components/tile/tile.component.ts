import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styles: [
    `
      :host {
        width: 100%;
        height: 100px;
      }
    `,
  ],
})
export class TileComponent {
  @Input() value!: string;
}
