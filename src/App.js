import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
        <Route path="/" element={<Navigate to="/event_types" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
