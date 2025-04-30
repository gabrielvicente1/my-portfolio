import { Box, Grid, Typography, Paper, styled, Divider } from '@mui/material';

const StyledSectionProjects = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: theme.palette.primary.main,
}));

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#1e1e1e',
  color: '#fff',
  borderRadius: theme.spacing(2),
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const ProjectImage = styled('img')({
  width: '100%',
  borderRadius: '8px',
  marginBottom: '16px',
});

const Projects = () => {
  const projects = [
    {
      title: 'IGNITE SOCIAL',
      date: 'Março 2025 - Abril 2025',
      description:
        'O projeto Ignite Social é uma aplicação web desenvolvida com o objetivo de simular uma rede social. Construída utilizando React, TypeScript e Vite, a aplicação oferece funcionalidades típicas de plataformas sociais, como a criação e visualização de postagens, além de interações como comentários e reações. O projeto também incorpora práticas modernas de desenvolvimento, incluindo o uso de CSS-in-JS para estilização e componentes reutilizáveis.​.',
      image: 'src/assets/images/ignite-social.png',
      technologies: 'JavaScript, HTML, CSS, ReactJS, Vite',
    },
    {
      title: 'IGNITE TRANSACTION',
      date: 'Abril 2025 - Abril 2025',
      description:
        'O projeto Ignite Transactions é uma APIRESTful desenvolvida em NodeJS. Construída utilizando TypeScript, Fastify, Knex e Zod, a aplicação oferece  funcionalidades típicas de sistemas de controle financeiro, como criação, listagem e resumo de cada transação, onde a identificação de transações está sendo feita por cookies.​.',
      image: 'src/assets/images/ignite-transactions.png', 
      technologies: 'NodeJs, TypeScrips, Fastify, Knex, Zod',
    },
  ];

  return (
    <StyledSectionProjects id='Projects'>
      <Typography variant="h3" align="center" gutterBottom color="#fff" paddingBottom={5}>
        Projetos
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
              <Typography variant="body2" paddingBottom={1.5} sx={{ fontSize: '1rem' }}>
                {project.description}
              </Typography>
              <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '1rem' }}>
                Tecnologias: <span style={{ color: '#ccc' }}>{project.technologies}</span>
              </Typography>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 8, bgcolor: '#fff', opacity: 0.2 }} />
      <footer id='contact'>
  <Box mt={10} textAlign="center" color="#ccc">
    <Typography variant="body1" gutterBottom>
      Gabriel Vicente • Full Stack Developer
    </Typography>
    <Typography variant="body2">
      📧 gabriel.vicentee.dev@gmail.com
    </Typography>
    <Typography variant="body2">
      💼 <a href="https://www.linkedin.com/in/gabriel-vicente-8a6b71266/" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'underline' }}>
        LinkedIn
      </a>{' '} | {' '}
      📁 <a href="https://github.com/gabrielvicente1" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'underline' }}>
        GitHub
      </a>
    </Typography>
    <Typography variant="caption" display="block" mt={2}>
      © {new Date().getFullYear()} Gabriel Vicente. Todos os direitos reservados.
    </Typography>
  </Box>
</footer>
    </StyledSectionProjects>
  );
};

export default Projects;
