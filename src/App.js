
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from './pages'
// import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
// import { useAuthListener } from "./hooks";

export default function App() {

  // const { user } = useAuthListener();

  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/browse" element={<Browse />}/>
     <Route path="/signin" element={<SignIn />}/>
     <Route path="/signup" element={<SignUp />}/>

        {/* <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
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
        </IsUserRedirect> */}
     
    </Routes>
    </BrowserRouter>
  );
}

