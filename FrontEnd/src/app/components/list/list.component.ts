import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  Heroes: any=[];
  heroes: any=null;

  colorClasses = ["color-class-1", "color-class-2", "color-class-3", "color-class-4"];
  randomColorClass: string;
  updatedStats=false;


  constructor(public service: ApiService) {

   }

   generateRandomColorClass() {
    this.randomColorClass = this.colorClasses[Math.floor(Math.random() * this.colorClasses.length)];
  }
   // in the component, add the api service and get the list of contacts.
  ngOnInit() {
    this.generateRandomColorClass();
    this.getHeros();
  }

  // evolve(hero: any) {
  //   this.service.post(`http://localhost:4201/heroes/${hero.name}/evolve`, {action: 'evolve'}).subscribe(data => {
  //     this.heroes = data;
  //   });
  // }
  evolve(hero: any) {
   this.service.Evolve(hero).subscribe(data =>{
    this.heroes=data;
    this.updatedStats=true;
    this.generateRandomColorClass();
   });
  }
  getHeros(){
    this.service.getContactsOfHeros().subscribe(res => {
      this.Heroes=res;
      this.generateRandomColorClass();
    });
  }


}

