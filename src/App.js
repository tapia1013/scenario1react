import React from 'react';
import EmailModal from './EmailModal/EmailModal';
import { EMProiver } from './EmailModal/EMProvider';



const App = () => {
  return (
    <EMProiver>
      <>
        <header className="page-header">
          <div className="logo">
            Berry
            <div className="logo__sub">
              by Riah
            </div>
          </div>
        </header>
        <main className="content-area">
          <h1>Content Area</h1>
        </main>
        <EmailModal />
        <div className="email-modal" />
      </>
    </EMProiver>
  )
}

export default App;