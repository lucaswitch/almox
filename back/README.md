# Setup

 - Criar um arquivo .env assim: "/back/.env"
   - Adicionar as credenciais do banco de dados no .env assim:
     - MYSQL_DATABASE=almox
     - MYSQL_DATABASE_USER=almox_user
     - MYSQL_DATABASE_PASSWORD=password
   - Criar o banco de dados MySql com usuario e colocar conforme descrito acima
   - Rodar npm install na pasta /back ou yarn install na pasta /back
   - Adicionar estrutura do banco de dados via terminal:
     - Adicionar estrutura: npx sequelize-cli db:migrate
     - Popular estrutura: npx sequelize-cli db:seed:all
