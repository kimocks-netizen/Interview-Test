import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  heroes: any;

  constructor(public service: ApiService) {
    // this.service.getContactsOfHeros().subscribe(res => {
    //   console.log(res)
    // })
   }

   // in the component, add the api service and get the list of contacts.
  ngOnInit() {
    this.service.getContactsOfHeros().subscribe(res => {
      this.heroes=res;
    });
  }
  public Evole(action: string, heroName: string){

  }
  evolve(hero: any) {
    // this.service.post(`http://localhost:4201/heroes/${hero.name}/evolve`, {action: 'evolve'}).subscribe(data => {
    //   this.heroes = data;
    // });
  }
}
