import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../pages/home/home'
import Post from '../pages/post/Post'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post' component={Post} / >
        <Redirect from='*' to='/' />
    </Switch>