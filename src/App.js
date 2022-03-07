import { Fragment } from 'react'
import CountdownTimer from './Components/CountdownTimer'
import { Container } from '@mui/material'

function App() {
    return (
        <Fragment>
            <Container component="main">
                <CountdownTimer />
            </Container>
        </Fragment>
    )
}

export default App
