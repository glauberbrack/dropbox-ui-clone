import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Register</span>
        <span className="subtitle">or create and account</span>

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Lastname" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Prosseguir</button>

        <span className="terms">
            This page is protected by Privacy Policy.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;