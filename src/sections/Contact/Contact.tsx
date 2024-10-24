import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import emotionStyled from "@emotion/styled";
import styled from "@emotion/styled";
import { colors } from "../../assets/colors/colors";
import Card from "../../components/Card/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const StyledContactForm = emotionStyled.form({
  maxWidth: "1500px",
});

const StyledLabel = emotionStyled.label({
  color: colors.textColor.gray,
  marginTop: "2rem",
});

const StyledInput = styled(motion.input)({
  padding: ".4rem",
  width: "100%",
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
  width: "100%",
});

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
  });

  type SchemaProps = z.infer<typeof validationSchema>;

  const { register, handleSubmit } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
  });

  const sendEmail = async () => {
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.SERVICE_ID ?? "",
        process.env.TEMPLATE_ID ?? "",
        form.current ?? "",
        {
          publicKey: process.env.PUBLIC_KEY,
        }
      );

      toast.success(
        "Thank you for reaching out! I will get back to you soon.",
        { position: "top-right" }
      );

      form.current && form.current.reset();
      setIsEmailSent(true);
    } catch (error) {
      toast.error("Something went wrong!", { position: "top-right" });
    } finally {
      setIsLoading(false);
      isLoading ? <></> : isEmailSent ? <></> : <></>;
    }
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
            <StyledContactForm ref={form} onSubmit={handleSubmit(sendEmail)}>
              <div style={{ display: "grid" }}>
                <StyledLabel htmlFor="name">Name</StyledLabel>
                <StyledInput type="text" {...register("name")} name="name" />
              </div>
              <div style={{ display: "grid" }}>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <StyledInput type="email" {...register("email")} required />
              </div>

              <div style={{ display: "grid" }}>
                <StyledLabel htmlFor="message">Message</StyledLabel>
                <StyledTextArea
                  required
                  minLength={10}
                  {...register("message")}
                />
              </div>

              <StyledInput
                whileTap={{ scale: 0.85 }}
                type="submit"
                value={isLoading ? "Sending..." : "Send"}
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
