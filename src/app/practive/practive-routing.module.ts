import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PractiveComponent} from './practive.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {
        path: 'practive', component: PractiveComponent,
        children: [
            {
                path: 'posts', component: PostsComponent,
            }
        ]
    },

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class PractiveRoutingModule { }
