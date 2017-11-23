import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    { path: 'practive', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostsComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class PractiveRoutingModule { }
