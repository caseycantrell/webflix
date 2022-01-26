import { render } from "@testing-library/react";
import { Jumbotron } from "../../components";
import jumboData from "../../fixtures/jumbo.json";

describe("<Jumbotron />", () => {
    it("renders ye old <Jumbotron /> with data", () => {
        const { container, getByText, getByAltText, getByTestId } = render(
        <Jumbotron.Container>
            {jumboData.map((item) => (
            <Jumbotron key={item.id} direction={item.direction}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src={item.image} alt={item.alt} data-testid={`${item.id}-jumbo-image`}/>
                </Jumbotron.Pane>
            </Jumbotron> 
            ))}
        </Jumbotron.Container>
        );

        expect(getByText("Enjoy on your TV.")).toBeTruthy();
        expect("Tiger King on Webflix").toBeTruthy();
        expect(getByTestId("1-jumbo-image")).toBeTruthy();
        expect(getByText("Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();

    });
});