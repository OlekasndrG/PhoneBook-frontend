import * as React from "react";
import { SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
import { Container, Title, MainText } from "./Homepage.styled";
import { MainContainer } from "components/App.styled";

export default function Homepage() {
  return (
    <MainContainer>
      <Title>
        Welcome to <span>Your Personal PhoneBook !</span>
      </Title>
      <MainText>
        To start using this App You need to register at the top right corner.
        <br /> After that confirm your email, log in and enjoy the App !<br />
        Or You can use your Google account.
        <br /> Main features include: editing your profile, adding, updating and
        deleting contacts in Your Phonebook.
      </MainText>
      <MainText>
        If You have any questions or suggestions feel free to contact me:
      </MainText>
      <Container>
        <a href="www.linkedin.com/in/alexandr-gubskiy">
          <SiLinkedin />
        </a>
        <a href="https://github.com/OlekasndrG">
          <SiGithub />
        </a>
        <a href="https://t.me/GubskiyAlexandr">
          <SiTelegram />
        </a>
      </Container>
    </MainContainer>
  );
}
