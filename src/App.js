import React from 'react';
import TasksPage from "./pages/tasks/TasksPage";
import ModalProvider from "./utils/hooks/modal/ModalProvider";
import Page from "./layouts/Page";

function App() {

  return (
    <ModalProvider>
      <Page>
       <TasksPage/>
      </Page>
    </ModalProvider>
  );
}

export default App;
