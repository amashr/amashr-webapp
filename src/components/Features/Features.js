import React, {Component} from 'react';
import Featuresitems from './Featuresitems';

class Features extends Component{
    render(){
        var {aClass} =this.props;
        return(
            <section className={`agency_featured_area bg_color ${aClass}`}>
                <div className="container">
                    <h3 className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp" data-wow-delay="0.3s">Our AMASHR Cloud Software<br/></h3>
                    <div className="features_info">
                        <img className="dot_img" src={require ('../../img/home4/dot.png')} alt=""/>
                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="work1.png" iImg="icon01.png" ftitle="Unlock more opportunities with data-driven decision." 
                        
                        descriptions="Our reporting software makes it easy to generate instant, detailed reports on almost any data in AmasHR® with just a few clicks.From workforce planning to approval tracking, HR reporting gives you confidence to move forward and data to back up your decisions.When you’ re able to analyze HR data instead of just compiling it, you can be proactive instead of reactive and turn your HR department into the strategic resource it was meant to be!"/>


                        <Featuresitems rowClass="row agency_featured_item_two" aClass="pl_100" fimage="work2.png" iImg="icon02.png" ftitle="With Custom HR Workflows, it's time to be strategic." descriptions="Imagine how much time you could save simply by optimizing your most common HR workflows.When hours of paper - chasing are reduced to a few clicks, the opportunity to step up to the strategic plate for your organization becomes real.Instead of tracking down approvals, you can leave the busy work behind and focus on important issues like employee engagement, retention, talent development, and more.Now is HR’ s time to shine. AmasHR® can pave the way."/>




                        <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="work3.png" iImg="icon3.png" ftitle="With AMASHR you can become an employee data expert" 
                        descriptions="Thanks to the single, secure employee database in AmasHR®, tracking employee records has never been easier.From standard categories like personal and payment info to as much custom data as you want, you have full control over all of your key data in one place, accessible from anywhere.AmasHR moves your HR database away from scattered spreadsheets and paper files forever, putting organized, centralized data at your fingertips whenever you need it."/>


                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Features;