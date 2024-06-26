import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient();
};

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const db = globalThis.prismaGlobal ?? prismaClientSingleton();

export default db;

// declare global {
//     var prisma: PrismaClient | undefined;
// }

// export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;

 