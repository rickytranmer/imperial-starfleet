import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaserCanonComponent } from './laser-canon/laser-canon.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	LaserCanonComponent,
  	DeathSquareComponent,
  	TurretComponent
  ],
  exports: [
  	LaserCanonComponent,
  	DeathSquareComponent,
  	TurretComponent
  ]
})
export class InternalDefensesModule { }
