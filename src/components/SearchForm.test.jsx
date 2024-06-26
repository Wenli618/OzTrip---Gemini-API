import { expect, test } from "vitest";
import { fireEvent, render, screen } from '@testing-library/react'
import SearchForm from "./SearchForm";

const mockSubmit = function(){}
test('should updates input fields correctly', ()=>{
    render(<SearchForm parentOnSubmit = {mockSubmit}/>)
    const inputElement = screen.getByPlaceholderText("Input a city")

    fireEvent.change(inputElement, { target: { value: 'sydney'}})

    expect(inputElement.value).toBe('sydney')
})