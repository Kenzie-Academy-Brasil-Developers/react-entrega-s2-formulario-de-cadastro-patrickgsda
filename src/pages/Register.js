import React from "react";
import * as yup from "yup";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

function Forms() {
  const history = useHistory();
  const regexPassword =
    /^((?=.*[?!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(
        "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ's ]+$",
        "Nome inválido"
      ),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .min(8, "Senha com no mínimo 8 caracteres")
      .matches(
        regexPassword,
        "Necessário ter letras, números e ao menos um símbolo!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitForm = (data) => {
    history.push(`/${data.name}`);
  };

  return (
    <Container
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "25ch",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
          padding: "10px",
        }}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <Typography color="green" variant="h6" gutterBottom>
          ENTRAR NA MATRIX!
        </Typography>
        <TextField
          label="Nome"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        ></TextField>

        <TextField
          label="E-mail"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        ></TextField>

        <TextField
          label="Senha"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        ></TextField>

        <TextField
          color="primary"
          label="Confirmação de Senha"
          type="password"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        ></TextField>

        <Button variant="contained" color="success" type="submit">
          Registrar
        </Button>
      </Box>
    </Container>
  );
}

export default Forms;
