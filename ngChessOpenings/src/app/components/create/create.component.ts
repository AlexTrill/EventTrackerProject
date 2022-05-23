import { Component, OnInit } from '@angular/core';
import { Opening } from 'src/app/models/opening';
import { OpeningsService } from 'src/app/services/openings.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newOpening: Opening = new Opening();

  constructor(private openingSvc: OpeningsService) { }

  ngOnInit(): void {
  }
  createOpening(newOpening: Opening) {
    this.openingSvc.create(newOpening).subscribe(
      data => {
        // this.loadOpening();
        this.newOpening = new Opening();
      },
      err => console.log("whoops " + err)
    );
  }
}
