import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  //   create a user
  //   const adduser = await prisma.user.create({
  //     data: {
  //       name: "ram",
  //       email: "ram@gmail.com",
  //     },
  //   });
  //   console.log(adduser);

  //   create multiple user

  //   const addusers = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "arun",
  //         email: "arun@gmail.com",
  //       },
  //       {
  //         name: "shyam",
  //         email: "shyam@gmail.com",
  //       },
  //     ],
  //   });
  //   console.log(addusers);

  // fetch all data
  //   const allUsers = await prisma.user.findMany({});
  //   console.dir(allUsers);

  //   // fetch first data
  //   const allUsers = await prisma.user.findFirst({});
  //   console.dir(allUsers);

  //   // fetch unique data
  //   const allUsers = await prisma.user.findUniqueOrThrow({
  //     where: { id: 4 },
  //   });
  //   console.dir(allUsers);

  //   // updata data
  //   const updateUser = await prisma.user.update({
  //     where: { id: 1 },
  //     data: {
  //       name: "ram1",
  //       email: "ram1@gmail1.com",
  //     },
  //   });
  //   console.log(updateUser);

  // updata many data
  //    const updateUser = await prisma.user.updateMany({
  //     where: { email: "ram1@gmail1.com" },
  //     data: {
  //       name: "ram"
  //     },
  //   });
  //   console.log(updateUser);

  // delete user
//   const deluser = await prisma.user.delete({
//     where: { id: 4 },
//   });

  // delete user
//   const deluser = await prisma.user.delete({
//     where: { id: 4 },
//   });
}



main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
