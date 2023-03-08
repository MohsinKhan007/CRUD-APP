import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Created a Mock Server with the given request handlers
export const server = setupServer(...handlers)
