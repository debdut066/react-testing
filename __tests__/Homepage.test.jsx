import Home from "@/app/page"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe('Home Page', () => {
    describe('Rendering', () => {
        it('should have Home Page text', () => {
            render(<Home/>)
            expect(screen.getByText('Home page')).toBeInTheDocument();
        })
    
        it('should have button with text click Me', () => {
            render(<Home/>);
            expect(screen.getByRole('button', { name : 'Click Me' })).toBeInTheDocument()
        })
    
        it('should have input field with label Enter Random text', () => {
            render(<Home/>);
            // expect(screen.getByRole('textbox')).toBeInTheDocument()
            expect(screen.getByLabelText(/Enter Random Text/)).toBeInTheDocument()
        })
    
        it('should not find element with text : This is the text!', () => {
            render(<Home/>);
            expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
            // screen.queryByText('This is the text!')
        })
    })

    describe('behaviour', () => {
        it('should click on Show Text Button and find new text',async () => {
            render(<Home/>);
            expect(screen.queryByText('This is the text!')).not.toBeInTheDocument();
            let showTextButton = screen.getByRole('button', { name : 'Show text'});
            await userEvent.click(showTextButton)
            expect(
                await screen.findByText('This is the text!', {}, { timeout : 5000 })
            ).toBeInTheDocument()
            // await waitFor(() => {
            //     expect(screen.getByText('This is the text!')).toBeInTheDocument()
            // },
            // { timeout : 1200 }
            // )
        })
    })
})