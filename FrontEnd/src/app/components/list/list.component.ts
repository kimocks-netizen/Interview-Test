import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  heroes: any;
  colorClasses = ["color-class-1", "color-class-2", "color-class-3", "color-class-4"];
  randomColorClass: string;


  constructor(public service: ApiService) {
    // this.service.getContactsOfHeros().subscribe(res => {
    //   console.log(res)
    // })
   }

   generateRandomColorClass() {
    this.randomColorClass = this.colorClasses[Math.floor(Math.random() * this.colorClasses.length)];
  }
   // in the component, add the api service and get the list of contacts.
  ngOnInit() {
    this.generateRandomColorClass();
    this.service.getContactsOfHeros().subscribe(res => {
      this.heroes=res;
    });
  }

  evolve(hero: any) {
    // this.service.post(`http://localhost:4201/heroes/${hero.name}/evolve`, {action: 'evolve'}).subscribe(data => {
    //   this.heroes = data;
    // });
  }
}
