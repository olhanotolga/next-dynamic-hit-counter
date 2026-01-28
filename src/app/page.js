// src/app/page.js
import React from 'react';
import {
  readFile,
  writeFile,
} from '../helpers/file-helpers';

export const dynamic = 'force-dynamic';

// this won't work in production because the file will be read-only,
// even after explicitly adding the file path to outputFileTracingIncludes in next.config.js
const DATABASE_PATH = '/src/database.json';

function Home() {
  let { hits } = JSON.parse(
    readFile(DATABASE_PATH)
  );

  hits += 1;

  writeFile(
    DATABASE_PATH,
    JSON.stringify({ hits })
  );

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {hits}.</p>
    </main>
  );
}

export default Home;
