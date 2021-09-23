import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images = [{image:'https://picsum.photos/id/944/900/500',caption:'Lorem ipsum donec id elit non mi porta gravida at eget metus.'},
  {image:'https://picsum.photos/id/1011/900/500',caption:'Lorem ipsum donec id elit non mi porta gravida at eget metus.'},
  {image:'https://picsum.photos/id/984/900/500',caption:'Lorem ipsum donec id elit non mi porta gravida at eget metus.'},
  {image:'https://picsum.photos/id/946/900/500',caption:'Lorem ipsum donec id elit non mi porta gravida at eget metus.'},]
  constructor() { }

  ngOnInit(): void {
  }

}
