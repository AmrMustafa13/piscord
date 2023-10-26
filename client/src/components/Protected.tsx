import { Navigate } from "react-router-dom"

interface ProtectedProps {
    isSignedIn: boolean
    children: JSX.Element
}

const Protected = ({ isSignedIn, children }: ProtectedProps) => {
    if (isSignedIn) return <Navigate to="/channels/1/4" replace />
    else return <>{children}</>
}

export default Protected