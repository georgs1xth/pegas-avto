const { PrismaClient } = require('@prisma/client')
const db = new PrismaClient()

async function main() {
  const pegas = await db.company.upsert({
    where: { name: 'Пегас avto A' },
    update: {},
    create: {
      name: 'Пегас avto A',
    },
  })
  const injector = await db.company.upsert({
    where: { name: 'Инжектор Сервис' },
    update: {},
    create: {
      name: 'Инжектор Сервис',
    },
  })
  console.log({ pegas, injector })
}
main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })  