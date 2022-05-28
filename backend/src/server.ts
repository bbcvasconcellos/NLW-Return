import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000", // cors é um protocolo de segurança para evitar que qualquer frontend acesse esse backend, no origin passamos somente o dns aceito
  })
);
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Server running on port: ", port);
});
