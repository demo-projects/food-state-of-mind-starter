import React from 'react';
import {PageContainer} from "../shared/Layout";
import PlaceCard from "../shared/PlaceCard";

const Burgers = () => {
  return (
      <>
        <PageContainer>
          <h1>Burger Places</h1>
          { [].map( place => <PlaceCard key={place.id} place={place} />)}
        </PageContainer>
      </>
  );
};

export default Burgers;