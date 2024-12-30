import Typography from '@mui/material/Typography';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/system';

const FadeUpAnimatedTypography = styled(Typography)(() => ({
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.6s ease, transform 0.6s ease',
  '&.fade-up': {
    opacity: 1,
    transform: 'translateY(0)',
  },
}));


const FadeRightAnimatedTypography = styled(Typography)(() => ({
    opacity: 0,
    transform: 'translateX(-20px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
    '&.fade-up': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  }));
  
export const FadeUpTypography = ({text, sx} : {text : string, sx : {[key : string] : string | number}}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers every time it becomes visible
    threshold: 0.2,     // Triggers when 20% of the element is visible
  });

  return (
    <FadeUpAnimatedTypography
      ref={ref}
      sx = {sx}
      className={inView ? 'fade-up' : ''}
    >
      {text}
    </FadeUpAnimatedTypography>
  );
};


export const FadeRightTypography = ({text, sx} : {text : string, sx : {[key : string] : string | number}}) => {
    const { ref, inView } = useInView({
      triggerOnce: false, // Animation triggers every time it becomes visible
      threshold: 0.2,     // Triggers when 20% of the element is visible
    });
  
    return (
      <FadeRightAnimatedTypography
        ref={ref}
        sx = {sx}
        className={inView ? 'fade-up' : ''}
      >
        {text}
      </FadeRightAnimatedTypography>
    );
  };
  
