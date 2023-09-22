import React, { useState } from 'react';
import SearchAppBar from "../Components/searchbar";
import PollingQ from "../Components/Enterpoll";

function Dashboard() {
  return (
    <React.Fragment>
      <SearchAppBar />
      <PollingQ />
      
    </React.Fragment>
  );
}

export default Dashboard;
