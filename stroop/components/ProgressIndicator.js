import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Points from './Points';

export default function ProgressIndicator({ pointCount }) {
    const [indication, setIndication] = useState(0);

    const updateIndication = () => {

        if (pointCount % 6 === 0) {
            setIndication(i => i + 1)
        }
    }
    const boxes = [];

    for (let i = 0; i < indication; i++) {
        updateIndication();
        boxes.push(<Box sx={{
            width: 100,
            height: 100,
            borderRadius: 1,
            backgroundColor: '#f5ef9c',
        }}></Box>)
    }

    return (
        <div>
            {boxes}
        </div>
    )
}