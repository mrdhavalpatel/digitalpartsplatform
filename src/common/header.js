import React, { useState } from 'react';

/* bootstrap */
import { Container, Row, Col, Button, Modal, Tab, Nav, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faUser, faUserPlus, faCar, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import $ from 'jquery';

/* images */
import logo from '../assets/image/Logo.png';


function Header() {

    const [MenuShow, setMenuShow] = useState(false);
    const [CarShow, setCarShow] = useState(false);
    const [SelectVehicleShow, setSelectVehicleShow] = useState(false);

    const vehicleselectmake = () => {
        $('.vehicleselectmake').on('click', function (e) {
            $('.vehicleselectmakeoption').toggle();
            e.stopPropagation();
        });
    }

    const vehicleselectmodel = () => {
        $('.vehicleselectmodel').on('click', function (e) {
            $('.vehicleselectmodeloption').toggle();
            e.stopPropagation();
        });
    }

    const vehicleselectyear = () => {
        $('.vehicleselectyear').on('click', function (e) {
            $('.vehicleselectyearoption').toggle();
            e.stopPropagation();
        });
    }

    const vehicleselectseries = () => {
        $('.vehicleselectseries').on('click', function (e) {
            $('.vehicleselectseriesoption').toggle();
            e.stopPropagation();
        });
    }

    return (
        <div>
            <header>
                <nav className='navbar default navbar-expand -sm fixed-tops navbar-light py-0'>
                    <Container fluid className='flex-wrap'>
                        <div className='pt-2 pb-2 header-align-center-class'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='menu-outer'>
                                    <Button size='sm' variant='dark' className='menu_btn' onClick={() => setMenuShow(true)}><FontAwesomeIcon icon={faBars} /><span> Menu</span></Button>
                                </div>
                                <div className='mx-auto mx-sm-0 px-2 logo-outer'>
                                    <a href='/'><img src={logo} alt='Digital Parts Platform' /></a>
                                </div>
                                <div className='ml-sm-auto pos-relative mr-auto my-2 my-lg-0 search-outer'>
                                    <input type='text' className='search_text form-control' placeholder='Search (sku, part, part number, vehicle, etc.)' />
                                </div>
                                <div className=' ml-lg-1 mr-lg-3 account-outer px-2'>
                                    <ul className='list-unstyled mb-0'>
                                        <li className='d-sm-inline-block small text-muted ms-3'><a href='#0'><FontAwesomeIcon icon={faUser} /> Log in</a></li>
                                        <li className='d-sm-inline-block small text-muted ms-3'><a href='#0'><FontAwesomeIcon icon={faUserPlus} /> Create Account</a></li>
                                        <li className='d-sm-inline-block small ms-3'><a href='#0' onClick={() => setCarShow(true)}><FontAwesomeIcon icon={faCar} /> My Garage: Add Vehicle</a></li>
                                    </ul>
                                </div>
                                <div className='ml-0 cart-outer  px-2'>
                                    <Button size='sm' variant='success' className='menu_btn'><FontAwesomeIcon icon={faShoppingCart} /><span> Cart</span></Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </nav>
            </header>
            <Modal size='md' show={MenuShow} onHide={() => setMenuShow(false)} className='menu_modal'>
                <Modal.Header closeButton>
                    <Modal.Title>More about Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className='list-unstyled'>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Accessories' href='#0'><span>Accessories<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Bodywork &amp; Exterior' href='#0'><span>Bodywork &amp; Exterior<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Brakes' href='#0'><span>Brakes<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Car Care' href='#0'><span>Car Care<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Electrical' href='#0'><span>Electrical<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Engine Oils &amp; Lubricants' href='#0'><span>Engine Oils &amp; Lubricants<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Engine, Cooling &amp; Drivetrain' href='#0'><span>Engine, Cooling &amp; Drivetrain<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Filters' href='#0'><span>Filters<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                        <li className='p-3'>
                            <a className='font-size-1000 font-weight-bold ' title='Steering &amp; Suspension' href='#0'><span>Steering &amp; Suspension<FontAwesomeIcon icon={faAngleDown} /></span></a>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
            <Modal size='md' show={CarShow} onHide={() => setCarShow(false)} className='menu_modal'>
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faCar} /> My Garage</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='pt-2 ps-3 pe-3'>Add your vehicle details to create a personalised garage on Sparesbox. We use it to refine parts and accessories for you.</p>
                    <div className='ps-3 pe-3 pb-3'><Button variant='primary' size='md' className='btn-block' onClick={() => setSelectVehicleShow(true)}>Select Vehicle</Button></div>
                    <p className='ps-3 pe-3 big fw-bold'>Saved Vehicles</p>
                    <p className='ps-3 pe-3'>Register for a Sparesbox account now to personalise and save your vehicles to your garage.</p>
                    <div className='ps-3 pe-3 pb-3'><Button variant='outline-primary' size='md' className='btn-block'>Register</Button></div>
                    <div className='ps-3 pe-3 pb-3'><Button variant='primary' size='md' className='btn-block'>Continue Shopping</Button></div>
                </Modal.Body>
            </Modal>
            <Modal size='md' show={SelectVehicleShow} onHide={() => setSelectVehicleShow(false)} className='menu_modal vehicleselectmodal'>
                <Modal.Header closeButton>
                    <Modal.Title>New Vehicle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className='list-unstyled vehicleul'>
                        <li>
                            <a className='font-size-1000 font-weight-bold big p-3 vehicleselectmake' onClick={vehicleselectmake} href='#0'><span>Select Make<FontAwesomeIcon icon={faAngleDown} /></span></a>
                            <ul className='list-unstyled vehicleselectoption vehicleselectmakeoption' style={{ display: 'none' }}>
                                <li className='py-2 px-4'>Audi</li>
                                <li className='py-2 px-4'>BMW</li>
                                <li className='py-2 px-4'>Ford</li>
                                <li className='py-2 px-4'>Holden</li>
                                <li className='py-2 px-4'>Mazda</li>
                                <li className='py-2 px-4'>Mercedes-Benz</li>
                                <li className='py-2 px-4'>Nissan</li>
                                <li className='py-2 px-4'>Subaru</li>
                                <li className='py-2 px-4'>Toyota</li>
                                <li className='py-2 px-4'>Volkswagen</li>
                                <li className='py-2 px-4'>ABARTH</li>
                                <li className='py-2 px-4'>AC</li>
                                <li className='py-2 px-4'>Alfa Romeo</li>
                                <li className='py-2 px-4'>ALPINA</li>
                                <li className='py-2 px-4'>ALVIS</li>
                                <li className='py-2 px-4'>AMC</li>
                                <li className='py-2 px-4'>Armstrong Siddeley</li>
                                <li className='py-2 px-4'>Asia Motors</li>
                                <li className='py-2 px-4'>Aston Martin</li>
                                <li className='py-2 px-4'>Audi</li>
                                <li className='py-2 px-4'>Austin</li>
                                <li className='py-2 px-4'>Austin-Healey</li>
                                <li className='py-2 px-4'>Bedford</li>
                                <li className='py-2 px-4'>Bentley</li>
                                <li className='py-2 px-4'>BMC</li>
                                <li className='py-2 px-4'>BMW</li>
                                <li className='py-2 px-4'>Bugatti</li>
                                <li className='py-2 px-4'>Buick</li>
                                <li className='py-2 px-4'>Cadillac</li>
                                <li className='py-2 px-4'>Carbodies</li>
                                <li className='py-2 px-4'>Caterham</li>
                                <li className='py-2 px-4'>Chery</li>
                                <li className='py-2 px-4'>Chevrolet</li>
                                <li className='py-2 px-4'>Chrysler</li>
                                <li className='py-2 px-4'>Citroen</li>
                                <li className='py-2 px-4'>Daewoo</li>
                                <li className='py-2 px-4'>Daihatsu</li>
                                <li className='py-2 px-4'>Daimler</li>
                                <li className='py-2 px-4'>De Tomaso</li>
                                <li className='py-2 px-4'>DMC</li>
                                <li className='py-2 px-4'>Dodge</li>
                                <li className='py-2 px-4'>Eunos</li>
                                <li className='py-2 px-4'>Ferrari</li>
                                <li className='py-2 px-4'>Fiat</li>
                                <li className='py-2 px-4'>Ford</li>
                                <li className='py-2 px-4'>Foton</li>
                                <li className='py-2 px-4'>FPV</li>
                                <li className='py-2 px-4'>Geely</li>
                                <li className='py-2 px-4'>Ginetta</li>
                                <li className='py-2 px-4'>GMC</li>
                                <li className='py-2 px-4'>Great Wall</li>
                                <li className='py-2 px-4'>Haval</li>
                                <li className='py-2 px-4'>Hillman</li>
                                <li className='py-2 px-4'>Holden</li>
                                <li className='py-2 px-4'>Honda</li>
                                <li className='py-2 px-4'>HSV</li>
                                <li className='py-2 px-4'>Humber</li>
                                <li className='py-2 px-4'>Hummer</li>
                                <li className='py-2 px-4'>Hyundai</li>
                                <li className='py-2 px-4'>Infiniti</li>
                                <li className='py-2 px-4'>International</li>
                                <li className='py-2 px-4'>Isuzu</li>
                                <li className='py-2 px-4'>Iveco</li>
                                <li className='py-2 px-4'>Jaguar</li>
                                <li className='py-2 px-4'>Jeep</li>
                                <li className='py-2 px-4'>Jensen</li>
                                <li className='py-2 px-4'>JMC</li>
                                <li className='py-2 px-4'>Kia</li>
                                <li className='py-2 px-4'>Lada</li>
                                <li className='py-2 px-4'>Lamborghini</li>
                                <li className='py-2 px-4'>Lancia</li>
                                <li className='py-2 px-4'>Land Rover</li>
                                <li className='py-2 px-4'>LDV</li>
                                <li className='py-2 px-4'>Lexus</li>
                                <li className='py-2 px-4'>Leyland</li>
                                <li className='py-2 px-4'>Lincoln</li>
                                <li className='py-2 px-4'>Lotus</li>
                                <li className='py-2 px-4'>Lti</li>
                                <li className='py-2 px-4'>Mahindra</li>
                                <li className='py-2 px-4'>Maserati</li>
                                <li className='py-2 px-4'>Maybach</li>
                                <li className='py-2 px-4'>Mazda</li>
                                <li className='py-2 px-4'>Mazdaspeed</li>
                                <li className='py-2 px-4'>Mclaren</li>
                                <li className='py-2 px-4'>Mercedes-Benz</li>
                                <li className='py-2 px-4'>Mercury</li>
                                <li className='py-2 px-4'>MG</li>
                                <li className='py-2 px-4'>Mini</li>
                                <li className='py-2 px-4'>Mitsubishi</li>
                                <li className='py-2 px-4'>Morgan</li>
                                <li className='py-2 px-4'>Morris</li>
                                <li className='py-2 px-4'>Nissan</li>
                                <li className='py-2 px-4'>Noble</li>
                                <li className='py-2 px-4'>NSU</li>
                                <li className='py-2 px-4'>Opel</li>
                                <li className='py-2 px-4'>Peugeot</li>
                                <li className='py-2 px-4'>Plymouth</li>
                                <li className='py-2 px-4'>Pontiac</li>
                                <li className='py-2 px-4'>Porsche</li>
                                <li className='py-2 px-4'>Proton</li>
                                <li className='py-2 px-4'>RAM</li>
                                <li className='py-2 px-4'>Reliant</li>
                                <li className='py-2 px-4'>Renault</li>
                                <li className='py-2 px-4'>Riley</li>
                                <li className='py-2 px-4'>Rolls-Royce</li>
                                <li className='py-2 px-4'>Rover</li>
                                <li className='py-2 px-4'>Saab</li>
                                <li className='py-2 px-4'>Seat</li>
                                <li className='py-2 px-4'>Singer</li>
                                <li className='py-2 px-4'>Skoda</li>
                                <li className='py-2 px-4'>Smart</li>
                                <li className='py-2 px-4'>Ssangyong</li>
                                <li className='py-2 px-4'>Subaru</li>
                                <li className='py-2 px-4'>Sunbeam</li>
                                <li className='py-2 px-4'>Suzuki</li>
                                <li className='py-2 px-4'>TATA</li>
                                <li className='py-2 px-4'>Tesla</li>
                                <li className='py-2 px-4'>Toyota</li>
                                <li className='py-2 px-4'>Triumph</li>
                                <li className='py-2 px-4'>TVR</li>
                                <li className='py-2 px-4'>Vauxhall</li>
                                <li className='py-2 px-4'>Volkswagen</li>
                                <li className='py-2 px-4'>Volvo</li>
                                <li className='py-2 px-4'>Westfield</li>
                                <li className='py-2 px-4'>Wolseley</li>
                            </ul>
                        </li>
                        <li>
                            <a className='font-size-1000 font-weight-bold big p-3 vehicleselectmodel' onClick={vehicleselectmodel} href='#0'><span>Select Model<FontAwesomeIcon icon={faAngleDown} /></span></a>
                            <ul className='list-unstyled vehicleselectoption vehicleselectmodeloption' style={{ display: 'none' }}>
                                <li className='py-2 px-4'>75</li>
                                <li className='py-2 px-4'>80</li>
                                <li className='py-2 px-4'>90</li>
                                <li className='py-2 px-4'>100</li>
                                <li className='py-2 px-4'>200</li>
                                <li className='py-2 px-4'>A1</li>
                                <li className='py-2 px-4'>A3</li>
                                <li className='py-2 px-4'>A4</li>
                                <li className='py-2 px-4'>A4 Allroad</li>
                                <li className='py-2 px-4'>A5</li>
                                <li className='py-2 px-4'>A6</li>
                                <li className='py-2 px-4'>A6 Allroad</li>
                                <li className='py-2 px-4'>A7</li>
                                <li className='py-2 px-4'>A8</li>
                                <li className='py-2 px-4'>Allroad</li>
                                <li className='py-2 px-4'>Cabriolet</li>
                                <li className='py-2 px-4'>E-Tron</li>
                                <li className='py-2 px-4'>Fox</li>
                                <li className='py-2 px-4'>Q2</li>
                                <li className='py-2 px-4'>Q3</li>
                                <li className='py-2 px-4'>Q5</li>
                                <li className='py-2 px-4'>Q7</li>
                                <li className='py-2 px-4'>Q8</li>
                                <li className='py-2 px-4'>R8</li>
                                <li className='py-2 px-4'>RS Q3</li>
                                <li className='py-2 px-4'>RS3</li>
                                <li className='py-2 px-4'>RS4</li>
                                <li className='py-2 px-4'>RS5</li>
                                <li className='py-2 px-4'>RS6</li>
                                <li className='py-2 px-4'>RS7</li>
                                <li className='py-2 px-4'>S1</li>
                                <li className='py-2 px-4'>S2</li>
                                <li className='py-2 px-4'>S3</li>
                                <li className='py-2 px-4'>S4</li>
                                <li className='py-2 px-4'>S5</li>
                                <li className='py-2 px-4'>S6</li>
                                <li className='py-2 px-4'>S7</li>
                                <li className='py-2 px-4'>S8</li>
                                <li className='py-2 px-4'>SQ5</li>
                                <li className='py-2 px-4'>SQ7</li>
                                <li className='py-2 px-4'>Super 90</li>
                                <li className='py-2 px-4'>TT</li>
                                <li className='py-2 px-4'>TT RS</li>
                                <li className='py-2 px-4'>TTS</li>
                                <li className='py-2 px-4'>V8</li>
                            </ul>
                        </li>
                        <li>
                            <a className='font-size-1000 font-weight-bold big p-3 vehicleselectyear' onClick={vehicleselectyear} href='#0'><span>Select Year<FontAwesomeIcon icon={faAngleDown} /></span></a>
                            <ul className='list-unstyled vehicleselectoption vehicleselectyearoption' style={{ display: 'none' }}>
                                <li className='py-2 px-4'>2021</li>
                                <li className='py-2 px-4'>2020</li>
                                <li className='py-2 px-4'>2019</li>
                                <li className='py-2 px-4'>2018</li>
                                <li className='py-2 px-4'>2017</li>
                                <li className='py-2 px-4'>2016</li>
                                <li className='py-2 px-4'>2015</li>
                                <li className='py-2 px-4'>2014</li>
                                <li className='py-2 px-4'>2013</li>
                                <li className='py-2 px-4'>2012</li>
                                <li className='py-2 px-4'>2011</li>
                                <li className='py-2 px-4'>2010</li>
                                <li className='py-2 px-4'>2009</li>
                                <li className='py-2 px-4'>2008</li>
                                <li className='py-2 px-4'>2007</li>
                                <li className='py-2 px-4'>2006</li>
                                <li className='py-2 px-4'>2005</li>
                                <li className='py-2 px-4'>2004</li>
                                <li className='py-2 px-4'>2003</li>
                                <li className='py-2 px-4'>2002</li>
                                <li className='py-2 px-4'>2001</li>
                                <li className='py-2 px-4'>2000</li>
                                <li className='py-2 px-4'>1999</li>
                                <li className='py-2 px-4'>1998</li>
                                <li className='py-2 px-4'>1997</li>
                                <li className='py-2 px-4'>1996</li>
                            </ul>
                        </li>
                        <li>
                            <a className='font-size-1000 font-weight-bold big p-3 vehicleselectseries' onClick={vehicleselectseries} href='#0'><span>Select Series<FontAwesomeIcon icon={faAngleDown} /></span></a>
                            <ul className='list-unstyled vehicleselectoption vehicleselectseriesoption' style={{ display: 'none' }}>
                                <li className='py-2 px-4'>1.0 30 TFSI (8VF,8VA) 85 kW</li>
                                <li className='py-2 px-4'>1.0 TFSI (8VA) 85kw</li>
                                <li className='py-2 px-4'>1.2 TFSI (8V1) 77kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8V1) 103kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8V1) 110kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8V1) 90kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8V1) 92kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8V7) 103kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8VA) 103kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8VA) 110kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8VA) 90kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8VA) 92kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8VS) 103kw</li>
                                <li className='py-2 px-4'>1.4 TFSI (8VS) 110kw</li>
                                <li className='py-2 px-4'>1.4 TFSI e-tron (8VA) 110kw</li>
                                <li className='py-2 px-4'>1.4 TSI (8V7) 110kw</li>
                                <li className='py-2 px-4'>1.6 TDI (8V1) 81kw</li>
                                <li className='py-2 px-4'>1.6 TDI (8VA) 77kw</li>
                                <li className='py-2 px-4'>1.6 TDI (8VA) 81kw</li>
                                <li className='py-2 px-4'>1.6 TDI (8VA) 85kw</li>
                                <li className='py-2 px-4'>1.8 TFSI (8V1) 132kw</li>
                                <li className='py-2 px-4'>1.8 TFSI (8V7) 132kw</li>
                                <li className='py-2 px-4'>1.8 TFSI (8VA) 132kw</li>
                                <li className='py-2 px-4'>1.8 TFSI (8VS) 125kw</li>
                                <li className='py-2 px-4'>1.8 TFSI (8VS) 132kw</li>
                                <li className='py-2 px-4'>1.8 TFSI Quattro (8V1) 132kw</li>
                                <li className='py-2 px-4'>1.8 TFSI Quattro (8V7) 132kw</li>
                                <li className='py-2 px-4'>1.8 TFSI quattro (8VA) 132kw</li>
                                <li className='py-2 px-4'>1.8 TFSI Quattro (8VS) 132kw</li>
                                <li className='py-2 px-4'>2.0 40 TFSI (8VE,8V7) 140 kW</li>
                                <li className='py-2 px-4'>2.0 TDI (8V1) 110kw</li>
                                <li className='py-2 px-4'>2.0 TDI (8V7) 110kw</li>
                                <li className='py-2 px-4'>2.0 TDI (8VA) 110kw</li>
                                <li className='py-2 px-4'>2.0 TDI (8VS) 110kw</li>
                                <li className='py-2 px-4'>2.0 TFSI (8V1) 140kw</li>
                                <li className='py-2 px-4'>2.0 TFSI (8V7) 140kw</li>
                                <li className='py-2 px-4'>2.0 TFSI (8VA) 140kw</li>
                                <li className='py-2 px-4'>2.0 TFSI (8VS) 140kw</li>
                                <li className='py-2 px-4'>2.0 TFSI quattro (8V7) 140kw</li>
                                <li className='py-2 px-4'>2.0 TFSI quattro (8VA) 140kw</li>
                                <li className='py-2 px-4'>2.0 TFSI quattro (8VS) 140kw</li>
                            </ul>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
        </div >
    )
}
export default Header;