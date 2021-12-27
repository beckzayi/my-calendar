import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateEventType from "./routes/eventType/create";
import EventTypes from "./routes/eventType";
import ScheduledEventsRoute from "./routes/scheduledEvent/scheduledEvents";
import CreateOneOnOneRoute from "./routes/eventType/one-on-one/create";
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
        <Route
          path="/scheduled_events"
          element={
            <Layout>
              <ScheduledEventsRoute />
            </Layout>
          }
        />
        <Route
          path="/event_types/new/one"
          element={
            <Layout>
              <CreateOneOnOneRoute />
            </Layout>
          }
        />
        <Route path="/" element={<Navigate to="/event_types" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
