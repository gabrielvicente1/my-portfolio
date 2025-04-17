import { Box, Chip, Grid, Typography, styled, Paper } from '@mui/material';
import InfoCard from '../../../../components/InfoCard/InfoCard';

const StyledSectionAbout = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
}));

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
}));    

const SkillsSectionSkills = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 2),
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
  }));

const skills = [
    'Javascript', 'Typescript','NodeJS' , 'React',
    'Git', 'HTML', 'CSS', 'Flutter', 'Dart'
  ];

const AboutMe = () => {
  return (
    <StyledSectionAbout>
      <Typography variant="h3" gutterBottom>
        Sobre mim
      </Typography>

      <Grid container spacing={4} justifyContent="center" mb={4} paddingTop={5}>
        <Grid size={{ xs: 12, md: 4 }}>
        <InfoCard
            emoji="💼"
            title="Experiência"
            subtitle="1+ anos"
            description="Aprendiz em desenvolvimento"
            direction="left"
          />
        </Grid>
        <Grid  size={{ xs: 12, md: 4 }}>
          <InfoCard
            emoji="🎓"
            title="Educação"
            subtitle="Graduando na UFU"
            description="Sistemas de Informação"
            direction="right"
          />
        </Grid>
      </Grid>

      <Typography variant="h6" maxWidth="md" mx="auto">
        Sou estudante de Sistemas de Informação na Universidade Federal de Uberlândia (UFU) e apaixonado por tecnologia.
        Atualmente estou focado em desenvolvimento web, estudando principalmente <strong>React</strong> no frontend e <strong>Node.js</strong> no backend.
        Gosto de transformar ideias em soluções funcionais e estou sempre buscando aprender mais para evoluir como desenvolvedor.
      </Typography>


      <SkillsSectionSkills>
      <Typography variant="h3" gutterBottom>
        Habilidades
      </Typography>
      <Grid container spacing={2} justifyContent="center" mt={2}>
        {skills.map((skill) => (
          <Grid key={skill}>
            <Chip
              label={skill}
              variant="outlined"
              color="primary"
              sx={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
            />
          </Grid>
        ))}
      </Grid>
      </SkillsSectionSkills>
    </StyledSectionAbout>
  );
};

export default AboutMe;
