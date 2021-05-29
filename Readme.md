# The-Covid-Ease

> We at The-Covid-Ease try to provide the Most Authentic Resources Available. This is a Web App to make it Easy for Our Country People to just Come Over to the Website and Check all the Current Scenarios & also Most Importantly Can Get to Know About Current Hospital Bed Vacancies in West Bengal, Blood Donors Near you, Oxygen Suppliers Near You, Doctor's for Online Consultation, All Numbers of WB Red Volunteers and also We Provide Help at Your Request. I will also try to include many more Features in the near Future. We are a Non-Profit Organization.

![screenshot](https://github.com/banerjeePrayas/The-Pie-Shop/blob/main/uploads/SC%201.png?raw=true)
![screenshot](https://github.com/banerjeePrayas/The-Pie-Shop/blob/main/uploads/SC%202.png?raw=true)

### ES Modules in Node

I have used ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'

```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## License

The MIT License

Copyright (c) 2021 Prayas Banerjee https://www.linkedin.com/in/prayas-banerjee/

PERMISSION IS GRANTED TO USE MY SOFTWARE BUT YOU SHOULD NOT EDIT OR CHANGE THE FOOTER
SECTION OF THE SOFTWARE. THE SOFTWARE NAME SHOULD BE SAME.
