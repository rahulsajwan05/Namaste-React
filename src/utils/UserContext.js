import { createContext } from "react"

const UserContext = createContext({
    loggedInUser : "Deefault Value"
})

export default UserContext