import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const typeData: Prisma.TypeCreateInput[] = [
  {
    name: '赤',
    slug: 'red',
    type: 'kind',
  },
  {
    name: '白',
    slug: 'white',
    type: 'kind',
  },
  {
    name: 'ロゼ',
    slug: 'rose',
    type: 'kind',
  },
  {
    name: 'スパークリング',
    slug: 'sparkling',
    type: 'kind',
  },
  {
    name: 'ライトボディ',
    slug: 'light',
    type: 'body',
  },
  {
    name: 'ミディアムボディ',
    slug: 'medium',
    type: 'body',
  },
  {
    name: 'フルボディ',
    slug: 'full',
    type: 'body',
  },
  {
    name: '甘口',
    slug: 'sweet',
    type: 'taste',
  },
  {
    name: '中辛口',
    slug: 'offDry',
    type: 'taste',
  },
  {
    name: '辛口',
    slug: 'dry',
    type: 'taste',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of typeData) {
    const type = await prisma.type.create({
      data: u,
    });
    console.log(`Created type with id: ${type.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
