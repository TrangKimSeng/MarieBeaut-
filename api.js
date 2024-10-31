const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [
  { id: 1, email: "Faire les courses", nom: "Pablo The king" },
  { id: 2, email: "Faire les courses", nom: "Pablo Jr" },
  { id: 3, email: "Faire les courses", nom: "Pablito" },
];
let specialistes = [
  { id: 1, nom: "Michelle" },
  { id: 2, nom: "Valerie" },
  { id: 3, nom: "Jorgette" },
];
let rendez_vous = [
  { client_id: 1, date: "31-10-2024" },
  { client_id: 3, date: "30-10-2024" },
  { client_id: 3, date: "29-10-2024" },
];

//C'est une route GET qui renvoie un tableau contenant les URLs
// de référence pour chaque tâche. Pour chaque tâche dans le
//tableau users, elle crée une URL de la forme /user/[id].

app.get("/users", (req, res) => {
  const userReferences = users.map((user) => `/user/${user.id}`);
  res.json(userReferences);
});
app.get("/rdv", (req, res) => {
  const userReferences = rendez_vous.map((rdv) => `/rdv/${rdv.date}`);
  res.json(userReferences);
});

app.get("/specialistes", (req, res) => {
  const userReferences = specialistes.map(
    (specialiste) => `/specialiste/${specialiste.id}`
  );
  res.json(userReferences);
});

//Les user peuvent faire tout avec les RDV tant que ca soit avec son id
app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});
app.get("/user/:id/rdv", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  const rdv = rendez_vous.filter((rdv) => rdv.client_id === userId);
  if (user && rdv) {
    res.json(rdv);
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});

app.post("/user/:id/rdv", (req, res) => {
  const userId = parseInt(req.params.id);
  const newRdv = {
    client_id: userId,
    date: req.body.date,
  };
  rendez_vous.push(newRdv);
  res.status(201).json({ message: "RDV ajoutée avec succès", rdv: newRdv });
});

app.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    user.description = req.body.description;
    res.json({ message: "Tâche mise à jour avec succès", user });
  } else {
    res.status(404).json({ error: "Tâche non trouvée" });
  }
});

app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: "Tâche supprimée avec succès" });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
