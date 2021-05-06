import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { sortBy } from 'sort-by-typescript';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {

  
  constructor(private _Activatedroute:ActivatedRoute, private restApi: RestApiService, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  house
  casa
  houseImage

  people
  peopleFiltered
  filterP = 'todos'

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.casa = params.get('casa'); 
    });

    switch(this.casa){
      case 'grifinoria': 
      this.house = 'gryffindor'
      this.houseImage = './assets/images/logo-grifinoria.png'
        break
      case 'corvinal': 
      this.house = 'ravenclaw'
      this.houseImage = './assets/images/logo-corvinal.png'
        break
      case 'lufalufa': 
      this.house = 'hufflepuff'
      this.houseImage = './assets/images/logo-lufalufa.png'
        break
      case 'sonserina': 
      this.house = 'slytherin'
      this.houseImage = './assets/images/logo-sonserina.png'
        break
    }

    console.log(this.casa)
    this.getHouse()
    
  }
  getHouse(){
    return this.restApi.getHouse(this.house).subscribe(data => {
      console.log(data)
      this.people = data.sort(sortBy('name'))
      this.peopleFiltered = data.sort(sortBy('name'))

    })
  }

  setfilterP(filter){
    this.filterP = filter
    if(filter == 'alunos'){
      this.peopleFiltered =  this.people.filter(this.filterStudents)
    }
    if(filter == 'staff'){
      this.peopleFiltered =  this.people.filter(this.filterStaff)
    }
    if(filter == 'todos'){
      this.peopleFiltered =  this.people
    }
    


  }
  filterStudents(element) {
      return (element.hogwartsStudent == true); 
  } 
  filterStaff(element) {
    return (element.hogwartsStaff == true); 
}   

}
