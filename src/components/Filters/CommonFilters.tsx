import React from 'react';
import Box from '../Box';
import CustomSelect from '../ui/select';
import Button from '../Button';

interface CommonFiltersProps {
    filters: string[];
    cols?: string;
}

const CommonFilters = ({
    filters,
    cols = 'minmax(134px,_195px)_minmax(134px,_195px)_minmax(134px,_195px)_minmax(134px,_195px)',
}: CommonFiltersProps) => {
    return (
        <Box className='gap-5 min-[1020px]:gap-4 items-center flex-col min-[1020px]:flex-row'>
            <div
                className={`w-full md:w-fit gap-4 items-end grid grid-cols-2 md:grid-cols-[${cols}]`}
            >
                {filters?.map((f, i) => (
                    <CustomSelect key={`${f}-${i}`} title={f} />
                ))}
            </div>
            <Button
                variant='text'
                size='text'
                className='min-[1020px]:mt-[27px]'
            >
                Reset
            </Button>
        </Box>
    );
};

export default CommonFilters;
