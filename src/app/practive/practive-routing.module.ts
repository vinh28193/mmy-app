import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PostsViewComponent } from './posts-view/posts-view.component';

export const routes: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'posts-view', component: PostsViewComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class PractiveRoutingModule { }
