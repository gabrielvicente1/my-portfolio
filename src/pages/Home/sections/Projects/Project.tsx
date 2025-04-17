import { Box, Grid, Typography, Paper, styled } from '@mui/material';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: theme.palette.primary.main,
}));

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#1e1e1e',
  color: '#fff',
  borderRadius: theme.spacing(2),
}));

const ProjectImage = styled('img')({
  width: '100%',
  borderRadius: '8px',
  marginBottom: '16px',
});

const Projects = () => {
  const projects = [
    {
      title: 'Ignite Social',
      date: 'Março 2025 - Abril 2025',
      description:
        'O projeto Ignite Social é uma aplicação web desenvolvida com o objetivo de simular uma rede social. Construída utilizando React, TypeScript e Vite, a aplicação oferece funcionalidades típicas de plataformas sociais, como a criação e visualização de postagens, além de interações como comentários e reações. O projeto também incorpora práticas modernas de desenvolvimento, incluindo o uso de CSS-in-JS para estilização e componentes reutilizáveis.​.',
      image: 'src/assets/images/ignite-social.png', // troque pela imagem real
      technologies: 'JavaScript, HTML, CSS, ReactJS, Vite',
    },
    {
      title: 'Project Example',
      date: 'Jul 2023 - Dez 2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum...',
      image: '/assets/project2.png', // troque pela imagem real
      technologies: 'JavaScript, HTML, CSS, Canvas Graphics',
    },
  ];

  return (
    <StyledSection>
      <Typography variant="h3" align="center" gutterBottom color="#fff">
        Projects
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, md: 5 }} key={index}>
            <StyledCard elevation={3}>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {project.date}
              </Typography>
              <ProjectImage src={project.image} alt={project.title} />
              <Typography variant="body2" paddingBottom={1.5}>
                {project.description}
              </Typography>
              <Typography variant="body2" fontWeight="bold">
                Technologies: <span style={{ color: '#ccc' }}>{project.technologies}</span>
              </Typography>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledSection>
  );
};

export default Projects;
