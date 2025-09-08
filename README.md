##  Project Setup Instruction  For Restful API Development 

- Follow the given instruction steps to implement Rest API 

1. **Clone Repository**
   ```
   git clone https://github.com/heetp0101/Restful-API-Development.git
   ```

2. **Add .env file and add the following environment variables**

    ```
   PORT=4000
   MONGO_URI=<MONGODB URI CONNECTION STRING>
   JWT_SECRET=<any string>
   ```

  - For `MONGO_URI` you need MongoDB Atlas Connection String which will be available by signing MongoDB Atls account and in Cluster go to Connect->For VS Code
  - You will need Database password to access collections  so create username and password if not created
  - Go to Network Access section and set ip address to 0.0.0.0/0 that will accept every ip address to connect to MongoDB Server and also to avoid any  Connection errors
  - For `JWT_SECRET` you can give any string

3. **API End Points**

   - Understand the following API Endpoints and their use case
   
    ```
    POST /ships/  -   Add Ship information (name, email)
    GET /ships/   -   Get All the ships
    GET /ships/:id  -   Filter Ship by their Id
    PUT /ships/:id   -   Modify Ship details by their id
    DELETE /ships/:id  -  Delete any ship by their id
    ```

4. **POSTMAN Testing Tool**

  - Use POSTMAN API Testing tool to test all the API Endpoints

    e.g
    ```
    POST http://localhost:4000/ships/
    Body :  
    {
      "name" : "Grinder"
      "email" : "captain@grinder.com"
    }
    ```

    - When you send the above request `POST http://localhost:4000/ships/` with the Body you will get success status code 201 and the ship is added
    - Then you can see your ship detail by sending request `GET http://localhost:4000/ships/`.
   
  
    
