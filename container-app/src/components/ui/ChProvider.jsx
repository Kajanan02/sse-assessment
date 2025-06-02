'use client'

import {ChakraProvider, createSystem, defaultConfig, defineConfig} from '@chakra-ui/react'
import {ColorModeProvider} from './color-mode'

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                brand: {
                    50: {value: "#e6f2ff"},
                    100: {value: "#e6f2ff"},
                    200: {value: "#bfdeff"},
                    300: {value: "#99caff"},
                    // ...
                    950: {value: "#001a33"},
                },
            },
        },
    },
})


const system = createSystem(defaultConfig, config)


export function ChProvider(props) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    )
}
