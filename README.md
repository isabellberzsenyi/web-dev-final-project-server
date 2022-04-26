##To set up the DB locally:
1. Create a directory for your database
```mkdir data/db```
2. Start MongoDB
```mongod --dbpath=data/db```
3. In a separate tab, open Mongo client
```mongo```

###Some MongoDB commands
Show all the databases
```show  dbs``` 
Create or select a database
```use NAME_OF_DB``` 


##To run the backend:
Make sure your database is running first
```nodemon server.js```

