import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3 text-center">gusteau's</h1>
        <p className="lead text-center">46 avenue de la bourdonnais <br /> paris, france</p>
        <p className="text-center">déjeuner: mardi - samedi, 12 - 2p <br /> dîner: lundi - samedi, 7 - 10p</p>

      </Jumbotron>
    </div>
  );
};

export default Header;

