import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Context from "../Context"

export default function ContinuousSlider() {


    const { value, setValue, handleChange } = useContext(Context)

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">

                <Slider value={value} onChange={handleChange}
                    size="medium"
                    defaultValue={99}
                    aria-label="Small"
                    // valueLabelDisplay="auto"
                    min={20}
                    max={99} />

            </Stack>
            {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
        </Box>
    );
}