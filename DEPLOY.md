Steps to do the deploy:
--Web--

1. Create a repo in github
2. Send the code to github
3. Choose a web provider -> github, vercel, etc (we will be using vercel in this example)
4. Go to the vercel website -> create new project -> import git repository
5. Configure project -> choose the framework as vite and root directory as web
6. Env for the backend
7. Deploy!
   --Attatching the backend to the frontend--
8. Get the backend url/domain
9. Dashboard -> Settings -> environment variables -> assign the backend url as the VITE_API_URL
10. Redeploy if needed

--Server--

1. Set the database provider in the schema.prisma file
2. Run npx tsc -> converts TS into JS in a new folder called dist
3. Add dist into gitignore
4. Set the frontend domain in CORS
5. Add "include": ["src"] to the tsconfig.json -> it will only convert typescript files within the src folder
6. Create a build script and a start script to execute the server from the dist folder in package.json
7. Choose a service to deploy -> railway(free plan), heroku, digitalocean? (we will be using railway)
8. After login with github -> new project -> provision postgresSQL (creates our database)
9. Click new -> Github repo -> choose project -> Settings
10. In settings do some config:
    a) root directory: /server (confirm)
    b) start command: npm run start
    c) In variables: new variable: DATABASE_URL, value: (go to the postgresSQL database -> connect -> copy Postgres connection URL) -> paste
    d) Start command: npm run start
11. Set the PORT: process.env.PORT

OBS: if anything fails try running the following command in the terminal: npx prisma migrate deploy
