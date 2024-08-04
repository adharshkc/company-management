
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"


  test("Renders the main page", () => {
    render(<Button children={''}className='' />)
    const button = screen.getByRole('button')
    //assertion
    expect(button).toBeInTheDocument()
    
})