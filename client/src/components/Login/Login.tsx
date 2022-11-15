import React, { FC, useState } from 'react';
import 'bulma/css/bulma.css';

interface Props {
  setUserPass: any;
  setUserName: any;
}

export const Login: FC<Props> = ({setUserPass, setUserName }) => {
  const send = (event: any) => {
    event.preventDefault();
    setUserName(event.target.username.value);
    setUserPass(event.target.pass.value);
  };

  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form
                onSubmit={send}
                className="box"
              >
                <div className="field">
                  <label htmlFor="" className="label">Login/Name</label>
                  <div className="control has-icons-left">
                    <input type="text" placeholder="John Doe" name="username" className="input" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">Password</label>
                  <div className="control has-icons-left">
                    <input type="password" name="pass" placeholder="*******" className="input" required />
                    <span className="icon is-small is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <button
                    className="button is-success"
                    type='submit'
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
