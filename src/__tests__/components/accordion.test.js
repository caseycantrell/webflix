import { render, fireEvent } from "@testing-library/react";
import faqsData from "../../fixtures/faqs.json";
import { Accordion } from "../../components"; 

describe('<Accordion />', () => {
    it('renders the <Accordion /> with tasty data', () => {
      const { container, getByText } = render(
        <Accordion>
          <Accordion.Title>Frequently Asked Questions</Accordion.Title>
          <Accordion.Frame>
            {faqsData.map((item) => (
              <Accordion.Item key={item.id}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion.Frame>
        </Accordion>
      );

        expect(getByText("Frequently Asked Questions")).toBeTruthy();
        expect(getByText("What is Webflix?")).toBeTruthy();
        expect(getByText("How much does Webflix cost?")).toBeTruthy();
        expect(getByText("Where can I watch?")).toBeTruthy();
        expect(getByText("How do I cancel?")).toBeTruthy();
        expect(getByText("What can I watch on Webflix?")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();

    });

    it('opens & closes the <Accordion /> component', () => {
        const { container, queryByText } = render(
          <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            <Accordion.Frame>
              {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body data-testid="accordion-body">{item.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion.Frame>
          </Accordion>
        );

        const whatIsWebflixBodyText = "Webflix is a streaming service that offers a wide variety of award-winning TV shows, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV shows and films are added every week!";

        expect(queryByText(whatIsWebflixBodyText)).toBeFalsy();
        fireEvent.click(queryByText("What is Webflix?"));
        expect(queryByText(whatIsWebflixBodyText)).toBeTruthy();

        fireEvent.click(queryByText("What is Webflix?"));
        expect(queryByText(whatIsWebflixBodyText)).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
