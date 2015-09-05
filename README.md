# BEKK Fotball

## Idea

A mobile/table-friendly web site to enable;
* Match overview
* Match signup
* Math live-tracking
* Statistics
* Historic data
* and more

## Technology

### Front-end 
* Polymer for UI/UX.

### Backend / architecture
* C#, F# or Node
* Event-driven
  * Event-sourcing (GetEventStore)
  * Push to clients (WebSocket, maybe using SignalR)
  * Views (think read store from CQRS)
* Functional paradigmes
* Stateless
  * State will be built when starting the app by reading the events
