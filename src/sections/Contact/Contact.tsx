import { useRef } from "react";
import emailjs from "@emailjs/browser";
import emotionStyled from "@emotion/styled";
import { colors } from "../../assets/colors/colors";
import Card from "../../components/Card/Card";

const StyledContactForm = emotionStyled.form({
  width: "50dvw",
  maxWidth: "1500px",
});

const StyledLabel = emotionStyled.label({
  color: colors.textColor.gray,
  marginTop: "2rem",
});

const StyledInput = emotionStyled.input({
  padding: ".4rem",
  "&.submit": {
    marginTop: "2rem",
    borderRadius: ".25rem",
    border: `1px solid ${colors.backgroundColor.deepBlue}`,
    color: colors.textColor.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontFamily: "inherit",
    cursor: "pointer",
    transition: ".2s ease",
    display: "grid",
    placeContent: "center",

    ":hover": {
      boxShadow: `0px 0px 10px 4px ${colors.backgroundColor.lightRed}`,
    },

    ":focus, :focus-visible": {
      outline: " 4px auto -webkit-focus-ring-color",
    },

    /* variant */
    "&.primary": {
      backgroundColor: colors.backgroundColor.lightRed,
    },

    "&.secondary": {
      backgroundColor: colors.backgroundColor.deepBlue,
    },

    "&.outlined": {
      backgroundColor: colors.backgroundColor.deepBlue,
    },

    /* Size */
    "&.small": { width: "25%" },

    "&.medium": { width: "50%" },

    "&.large": { width: "100%" },
  },
});

const StyledTextArea = emotionStyled.textarea({
  padding: ".4rem",
});

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (process.env.SERVICE_ID && process.env.TEMPLATE_ID && form.current)
      emailjs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
  };

  return (
    <Card id="contact">
      <Card.Title>Contact me</Card.Title>
      <Card.Description>
        Send an email to{" "}
        <span style={{ color: colors.backgroundColor.lightRed }}>
          eddie.peters00@outlook.com
        </span>{" "}
        or use the form below!
      </Card.Description>
      <Card.Content>
        <StyledContactForm ref={form} onSubmit={sendEmail}>
          <div style={{ display: "grid" }}>
            <StyledLabel>Name</StyledLabel>
            <StyledInput type="text" name="user_name" />
          </div>
          <div style={{ display: "grid" }}>
            <StyledLabel>Email</StyledLabel>
            <StyledInput type="email" name="user_email" required />
          </div>

          <div style={{ display: "grid" }}>
            <StyledLabel>Message</StyledLabel>
            <StyledTextArea name="message" required minLength={10} />
          </div>

          <StyledInput
            type="submit"
            value="Send email"
            className="submit primary medium"
          />
        </StyledContactForm>
      </Card.Content>
    </Card>
  );
}
