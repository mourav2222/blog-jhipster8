import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'post',
        data: { pageTitle: 'blogApp.post.home.title' },
        loadChildren: () => import('./post/post.routes'),
      },
      {
        path: 'tag',
        data: { pageTitle: 'blogApp.tag.home.title' },
        loadChildren: () => import('./tag/tag.routes'),
      },
      {
        path: 'blog',
        data: { pageTitle: 'blogApp.blog.home.title' },
        loadChildren: () => import('./blog/blog.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
