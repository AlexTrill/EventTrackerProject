import { OpeningsService } from './../../services/openings.service';
import { Opening } from './../../models/opening';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

openings: Opening[]= [];
newOpening: Opening = new Opening();
// editOpening: Opening = new Opening
selected: Opening | null = null;

  constructor(private openingSvc: OpeningsService) { }

  ngOnInit(): void {
this.loadOpening();
  }
  loadOpening() {
    this.openingSvc.index().subscribe(
     success => this.openings = success,
     err => console.log("Observable got an error " + err)
    );
  }

  // createOpening(newOpening: Opening) {
  //   this.openingSvc.create(newOpening).subscribe(
  //     data => {
  //       this.loadOpening();
  //       this.newOpening = new Opening();
  //     },
  //     err => console.log("whoops " + err)
  //   );
  // }
  // deleteTodo(id: number) {
  //   this.openingSvc.destroy(id).subscribe(
  //     (data) => this.loadOpening(),
  //     (err) => console.error(err)
  //   );
  // }
  // updateOpening(todo: Opening) {
  //   this.openingSvc.update(todo).subscribe(
  //     (data) => {
  //       this.loadOpening();
  //       // this.editOpening = null;
  //     },
  //     (err) => console.error(err)
  //   );
  // }


  displayTable() {
    this.selected = null;
  }
  displayOpening(opening: Opening) {
    this.selected = opening;
  }
}
