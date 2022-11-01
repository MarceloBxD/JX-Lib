import React from 'react'
import { render } from 'src/test/renderWithContexts'
import { screen } from '@testing-library/react'
import { StepAnimation, Expand, FadeIn, FadeInRight } from '.'

describe('StepAnimation', () => {
  it('should render', () => {
    render(
      <StepAnimation>
        <div data-testid="exampleDiv">Teste</div>
      </StepAnimation>
    )

    const div = screen.getByTestId(/exampleDiv/i)

    expect(div).toBeInTheDocument()
  })
})

describe('Expand', () => {
  it('should render', () => {
    render(
      <Expand isCurrent>
        <div data-testid="exampleDiv2">Teste</div>
      </Expand>
    )

    const div = screen.getByTestId(/exampleDiv2/i)

    expect(div).toBeInTheDocument()
  })
})

describe('FadeIn', () => {
  it('should render', () => {
    render(
      <FadeIn>
        <div data-testid="exampleDiv3">Teste</div>
      </FadeIn>
    )

    const div = screen.getByTestId(/exampleDiv3/i)

    expect(div).toBeInTheDocument()
  })
})

describe('FadeInRight', () => {
  it('should render', () => {
    render(
      <FadeInRight>
        <div data-testid="exampleDiv4">Teste</div>
      </FadeInRight>
    )

    const div = screen.getByTestId(/exampleDiv4/i)

    expect(div).toBeInTheDocument()
  })
})
