# Použijeme oficiální image Node.js
FROM node:16.13

# Nastavíme pracovní adresář v kontejneru
WORKDIR /src

# Zkopírujeme package.json a package-lock.json do kontejneru
COPY package*.json ./

# Nainstalujeme závislosti
RUN npm install

# Zkopírujeme zbytek kódu do kontejneru
COPY . .

RUN npx prisma generate
ENV DATABASE_URL='mysql://nakt3wo239cbh09ureak:pscale_pw_IuVzBWkEVBTuQngNrhaezxe97HVy54Ukmo70iN7uajF@aws.connect.psdb.cloud/invocieapp?sslaccept=strict'
ENV PORT=3000
# Nastavíme port, na kterém bude aplikace poslouchat
EXPOSE 3000

# Spustíme aplikaci
CMD ["npm", "start"]
