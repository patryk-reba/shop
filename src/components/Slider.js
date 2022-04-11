import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Context from "../Context"

export default function ContinuousSlider() {


    const { value, setValue, handleChange } = useContext(Context)

    return (
        <Box sx={{ width: "30%", maxWidth: "200px" }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">

                <Slider value={value} onChange={handleChange}
                    size="medium"
                    defaultValue={95}
                    aria-label="Small"
                    // valueLabelDisplay="auto"
                    className="slider"
                    min={20}
                    max={95} />

            </Stack>
            {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
        </Box>
    );
}