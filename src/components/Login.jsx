import { Box, Button, Container, Grid } from "@mui/material";

function Login() {
  return (
    <Container>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: window.innerHeight - 50 }}
      >
        <Box>
          <Button variant="outlined">Login with Google</Button>
        </Box>
      </Grid>
    </Container>
  );
}

export default Login;
