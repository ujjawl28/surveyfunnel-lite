import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BuildContextProvider } from "./Context/BuildContext";
import { DesignContextProvider } from "./Context/DesignContext";
const Build = lazy(() => import("./Build"));
const Design = lazy(() => import("./Design"));

export default function Routes() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/build">Build</Link>
                    </li>
                    <li>
                        <Link to="/design">design</Link>
                    </li>
                    <li>
                        <Link to="/configure">configure</Link>
                    </li>
                    <li>
                        <Link to="/share">share</Link>
                    </li>
                    <li>
                        <Link to="/reports">reports</Link>
                    </li>
                </ul>
            </div>
            <BuildContextProvider>
                <DesignContextProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/build">
                            <Build></Build>
                        </Route>
                        <Route path="/design">
                            <Design></Design>
                        </Route>
                        <Route path="/configure">
                            <div className="configure">configure</div>
                        </Route>
                        <Route path="/share">
                            <div className="share">share</div>
                        </Route>
                        <Route path="/reports">
                            <div className="reports">reports</div>
                        </Route>
                    </Switch>
                </Suspense>
                </DesignContextProvider>
            </BuildContextProvider>
        </Router>
    );
}
