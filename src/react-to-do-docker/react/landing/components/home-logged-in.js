import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import globals from '../../globals';

/*
	Main welcome screen, once the user has logged in. No properties are used, so there doesn't need to be a container.
*/

const HomeLoggedIn = () => (
  <div className="col-xs-12">
    <div className="col-xs-12">
      <center>
		{/*<img src={globals.imgUrl + "/ibm-think-banner.jpg"} style={{ width: 400 }} />*/}
		<img src={globals.imgUrl + "/EngageLogo_Ani.gif"} style={{ width: 400 }} />
        <h1>Welcome to the React To Do App Portal</h1>
        <h3 className="col-md-6 col-md-offset-3">This portal demonstrates how a number of containers clustered together in Kubernetes, can work together to form a single solution driven by a number of 3rd party services and platforms</h3>
      </center>
    </div>
  </div>
)

export default HomeLoggedIn;
