import { useState } from "react";

export default function Accordion({ children, ...restProps }){
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}></Title>
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}></Frame>
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false);
    return <Item {...restProps}></Item>
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    return <Header {...restProps}></Header>
};