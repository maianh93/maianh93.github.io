import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const Footer = () => {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#ddd"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box href="/" color="inherit" component={Link}>
                  <p>Contact</p>
              </Box>
              <Box href="/" color="inherit" component={Link}>
                  <p>Support</p>
              </Box>
              <Box href="/" color="inherit" component={Link}>
                  <p>Privacy</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Acount</Box>
              <Box href="/" color="inherit" component={Link}>
                  <p>Login</p>
              </Box>
              <Box href="/" color="inherit" component={Link}>
                  <p>Register</p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Message</Box>
              <Box href="/" color="inherit" component={Link}>
                  <p>Backup</p>
              </Box>
              <Box href="/" color="inherit" component={Link}>
                  <p>History</p>
              </Box>
              <Box href="/" color="inherit" component={Link}>
                  <p>Roll</p>
              </Box>
            </Grid>
          </Grid>

        </Container>
      </Box>
    </footer>
  );
};

export default Footer;