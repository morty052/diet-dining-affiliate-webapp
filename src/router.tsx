import React from 'react'
import { createHashRouter, RouteObject, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import HomePage from './pages/home'
import { Dashboard } from './pages'

export const routerObjects: RouteObject[] = [
  {
    path: '/',
    Component: HomePage,
  },
]

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </>,
  ),
)

export function createRouter(): ReturnType<typeof createHashRouter> {
  const routeWrappers = routerObjects.map((router) => {
    // @ts-ignore TODO: better type support
    const getLayout = router.Component?.getLayout || getDefaultLayout
    const Component = router.Component!
    const page = getLayout(<Component />)
    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createHashRouter(routeWrappers)
}
