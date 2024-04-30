import React, { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
import {
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import { ROUTER } from './constant/router';

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})
 const Home = React.lazy(()=>import('./pages/home'))
 const Faq = React.lazy(()=>import('./pages/fag'))
 const Article = React.lazy(()=>import('./pages/article'))
 const Details = React.lazy(()=>import('./pages/article/details'))
 const CreateArticle = React.lazy(()=>import('./pages/article/createArcticle'))
 const Favorites = React.lazy(()=>import('./pages/favorites'))
 const NotFound = React.lazy(()=>import('./pages/notfound'))

function App() {
  return (
    <>
       <ChakraProvider theme={theme}>
<Suspense fallback={
  <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
}>


  <Router>
    <Routes>
      <Route path={ROUTER.HOME} element ={<Home/>}/>
      <Route path={ROUTER.ARTICLES} element ={<Article/>}/>
      <Route path={ROUTER.FAQ} element ={<Faq/>}/>
      <Route path={ROUTER.CREATE} element ={<CreateArticle/>}/>
      <Route path={ROUTER.FAVORITE} element ={<Favorites/>}/>
      <Route path={ROUTER.CREATE} element ={<CreateArticle/>}/>
      <Route path={ROUTER.ARTICLES +"/:id" } element ={<Details/>}/>
      <Route path={ROUTER.NOTFOUND} element ={<NotFound/>}/>

    </Routes>
  </Router>
</Suspense>
    </ChakraProvider>

    </>
  );
}

export default App;
