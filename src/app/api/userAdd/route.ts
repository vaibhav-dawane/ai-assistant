import {PrismaClient} from "@prisma/client"

export async function GET()
{
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
            password: "helloThisIsPassword"
        },
    })
    return Response.json(user.email);
}