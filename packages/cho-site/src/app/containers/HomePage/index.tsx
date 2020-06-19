import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  window.location.href = '/button';

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A Design System presentational application"
        />
      </Helmet>
    </>
  );
}
