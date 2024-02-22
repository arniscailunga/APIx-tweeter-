const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

//Create a new user with a new profile

const profile = await prisma.profile.create({
    data: {
      bio: "Hello World",
      user: {
        connect: { email: "prisca@prisma.io" },
      },
    },
  });
  //Create a new user with a new profile

  const user = await prisma.user.create({
    data: {
      email: "john@prisma.io",
      name: "John",
      profile: {
        create: {
          bio: "Hello World",
        },
      },
    },
  });


//tUpdate an existing user's profile

  const userWithUpdatedProfile = await prisma.user.update({
    where: { email: "prisca@prisma.io" },
    data: {
      profile: {
        update: {
          bio: "Hello Friends",
        },
      },
    },
  });

