import { render, screen } from "@testing-library/react"
import UserProfile from "@/components/UserProfile"

describe('userProfile', () => {
    describe('Rendering', () => {
        it('should have text Email Verified when isEmailVerified is true ', () => {
            render(<UserProfile
                displayName="debdut066"
                username="overlord066"
                email="debdut@gmail.com"
                isEmailVerified={true}
            />)
            expect(screen.getByText(/Email Verified/)).toBeInTheDocument();
        })

        it('should have text Email Not Verified when isEmailVerified is false ',async () => {
            render(<UserProfile
                displayName="debdut066"
                username="overlord066"
                email="debdut@gmail.com"
                isEmailVerified={false}
            />)
            expect(screen.queryByText(/Email Verified/)).not.toBeInTheDocument();
            expect(await screen.findByText(/Email Not Verified/)).toBeInTheDocument()
        })

        it('should have display name end with three dots when length is greater than 30 characters', () => {
            render(<UserProfile
                displayName="debdut debdut debdut debdut debdut debdut debdut debdut debdut debdut debdut"
                username="overlord066"
                email="debdut@gmail.com"
                isEmailVerified={false}
            />)

            const displayNameSpanElement = screen.getByText(/Display Name: /);
            expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./)
        })

        it('should have display name end with three dots when length is less than 30 characters', () => {
            render(<UserProfile
                displayName="debdut"
                username="overlord066"
                email="debdut@gmail.com"
                isEmailVerified={false}
            />)

            const displayNameSpanElement = screen.getByText(/Display Name: /);
            expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./)
        })
    })
}) 