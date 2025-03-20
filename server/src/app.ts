import express,{Request,Response} from "express";
const PORT = 5000;
const app = express();
app.get("/", (req:Request, res:Response) => {
  res.send("<h1>Hello I am omer</h1>");
});
app.listen(PORT, () => {
  console.log(`Sever is Running at PORT Number ${PORT}`);
});