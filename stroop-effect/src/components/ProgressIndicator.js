import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

export default function ProgressIndicator({ pointCount }) {
    const [indication, setIndication] = useState(0);

    useEffect(() => {
        if (pointCount % 6 === 0) {
            setIndication(prev => prev + 1)
        }
    }, [indication, pointCount])

    const boxes = [];

    for (let i = 0; i < indication; i++) {
        boxes.push(<Box sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            backgroundColor: '#f5ef9c',
        }}></Box>)
    }

    return (
       {boxes}
    )
}