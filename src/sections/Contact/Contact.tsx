import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import emotionStyled from "@emotion/styled";
import { colors } from "../../assets/colors/colors";
import Card from "../../components/Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

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
  const form = useRef<HTMLFormElement>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.SERVICE_ID ?? "",
        process.env.TEMPLATE_ID ?? "",
        form.current ?? "",
        {
          publicKey: process.env.PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success(
            "Thank you for reaching out! I will get back to you soon.",
            { position: "top-right" }
          );
          form.current && form.current.reset();
          setIsEmailSent(true);
        },

        () => {
          toast.error("Something went wrong!", { position: "top-right" });
        }
      )
      .finally(() => {
        setIsLoading(false);
        isLoading ? <></> : isEmailSent ? <></> : <></>;
      });
  };

  return (
    <Card id="contact">
      <ToastContainer />
      {isEmailSent ? (
        <>
          <Card.Title>Thanks for reaching out to me!</Card.Title>
          <Card.Description>
            I will make sure to get back to you as soon as possible!
          </Card.Description>
        </>
      ) : (
        <>
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
                value={isLoading ? "Sending..." : "Send email"}
                className="submit primary medium"
                disabled={isLoading}
              />
              {isLoading && <Loader />}
            </StyledContactForm>
          </Card.Content>
        </>
      )}
    </Card>
  );
}
