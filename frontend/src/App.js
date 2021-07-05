import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import Store from './screens/Store'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import DownloadScreen from './screens/DownloadScreen'
import PreviousVersionsScreen from './screens/PreviousVersionsScreen'
import CoursesScreen from './screens/CoursesScreen'
import AboutScreen from './screens/AboutScreen'
import PrivacyPolicy from './screens/PrivacyPolicy'
import BlogsScreen from './screens/BlogsScreen'
import BlogsDetailsScreen from './screens/BlogsDetailsScreen'


function App() {
  return (
    <Router>

      <Header />

      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />

          <Route path='/login' component={LoginScreen} />
          <Route path='/Register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />

          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/store' component={Store} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/cart/:id?' component={CartScreen} />

          <Route path='/download' component={DownloadScreen} />
          <Route path='/previousVersions' component={PreviousVersionsScreen} />
          <Route path='/courses' component={CoursesScreen} />
          <Route path='/blogs' component={BlogsScreen} />
          <Route path='/blog/:id' component={BlogsDetailsScreen} />

          <Route path='/about' component={AboutScreen} />
          <Route path='/privacy' component={PrivacyPolicy} />
        </Container>
      </main>

      <Footer />

    </Router>
  );
}

export default App;