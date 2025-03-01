import { FastifyReply, FastifyRequest } from 'fastify'
import { ApiError } from '../@types/apiError'

export async function checkSessionId(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      code: '401',
      message: 'Unauthorized',
    } as ApiError)
  }
}
