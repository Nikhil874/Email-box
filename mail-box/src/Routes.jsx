
import { Route,Routes } from "react-router-dom"
import { BodyPage } from "./Components/body"
import { InboxPage } from "./Components/inbox"
import { SpecifigTag } from "./Components/SpecifiedTag"

export const AllRoutes=()=>{
    return(
      <Routes>
      <Route path="/" element={<InboxPage/>}></Route>
      <Route path="/tags/:tag" element={<SpecifigTag/>}></Route>
      <Route path="/body/:id" element={<BodyPage/>}></Route>

      </Routes>

    )
}