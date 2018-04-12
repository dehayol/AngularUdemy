import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-paragraph',
  templateUrl: './toggle-paragraph.component.html',
  styleUrls: ['./toggle-paragraph.component.css']
})
export class ToggleParagraphComponent implements OnInit {
  displayParagraph = false;
  btnText = "Show Paragraph";
  rows = [];

  constructor() { }

  ngOnInit() {
  }

  onBtnClick(){
    this.displayParagraph = !this.displayParagraph;
    this.btnText = this.displayParagraph ? 'Hide' : 'Show' + ' Paragraph';
    this.rows.push({
      status: this.displayParagraph ? 'Revealed' : 'Concealed',
      ts: new Date().toUTCString()
    });
  }

}
