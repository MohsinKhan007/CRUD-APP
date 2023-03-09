import React, { Component } from 'react'
export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
}
