import { Opening } from './../../models/opening';
import { Component, OnInit } from '@angular/core';
import { OpeningsService } from 'src/app/services/openings.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  popup: boolean = false;
  popupFail: boolean = false;
  dltOpening: Opening = new Opening();

  constructor(private openingSvc: OpeningsService) { }

  ngOnInit(): void {
  }
  deleteOpening(id: number) {
    this.openingSvc.destroy(id).subscribe(

      success => this.popup = true,
      (err) => this.popupFail = true,

      );

    }


}
