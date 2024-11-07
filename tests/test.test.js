const request = require("supertest");
const app = require("../app");

describe("Test Spécialiste", () => {
    it("Test /specialistes", async () =>{
        const response = await request(app).get("/specialistes");
        expect(response.body).toEqual(["/specialiste/1", "/specialiste/2", "/specialiste/3"]);
    });

    it("Test /specialiste/:id", async () =>{
        const response = await request(app).get("/specialiste/1");
        expect(response.body).toEqual({"id": 1, "name": "Michelle", "description": "Meilleur spécialiste"});
    });
});

describe("Test User", () => {
    it("Test /user/:id", async () =>{
        const response = await request(app).get("/user/1");
        expect(response.body).toEqual({"id": 1, "name": "Pablo The king", "email": "Pablo@gmail.com", "phone": 123456, "password": "12345"});
    });

    it("Test /user/:id/appointment", async () =>{
        const response = await request(app).get("/user/1/appointment");
        expect(response.body).toEqual([{"id": 1, "date": "12 novembre 2024", "staff": "Jeam", "service": "Coupe Homme", "contact": "Pablo@gmail.com"}]);
    });

    //faire
    it("Test post /user", async () =>{
    
        const response = await request(app).post("/user").send({"id": 4, "name": "Pablo The king", "email": "Pablo@gmail.com", "phone": 123456, "password": "123456"});
        expect(response.body).toEqual(
            {
                "message": "Utilisateurs ajoutée avec succès",
                "user": {
                    "id": 4,
                    "name": "Pablo The king",
                    "email": "Pablo@gmail.com",
                    "phone": 123456,
                    "password": "123456"
                }
            }
        );
    });

    it("Test put /user/:id", async () =>{
        const response = await request(app).put("/user/1").send({"id": 1, "name": "Pablo The Super King", "email": "Pablo@gmail.com", "phone": 123456, "password": "123456"});
        expect(response.body).toEqual(
            {
            "message": "Utilisateur mise à jour avec succès",
            "user": {
                "id": 1,
                "email": "Pablo@gmail.com",
                "phone": 123456,
                "password": "123456"
            }
        });
    });
});

describe("Test appointment", () => {
    it("Test /appointments", async () =>{
        const response = await request(app).get("/appointments");
        expect(response.body).toEqual([
            "/Appointment: 1, Coupe Homme, par Jeam",
            "/Appointment: 2, Coupe Homme, par Michel",
            "/Appointment: 3, Coupe Homme, par MexicanDestroyer"
        ]);
    });

    it("Test /appointment/:id", async () =>{
        const response = await request(app).get("/appointment/1");
        expect(response.body).toEqual(
            {
                "id": 1,
                "date": "12 novembre 2024",
                "staff": "Jeam",
                "service": "Coupe Homme",
                "contact": "Pablo@gmail.com"
            }
        );
    });

    //faire
    it("Test post /user", async () =>{
    
        const response = await request(app).post("/appointment").send({
            "id": 4,
            "date": "12 novembre 2024",
            "staff": "Michel",
            "service": "Coupe Homme",
            "contact": "Pablo@gmail.com"
        });
        expect(response.body).toEqual(
            {
                "message": "Rendez-vous ajoutée avec succès",
                "appointment": {
                    "id": 4,
                    "date": "12 novembre 2024",
                    "staff": "Michel",
                    "service": "Coupe Homme",
                    "contact": "Pablo@gmail.com"
                }
            }
        );
    });

    it("Test put /appointment/:id", async () =>{
        const response = await request(app).put("/appointment/1").send({
            "id": 1,
            "date": "12 novembre 2024",
            "staff": "Michel",
            "service": "Coupe Homme",
            "contact": "Pablo@gmail.com"
        });
        expect(response.body).toEqual(
            {
                "message": "Rendez-vous mise à jour avec succès",
                "appointment": {
                    "id": 1,
                    "date": "12 novembre 2024",
                    "staff": "Michel",
                    "service": "Coupe Homme",
                    "contact": "Pablo@gmail.com"
                }
            }
        );
    });

    it("Test Delete /appointment/:id", async () =>{
        const response = await request(app).delete("/appointment/1")
        expect(response.body).toEqual(
            {
                "message": "Rendez-vous supprimée avec succès"
            }
        );
    });
});
