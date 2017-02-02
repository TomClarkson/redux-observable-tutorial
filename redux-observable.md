## Why redux observable

Redux gives us the reducer function to manage state changes synchronously by dispatching actions.

```javascript
(oldState, action) => newState
```

However, many transitions in the calendar can only be determined over time. 

For example, when you mouse down on an event we might be transitioning a drag, a single click to show a popover, or a double click to show the modal.

With RXJS we can look at events happening over time and declaratively determine what action to make. We use redux-observable which makes Redux and RXJS go together like a hand in glove or post-lunch and spread.

## How to use it

Redux observable creates an observable that contains every redux action emitted and calls your function (named an epic) where you can do async work and create more actions.

The signature for an epic is (ActionObservable, {getState}) => ActionObservable

```javascript
const pingEpic = action$ =>
   action$.ofType('PING') // ActionObservable adds ofType operator
     .delay(1000) // Asynchronously wait 1000ms then continue
     .mapTo({ type: 'PONG' });
```

## How it works

Under hood redux-observable calls your epic function with the action observable and store and subscribing to the result (actions you create) and dispatches them.

It effectively does epic(actions$, store).subscribe(store.dispatch); 

Redux implements middleware which allows you to hook into the dispatch cycle, so you can run code before an after an action reaches the reducers. **I highly recommend** watching Sir Abromov's series where he shows you how to use redux and how to reimplement it fully. [Here is an example with how middleware works.](https://egghead.io/lessons/javascript-redux-the-middleware-chain)

I have reimplemented the redux observable middleware here in about 10 LOC https://github.com/TomClarkson/reason-redux-observable/blob/master/src/tomCreateEpicMiddleware.js

![danabromovbook](https://cloud.githubusercontent.com/assets/2054503/22084956/fde285d8-de36-11e6-907e-3945f05a8008.jpg)

Beware, if you have an epic that returns the same action observable as it receive it will cause an infinite loops because the redux-observable subscribes to the resulting actions from your epic and dispatches them.
```javascript
const actionEpic = (action$) => action$; // creates infinite loop
```

## How we use redux-observable in the calendar

In the configureEpics function we wrap the epic function with a function that injects any dependencies we want. A key dependency in the project is movesUntilRelease which returns mouse/touch moves until release.

Our Epic signature now looks like this
(action$, {getState, movesUntilRelease}) => actions$

The idea is that now we can invoke epics in our tests but pass in mocked movesUntilRelease that return whatever mouse move data we want in our tests.

### How we do drag

For calendar event interactions we have an epic that listens to action$.ofType('POINTER_DOWN_ON_VERTICAL_EVENT')
For all mouse moves we map to MOVE_EVENT actions. On release we either map to MOVE_EVENT_FINISHED or NON_DRAG_EVENT_MOUSE_UP.

![Observable mouse events](https://cdn-images-1.medium.com/max/800/1*FjTqms95LbK_ztsZXiNpoQ.png)

### How we do single vs double click detection

We listen to action$.ofType('NON_DRAG_VERTICAL_EVENT_MOUSE_UP') and determine whether it is a single click or a double click. To either show a popup or modal.

![doubleclickstream](https://cloud.githubusercontent.com/assets/2054503/22056194/c932dce8-ddc3-11e6-8368-afeee02ae255.png)

https://www.youtube.com/watch?v=AslncyG8whg Redux observable from co-author