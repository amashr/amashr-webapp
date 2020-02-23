import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Startup from './Pages/Startup';
import { BrowserRouter as Router, Switch} from 'react-router-dom';

/*------- Pages---------*/
// import {Home} from './Pages/Home';
// import PaymentProcessing from './Pages/Payment-processing';
import About from './Pages/About';
import Service from './Pages/Service';
import Process from './Pages/Process';
import Team from './Pages/Team';
import Portfolio2col from './Pages/Portfolio-2col';
import Portfolio3col from './Pages/Portfolio-3col';
import Portfoliofull4col from './Pages/Portfolio-fullwidth-4col';
import PortfolioSingle from './Pages/PortfolioSingle';
import Bloglist from './Pages/Bloglist';
import BlogSingle from './Pages/BlogSingle';
import Contact from './Pages/Contact';
import ScrollToTopRoute from './ScrollToTopRoute';
// import Landing from './Pages/Landing';

class App extends Component{
    componentDidMount() {
      this.props.hideLoader();
  }
  render(){
    return(
        <Router>
           <Switch>
             <ScrollToTopRoute exact={true} path={'/'} component={Startup} />
             <ScrollToTopRoute path="/Pages/About" component={About} />
             <ScrollToTopRoute path="/Pages/Service" component={Service} />
             <ScrollToTopRoute path="/Pages/Process" component={Process} />
             <ScrollToTopRoute path="/Pages/Team" component={Team} />
             <ScrollToTopRoute path="/Pages/Portfolio-2col" component={Portfolio2col} />
             <ScrollToTopRoute path="/Pages/Portfolio-3col" component={Portfolio3col} />
             <ScrollToTopRoute path="/Pages/Portfolio-fullwidth-4col" component={Portfoliofull4col} />
             <ScrollToTopRoute path="/Pages/PortfolioSingle" component={PortfolioSingle} />
             <ScrollToTopRoute path="/Pages/Bloglist" component={Bloglist} />
             <ScrollToTopRoute path="/Pages/BlogSingle" component={BlogSingle} />
             <ScrollToTopRoute path="/Pages/Contact" component={Contact} />
           </Switch>
        </Router>
    );
  }
}

export default App;
