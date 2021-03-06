import { OptForm, Feature } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                        <OptForm>
                        <OptForm.Input placeholder="Email Address"></OptForm.Input>
                        <OptForm.Button>Try It Now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
                
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}