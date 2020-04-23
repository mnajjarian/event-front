import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'
import { ErrorBoundary } from './pages/ErrorBoundary/errorBoundary'
import { GlobalStyles } from './styles/global'

function App(): JSX.Element {
  return (
    <Suspense fallback={<div></div>}>
      <GlobalStyles />
      <ErrorBoundary>
        <Router>
          <Routes />
        </Router>
      </ErrorBoundary>
    </Suspense>
  )
}

export default App
