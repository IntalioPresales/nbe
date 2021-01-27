import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById('open').click()
      document.getElementById('open-public').click()
    }, 500);
  }

}
