import styled from "@emotion/styled";
import { easeOut, motion } from "framer-motion";
import { colors } from "../../assets/colors/colors";
import { styles } from "../../assets/styles/styles";

const StyledLoader = styled(motion.div)({
  width: "10px",
  height: "10px",
  margin: "40px auto",
  borderRadius: "50%",
  backgroundColor: colors.backgroundColor.lightRed,
  boxShadow: styles.neon,
});

export default function Loader() {
  const loaderVariants = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          easeOut,
        },
      },
    },
  };
  return (
    <>
      <StyledLoader
        variants={loaderVariants}
        animate="animationOne"
      ></StyledLoader>
    </>
  );
}
