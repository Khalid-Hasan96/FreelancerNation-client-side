import React from 'react';
import BusinessSection from '../../buisnessSection/BuisnessSection';
import Explore from '../../Explore/Explore';
import FeatureBanner from '../../FeatuteBanner/FeatureBanner';
import ReviewSlider from '../../ReviewSlider/ReviewSlider';

const Home = () => {
    return (
        <div>
            <FeatureBanner></FeatureBanner>
            <Explore></Explore>
            <ReviewSlider></ReviewSlider>
            <BusinessSection></BusinessSection>
        </div>
    );
};

export default Home;