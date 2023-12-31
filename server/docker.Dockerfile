# Použijeme oficiální image Node.js
FROM node:14

# Nastavíme pracovní adresář v kontejneru
WORKDIR /src

# Zkopírujeme package.json a package-lock.json do kontejneru
COPY package*.json ./

# Nainstalujeme závislosti
RUN npm install

# Zkopírujeme zbytek kódu do kontejneru
COPY . .

# Nastavíme port, na kterém bude aplikace poslouchat
EXPOSE 3000

# Spustíme aplikaci
CMD ["npm", "start"]
