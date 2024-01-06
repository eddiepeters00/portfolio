import styled from '@emotion/styled';
import { motion, useScroll, useSpring } from 'framer-motion';

const StyledProgressbar = styled(motion.div)({
  position: 'absolute',
  top: '0',
  right: '40%',
  bottom: '0',
  width: '20%',
  transformOrigin: 'top',
  backgroundColor: 'red',
  boxShadow:
    '0 0 2px #fff,0 1px #fff,0 0 4px #fff,0 0 6px #fb5e58,0 0 10px #fb5e58,0 0 12px #fb5e58,0 0 5px #fb5e58,0 0 5px #fb5e58',
});

const StyledProgressbarContainer = styled.div({
  width: '1.5rem',
  position: 'fixed',
  top: '12%',
  right: '2%',
  bottom: '12%',
  opacity: '.8',
});

const StyledOverlay = styled.div({
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '-1%',
  width: '100%',
  background: 'rgba(0, 0, 0, 0.4)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  borderRadius: '1rem',
});

function Progressbar() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <StyledProgressbarContainer>
      <StyledProgressbar
        style={{
          scaleY: scaleY,
        }}
      />
      <StyledOverlay />
    </StyledProgressbarContainer>
  );
}

export default Progressbar;
