import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import '@fontsource/roboto/400.css'

const CountdownTimer = () => {
    const calculateDiff = () => {
        const eventDate = new Date('March 28, 2022 00:00:00').getTime()
        const currentDate = new Date().getTime()
        const diff = eventDate - currentDate

        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24

        const duration = {
            day: Math.floor(diff / day),
            hour: Math.floor((diff % day) / hour),
            minute: Math.floor((diff % hour) / minute),
            second: Math.floor((diff % minute) / second)
        }

        if (duration <= 0) {
            clearInterval()
        }

        return (
            <Box
                component="div"
                sx={{
                    width: '90vw',
                    height: '90vh',
                    margin: '0 auto',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        padding: '20px',
                        border: '1px solid black',
                        borderRadius: 16,

                        margin: '2px'
                    }}
                >
                    <Typography
                        variant="span"
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        {duration.day}
                    </Typography>
                    <Typography
                        variant="span"
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        days
                    </Typography>
                    <Typography
                        variant="span"
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        {duration.hour}
                    </Typography>
                    <Typography
                        variant="span"
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        hours
                    </Typography>
                    <Typography
                        variant="span"
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        {duration.minute}
                    </Typography>
                    <Typography
                        variant="span"
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        minutes
                    </Typography>
                    <Typography
                        variant="span"
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        {duration.second}
                    </Typography>
                    <Typography
                        variant="span"
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        seconds
                    </Typography>
                </Box>
            </Box>
        )
    }

    const [diffTime, setDiffTime] = useState(calculateDiff())

    useEffect(() => {
        setTimeout(() => {
            setDiffTime(calculateDiff())
        }, 1000)
    })

    return <span>{diffTime}</span>
}

export default CountdownTimer
