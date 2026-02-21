import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

export default function ProgressIndicator({pointCount}) {
    const [indication, setIndication] = useState(0);

    useEffect(() => {
        if (pointCount % 6 === 0) {
            setIndication(indication + 1)
        }
    }, [indication, pointCount])

    const boxes = [];

    for (let i = 0; i < indication; i++) {
        boxes.push(<Box sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            bgcolor: 'primary.main',
        }}></Box>)
    }

    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: '#edd58f',
                    },
                },
            }}
        >       {boxes}
        </ThemeProvider>
    )
}