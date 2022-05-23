import { OpeningsService } from './../../services/openings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Opening } from 'src/app/models/opening';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  editOpening: Opening = new Opening
  popupSuccess: boolean = false;
  popupFail: boolean = false;

  constructor(
private openingSvc: OpeningsService
  ) { }

  ngOnInit(): void {
  }
  updateOpening(todo: Opening) {
    this.openingSvc.update(todo).subscribe(
      (data) => {

        // this.editOpening = null;
      },
      (err) => console.error(err)
    );
  }
}
