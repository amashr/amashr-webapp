import React, {Component} from 'react';
import Sectitle from '../../Title/Sectitle'
import Pserviceslider from './Pserviceslider';

class Sservice extends Component{
    render(){
        return(
            <section className="prototype_service_area_two">
                <div className="container custom_container">
                    <Sectitle Title="Your HR software power in the Cloud" TitleP="Show off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking.!"
                    tClass="t_color3" sClass="sec_title text-center mb_70"/>
                    <Pserviceslider/>
                </div>
            </section>
        )
    }
}
export default Sservice;