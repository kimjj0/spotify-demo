import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import ("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(()=> import("./pages/SearchPage/SearchPage"));
const SearchWithKeywordPage = React.lazy(() => import("./pages/SearchWithKeywordPage/SearchWithKeywordPage"));
const PlaylistDetailPage = React.lazy(() => import("./pages/PlaylistDetailPage/PlaylistDetailPage"));
const PlaylistPage = React.lazy(() => import("./pages/PlaylistPage/PlaylistPage"));


//0. SideBar (Playlist, Menu)
//1. HomePage /
//2. SearchPage /search
//3. SearchResultPage /search/:keyword
//4. PlayListDetailPage /playlist/:id
//5. (Moblie) PlayListPage /playlist

function App() {
  return (
   <Suspense fallback={<div>loading...</div>}>
     <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='search' element={<SearchPage/>}/>
        <Route path='search/:keyword' element={<SearchWithKeywordPage/>}/>
        <Route path='playlist/:id' element={<PlaylistDetailPage/>}/>
        <Route path='playlist' element={<PlaylistPage/>}/>
      </Route>
    </Routes>
   </Suspense>
  );
}

export default App;
