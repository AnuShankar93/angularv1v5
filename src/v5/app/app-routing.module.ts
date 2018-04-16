import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DummyModule } from './dummy/dummy.module';


const routes: Routes = [
  {path: 'demo', component: DemoComponent},
  {path: 'dummy', loadChildren : () => DummyModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
