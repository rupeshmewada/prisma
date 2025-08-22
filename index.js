import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()


async function main() {
  // ... you will write your Prisma Client queries here
// await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//     },
//   })


  const allUsers = await prisma.user.findMany({  })
  console.dir(allUsers)

}

// git remote add origin git@github.com:vsgeek/KCHrPortal.git
// git branch -M main
// git push -u origin main

// git@github.com:rupeshmewada/prisma.git




main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })