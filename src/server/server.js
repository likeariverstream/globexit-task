import fs from 'fs'
import fastify from 'fastify'
import path from 'path'
import fastifyCors from '@fastify/cors'

const app = fastify({ logger: true })

app.register(fastifyCors, {})

app.get('/', async (request, reply) => {
  try {
    const data = await fs.promises.readFile('./src/server/users.json', 'utf8')
    if (request.query.term) {
      const result = JSON.parse(data).filter(
        (elem) =>
          elem.name.toLowerCase().search(request.query.term.toLowerCase()) !==
          -1,
      )
      reply.send(JSON.stringify(result))
    } else {
      reply.send(data)
    }
  } catch (err) {
    console.log('File read failed:', err)
    reply.code(500).send('Internal Server Error')
  }
})

export const start = async () => {
  try {
    await app.listen(3000)
  } catch (err) {
    app.log.error(err)
    /* eslint-env node */
    process.exit(1)
  }
}

start()
