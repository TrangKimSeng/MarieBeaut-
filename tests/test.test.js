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
        expect(response.body).toEqual({"id": 1, "name": "Pablo The king", "email": "Pablo@gmail.com", "password": "12345"});
    });

    it("Test /user/:id/appointment", async () =>{
        const response = await request(app).get("/user/1/appointment");
        expect(response.body).toEqual([{"id": 1, "date": "12 novembre 2024", "staff": "Jeam", "service": "Coupe Homme", "contact": "Pablo@gmail.com"}]);
    });

    //faire
    it("Test put /user/:id/appointment", async () =>{
    
        const response = await request(app).put("/user/1/appointment").send();
        expect(response.body).toEqual([{"id": 1, "date": "12 novembre 2024", "staff": "Jeam", "service": "Coupe Homme", "contact": "Pablo@gmail.com"}]);
    });

    it("Test /user/:id/appointment", async () =>{
        const response = await request(app).get("/user/1/appointment");
        expect(response.body).toEqual([{"id": 1, "date": "12 novembre 2024", "staff": "Jeam", "service": "Coupe Homme", "contact": "Pablo@gmail.com"}]);
    });
});

