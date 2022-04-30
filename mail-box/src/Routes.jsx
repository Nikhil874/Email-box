
import { Route,Routes } from "react-router-dom"
import {  DetailView } from "./Components/DetailView"
import { InboxPage } from "./Components/inbox"
import { SearchPage } from "./Components/Search"
import { SpecifigTag } from "./Components/SpecifiedTag"

export const AllRoutes=()=>{
    return(
      <Routes>
       <Route path="/" element={<InboxPage/>}/>
      <Route path="/tags/:tag" element={<SpecifigTag/>}/>
      <Route path="/detail-view/:id" element={<DetailView/>}/>
      <Route path="/search/:word" element={<SearchPage/>}/>
      </Routes>

    )
}