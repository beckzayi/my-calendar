import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateEventType from "./routes/eventType/create";
import EventTypes from "./components/eventType";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/event_types"
          element={
            <Layout>
              <EventTypes />
            </Layout>
          }
        />
        <Route
          path="/event_types/new"
          element={
            <Layout>
              <CreateEventType />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
