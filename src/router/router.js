import { createBrowserRouter } from 'react-router-dom'
import { getFormValues } from './action'
import {
  HOME_URL,
  LOGIN_URL,
  SEARCH_URL,
  RESULT_URL,
} from '../utils/constants'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SearchPage from '../pages/SearchPage/SearchPage'
import ResultPage from '../pages/ResultPage/ResultPage'
import RequireAuth from '../components/Authentication/Authentication'

const router = createBrowserRouter([
  {
    path: HOME_URL,
    element: <HomePage />,
  },
  {
    path: LOGIN_URL,
    element: <LoginPage />,
  },
  {
    path: SEARCH_URL,
    element: <RequireAuth />,
    children: [
      {
        path: SEARCH_URL,
        element: <SearchPage />,
      },
      {
        path: RESULT_URL,
        element: <ResultPage />,
        action: getFormValues,
      },
    ],
  },
])

export default router
