import React from 'react';
import { Stack, StackProps } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { styled } from '@mui/system';

// Styled Stack with default animation styles
const AnimatedStackBase = styled(Stack)<StackProps>(() => ({
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.6s ease, transform 0.6s ease',
  '&.fade-up': {
    opacity: 1,
    transform: 'translateY(0)',
  },
}));

// AnimatedStack component that supports all Stack props
const AnimatedStack: React.FC<StackProps> = ({ children, ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation re-triggers every time it becomes visible
    threshold: 0.3,     // Trigger when 20% is visible
  });

  return (
    <AnimatedStackBase
      ref={ref}
      className={inView ? 'fade-up' : ''}
      {...props} // Pass any other props to the underlying Stack
    >
      {children}
    </AnimatedStackBase>
  );
};

export default AnimatedStack;
