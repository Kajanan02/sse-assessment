import React, {Suspense} from 'react';
import {Box} from "@chakra-ui/react";

function LazyWrapper({fallback = <Box>Loading...</Box>, children}) {
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    );
}

export default LazyWrapper;
