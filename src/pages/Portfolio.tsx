import React from 'react';
import Layout from '../components/Layout';
import { ProjectsGrid } from '../components/portfolio';

const Portfolio: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-pollinate-darkGray max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
        <ProjectsGrid limit={9} showFilters={true} />
      </div>
    </Layout>
  );
};

export default Portfolio;
