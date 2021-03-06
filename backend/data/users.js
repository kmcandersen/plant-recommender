import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    usdaZone: 6,
    plantCollection: [],
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hercules Mulligan',
    email: 'hmull@example.com',
    plantCollection: [],
    usdaZone: 7,
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Phoebe Buffay',
    email: 'pbuff@example.com',
    plantCollection: [],
    usdaZone: 5,
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Regina Phalange',
    email: 'rphal@example.com',
    plantCollection: [],
    usdaZone: 4,
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
