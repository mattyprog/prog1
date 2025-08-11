const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  // Crea utenti demo
  const password = await bcrypt.hash('password', 10);

  const [owner1, owner2, user1, admin] = await Promise.all([
    prisma.user.create({ data: { name: 'Mario Rossi', email: 'mario@studio.it', role: 'OWNER', passwordHash: password } }),
    prisma.user.create({ data: { name: 'Anna Bianchi', email: 'anna@studio.it', role: 'OWNER', passwordHash: password } }),
    prisma.user.create({ data: { name: 'Luca Cliente', email: 'luca@cliente.it', role: 'CLIENT', passwordHash: password } }),
    prisma.user.create({ data: { name: 'Admin', email: 'admin@studio.it', role: 'ADMIN', passwordHash: password } }),
  ]);

  // Seed 5 studi in città diverse
  await prisma.studio.createMany({
    data: [
      {
        ownerId: owner1.id,
        name: "Studio Milano Centrale",
        city: "Milano",
        address: "Via Roma 1, Milano",
        lat: 45.4642,
        lng: 9.19,
        images: JSON.stringify(["/img/milano1.jpg"]),
        equipment: JSON.stringify(["Microfono Neumann", "Piano Yamaha", "Mixer Allen & Heath"]),
        pricePerHour: 60,
        policy: "Cancellazione gratis fino a 24h prima",
      },
      {
        ownerId: owner2.id,
        name: "Studio Napoli Sound",
        city: "Napoli",
        address: "Via Toledo 10, Napoli",
        lat: 40.8522,
        lng: 14.2681,
        images: JSON.stringify(["/img/napoli1.jpg"]),
        equipment: JSON.stringify(["Batteria Pearl", "Chitarra Fender", "Casse Genelec"]),
        pricePerHour: 40,
        policy: "Non rimborsabile",
      },
      {
        ownerId: owner1.id,
        name: "Roma Groove Studio",
        city: "Roma",
        address: "Via del Corso 20, Roma",
        lat: 41.9028,
        lng: 12.4964,
        images: JSON.stringify(["/img/roma1.jpg"]),
        equipment: JSON.stringify(["Sintetizzatore Moog", "Mac Pro", "Monitor JBL"]),
        pricePerHour: 55,
        policy: "Cancellazione gratis fino a 12h prima",
      },
      {
        ownerId: owner2.id,
        name: "Bologna Beat Lab",
        city: "Bologna",
        address: "Via Indipendenza 99, Bologna",
        lat: 44.4949,
        lng: 11.3426,
        images: JSON.stringify(["/img/bologna1.jpg"]),
        equipment: JSON.stringify(["Chitarra Gibson", "Mixer Yamaha", "Microfono Rode"]),
        pricePerHour: 45,
        policy: "Cancellazione 50% fino a 6h prima",
      },
      {
        ownerId: owner1.id,
        name: "Torino Studio Pro",
        city: "Torino",
        address: "Corso Vittorio 12, Torino",
        lat: 45.0703,
        lng: 7.6869,
        images: JSON.stringify(["/img/torino1.jpg"]),
        equipment: JSON.stringify(["Piano Roland", "Drum Machine Akai", "Monitor KRK"]),
        pricePerHour: 50,
        policy: "Cancellazione gratis fino a 24h prima",
      },
    ]
  });

  console.log('Seed completed!');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(() => prisma.$disconnect());