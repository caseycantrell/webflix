import * as ROUTES from "../constants/routes"
import webflix from "../webflix.png"
import { Header } from "../components"
import { Profiles } from "../components";

export function SelectProfileContainer({ user, setProfile }) {
    return (
    <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={webflix} alt="Webflix" />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.User data-testid="user-profile" onClick={() => setProfile({
                    displayName: user.displayName,
                    photoURL: user.photoURL
                })}>
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    </>
    );
};