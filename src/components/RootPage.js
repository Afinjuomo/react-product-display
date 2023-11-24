import { Outlet  } from "react-router-dom"
import NavBar from "./NavBarComponent"
import { Provider } from "react-redux"
import store from "../store/store"

const RootPage = () => {
  return (
    <>
    <Provider store={store}>
      <NavBar />
      <main>
        <Outlet />
      </main>
      </Provider>
    </>
    
  )
}

export default RootPage
