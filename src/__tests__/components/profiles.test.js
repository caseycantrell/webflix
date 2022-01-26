import { getByTestId, getByText, render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles />", () => {
    it("Renders the <Profiles /> component with data", () => {
        const { container, getByText, getByTestId } = render(
        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.Item onClick={() => {}}>
                    <Profiles.Picture src="/images/casey.png" data-testid="profile-picture" />
                    <Profiles.Name>Casey</Profiles.Name>
                </Profiles.Item>
            </Profiles.List>
        </Profiles>
        );
        
        expect(getByText("Who's watching?")).toBeTruthy();
        expect(getByTestId("profile-picture")).toBeTruthy();
        expect(getByText("Casey")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();

    });

    it("renders the <Profiles /> component with data and misc profile img", () => {
        const { container, getByText, getByTestId } = render(
        <Profiles>
            <Profiles.Title>Who's watching?</Profiles.Title>
            <Profiles.List>
                <Profiles.Item onClick={() => {}}>
                    <Profiles.Picture src="/images/casey.png" data-testid="profile-picture-misc" />
                    <Profiles.Name>Casey</Profiles.Name>
                </Profiles.Item>
            </Profiles.List>
        </Profiles>
        );

        expect(getByText("Who's watching?")).toBeTruthy();
        expect(getByTestId("profile-picture-misc")).toBeTruthy();
        expect(getByText("Casey")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();

    });
});