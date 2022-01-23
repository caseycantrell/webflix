
import { BrowserRouter as Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from './pages'
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

export default function App() {

  const user = {};

  return (
    <Routes>
     
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
     
    </Routes>
  );
}

