import { useHistory, useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Login() {
  const history = useHistory();
  const { name } = useParams();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography
          color="green"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          width="100%"
          variant="h2"
          gutterBottom
        >
          {name}, Você é o Escolhido.
        </Typography>
        <Button
          center
          variant="contained"
          color="success"
          onClick={handleClick}
        >
          Sair
        </Button>
      </Box>
    </Container>
  );
}
