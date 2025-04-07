# Używamy oficjalnego obrazu Node.js jako bazowego
FROM node:20.15.1-alpine

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy pliki package.json oraz package-lock.json
COPY package*.json ./

RUN npm install -g pnpm

# Instalujemy zależności
RUN pnpm install

# Kopiujemy pozostałe pliki aplikacji
COPY . .

# Budujemy aplikację Next.js
RUN pnpm run build

# Eksponujemy port, na którym aplikacja będzie działać
EXPOSE 3000

# Uruchamiamy aplikację Next.js w trybie produkcyjnym
CMD ["pnpm", "start"]