import * as ROUTES from "../constants/routes"
import logo from "../logo.svg"
import { Header } from "../components"

export function SelectProfileContainer({ user, setProfile }) {
    return (
    <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Webflix" />
            </Header.Frame>
        </Header>
    </>
    );
};