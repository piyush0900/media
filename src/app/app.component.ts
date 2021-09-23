import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practical';
  public scrollbarOption =  {
    axis: 'y',
    scrollButtons: { enable: true },
    advanced: {
        autoScrollOnFocus: false,
    },};
}
