
`docker-compose up`
=> it starts the whole project.

!) Changes made to the source code won't apply till you rebuild the images !


---------------------------------------------------------

    Frontend Development:
1) Start Docker on your local machine
2) start api + DB containers by running the following command :
   `docker-compose -f docker-compose.dev.frontend.yml up`
3) run `npm run start` in frontend terminal.


______________________________________________________________________

    Backend Development
1) Start Docker on your local machine
2) start DB container by running the following command : `docker-compose -f docker-compose.dev.backend.yml up -d`

3) run `npm run start` in backend terminal.
4) run `npm run start` in frontend terminal.
