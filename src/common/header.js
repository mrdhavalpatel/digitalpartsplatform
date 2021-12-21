import React, { useState } from 'react';

/* bootstrap */
import { Container, Button, Modal, Dropdown } from 'react-bootstrap';
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
                    <ul className='list-unstyled navbar_ul'>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Accessories<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Action Cams</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Camping &amp; Outdoor Equipment</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Car Audio &amp; In-Car Tech</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Interior &amp; Car Accessories</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Motorsport &amp; Safety Equipment</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Recovery Gear &amp; Equipment</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Stickers &amp; Merchandise</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Towing &amp; Ute Accessories</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>UHF Radios &amp; Communication</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Bodywork &amp; Exterior<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Body Components</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Car &amp; Bike Covers</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Door Components</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Exterior Accessories</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Exterior Protection</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Paints &amp; Body Repair</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Roof Racks &amp; Roof Boxes</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Vehicle Lighting</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Wheels &amp; Tyres</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Windscreen Wipers &amp; Accessories</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Brakes<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Boosters</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Calipers & Parts</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Cylinders</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Drums</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Lines</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Pads</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Rotors</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Sensors & ABS Modules</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Sets and Kits</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Shoes</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Car Care<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Accessories</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Blowers & Dryers</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Bodywork/Exterior</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Car Care Kits</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Interior Cleaning</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Marine</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Polishing Machines & Equipment</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Pressure Washers & High Pressure Cleaners</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Electrical<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Batteries & Accessories</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Cables, Fuses & Relays</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Globes & Bulbs</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Horns</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Lighting</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Solar</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Voltage Conversion</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Engine Oils &amp; Lubricants<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Additives</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Brake Fluid</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Coolant</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Coolant</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Grease</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Motorcycle & Marine Oil</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Power Steering Fluid</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Transmission & Gear Oil</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Engine, Cooling & Drivetrain<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Auto Electrical</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Climate Control</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Cooling System</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Engine Components</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Engine Management</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Exhausts</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Forced Induction</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Fuel System</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Ignition System</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Oil System</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Transmission & Drivetrain</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Universal Fittings, Hoses & Accessories</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Filters<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Air Filters</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Cabin Filters</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Cold Air Intakes</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Diesel Particulate Filters</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Filter Service Kits</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Fuel Filters</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Motorcycle Filters</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Oil Filters</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Transmission Filters</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Steering &amp; Suspension<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Air Bag Suspension</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Alignment & Strut Bracing</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Anti-Roll/Sway Bars & Accessories</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Bushes & Mounts</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Coilover & Suspension Kits</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Power Steering</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Shock Absorbers & Springs</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Suspension Arms & Joints</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Tie Rod & Steering Rack Components</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Wheel Bearings & Hubs</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className='d-block w-100 text-left p-3 fw-bold'>
                                    <span>Tools<FontAwesomeIcon icon={faAngleDown} /></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Air Tools & Compressors</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Automotive & Specialty</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Bolts & Fasteners</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Diagnostic & Electrical Equipment</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Garage & Workshop Equipment</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Hand Tools</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Motorcycle Tools</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Power Tools</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Tool Kits & Storage</li></Dropdown.Item>
                                    <Dropdown.Item href="#0"><li className='p-3 ps-5'>Workshop Fluids, Sealants & Fluid Transfer</li></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
            <Modal size='md' show={CarShow} onHide={() => setCarShow(false)} className='menu_modal'>
                <Modal.Header closeButton>
                    <Modal.Title><FontAwesomeIcon icon={faCar} /> My Garage</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='pt-2 ps-3 pe-3'>Add your vehicle details to create a personalised garage on Digital Parts Platform. We use it to refine parts and accessories for you.</p>
                    <div className='ps-3 pe-3 pb-3'><Button variant='primary' size='md' className='btn-block' onClick={() => setSelectVehicleShow(true)}>Select Vehicle</Button></div>
                    <p className='ps-3 pe-3 big fw-bold'>Saved Vehicles</p>
                    <p className='ps-3 pe-3'>Register for a Digital Parts Platform account now to personalise and save your vehicles to your garage.</p>
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