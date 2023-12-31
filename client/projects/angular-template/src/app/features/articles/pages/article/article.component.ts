import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {articleQuery} from "@articles/+data-access/store/article/article.selectors";
import {authQuery} from "@auth/+data-access/store/auth.selectors";
import {combineLatest, map, Observable} from "rxjs";
import {Field, FieldType, formsActions, FormState, LoadingModule, ngrxFormsQuery} from "@ui-components";
import {Store} from "@ngrx/store";
import {articleActions} from "@articles/+data-access/store/article/article.actions";
import {Article, CommentReply, User} from "@shared/domain";
import {AddCommentComponent} from "@articles/components/add-comment/add-comment.component";
import {userActions} from "@users/+data-access/store/user/user.actions";
import {take} from "rxjs/operators";
import {userQuery} from "@users/+data-access/store/user/user.selectors";
import {UserHeaderComponent} from "@users/components/user-header/user-header.component";
import {ArticleHeaderComponent} from "@articles/components/article-header/article-header.component";
import {ArticleCommentComponent} from "@articles/components/article-comment/article-comment.component";
import {ArticleBodyComponent} from "@articles/components/article-body/article-body.component";
import {wordsQuery} from "@users/+data-access/store/offensive-words/offensive-words.selectors";
import {RippleModule} from "primeng/ripple";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {isAdmin} from "@users/utils/helpers/is-admin";

interface ArticleVM {
  article: Article | null
  loading: boolean
  error: string | null
  loggedUser : User | null
  author : User | null
}

const structure: Field[] = [
  {
    type: FieldType.TEXTAREA,
    name: 'comment',
    placeholder: 'What are your thoughts?',
  },
];


@Component({
  selector: 'article-page',
  standalone: true,
  imports: [CommonModule, AddCommentComponent, LoadingModule, UserHeaderComponent, ArticleHeaderComponent, ArticleCommentComponent, ArticleBodyComponent, RippleModule, RouterLink, RouterLinkActive],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ArticleComponent implements OnInit, OnDestroy{
  private article$ = this.store.select(articleQuery.selectData)
  private loading$ = this.store.select(articleQuery.selectLoading)
  private error$ = this.store.select(articleQuery.selectError)
  
  private loggedUser$ = this.store.select(authQuery.selectLoggedUser)
  private author$ = this.store.select(userQuery.selectData);
  
  
  vm$: Observable<ArticleVM> = combineLatest({
    article: this.article$,
    loading: this.loading$,
    error: this.error$,
    loggedUser : this.loggedUser$,
    author : this.author$
  })
  
  words$ = this.store.select(wordsQuery.selectEntities)
  openedReplyBox$ = this.store.select(articleQuery.selectOpenedReplyBox)
  
  structure$ = this.store.select(ngrxFormsQuery.selectStructure);
  data$ = this.store.select(ngrxFormsQuery.selectData);
  
  constructor(private store: Store) {}
  
  ngOnInit() {
    this.store.dispatch(formsActions.setStructure({ structure }));
    this.store.dispatch(formsActions.setData({ data: '' }));
    this.handleInitializationActions();

  }
  
  ngOnDestroy(): void {
    this.store.dispatch(articleActions.reset())
  }
  
  updateForm(state: FormState) {
    this.store.dispatch(formsActions.updateData({ state }))
  }
  
  submit(data: {articleId: number, authorId: number}) {
    const { articleId, authorId } = data;
    this.store.dispatch(articleActions.addComment({ articleId, authorId }));
  }
  
  onArticleApprove(articleId : number){
    this.store.dispatch(articleActions.approveArticle({articleId}))
  }
  
  onArticleReject(articleId : number){
    this.store.dispatch(articleActions.rejectArticle({articleId}))
  }
  
  onCommentApprove(commentId : number , articleId : number){
    this.store.dispatch(articleActions.approveArticleComment({commentId, articleId}))
  }
  
  onCommentReject(commentId : number, articleId : number){
    this.store.dispatch(articleActions.rejectArticleComment({commentId, articleId}))
  }
  
  onCommentReply(commentReply : CommentReply, articleId : number){
    this.store.dispatch(articleActions.addReply({commentReply, articleId}))
  }
  
  onReplyBoxOpened(commentId : number){
    this.store.dispatch(articleActions.openReplyBox({commentId}))
  }
  
  onReplyBoxClosed(){
    this.store.dispatch(articleActions.closeReplyBox())
  }
  
  isAdmin(user : User){
    return isAdmin(user.roles)
  }
  
  isLoggedUserAuthor(user : User, article : Article){
    return user?.id === article.authorId
  }
  
  
  private handleInitializationActions() {
    combineLatest([this.article$, this.loggedUser$])
      .pipe(
        take(1),
        // Map the emitted values to an object for easier access
        map(([article, loggedUser]) => ({ article, loggedUser }))
      )
      .subscribe(({ article, loggedUser }) => {
        if (article && article.authorId) {
          // Dispatch loadUser action to fetch the article's author data
          this.store.dispatch(userActions.loadUser({ userId: article.authorId }));
          
          // If the logged user is the author of the article, mark all comments as viewed
          if (loggedUser && article.authorId === loggedUser.id) {
            this.store.dispatch(articleActions.markAllCommentsAsViewed());
          }
        }
      });
  }
}
