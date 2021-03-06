import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import webflix from "../webflix.png";


export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={webflix} alt="Webflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
