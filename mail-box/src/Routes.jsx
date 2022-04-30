
import { Route,Routes } from "react-router-dom"
import { InboxPage } from "./Components/inbox"
import { SpecifigTag } from "./Components/SpecifiedTag"

export const AllRoutes=()=>{
    return(
      <Routes>
      <Route path="/" element={<InboxPage/>}></Route>
      <Route path="/tags/:tag" element={<SpecifigTag/>}></Route>
      <Route></Route>

      </Routes>

    )
}