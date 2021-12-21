import React from 'react';

import Header from '../common/header';
import Footer from '../common/footer';

/* bootstrap */
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faCogs, faEnvelopeOpen, faCar } from '@fortawesome/free-solid-svg-icons'

/* css */
import '../assets/css/style.css';

import $ from 'jquery';

/* images */
import Oil_Filters from '../assets/image/Oil_Filters.jpg';
import Brake_Fluid from '../assets/image/Brake_Fluid.jpg';
import Synthetic_Oil from '../assets/image/Synthetic_Oil.jpg';
import Pre_Mixed_Coolant from '../assets/image/Pre_Mixed_Coolant.jpg';
import ZipPay from '../assets/image/ZipPay.png';
import Afterpay from '../assets/image/Afterpay.png';
import HT_Castrol from '../assets/image/HT_Castrol.webp';
import HT_Ryco from '../assets/image/HT_Ryco.webp';
import HT_Nulon from '../assets/image/HT_Nulon.webp';
import HT_Mann from '../assets/image/HT_Mann.webp';
import HT_Penrite from '../assets/image/HT_Penrite.webp';
import HT_Xforce from '../assets/image/HT_Xforce.webp';
import Servicing_Maintenance from '../assets/image/Servicing_Maintenance.webp';
import Off_Road from '../assets/image/Off_Road.webp';
import Performance from '../assets/image/Performance.webp';
import Tools_Workshop from '../assets/image/Tools_Workshop.webp';
import ryco_filters from '../assets/image/ryco_filters.png';
import nulon from '../assets/image/nulon.png';
import castrol from '../assets/image/castrol.png';
import wesfil_filters from '../assets/image/wesfil_filters.png';
import motul from '../assets/image/motul.png';
import penrite from '../assets/image/penrite.png';
import community from '../assets/image/community.jpg';
import newsletter from '../assets/image/newsletter.jpg';
import zip_banner from '../assets/image/zip_banner.webp';
import top from '../assets/image/home.jpg';

/* Offer JSON */
const Offer = [
    { id: 1, title: 'Up to 20% OFF', subtitle: 'Castrol Engine Oils', link: '#0', image: HT_Castrol },
    { id: 2, title: 'Up to 20% OFF', subtitle: 'Ryco Filters', link: '#0', image: HT_Ryco },
    { id: 3, title: 'Up to 10% OFF', subtitle: 'Nulon Engine Oils', link: '#0', image: HT_Nulon },
    { id: 4, title: 'Up to 15% OFF', subtitle: 'Mann Filters', link: '#0', image: HT_Mann },
    { id: 5, title: 'Up to 20% OFF', subtitle: 'Penrite Engine Oils', link: '#0', image: HT_Penrite },
    { id: 6, title: 'Up to 10% OFF', subtitle: 'Xforce Exhaust Systems & Accessories', link: '#0', image: HT_Xforce }
];

/* PopularParts JSON */
const PopularParts = [
    { id: 1, title: 'Oil Filters', link: '#0', image: Oil_Filters },
    { id: 2, title: 'Brake Fluid', link: '#0', image: Brake_Fluid },
    { id: 3, title: 'Synthetic Oil', link: '#0', image: Synthetic_Oil },
    { id: 4, title: 'Pre-Mixed Coolant', link: '#0', image: Pre_Mixed_Coolant }
];

/* ProductCat JSON */
const ProductCat = [
    { id: 1, title: 'Servicing & Maintenance', link: '#0', image: Servicing_Maintenance },
    { id: 2, title: 'Off-Road & 4x4', link: '#0', image: Off_Road },
    { id: 3, title: 'Performance', link: '#0', image: Performance },
    { id: 4, title: 'Tools & Workshop', link: '#0', image: Tools_Workshop }
];

/* PopularBrands JSON */
const PopularBrands = [
    { id: 1, link: '#0', image: ryco_filters },
    { id: 2, link: '#0', image: nulon },
    { id: 3, link: '#0', image: castrol },
    { id: 4, link: '#0', image: wesfil_filters },
    { id: 5, link: '#0', image: motul },
    { id: 6, link: '#0', image: penrite }
];

const ClearVehicle = () => {
    $('.ClearVehicle').on('click', function (e) {
        $('.selectvehicle1').show();
        $('.ClearVehicle').hide();
        e.stopPropagation();
    });
}

const selectvehicle1 = () => {
    $('.selectvehicle1 li').on('click', function (e) {
        $('.selectvehicle2').show();
        $('.selectvehicle1').hide();
        e.stopPropagation();
    });
}


function Home() {
    return (
        <div className='main_div'>

            <Header />

            {/* vehicle section Start */}
            <div className='top_section bg-light py-5' style={{ backgroundImage: 'url(' + top + ')', }}>
                <Container>
                    <Row className='selectvehicle1' style={{display: 'none'}}>
                        <Col md={4}>
                            <div className='card h-100'>
                                <div className='card-body'>
                                    <h5 className='text-center'>Find the <b>right parts</b> from the <b>best brands</b> for <b>your car</b>.</h5>
                                    <hr />
                                    <div className='option_div'>
                                        <div className='list_div'>Select Make</div>
                                        <ul className='list-unstyled selectoption_height selectvehicle1 mb-0' onClick={selectvehicle1}>
                                            <li className='py-1 px-2'>Audi</li>
                                            <li className='py-1 px-2'>BMW</li>
                                            <li className='py-1 px-2'>Ford</li>
                                            <li className='py-1 px-2'>Holden</li>
                                            <li className='py-1 px-2'>Mazda</li>
                                            <li className='py-1 px-2'>Mercedes-Benz</li>
                                            <li className='py-1 px-2'>Nissan</li>
                                            <li className='py-1 px-2'>Subaru</li>
                                            <li className='py-1 px-2'>Toyota</li>
                                            <li className='py-1 px-2'>Volkswagen</li>
                                            <li className='py-1 px-2'>ABARTH</li>
                                            <li className='py-1 px-2'>AC</li>
                                            <li className='py-1 px-2'>Alfa Romeo</li>
                                            <li className='py-1 px-2'>ALPINA</li>
                                            <li className='py-1 px-2'>ALVIS</li>
                                            <li className='py-1 px-2'>AMC</li>
                                            <li className='py-1 px-2'>Armstrong Siddeley</li>
                                            <li className='py-1 px-2'>Asia Motors</li>
                                            <li className='py-1 px-2'>Aston Martin</li>
                                            <li className='py-1 px-2'>Audi</li>
                                            <li className='py-1 px-2'>Austin</li>
                                            <li className='py-1 px-2'>Austin-Healey</li>
                                            <li className='py-1 px-2'>Bedford</li>
                                            <li className='py-1 px-2'>Bentley</li>
                                            <li className='py-1 px-2'>BMC</li>
                                            <li className='py-1 px-2'>BMW</li>
                                            <li className='py-1 px-2'>Bugatti</li>
                                            <li className='py-1 px-2'>Buick</li>
                                            <li className='py-1 px-2'>Cadillac</li>
                                            <li className='py-1 px-2'>Carbodies</li>
                                            <li className='py-1 px-2'>Caterham</li>
                                            <li className='py-1 px-2'>Chery</li>
                                            <li className='py-1 px-2'>Chevrolet</li>
                                            <li className='py-1 px-2'>Chrysler</li>
                                            <li className='py-1 px-2'>Citroen</li>
                                            <li className='py-1 px-2'>Daewoo</li>
                                            <li className='py-1 px-2'>Daihatsu</li>
                                            <li className='py-1 px-2'>Daimler</li>
                                            <li className='py-1 px-2'>De Tomaso</li>
                                            <li className='py-1 px-2'>DMC</li>
                                            <li className='py-1 px-2'>Dodge</li>
                                            <li className='py-1 px-2'>Eunos</li>
                                            <li className='py-1 px-2'>Ferrari</li>
                                            <li className='py-1 px-2'>Fiat</li>
                                            <li className='py-1 px-2'>Ford</li>
                                            <li className='py-1 px-2'>Foton</li>
                                            <li className='py-1 px-2'>FPV</li>
                                            <li className='py-1 px-2'>Geely</li>
                                            <li className='py-1 px-2'>Ginetta</li>
                                            <li className='py-1 px-2'>GMC</li>
                                            <li className='py-1 px-2'>Great Wall</li>
                                            <li className='py-1 px-2'>Haval</li>
                                            <li className='py-1 px-2'>Hillman</li>
                                            <li className='py-1 px-2'>Holden</li>
                                            <li className='py-1 px-2'>Honda</li>
                                            <li className='py-1 px-2'>HSV</li>
                                            <li className='py-1 px-2'>Humber</li>
                                            <li className='py-1 px-2'>Hummer</li>
                                            <li className='py-1 px-2'>Hyundai</li>
                                            <li className='py-1 px-2'>Infiniti</li>
                                            <li className='py-1 px-2'>International</li>
                                            <li className='py-1 px-2'>Isuzu</li>
                                            <li className='py-1 px-2'>Iveco</li>
                                            <li className='py-1 px-2'>Jaguar</li>
                                            <li className='py-1 px-2'>Jeep</li>
                                            <li className='py-1 px-2'>Jensen</li>
                                            <li className='py-1 px-2'>JMC</li>
                                            <li className='py-1 px-2'>Kia</li>
                                            <li className='py-1 px-2'>Lada</li>
                                            <li className='py-1 px-2'>Lamborghini</li>
                                            <li className='py-1 px-2'>Lancia</li>
                                            <li className='py-1 px-2'>Land Rover</li>
                                            <li className='py-1 px-2'>LDV</li>
                                            <li className='py-1 px-2'>Lexus</li>
                                            <li className='py-1 px-2'>Leyland</li>
                                            <li className='py-1 px-2'>Lincoln</li>
                                            <li className='py-1 px-2'>Lotus</li>
                                            <li className='py-1 px-2'>Lti</li>
                                            <li className='py-1 px-2'>Mahindra</li>
                                            <li className='py-1 px-2'>Maserati</li>
                                            <li className='py-1 px-2'>Maybach</li>
                                            <li className='py-1 px-2'>Mazda</li>
                                            <li className='py-1 px-2'>Mazdaspeed</li>
                                            <li className='py-1 px-2'>Mclaren</li>
                                            <li className='py-1 px-2'>Mercedes-Benz</li>
                                            <li className='py-1 px-2'>Mercury</li>
                                            <li className='py-1 px-2'>MG</li>
                                            <li className='py-1 px-2'>Mini</li>
                                            <li className='py-1 px-2'>Mitsubishi</li>
                                            <li className='py-1 px-2'>Morgan</li>
                                            <li className='py-1 px-2'>Morris</li>
                                            <li className='py-1 px-2'>Nissan</li>
                                            <li className='py-1 px-2'>Noble</li>
                                            <li className='py-1 px-2'>NSU</li>
                                            <li className='py-1 px-2'>Opel</li>
                                            <li className='py-1 px-2'>Peugeot</li>
                                            <li className='py-1 px-2'>Plymouth</li>
                                            <li className='py-1 px-2'>Pontiac</li>
                                            <li className='py-1 px-2'>Porsche</li>
                                            <li className='py-1 px-2'>Proton</li>
                                            <li className='py-1 px-2'>RAM</li>
                                            <li className='py-1 px-2'>Reliant</li>
                                            <li className='py-1 px-2'>Renault</li>
                                            <li className='py-1 px-2'>Riley</li>
                                            <li className='py-1 px-2'>Rolls-Royce</li>
                                            <li className='py-1 px-2'>Rover</li>
                                            <li className='py-1 px-2'>Saab</li>
                                            <li className='py-1 px-2'>Seat</li>
                                            <li className='py-1 px-2'>Singer</li>
                                            <li className='py-1 px-2'>Skoda</li>
                                            <li className='py-1 px-2'>Smart</li>
                                            <li className='py-1 px-2'>Ssangyong</li>
                                            <li className='py-1 px-2'>Subaru</li>
                                            <li className='py-1 px-2'>Sunbeam</li>
                                            <li className='py-1 px-2'>Suzuki</li>
                                            <li className='py-1 px-2'>TATA</li>
                                            <li className='py-1 px-2'>Tesla</li>
                                            <li className='py-1 px-2'>Toyota</li>
                                            <li className='py-1 px-2'>Triumph</li>
                                            <li className='py-1 px-2'>TVR</li>
                                            <li className='py-1 px-2'>Vauxhall</li>
                                            <li className='py-1 px-2'>Volkswagen</li>
                                            <li className='py-1 px-2'>Volvo</li>
                                            <li className='py-1 px-2'>Westfield</li>
                                            <li className='py-1 px-2'>Wolseley</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='selectvehicle2' style={{display: 'none'}}>
                        <Col md={12}>
                            <div className='card h-100'>
                                <div className='card-body'>
                                    <Row>
                                        <Col md={12}>
                                            <h5 className='text-center'>Find the <b>right parts</b> from the <b>best brands</b> for <b>your car</b>.</h5>
                                            <hr />
                                        </Col>

                                        <Col md={2} className='p-0'>
                                            <div className='option_div'>
                                                <div className='list_div'>Select Make</div>
                                                <ul className='list-unstyled selectoption_height mb-0'>
                                                    <li className='py-1 px-2'>Audi</li>
                                                    <li className='py-1 px-2'>BMW</li>
                                                    <li className='py-1 px-2'>Ford</li>
                                                    <li className='py-1 px-2'>Holden</li>
                                                    <li className='py-1 px-2'>Mazda</li>
                                                    <li className='py-1 px-2'>Mercedes-Benz</li>
                                                    <li className='py-1 px-2'>Nissan</li>
                                                    <li className='py-1 px-2'>Subaru</li>
                                                    <li className='py-1 px-2'>Toyota</li>
                                                    <li className='py-1 px-2'>Volkswagen</li>
                                                    <li className='py-1 px-2'>ABARTH</li>
                                                    <li className='py-1 px-2'>AC</li>
                                                    <li className='py-1 px-2'>Alfa Romeo</li>
                                                    <li className='py-1 px-2'>ALPINA</li>
                                                    <li className='py-1 px-2'>ALVIS</li>
                                                    <li className='py-1 px-2'>AMC</li>
                                                    <li className='py-1 px-2'>Armstrong Siddeley</li>
                                                    <li className='py-1 px-2'>Asia Motors</li>
                                                    <li className='py-1 px-2'>Aston Martin</li>
                                                    <li className='py-1 px-2'>Audi</li>
                                                    <li className='py-1 px-2'>Austin</li>
                                                    <li className='py-1 px-2'>Austin-Healey</li>
                                                    <li className='py-1 px-2'>Bedford</li>
                                                    <li className='py-1 px-2'>Bentley</li>
                                                    <li className='py-1 px-2'>BMC</li>
                                                    <li className='py-1 px-2'>BMW</li>
                                                    <li className='py-1 px-2'>Bugatti</li>
                                                    <li className='py-1 px-2'>Buick</li>
                                                    <li className='py-1 px-2'>Cadillac</li>
                                                    <li className='py-1 px-2'>Carbodies</li>
                                                    <li className='py-1 px-2'>Caterham</li>
                                                    <li className='py-1 px-2'>Chery</li>
                                                    <li className='py-1 px-2'>Chevrolet</li>
                                                    <li className='py-1 px-2'>Chrysler</li>
                                                    <li className='py-1 px-2'>Citroen</li>
                                                    <li className='py-1 px-2'>Daewoo</li>
                                                    <li className='py-1 px-2'>Daihatsu</li>
                                                    <li className='py-1 px-2'>Daimler</li>
                                                    <li className='py-1 px-2'>De Tomaso</li>
                                                    <li className='py-1 px-2'>DMC</li>
                                                    <li className='py-1 px-2'>Dodge</li>
                                                    <li className='py-1 px-2'>Eunos</li>
                                                    <li className='py-1 px-2'>Ferrari</li>
                                                    <li className='py-1 px-2'>Fiat</li>
                                                    <li className='py-1 px-2'>Ford</li>
                                                    <li className='py-1 px-2'>Foton</li>
                                                    <li className='py-1 px-2'>FPV</li>
                                                    <li className='py-1 px-2'>Geely</li>
                                                    <li className='py-1 px-2'>Ginetta</li>
                                                    <li className='py-1 px-2'>GMC</li>
                                                    <li className='py-1 px-2'>Great Wall</li>
                                                    <li className='py-1 px-2'>Haval</li>
                                                    <li className='py-1 px-2'>Hillman</li>
                                                    <li className='py-1 px-2'>Holden</li>
                                                    <li className='py-1 px-2'>Honda</li>
                                                    <li className='py-1 px-2'>HSV</li>
                                                    <li className='py-1 px-2'>Humber</li>
                                                    <li className='py-1 px-2'>Hummer</li>
                                                    <li className='py-1 px-2'>Hyundai</li>
                                                    <li className='py-1 px-2'>Infiniti</li>
                                                    <li className='py-1 px-2'>International</li>
                                                    <li className='py-1 px-2'>Isuzu</li>
                                                    <li className='py-1 px-2'>Iveco</li>
                                                    <li className='py-1 px-2'>Jaguar</li>
                                                    <li className='py-1 px-2'>Jeep</li>
                                                    <li className='py-1 px-2'>Jensen</li>
                                                    <li className='py-1 px-2'>JMC</li>
                                                    <li className='py-1 px-2'>Kia</li>
                                                    <li className='py-1 px-2'>Lada</li>
                                                    <li className='py-1 px-2'>Lamborghini</li>
                                                    <li className='py-1 px-2'>Lancia</li>
                                                    <li className='py-1 px-2'>Land Rover</li>
                                                    <li className='py-1 px-2'>LDV</li>
                                                    <li className='py-1 px-2'>Lexus</li>
                                                    <li className='py-1 px-2'>Leyland</li>
                                                    <li className='py-1 px-2'>Lincoln</li>
                                                    <li className='py-1 px-2'>Lotus</li>
                                                    <li className='py-1 px-2'>Lti</li>
                                                    <li className='py-1 px-2'>Mahindra</li>
                                                    <li className='py-1 px-2'>Maserati</li>
                                                    <li className='py-1 px-2'>Maybach</li>
                                                    <li className='py-1 px-2'>Mazda</li>
                                                    <li className='py-1 px-2'>Mazdaspeed</li>
                                                    <li className='py-1 px-2'>Mclaren</li>
                                                    <li className='py-1 px-2'>Mercedes-Benz</li>
                                                    <li className='py-1 px-2'>Mercury</li>
                                                    <li className='py-1 px-2'>MG</li>
                                                    <li className='py-1 px-2'>Mini</li>
                                                    <li className='py-1 px-2'>Mitsubishi</li>
                                                    <li className='py-1 px-2'>Morgan</li>
                                                    <li className='py-1 px-2'>Morris</li>
                                                    <li className='py-1 px-2'>Nissan</li>
                                                    <li className='py-1 px-2'>Noble</li>
                                                    <li className='py-1 px-2'>NSU</li>
                                                    <li className='py-1 px-2'>Opel</li>
                                                    <li className='py-1 px-2'>Peugeot</li>
                                                    <li className='py-1 px-2'>Plymouth</li>
                                                    <li className='py-1 px-2'>Pontiac</li>
                                                    <li className='py-1 px-2'>Porsche</li>
                                                    <li className='py-1 px-2'>Proton</li>
                                                    <li className='py-1 px-2'>RAM</li>
                                                    <li className='py-1 px-2'>Reliant</li>
                                                    <li className='py-1 px-2'>Renault</li>
                                                    <li className='py-1 px-2'>Riley</li>
                                                    <li className='py-1 px-2'>Rolls-Royce</li>
                                                    <li className='py-1 px-2'>Rover</li>
                                                    <li className='py-1 px-2'>Saab</li>
                                                    <li className='py-1 px-2'>Seat</li>
                                                    <li className='py-1 px-2'>Singer</li>
                                                    <li className='py-1 px-2'>Skoda</li>
                                                    <li className='py-1 px-2'>Smart</li>
                                                    <li className='py-1 px-2'>Ssangyong</li>
                                                    <li className='py-1 px-2'>Subaru</li>
                                                    <li className='py-1 px-2'>Sunbeam</li>
                                                    <li className='py-1 px-2'>Suzuki</li>
                                                    <li className='py-1 px-2'>TATA</li>
                                                    <li className='py-1 px-2'>Tesla</li>
                                                    <li className='py-1 px-2'>Toyota</li>
                                                    <li className='py-1 px-2'>Triumph</li>
                                                    <li className='py-1 px-2'>TVR</li>
                                                    <li className='py-1 px-2'>Vauxhall</li>
                                                    <li className='py-1 px-2'>Volkswagen</li>
                                                    <li className='py-1 px-2'>Volvo</li>
                                                    <li className='py-1 px-2'>Westfield</li>
                                                    <li className='py-1 px-2'>Wolseley</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={2} className='p-0'>
                                            <div className='option_div'>
                                                <div className='list_div'>Select Model</div>
                                                <ul className='list-unstyled selectoption_height mb-0'>
                                                    <li className='py-1 px-2'>75</li>
                                                    <li className='py-1 px-2'>80</li>
                                                    <li className='py-1 px-2'>90</li>
                                                    <li className='py-1 px-2'>100</li>
                                                    <li className='py-1 px-2'>200</li>
                                                    <li className='py-1 px-2'>A1</li>
                                                    <li className='py-1 px-2'>A3</li>
                                                    <li className='py-1 px-2'>A4</li>
                                                    <li className='py-1 px-2'>A4 Allroad</li>
                                                    <li className='py-1 px-2'>A5</li>
                                                    <li className='py-1 px-2'>A6</li>
                                                    <li className='py-1 px-2'>A6 Allroad</li>
                                                    <li className='py-1 px-2'>A7</li>
                                                    <li className='py-1 px-2'>A8</li>
                                                    <li className='py-1 px-2'>Allroad</li>
                                                    <li className='py-1 px-2'>Cabriolet</li>
                                                    <li className='py-1 px-2'>E-Tron</li>
                                                    <li className='py-1 px-2'>Fox</li>
                                                    <li className='py-1 px-2'>Q2</li>
                                                    <li className='py-1 px-2'>Q3</li>
                                                    <li className='py-1 px-2'>Q5</li>
                                                    <li className='py-1 px-2'>Q7</li>
                                                    <li className='py-1 px-2'>Q8</li>
                                                    <li className='py-1 px-2'>R8</li>
                                                    <li className='py-1 px-2'>RS Q3</li>
                                                    <li className='py-1 px-2'>RS3</li>
                                                    <li className='py-1 px-2'>RS4</li>
                                                    <li className='py-1 px-2'>RS5</li>
                                                    <li className='py-1 px-2'>RS6</li>
                                                    <li className='py-1 px-2'>RS7</li>
                                                    <li className='py-1 px-2'>S1</li>
                                                    <li className='py-1 px-2'>S2</li>
                                                    <li className='py-1 px-2'>S3</li>
                                                    <li className='py-1 px-2'>S4</li>
                                                    <li className='py-1 px-2'>S5</li>
                                                    <li className='py-1 px-2'>S6</li>
                                                    <li className='py-1 px-2'>S7</li>
                                                    <li className='py-1 px-2'>S8</li>
                                                    <li className='py-1 px-2'>SQ5</li>
                                                    <li className='py-1 px-2'>SQ7</li>
                                                    <li className='py-1 px-2'>Super 90</li>
                                                    <li className='py-1 px-2'>TT</li>
                                                    <li className='py-1 px-2'>TT RS</li>
                                                    <li className='py-1 px-2'>TTS</li>
                                                    <li className='py-1 px-2'>V8</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={2} className='p-0'>
                                            <div className='option_div'>
                                                <div className='list_div'>Select Year</div>
                                                <ul className='list-unstyled selectoption_height mb-0'>
                                                    <li className='py-1 px-2'>2021</li>
                                                    <li className='py-1 px-2'>2020</li>
                                                    <li className='py-1 px-2'>2019</li>
                                                    <li className='py-1 px-2'>2018</li>
                                                    <li className='py-1 px-2'>2017</li>
                                                    <li className='py-1 px-2'>2016</li>
                                                    <li className='py-1 px-2'>2015</li>
                                                    <li className='py-1 px-2'>2014</li>
                                                    <li className='py-1 px-2'>2013</li>
                                                    <li className='py-1 px-2'>2012</li>
                                                    <li className='py-1 px-2'>2011</li>
                                                    <li className='py-1 px-2'>2010</li>
                                                    <li className='py-1 px-2'>2009</li>
                                                    <li className='py-1 px-2'>2008</li>
                                                    <li className='py-1 px-2'>2007</li>
                                                    <li className='py-1 px-2'>2006</li>
                                                    <li className='py-1 px-2'>2005</li>
                                                    <li className='py-1 px-2'>2004</li>
                                                    <li className='py-1 px-2'>2003</li>
                                                    <li className='py-1 px-2'>2002</li>
                                                    <li className='py-1 px-2'>2001</li>
                                                    <li className='py-1 px-2'>2000</li>
                                                    <li className='py-1 px-2'>1999</li>
                                                    <li className='py-1 px-2'>1998</li>
                                                    <li className='py-1 px-2'>1997</li>
                                                    <li className='py-1 px-2'>1996</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={2} className='p-0'>
                                            <div className='option_div'>
                                                <div className='list_div'>Select Series</div>
                                                <ul className='list-unstyled selectoption_height mb-0'>
                                                    <li className='py-1 px-2'>1.0 30 TFSI (8VF,8VA) 85 kW</li>
                                                    <li className='py-1 px-2'>1.0 TFSI (8VA) 85kw</li>
                                                    <li className='py-1 px-2'>1.2 TFSI (8V1) 77kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8V1) 103kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8V1) 110kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8V1) 90kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8V1) 92kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8V7) 103kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8VA) 103kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8VA) 110kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8VA) 90kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8VA) 92kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8VS) 103kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI (8VS) 110kw</li>
                                                    <li className='py-1 px-2'>1.4 TFSI e-tron (8VA) 110kw</li>
                                                    <li className='py-1 px-2'>1.4 TSI (8V7) 110kw</li>
                                                    <li className='py-1 px-2'>1.6 TDI (8V1) 81kw</li>
                                                    <li className='py-1 px-2'>1.6 TDI (8VA) 77kw</li>
                                                    <li className='py-1 px-2'>1.6 TDI (8VA) 81kw</li>
                                                    <li className='py-1 px-2'>1.6 TDI (8VA) 85kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI (8V1) 132kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI (8V7) 132kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI (8VA) 132kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI (8VS) 125kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI (8VS) 132kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI Quattro (8V1) 132kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI Quattro (8V7) 132kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI quattro (8VA) 132kw</li>
                                                    <li className='py-1 px-2'>1.8 TFSI Quattro (8VS) 132kw</li>
                                                    <li className='py-1 px-2'>2.0 40 TFSI (8VE,8V7) 140 kW</li>
                                                    <li className='py-1 px-2'>2.0 TDI (8V1) 110kw</li>
                                                    <li className='py-1 px-2'>2.0 TDI (8V7) 110kw</li>
                                                    <li className='py-1 px-2'>2.0 TDI (8VA) 110kw</li>
                                                    <li className='py-1 px-2'>2.0 TDI (8VS) 110kw</li>
                                                    <li className='py-1 px-2'>2.0 TFSI (8V1) 140kw</li>
                                                    <li className='py-1 px-2'>2.0 TFSI (8V7) 140kw</li>
                                                    <li className='py-1 px-2'>2.0 TFSI (8VA) 140kw</li>
                                                    <li className='py-1 px-2'>2.0 TFSI (8VS) 140kw</li>
                                                    <li className='py-1 px-2'>2.0 TFSI quattro (8V7) 140kw</li>
                                                    <li className='py-1 px-2'>2.0 TFSI quattro (8VA) 140kw</li>
                                                    <li className='py-1 px-2'>2.0 TFSI quattro (8VS) 140kw</li>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={2} className='p-0'>
                                            <div className='option_div'>
                                                <div className='list_div'>Select Body</div>
                                                <ul className='list-unstyled selectoption_height mb-0'>
                                                </ul>
                                            </div>
                                        </Col>
                                        <Col md={2} className='p-0'>
                                            <div className='option_div'>
                                                <div className='list_div'>Select Engine</div>
                                                <ul className='list-unstyled selectoption_height mb-0'>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='justify-content-md-center ClearVehicle'>
                        <Col md={6}>
                            <div className='card h-100'>
                                <div className='card-body'>
                                    <div className='pt-3 mb-3 card-title text-center'>
                                        <h5 className='text-muted'>Currently displaying parts for your</h5>
                                        <p className='text-muted'><FontAwesomeIcon icon={faCar} /> 1993 Audi, 80, 1.6 E (B4) 74kw</p>
                                        <Button variant='primary' size='md' className='btn-block' href='search'>Shop Parts</Button>
                                        <hr className='mt-3 mb-2' />
                                        <h6 className='text-muted text-center ClearVehicle' onClick={ClearVehicle}>Clear Vehicle</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* vehicle section End */}

            {/* Infomation Section Start */}
            <div className='infomation_section py-3'>
                <Container>
                    <Row>
                        {/* Infomation Section 01 */}
                        <Col xs={12} md={4}>
                            <div className='infomation_section_div text-center px-5'>
                                <a className='text_decor_no black_font' href='#0'>
                                    <FontAwesomeIcon icon={faTruck} className='fa-2x mb-1' />
                                    <p className='mb-0'>FREE shipping Australia wide on orders over $99.<sup>*</sup></p>
                                    <p className='extra_small mb-0'>*conditions apply</p>
                                </a>
                            </div>
                        </Col>
                        {/* Infomation Section 01 */}
                        <Col xs={12} md={4} className='no_mobile'>
                            <div className='infomation_section_div text-center px-5'>
                                <a className='text_decor_no black_font' href='#0'>
                                    <FontAwesomeIcon icon={faCogs} className='fa-2x mb-1' />
                                    <p className='mb-0'>Fitment Guarantee</p>
                                </a>
                            </div>
                        </Col>
                        {/* Infomation Section 01 */}
                        <Col xs={12} md={4} className='no_mobile'>
                            <div className='infomation_section_div text-center px-5'>
                                <span className='finance_option_span'><a href='#0' className='finance_option_a text_decor_no black_font'><img src={ZipPay} className='finance_option_img_zip img-fluid' alt='ZipPay' /></a> <a href='#0' className='finance_option_a text_decor_no black_font'><img src={Afterpay} className='finance_option_img_afterpay img-fluid' alt='Afterpay' /></a></span>
                                <p className='mb-0'>Finance Available</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Infomation Section End */}

            {/* Popular Part section Start */}
            <div className='popular_part_section bg-light py-4'>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 className='title_h3'>Popular Parts</h3>
                        </Col>

                        {/* Popular Parts */}
                        {PopularParts.map(PopularParts => (
                            <Col xs={6} md={3}>
                                <a className='text_decor_no' href={PopularParts.link}>
                                    <div className='popular_part_div text-center p-4 mt-2'>
                                        <img src={PopularParts.image} className='img-fluid popular_part_img' alt={PopularParts.title} />
                                        <p className='popular_part_title big fw-bold black_font'>{PopularParts.title}</p>
                                    </div>
                                </a>
                            </Col>
                        ))}

                        {/* Popular Parts Buttons */}
                        <Col xs={12} md={12}>
                            <p className='text-center mt-4'>
                                <a className='u-url btn btn-primary' href='#0'><span className='p-name'>Shop All Parts</span></a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Popular Part section End */}

            {/* Offer section Start */}
            <div className='offer_section py-4'>
                <Container>
                    <Row>
                        {/* Offers */}
                        {Offer.map(Offer => (
                            <Col xs={12} md={6} className='mb-4' >
                                <a className='text_decor_no offer_hover' href={Offer.link}>
                                    <div className='bg-white card offer_card'>
                                        <div className='offer_div'>
                                            <img src={Offer.image} className='img-fluid offer_img' alt={Offer.subtitle} />
                                            <div className='offer_info card-body'>
                                                <Row>
                                                    <Col sm={12} md={7} lg={8} xl={9}>
                                                        <h6 className='mb-1'>{Offer.title}</h6>
                                                        <p className='mb-2 text-muted'>{Offer.subtitle}</p>
                                                    </Col>
                                                    <Col sm={12} md={5} lg={4} xl={3}>
                                                        <span className='btn btn-outline-secondary btn-sm btn-block'>More details</span>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >
            {/* Offer section End */}

            {/* Shopping section Start */}
            <div className='shopping_cat_section bg-light py-4'>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 className='title_h3'>What are you shopping for?</h3>
                        </Col>

                        {/* Product Cat */}
                        {ProductCat.map(ProductCat => (
                            <Col xs={6} md={3}>
                                <a className='text_decor_no' href={ProductCat.link}>
                                    <div className='shopping_cat_div text-center py-4 px-2 mt-2'>
                                        <img src={ProductCat.image} className='img-fluid shopping_cat_img' alt={ProductCat.title} />
                                        <p className='shopping_cat_title big fw-bold black_font mt-3'>{ProductCat.title}</p>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {/* Shopping section End */}

            {/* Subscribe section Start */}
            <div className='subscribe_section bg-light py-5' style={{ backgroundImage: 'url(' + newsletter + ')', }}>
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='card h-100 bg-dark'>
                                <div className='card-body'>
                                    <div className='pt-4 mb-3 card-title text-center white_font'>
                                        <FontAwesomeIcon icon={faEnvelopeOpen} className='fa-2x mb-2 fa-inverse' />
                                        <h6 >Subscribe and get $10 off your next order</h6>
                                    </div>
                                    <Form>
                                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                                            <Form.Control type='email' placeholder='Your email' />
                                        </Form.Group>
                                        <Button className='btn-block' variant='primary' type='submit'>
                                            Subscribe
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <a href='#0' className='subscribe_a'>
                                <img src={zip_banner} className='img-fluid zip_image' alt='zip_banner' />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Subscribe section End */}

            {/* Popular Brands section Start */}
            <div className='popular_brands_section py-4'>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 className='title_h3'>Popular Brands</h3>
                        </Col>

                        {/* Product Cat */}
                        {PopularBrands.map(PopularBrands => (
                            <Col xs={6} md={2}>
                                <a className='text_decor_no' href={PopularBrands.link}>
                                    <div className='popular_brands_div text-center p-4 mt-2'>
                                        <img src={PopularBrands.image} className='img-fluid popular_brands_img' alt={PopularBrands.title} />
                                    </div>
                                </a>
                            </Col>
                        ))}

                        {/* Popular Brands Buttons */}
                        <Col xs={12} md={12}>
                            <p className='text-center mt-4'>
                                <a className='u-url btn btn-primary' href='#0'><span className='p-name'>Shop All Brands</span></a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Popular Brands section End */}

            {/* Join Now section Start */}
            <div className='joinnow_section bg-light py-5' style={{ backgroundImage: 'url(' + community + ')', }}>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1 className='text-center fw-bolder pt-3 pb-5 fontsize4rem white_font'>Love Your Car?</h1>
                            <h3 className='text-center pt-4 white_font'>Park your car in your garage <b>now</b> for exclusive benefits.</h3>
                            <center className='pt-3'>
                                <div className='d-inline-block'>
                                    <a href='#0' className='btn btn-primary btn-lg mx-3'>Join</a>
                                    <a href='#0' className='btn btn-light btn-lg mx-3'>Learn More</a>
                                </div>
                            </center>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Join Now section End */}

            <Footer />

        </div >
    )
}
export default Home;