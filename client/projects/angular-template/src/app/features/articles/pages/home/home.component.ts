import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FilterArticlesComponent} from '@articles/components/filter-articles/filter-articles.component'
import {catchError} from 'rxjs/operators'
import {Store} from '@ngrx/store'
import {articleListActions} from '@articles/+data-access/store/article-list/article-list.actions'
import {ArticleListComponent} from "@articles/components/article-list/article-list.component";
import {combineLatest, Observable, of} from "rxjs";
import {articleListQuery} from "@articles/+data-access/store/article-list/article-list.selectors";
import {FilterFrom} from "@core";
import {ArticleListVM} from "@shared/domain";

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CommonModule,
    FilterArticlesComponent,
    ArticleListComponent,
  
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{

  private articles$ = this.store.select(articleListQuery.selectEntities)
  private loading$ = this.store.select(articleListQuery.selectLoading)
  private editing$ = this.store.select(articleListQuery.selectEditing)
  
  vm$: Observable<ArticleListVM> = combineLatest({
    articles: this.articles$,
    loading: this.loading$,
    editing: this.editing$,
    showFromAuthor : of(true)
  }).pipe(catchError(this.handleError))
  
  constructor(private store: Store) {}
  
  ngOnInit() {
    this.store.dispatch(articleListActions.loadRecentArticles())}
  
  onArticleFiltered(filterBy : string){
    const from = FilterFrom.Recent
    
    this.store.dispatch(
      articleListActions.filterArticlesBy({filterBy , from })
    )
  }
  
  private handleError(error: any): Observable<any> {
    console.log('[ArticleListVM - ERROR', error)
    return of(true)
  }
}
