
Dependencies installed :

ng add @ngrx/store
ng add @ngrx/store-devtools
ng add @ngrx/effects


General idea withing this app structure:

Our smart components are going to be pulling information from the data-access folder, and then
that smart components having that data already pulled are going to pass it to some presentational ui
component to actually display it on the browser.


Structuring code this way
1) Follow this approach tends to encourage good application architecture
2) Encourages the use of smart/dumb components
3) Follows the general idea of nx


If a smart component contains a smart component ?


Our smart components responsabilities :
  1) Dispatch actions
  2) Retrieves the necessary state from store (uses private selectors)
  3) Defines vm$ with the required selectors
  4) Provide ui logic for when we are fetching data (spinner or skeleton ui)
  5) Provide actions (navigate to another place) if fetching fails
  6) Handle Asynchronous operations

  Every component will have its own state (its own slice of the store).
  This means that we have a specific reducer and side effects for a smart component.

  Every smart component will have its own canActivate guard. The canActivate guard will
  be used to decouple the logic of initializing the component data.
  (Is Responsible for triggering the get request, form route url params)

  The canActivate guard is responsible for fetching the required data for the smart component.
  The smart component is responsible for :
    1) Providing UI for the user to interact with the data fetched
    2) Provide UI while http request is in progress
    3) Provide UI if http fails.

  e.g :
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      const articleId = route.params['articleId'];
      this.store.dispatch(userActions.loadArticle({ articleId }));

      return of(true);
  }

  }
      path: ':articleId',                                                           // Smart component URL /articles/:articleId
      loadComponent: () => import('@articles/pages/article/article.component'),     // Smart Component
      providers: [provideState(articleFeature), provideEffects(UserEffects)],    // Smart Component state
      canActivate: [articleGuard],                                                  // Smart Component guard
    },


Our dumb components:
  1) Only synchronous data || [property]="value | async"




// When an action gets dispatched, our state might be changed.
// If state gets changed all the components that are using our changed state will get notified ( using selectors )


// this.store.dispatch(register())
// By doing this is how we notify NgRx that something happened or changes had happened.



// NgRx state is just a global BehaviourSubject where we save all our data

// A reducer is a pureFunction, that upon a given action it generates a new state
// (it copies old state, mutates it, and returns new state)
