import { Route, Switch } from 'react-router-dom'
import React from 'react'

import NotFoundPage from './components/common/NotFoundPage'
import StartingPage from './components/common/StartingPage'
import HomePage from './components/common/HomePage'
import AddPost from './components/postComponents/AddPost'
import MyPosts from './components/postComponents/MyPosts'
import Details from './components/postComponents/Details'
import Profile from './components/postComponents/Profile'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={StartingPage} />
    <Route path='/home'exact component={HomePage} />
    <Route path='/addPost' exact component={AddPost} />
    <Route path='/myPosts' exact component={MyPosts} />
    <Route path='/details/:id' exact component={Details} />
    <Route path='/profile/:username' exact component={Profile} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes