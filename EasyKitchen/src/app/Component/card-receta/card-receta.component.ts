import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-receta',
  templateUrl: './card-receta.component.html',
  styleUrls: ['./card-receta.component.css']
})

export class CardRecetaComponent implements OnInit {
  
  public Nombre:String
  public Ihmagen:String

  constructor() { }

  ngOnInit(): void {
  }

}
