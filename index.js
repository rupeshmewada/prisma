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




main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })