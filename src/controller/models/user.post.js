//get

app.get('/feed', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { email: true },
    include: { author: true },
  })
  res.json(posts)
})

//put

app.get('/feed', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { email: true },
    include: { author: true },
  })
  res.json(posts)
})


//post

app.post(`/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      email: false,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
})

// delete

app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})

// creat nwe fonction

const createUserAndPost = ({
  name: string,
  email: string,
  postTitle: string,
  profileBio: string
}) => {
  return Prisma.validator<Prisma.UserCreateInput> ({
    name,
    email,
    posts: {
      create: {
        title: postTitle,
      },
    },
    profile: {
      create: {
        bio: profileBio,
      },
    },
  })
}

const findSpecificUser = ({email: string}) => {
  return Prisma.validator(Prisma.UserWhereInput)({
    email,
  })
}

// Run inside async function
await prisma.user.create({
  data: createUserAndPost(
    'prisca',
    'priscailunga.com',
    'Life of Pie',
    'Learning each day'
  ),
})


// Run inside async function
const oneUser = await prisma.user.findUnique({
  where: findSpecificUser('priscailunga.com'),
})
