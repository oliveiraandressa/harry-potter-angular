import { HousesComponent } from './houses/houses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseDetailComponent } from './house-detail/house-detail.component';


const routes: Routes = [
    {
        path: '',
        component: HousesComponent
    },
    {
        path: 'detalhes/:casa',
        component: HouseDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HousesRoutingModule { }
