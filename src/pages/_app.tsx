import { ChakraProvider } from '@chakra-ui/react'
import  Head  from 'next/head'
import { theme } from '../styles/theme'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Moises Cruz - Portfólio</title>
   </Head>
   
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}

export default MyApp