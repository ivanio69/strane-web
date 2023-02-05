import React, { useState, useEffect } from "react";

import { signIn, useSession } from "next-auth/react";
import Header from "../../lib/components/app/Header";
function Next() {
  const { data: session } = useSession();
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}
export default Next;
