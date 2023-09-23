import fastifyJwt from "@fastify/jwt";
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import config from "./config/config";
import prismaPlugin from "./plugins/prisma";
import routes from "./routes";

export const app = fastify({ logger: false });

// Jwt Authentication type
declare module "fastify" {
  export interface FastifyInstance {
    authenticate: any;
  }
}

// Jwt Request User type
declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: { id: number; name: string; email: string };
  }
}

// Cors
app.register(require('@fastify/cors'));


// Registration JWT
app.register(fastifyJwt, { secret: config.JWT_SECRET });
app.decorate("authenticate", async (req: FastifyRequest, res: FastifyReply) => {
  try {
    await req.jwtVerify();
  } catch (e) {
    return res.send(e);
  }
});
// Registration Prisma Client
app.register(prismaPlugin);

/**
 * Handling Route Systems
 */
routes(app);

app.get("/healthcheck", (req, res) => {
  return res.code(200).send({ status: "OK" });
});

app.get("*", (req, res) => {
  res.code(404).send({ message: "404 not found" });
});

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`App listening at ${address}`);
});
