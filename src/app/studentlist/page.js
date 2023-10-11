import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Student list</h1>
      <ul>
        <li>
          <Link href="/studentlist/Anil">Anil</Link>
        </li>
        <li>
          <Link href="/studentlist/peter">peter</Link>
        </li>
        <li>
          <Link href="/studentlist/sam">sam</Link>
        </li>
        <li>
          <Link href="/studentlist/bhaskar">bhaskar</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
