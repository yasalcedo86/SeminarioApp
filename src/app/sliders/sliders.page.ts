import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage implements OnInit {
  lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dicta obcaecati animi omnis velit laborum unde repellat, ipsa impedit possimus quae, tempore ratione placeat est. Dolore sunt perspiciatis officiis consequuntur?";
  slides = [
    {
      title: "Naturaleza 1",
      image: "https://picsum.photos/1280/720?random=1",
      description: this.lorem
    },
    {
      title: "Naturaleza 2",
      image: "https://picsum.photos/1280/720?random=2",
      description: this.lorem
    },
    {
      title: "Naturaleza 3",
      image: "https://picsum.photos/1280/720?random=3",
      description: this.lorem
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
