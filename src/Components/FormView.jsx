import { useState } from "react"

export const FormView = () => {
    const [emailAddress, setEmailAddress] = useState('')
    const handleEmail = (e) => setEmailAddress(e.target.value)

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="email">
                        Email address
                    </label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="email" 
                        placeholder="Enter Email"
                        value={emailAddress}
                        onChange={handleEmail}
                    />
                </div>
            </form>
        </>
    )
}