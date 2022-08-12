import React from 'react';
import Layout from '../core/Layout';
import Applications from '../components/Applications';
import States from '../components/States';
import Valleys from '../components/Valleys';
import Tooling from '../components/Tooling';

import Head from 'next/head';

const ApplicationsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ecosystem Applications – Ecoverse</title>
      </Head>
      <h1>Ecosystem</h1>
      <section>
        <p>
          Help States
        </p>
        <States />
      </section>

      <section>
        <p>
          Help Valleys
        </p>
        <Valleys />
      </section>

      <section>
        <p>
        Decentralized Applications
        </p>
        <Applications />
      </section>

      <section>
        <p>
        Dev Toolings
        </p>
        <Tooling />
      </section>
    </Layout>
  );
};

export default ApplicationsPage;
