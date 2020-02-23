import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import StartupBanner from '../components/Banner/StartupBanner';
import Sservice from '../components/Service/Sservice/Sservice';
import AgencyAbout from '../components/About/AgencyAbout';
import Features from '../components/Features/Features';
import Funfact from '../components/Funfact';
import Partner from '../components/Partner';
import MarketingTestimonial from '../components/Testimonial/MarketingTestimonial';
import ServiceData from '../components/Service/ServiceData';
import BannerData from '../components/Banner/BannerData';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Startup = () => (
    <div className="body_wrapper">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"/>
        <StartupBanner/> 
        <Sservice/>
        <AgencyAbout ServiceData={ServiceData}/>
        <Features aClass="agency_featured_area_two"/>
        <Funfact fclass="fun_fact_area_two" manImg="home8/fact.png" tClass="t_color3" ftitle="At AmasHR" fdescription="We focus on small and medium businesses and the people who work in them— like you.Our software makes it easy to collect, maintain, and analyze your people data, improve the way you hire talent, onboard new employees, manage compensation, and develop your company culture.It’ s designed to set you free to focus on what matters most— your people."

        CnumberOne="" CnumberTwo=""/>
        <MarketingTestimonial BannerData={BannerData}/>
        <Partner pClass="partner_logo_area bg_color"/>
        <FooterTwo FooterData={FooterData}/>
    </div>
)
export default Startup;