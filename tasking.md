## 02-19
- [x] decorate search pop-over in an un-detailed fashion
- [x] conditionally show search result
    - took me a long time
    - solution: 1. [class.hidden]="!showResults" over *ngIf; 2. tap Observerble to
- [x] fix: search result should overlay heroes tab
- [x] search result hover effect
- [ ] search result after clicking: clear search input
- [ ] after clicking clear message, should not make message component disappear
- [ ] delete confirmation
- [ ] fix: duplicate log messages

## 02-18
- [x] fix the h1 title was a little off the center (towards the upper side)
- [x] search result should be of upper overlay
- [x] could nav to the search result item

## 02-17
- [x] delete button appears only when hovering a card
- [x] decorate delete button
- [x] decorate add hero card
- [x] latest message should appear on the top
- [x] decorate search UI (it should be on the nav bar)
- [x] decorate hero detail card UI

## 02-15
- [x] could search hero

## 02-14
- [x] refactor: move all services to service dir 
- [x] if contains 'failure', highlight log message
- [x] tab should be in selected status
- [x] extract nav component
- [x] frosted glass effect for message component
- [x] frosted glass effect for nav component

## 02-13
- [x] Get data from a server
- [x] re-design top nav portion
- [x] when message component gets too long, it could overflow
- [x] message component stays at the bottom
- [x] hero detail go back button
- [x] from heroes, could click into hero detail
- [x] "Tour of Heroes" make it a route link since it's underlined
- [x] hero detail has upper margin w/ heroes list
- [x] center hero detail, solution: add a container div
- [x] hero detail width, and w/ media query enabled
- [x] adjust upper margin of "Top Heroes"

## 02-12
- [x] extract Dashboard & Heroes router links

## 02-10
- [x] decorate `dashboard` component
- [x] decorate message component

## 02-08
- [x] build dashbaord component
- [x] build heroes navigation

## 02-07
- [x] incorporate navigation

## 02-06
- [x] incorporate msg component

## 02-05
- [x] use hero service
- [x] extract hero detail component

## 02-04
- [x] push to GitHub repo
- [x] card selected visual cue
- [x] add pre-commit hook

## 02-03
- [x] card hover effect
- [x] select one hero

## backlog
- [ ] different levels of log, and user could filter logs
- [ ] remove warning: Angular detected that `HttpClient` is not configured to use `fetch` APIs. It's strongly recommended to enable `fetch` for applications that use Server-Side Rendering for better performance and compatibility. To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` call at the root of the application.
