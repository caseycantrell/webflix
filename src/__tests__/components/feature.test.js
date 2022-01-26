import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
    it("renders the <Feature /> full of data", () => {
        const { container, getByText } = render(
            <Feature>
                <Feature.Title>
                    Unlimited movies, TV shows, and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>
            </Feature>
        );

        expect(getByText("Unlimited movies, TV shows, and more.")).toBeTruthy();
        expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();

    });

    it("renders the <Feature /> with just a title", () => {
        const { container, getByText, queryByText } = render(
            <Feature>
                <Feature.Title>
                    Unlimited movies, TV shows, and more.
                </Feature.Title>
            </Feature>
        );

        expect(getByText("Unlimited movies, TV shows, and more.")).toBeTruthy();
        expect(queryByText("Watch anywhere. Cancel at any time.")).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();

    });

    it("renders the <Feature /> with just a subtitle", () => {
        const { container, getByText, queryByText } = render(
            <Feature>
               <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>
            </Feature>
        );

        expect(queryByText("Unlimited movies, TV shows, and more.")).toBeFalsy();
        expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();

    });

});