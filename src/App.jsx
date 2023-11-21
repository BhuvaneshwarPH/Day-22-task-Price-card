import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="maincontainer">
      <section>
        <div className="container py-5">
          <div className="row text-center align-items-end">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Free
                </h1>
                <h2 className="h1 font-weight-bold">$0/ month</h2>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">Single User</i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      50 GB Storage
                    </i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary bi-check">
                      Unlimited Public Projects
                    </i>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2">
                      <del> Unlimited Private projects</del>
                    </i>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Dedicated Phone Support</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Free Subdomain</del>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2"></i>
                    <del>Monthly Status Reports</del>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary  btn-block">
                  Button
                </a>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow ">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">
                  Plus
                </h1>
                <h2 className="h1 font-weight-bold">$9/ month</h2>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">5 Users</i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      50 GB Storage
                    </i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      Unlimited Public Projects
                    </i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      Unlimited Private projects
                    </i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      Dedicated Phone Support
                    </i>
                  </li>
                  <li className="mb-3 text-primary">
                    <i className="fa fa-times mr-2">Free Subdomain</i>
                  </li>
                  <li className="mb-3 text-muted">
                    <i className="fa fa-times mr-2">
                      <del>Monthly Status Reports</del>
                    </i>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-block">
                  Button
                </a>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h1 className="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                <h2 className="h1 font-weight-bold">$49/month</h2>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">5 Users</i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      50 GB Storage
                    </i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      Unlimited Public Projects
                    </i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      Unlimited Private projects
                    </i>
                  </li>
                  <li className="mb-3">
                    <i className="fa fa-check mr-2 text-primary">
                      Dedicated Phone Support
                    </i>
                  </li>
                  <li className="mb-3 text-primary">
                    <i className="fa fa-times mr-2">Free Subdomain</i>
                  </li>
                  <li className="mb-3 text-primary">
                    <i className="fa fa-times mr-2">Monthly Status Reports</i>
                  </li>
                </ul>
                <a href="#" className="btn btn-primary btn-block">
                  Button
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
