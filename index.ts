import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Créer un utilisateur test
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Alice',
    },
  })

  console.log('Utilisateur créé :', user)
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
