const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// inscription
exports.userRegister = async(req, res) => {
    const user = await prisma.user.create({
        data: {
            email: 'priscaaq@prisma.io',
            nam: 'Prisca Prisma',
            password: "lopoplo"
        },
    })
    console.log(user);
}

// connexion
exports.userLogin = async(req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            }
        })
        if (req.body.password == user.password) {
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(' ')[1]
            const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
            const userId = decoded.user;
            req.user = userId
        
        } else {
            res.status(401).json({error: "erreur d'identification"})
        }
    } catch(error) {
        res.status(500).json({error})
    }
}