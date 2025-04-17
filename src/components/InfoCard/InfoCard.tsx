import { Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface InfoCardProps {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  direction?: 'left' | 'right';
}

const InfoCard = ({ emoji, title, subtitle, description, direction = 'left' }: InfoCardProps) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={variants}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, textAlign: 'center' }}>
        <Typography fontSize={40}>{emoji}</Typography>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="subtitle2" gutterBottom>{subtitle}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Paper>
    </motion.div>
  );
};

export default InfoCard;
