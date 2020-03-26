# BLD Forum (Beta)

## Data Models

### users (from Google Auth)

- displayName
- photoURL
- uid

### posts

- uid
- title
- userId
- createdDate
- text

#### comments

- uid
- userId
- createdDate
- text

## TODO

- [x] interfaces
- [x] resolve userId to displayName
- [x] figure out comments architecture
- [x] optimize userId to displayName
  - [ ] util functions?
- [ ] ui components
  - [x] post/comment cards
  - [x] list view
  - [ ] post/comment forms
  - [ ] nav header
- [ ] responsive layouts
- [ ] login container
- [ ] home page
- [ ] categories
- [ ] paged queries
- [ ] hover user overlay
