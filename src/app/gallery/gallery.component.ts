import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  imagesList: String[] = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/100/200',
    'https://picsum.photos/200',
    'https://picsum.photos/250',
    'https://picsum.photos/150', 
    'https://picsum.photos/300',
    'https://picsum.photos/200/100',
    'https://picsum.photos/350',
    'https://picsum.photos/380',
    'https://picsum.photos/320/300',
    'https://picsum.photos/400/300',
    'https://picsum.photos/100',
    'https://picsum.photos/200/350',
    'https://picsum.photos/400/200',
    'https://picsum.photos/220',
    'https://picsum.photos/200',
    'https://picsum.photos/310',
    'https://picsum.photos/300',
    'https://picsum.photos/250',
    'https://picsum.photos/280',
  ];

  constructor() { }
  ngOnInit(): void {
  }

}
