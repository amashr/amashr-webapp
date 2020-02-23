import React, {Component} from 'react';
import Stserviceitems from './StserviceItem';
import Reveal from 'react-reveal/Reveal';
class Sservice extends Component{
    render(){
        return(
            <section className="agency_service_area bg_color">
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s">Partnering people with<br/> technology</h2>
                    <div className="row mb_30">
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1100}><Stserviceitems iShap="icon_shape1.png"  Sicon="ti-panel" text="Human Capital Consultancy" description=" Whether you are a start-up or an established organization, we have full complement Human Capital consultancy services. Our solutions result in increased employee productivity, improved morale, and higher employee retention, all of which translate into cost savings, while protecting your business" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1400}><Stserviceitems iShap="icon_shape2.png"  Sicon="ti-layout-grid2" text="CRM Cloud Software " description="Our HR software collects and organizes all the information you gather throughout the employee life cycle, then helps you use it to achieve great things. Whether you're hiring, onboarding, preparing compensation or building culture, AMASHR gives you the time and insights to focus on your most important asset - your people" btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1700}><Stserviceitems iShap="icon_shape3.png"  Sicon="ti-gallery" text="Recruiting and Outsourcing" description="We manage full life-cycle recruitment process for designated clients. Let our AMASHR workflow system manage your talent acquisition needs: sourcing, screening and managing candidates through the interview process: and as the subject matter expert, provide consultative guidance and advice on recruitment best practices.  " btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Sservice;