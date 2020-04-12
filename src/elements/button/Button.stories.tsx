import React from 'react'
import Button from './Button'
import Container from '../container/Container'
import Margin from '../margin/Margin'

export default { title: 'Button' }

export const button = (): JSX.Element => (
  <Container>
    <Margin all={2}>
      <Button>Button</Button>
    </Margin>
  </Container>
)
