import React, { useState } from 'react';

import Header from '../common/header';
import Footer from '../common/footer';

/* bootstrap */
import { Container, Row, Col, Button, Modal, Tab, Nav, Accordion, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faShoppingCart, faTags, faTruck, faCreditCard, faDollarSign, faCheck, faEnvelope, faPlus, faMinus, faCar, faExclamationTriangle, faExclamationCircle, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

/* css */
import '../assets/css/style.css';

import $ from 'jquery';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";


/* images */
import placeholder from '../assets/image/product/placeholder.png';
import ZipPay from '../assets/image/ZipPay.png';
import Afterpay from '../assets/image/Afterpay.png';
import zipheart from '../assets/image/zipheart.svg';
import zipcart from '../assets/image/zipcart.svg';
import ziplike from '../assets/image/ziplike.svg';

const Product = [
    {
        produtctid: 1,
        image: '',
        title: 'GFB Lightweight Pulley Kit fits Subaru WRX/STI MY08-14',
        link: '#0',
        partnumber: '2014',
        brand: 'GFB',
        brandimage: require('../assets/image/company/gfb.png').default,
        warranty: '12 Months Manufacturers Warranty',
        multipack: 'Singular',
        type: 'Struts - Tailgate',
        fittingposition: 'Rear Right Hand',
        colour: 'Black',
        price: '$407.95',
        saleprice: '',
        discount: '',
        compatible: '',
        afterpayfinancetext: '4 fortnightly payments of $101.99.',
        zipfinancetext: 'Up to 6 Months Interest Free.',
        enginecodes: '<ul><li>EJ20 (Turbo)</li><li>EJ25</li><li>EJ255</li><li>EJ257</li><li>EJ25DET</li></ul>',
        galleryimages: {
            image1: require('../assets/image/product/LightweightPulley.jpg').default,
            image2: require('../assets/image/product/LightweightPulley.jpg').default,
            image3: require('../assets/image/product/LightweightPulley.jpg').default,
            image4: require('../assets/image/product/LightweightPulley.jpg').default,
            image5: require('../assets/image/product/LightweightPulley.jpg').default,
            image6: require('../assets/image/product/LightweightPulley.jpg').default
        },
        description: '<ul><li>Lightweight pulley kit to suit 98-03 Subaru WRX, Sti &amp; Liberty B4</li><li>Includes 3 aircraft-grade aluminium performance pulleys and replacement engine belts</li><li>5kW peak power increase (173.7kW to 178.7kW)</li></ul>GFB lightweight Under-Drive Pulley Kits have been designed to improve acceleration by reducing the rotational mass on the crankshaft. Engineered using premium quality 6061 T6 Billet Aluminium on Precision CNC machines, GFB lightweight pulley kits typically save up to 2.5kg of weight over the factory pulleys. Testing revealed that the minimum improvements after replacing the factory pulleys with GFB lightweight UNder-Drive Pulleys were as follows:<br><br>- 3% faster (0.1 seconds) from 30-90 km/h<br>- 4% higher average G-Force (0.02g) from 30-90 km/h<br>- 7.2% higher G-Force (0.03g) at 40km/h (2800 RPM)<br>- 5kW peak power increase (173.7kW to 178.7kW)<br><br>Vehicle Applications:<br><br>SUBARU XT MY09-13 SH 126kw Petrol Engine AWD Closed Off-Road Vehicle 01/09-on<br>SUBARU XT MY09-13 SH 169kw Petrol Engine AWD Closed Off-Road Vehicle 06/08-on<br>SUBARU STi MY08-13 GE 169kw Petrol Engine AWD Hatchback 10/07-12/11<br>SUBARU STi MY08-13 GR 221kw Petrol Engine AWD Hatchback 08/07-12/11<br>SUBARU STi MY08-13 GRB 221kw Petrol Engine AWD Sedan 01/08-12/11<br>SUBARU STi MY08-13 GE 221kw Petrol Engine AWD Hatchback 01/08-12/11<br>SUBARU WRX MY08-14 GE 169kw Petrol Engine AWD Sedan 12/00-08/07<br>SUBARU WRX MY08-14 GH 195kw Petrol Engine AWD Hatchback 08/07-12/11<br>SUBARU WRX MY08-14 GH 169kw Petrol Engine AWD Hatchback 08/07-12/11<br>SUBARU WRX MY08-14 GEB 169kw Petrol Engine AWD Sedan 01/08-12/11<br>SUBARU WRX MY08-14 GH 169kw Petrol Engine AWD Hatchback 08/07-12/11<br>SUBARU GT BL-BP EJ255 MY06-09 BL 194kw Petrol Engine AWD Sedan 09/06-12/09<br>SUBARU GT BL-BP EJ255 MY06-09 BL 184kw Petrol Engine AWD Sedan 09/06-12/09<br>SUBARU GT BL-BP EJ255 MY06-09 BP 194kw Petrol Engine AWD Wagon 09/06-12/09<br>SUBARU GT BL-BP EJ255 MY06-09 BP 184kw Petrol Engine AWD Wagon 09/06-12/09<br>SUBARU GT MY03-06 BL, BP 180kw Petrol Engine AWD Sedan 09/03-11/06<br>SUBARU GT MY03-06 BL, BP 180kw Petrol Engine AWD Wagon 09/03-11/06<br>SUBARU STi 2014-on GJ 221kw Petrol Engine AWD Sedan 01/14-on<br>SUBARU GT BL-BP EJ20T MY03-06 BL 180kw Petrol Engine AWD Sedan 09/03-11/06<br>SUBARU GT BL-BP EJ20T MY03-06 BP 180kw Petrol Engine AWD Wagon 09/03-11/06',
        buyingguides: '<p>The little Love-god lying once asleep, Laid by his side his heart-inflaming brand, Whilst many nymphs that vowd chaste life to keep Came tripping by; but in her maiden hand The fairest votary took up that fire Which many legions of true hearts had warmd; And so the general of hot desire Was, sleeping, by a virgin hand disarmd. This brand she quenched in a cool well by, Which from Loves fire took heat perpetual,The little Love-god lying once asleep, Laid by his side his heart-inflaming brand, Whilst many nymphs that vowd chaste life to keep Came tripping by; but in her maiden hand The fairest votary took up that fire Which many legions of true hearts had warmd And so the general of hot desire Was, sleeping, by a virgin hand disarmd. This brand she quenched in a cool well by, Which from Loves fire took heat perpetual</p>',
        shipping: '<div><h3>Shipping</h3><p>We offer FREE shipping Australia wide on orders over $99. to metropolitan or regional addresses (excludes big and bulky items).</p><p>Orders of less than $99 and orders shipped to rural addresses are subject to a shipping fee that is calculated at checkout. See full shipping details <a rel="noopener noreferrer" href="#0">here.</a></p><h3>Returns</h3><p>We offer 100% Fitment Guarantee, but if you choose to return an item we offer a generous 60 day returns policy with a full refund. See returns policy and fitment information <a href="#0">here.</a></p><h3>Warranty</h3><p>All products sold by Digital Parts Platform are sold under the Manufacturers warranty and conditions from the date of purchase, unless otherwise stated on the item.</p><p>Warranty claims must meet certain criteria and be sent to Digital Parts Platform with a receipt to be eligible for a refund. See full warranty claim criteria <a rel="noopener noreferrer" href="#0">here.</a></p></div>'
    }
];
function SingleProduct() {

    const popupoptions = {
        settings: {
            disableKeyboardControls: true,
            disablePanzoom: true,
            disableWheelControls: true,
            hideControlsAfter: true
        },
        buttons: {
            showAutoplayButton: false,
            showCloseButton: false,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false
        },
        caption: {
            showCaption: false
        },
        thumbnails: {
            showThumbnails: false,
        }
    }

    const [AfterpayShow, setAfterpayShow] = useState(false);
    const [zipShow, setzipShow] = useState(false);
    const [CarShow, setCarShow] = useState(false);
    const [SelectVehicleShow, setSelectVehicleShow] = useState(false);

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const CompatibleVehicles = () => {
        $('.compatible_div').on('click', function (e) {
            $('.CompatibleVehiclesOption').toggle();
            e.stopPropagation();
        });
    }

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
        <div className='main_div'>

            <Header />

            <Container className='breadcrumb_container py-3'>
                <Row>
                    <Col md={12}>
                        <div className='breadcrumb mb-0'><a href='/'>Home</a> <FontAwesomeIcon icon={faChevronRight} className='mx-2 mt-1' /><a href='/'>Parts</a> <FontAwesomeIcon icon={faChevronRight} className='mx-2 mt-1' /> <a href='/'>Engine, Cooling & Drivetrain</a> <FontAwesomeIcon icon={faChevronRight} className='mx-2 mt-1' /> <a href='/'>Engine Components</a> <FontAwesomeIcon icon={faChevronRight} className='mx-2 mt-1' /> <a href='/'>Engine Belts, Pulleys & Tensioners</a> <FontAwesomeIcon icon={faChevronRight} className='mx-2 mt-1' /> <span><b>GFB 2014 Lightweight Pulley Kit fits Subaru WRX/STI MY08-14</b></span></div>
                    </Col>
                </Row>
            </Container>
            {Product.map(Product => (
                <div>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <h2 className='fw-bold product_title'>{Product.title}</h2>
                                <small className='text-muted'><b>Part Number: </b>{Product.partnumber}</small>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8}>
                                <Row>
                                    <Col sm={2} className='d-none d-sm-block'>
                                        <Row>
                                            <Col>
                                                <a href='#0'><img src={Product.brandimage} className='img-fluid' alt={Product.brand} /></a>
                                                <Slider asNavFor={nav1} ref={(slider2) => setNav2(slider2)} slidesToShow={3} swipeToSlide={true} vertical={true} verticalSwiping={true} focusOnSelect={true} >
                                                    <div>
                                                        <img src={Product.galleryimages.image1} className='img-fluid' alt={Product.title} />
                                                    </div>
                                                    <div>
                                                        <img src={Product.galleryimages.image2} className='img-fluid' alt={Product.title} />
                                                    </div>
                                                    <div>
                                                        <img src={Product.galleryimages.image3} className='img-fluid' alt={Product.title} />
                                                    </div>
                                                    <div>
                                                        <img src={Product.galleryimages.image4} className='img-fluid' alt={Product.title} />
                                                    </div>
                                                    <div>
                                                        <img src={Product.galleryimages.image5} className='img-fluid' alt={Product.title} />
                                                    </div>
                                                    <div>
                                                        <img src={Product.galleryimages.image6} className='img-fluid' alt={Product.title} />
                                                    </div>
                                                </Slider>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={10}>
                                        <Slider className='no_arrow' asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={true} nav={false}>
                                            <div>
                                                <SimpleReactLightbox>
                                                    <SRLWrapper {...popupoptions}>
                                                        <img src={Product.galleryimages.image1} alt={Product.title} className='img-fluid' />
                                                    </SRLWrapper>
                                                </SimpleReactLightbox>
                                            </div>
                                            <div>
                                                <SimpleReactLightbox>
                                                    <SRLWrapper {...popupoptions}>
                                                        <img src={Product.galleryimages.image2} alt={Product.title} className='img-fluid' />
                                                    </SRLWrapper>
                                                </SimpleReactLightbox>

                                            </div>
                                            <div>
                                                <SimpleReactLightbox>
                                                    <SRLWrapper {...popupoptions}>
                                                        <img src={Product.galleryimages.image3} alt={Product.title} className='img-fluid' />
                                                    </SRLWrapper>
                                                </SimpleReactLightbox>
                                            </div>
                                            <div>
                                                <SimpleReactLightbox>
                                                    <SRLWrapper {...popupoptions}>
                                                        <img src={Product.galleryimages.image4} alt={Product.title} className='img-fluid' />
                                                    </SRLWrapper>
                                                </SimpleReactLightbox>
                                            </div>
                                            <div>
                                                <SimpleReactLightbox>
                                                    <SRLWrapper {...popupoptions}>
                                                        <img src={Product.galleryimages.image5} alt={Product.title} className='img-fluid' />
                                                    </SRLWrapper>
                                                </SimpleReactLightbox>
                                            </div>
                                            <div>
                                                <SimpleReactLightbox>
                                                    <SRLWrapper {...popupoptions}>
                                                        <img src={Product.galleryimages.image6} alt={Product.title} className='img-fluid' />
                                                    </SRLWrapper>
                                                </SimpleReactLightbox>
                                            </div>
                                        </Slider>
                                    </Col>

                                </Row>
                            </Col>
                            <Col lg={4}>
                                {Product.saleprice === ''
                                    ? <h3 className='product_price fw-bold text-primary'>{Product.price}</h3>
                                    : <div className='d-flex text-danger'>
                                        <h3 className='product_price fw-bold mb-0'>{Product.saleprice}</h3>
                                        <div className='mb-0 text-muted ms-2'>
                                            <span className='d-block price_top_m'>
                                                <span className='product_price_off'>{Product.price}</span>
                                                <span className='product_price_offer d-block text-primary'><FontAwesomeIcon icon={faTags} /> Save {Product.discount}%</span>
                                            </span>
                                        </div>
                                    </div>
                                }
                                <div className='qty_div'>
                                    <Row>
                                        <Col md={5}>
                                            <div className='qty_btn_div'><Button><FontAwesomeIcon icon={faMinus} /></Button><input type='text' className='qty_text' placeholder='1'></input><Button><FontAwesomeIcon icon={faPlus} /></Button></div>
                                        </Col>
                                        <Col md={7}>
                                            <Button className='btn-block text-left search_result_product_cart_btn' variant='success' type='button'>
                                                <FontAwesomeIcon icon={faShoppingCart} className='mx-2 mt-1' /> <span>Add to Cart</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='mt-3'>
                                    {Product.compatible === 'yes'
                                        ? <Alert variant='success' className='p-2'><span className='d-flex align-items-center'><FontAwesomeIcon icon={faCar} className='mt-1' />&nbsp;&nbsp;<b>Fits:</b>&nbsp;&nbsp;2021 Audi A1, 1.0 TFSI (8X1) 70kw</span></Alert>
                                        : [
                                            (Product.compatible === 'no'
                                                ? <Alert variant='danger' className='p-2'><span className='d-flex align-items-center'><FontAwesomeIcon icon={faExclamationCircle} className='mt-1' />&nbsp;&nbsp;<b>Does not fit:</b>&nbsp;&nbsp;2021 Audi A1 1.0 TFSI (8X1) 70kw!</span></Alert>
                                                : <Alert variant='danger' className='p-2'><span className='d-flex align-items-center' onClick={() => setCarShow(true)}><FontAwesomeIcon icon={faExclamationTriangle} className='mt-1' />&nbsp;&nbsp;<b>Will this part fit?</b></span></Alert>
                                            ),
                                        ]
                                    }
                                </div>
                                <div className='pt-4'>
                                    <h6>Finance Available</h6>
                                    <hr className='mb-2 mt-1' />
                                    <Row>
                                        {Product.afterpayfinancetext !== ''
                                            ? <Col className='text-center boder_right p-2'>
                                                <img src={Afterpay} onClick={() => setAfterpayShow(true)} className='img-fluid mxh23' alt='Afterpay' />
                                                <small>{Product.afterpayfinancetext} <span onClick={() => setAfterpayShow(true)} className='hover_mouse'>Info <FontAwesomeIcon icon={faChevronRight} /></span></small>
                                            </Col>
                                            : ('')
                                        }
                                        {Product.zipfinancetext !== ''
                                            ? <Col className='text-center p-2'>
                                                <img src={ZipPay} onClick={() => setzipShow(true)} className='img-fluid mxh23' alt='ZipPay' />
                                                <small>{Product.zipfinancetext} <span onClick={() => setzipShow(true)} className='hover_mouse'>Info <FontAwesomeIcon icon={faChevronRight} /></span></small>
                                            </Col>
                                            : ('')
                                        }
                                        <Modal size='lg' show={AfterpayShow} onHide={() => setAfterpayShow(false)} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>More about Afterpay</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <center><img src={Afterpay} className='img-fluid ' alt='Afterpay' /></center>
                                                <h4 className='text-center'>Shop now. Enjoy now. Pay later.</h4>
                                                <Row className='py-5'>
                                                    <Col md={3} className='text-center'>
                                                        <FontAwesomeIcon icon={faShoppingCart} className='fa-2x' />
                                                        <p className='fw-bold'>Spend up to $1500</p>
                                                    </Col>
                                                    <Col md={3} className='text-center'>
                                                        <FontAwesomeIcon icon={faTruck} className='fa-2x' />
                                                        <p className='fw-bold'>Get your items now</p>
                                                    </Col>
                                                    <Col md={3} className='text-center'>
                                                        <FontAwesomeIcon icon={faCreditCard} className='fa-2x' />
                                                        <p className='fw-bold'>Pay in 4 installments</p>
                                                    </Col>
                                                    <Col md={3} className='text-center'>
                                                        <FontAwesomeIcon icon={faDollarSign} className='fa-2x' />
                                                        <p className='fw-bold'>Nothing extra to pay</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className='text-center'>
                                                        <small className='mb-5'>Afterpay allows you to shop now and pay in 4 fortnightly interest-free installments.<br /> Available on orders up to $1500</small>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className='text-center'>
                                                        <p className='pt-5 '>For more info visit: <a href='https://www.afterpay.com.au/terms' target='_blank' rel='noopener noreferrer' className='text-dark'>www.afterpay.com.au/terms</a></p>
                                                    </Col>
                                                </Row>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant='secondary' onClick={() => setAfterpayShow(false)}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <Modal size='lg' show={zipShow} onHide={() => setzipShow(false)} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>More about Zip Money</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <center><img src={ZipPay} className='img-fluid ' alt='ZipPay' /></center>
                                                <h4 className='text-center'>own it now, pay later</h4>
                                                <Row className='py-5'>
                                                    <Col md={4} className='text-center'>
                                                        <img src={zipheart} alt='zipheart' />
                                                        <p>Choose the items you love and select <b>Zip Money at checkout</b></p>
                                                    </Col>
                                                    <Col md={4} className='text-center'>
                                                        <img src={zipcart} alt='zipcart' />
                                                        <p>We pay the store, you get the goods, <b>nothing to pay today</b></p>
                                                    </Col>
                                                    <Col md={4} className='text-center'>
                                                        <img src={ziplike} alt='ziplike' />
                                                        <p>Choose how you pay us back over time, up to <b>6 months interest free</b></p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className='text-center'>
                                                        <small className='mb-5'>* A $6 monthly account fee applies<br />(only payable if a balance is owing) <a href='https://zip.co/terms' target='_blank' rel='noopener noreferrer'>See full Ts &amp; Cs</a></small>
                                                    </Col>
                                                </Row>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant='secondary' onClick={() => setzipShow(false)}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Row>
                                    <hr className='mb-2 mt-1' />
                                    <p className='mb-0'>
                                        <span className='d-inline-block float-left me-2'><FontAwesomeIcon icon={faTruck} className='fa-2x' /></span>
                                        <span className='d-block'>FREE shipping Australia wide on orders over $99.</span>
                                    </p>
                                    <small className='x-small'>* Excludes delivery of bulky items and to non-metropolitan areas.</small>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className='mb-3 mb-md-7 bg-light py-4'>
                        <Container>
                            <Row>
                                <Col md={8} lg={8}>
                                    <div className='d-flex flex-row product_info'>
                                        <Tab.Container id='left-tabs-example' defaultActiveKey='Description'>
                                            <Nav variant='pills' className='d-block'>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Description'>Description</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Specifications'>Specifications</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Guides'>Buying Guides</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Shipping'>Shipping & Returns</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey='Compatible'>Compatible Vehicles</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey='Description'>
                                                    <Row>
                                                        <Col><div dangerouslySetInnerHTML={{ __html: Product.description }} /></Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Specifications'>
                                                    <Row>
                                                        <Col>
                                                            <table className='Specifications_table'>
                                                                <tr>
                                                                    <th>Brand</th>
                                                                    <td>{Product.brand}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Engine Codes</th>
                                                                    <td>
                                                                        <div dangerouslySetInnerHTML={{ __html: Product.enginecodes }} />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Part Number</th>
                                                                    <td>{Product.partnumber}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Warranty</th>
                                                                    <td>{Product.warranty}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Colour</th>
                                                                    <td>{Product.colour}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Type</th>
                                                                    <td>{Product.type}</td>
                                                                </tr>
                                                            </table>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Guides'>
                                                    <Row>
                                                        <Col>
                                                            <div dangerouslySetInnerHTML={{ __html: Product.buyingguides }} />
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Shipping'>
                                                    <Row>
                                                        <Col>
                                                            <div dangerouslySetInnerHTML={{ __html: Product.shipping }} />
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey='Compatible'>
                                                    <Row>
                                                        <Col>
                                                            <div className='compatible_div' onClick={CompatibleVehicles}><h6>Subaru</h6></div>
                                                        </Col>
                                                    </Row>
                                                    <Row style={{ display: 'none' }} className='CompatibleVehiclesOption'>
                                                        <Col md={12}>
                                                            <Accordion>
                                                                <Accordion.Item eventKey="0">
                                                                    <Accordion.Header>Liberty</Accordion.Header>
                                                                    <Accordion.Body className='p-0'>
                                                                        <div className='vehical_info p-2'>
                                                                            <Row>
                                                                                <Col sm={12} className='pb-2'>Subaru Liberty 2.0 (BP) 2005 - 2009</Col>
                                                                            </Row>
                                                                            <Row className='small'>
                                                                                <Col sm={3}>Year</Col>
                                                                                <Col sm={3}>2005 - 2009</Col>
                                                                                <Col sm={3}>Engine</Col>
                                                                                <Col sm={3}>Petrol</Col>
                                                                                <Col sm={3}>Series</Col>
                                                                                <Col sm={3}>2.0 (BP)</Col>
                                                                                <Col sm={3}>KW</Col>
                                                                                <Col sm={3}>121</Col>
                                                                                <Col sm={3}>Body</Col>
                                                                                <Col sm={3}>Wagon</Col>
                                                                                <Col sm={3}>Notes</Col>
                                                                                <Col sm={3}>--</Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col sm={12} className='text-right py-2'>
                                                                                    <Button variant='primary' size='sm' className='m-0'>Set Vehicle</Button>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <div className='vehical_info p-2'>
                                                                            <Row>
                                                                                <Col sm={12} className='pb-2'>Subaru Liberty 2.0 (BP) 2005 - 2009</Col>
                                                                            </Row>
                                                                            <Row className='small'>
                                                                                <Col sm={3}>Year</Col>
                                                                                <Col sm={3}>2005 - 2009</Col>
                                                                                <Col sm={3}>Engine</Col>
                                                                                <Col sm={3}>Petrol</Col>
                                                                                <Col sm={3}>Series</Col>
                                                                                <Col sm={3}>2.0 (BP)</Col>
                                                                                <Col sm={3}>KW</Col>
                                                                                <Col sm={3}>121</Col>
                                                                                <Col sm={3}>Body</Col>
                                                                                <Col sm={3}>Wagon</Col>
                                                                                <Col sm={3}>Notes</Col>
                                                                                <Col sm={3}>--</Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col sm={12} className='text-right py-2'>
                                                                                    <Button variant='primary' size='sm' className='m-0'>Set Vehicle</Button>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                        <div className='vehical_info p-2'>
                                                                            <Row>
                                                                                <Col sm={12} className='pb-2'>Subaru Liberty 2.0 (BP) 2005 - 2009</Col>
                                                                            </Row>
                                                                            <Row className='small'>
                                                                                <Col sm={3}>Year</Col>
                                                                                <Col sm={3}>2005 - 2009</Col>
                                                                                <Col sm={3}>Engine</Col>
                                                                                <Col sm={3}>Petrol</Col>
                                                                                <Col sm={3}>Series</Col>
                                                                                <Col sm={3}>2.0 (BP)</Col>
                                                                                <Col sm={3}>KW</Col>
                                                                                <Col sm={3}>121</Col>
                                                                                <Col sm={3}>Body</Col>
                                                                                <Col sm={3}>Wagon</Col>
                                                                                <Col sm={3}>Notes</Col>
                                                                                <Col sm={3}>--</Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col sm={12} className='text-right py-2'>
                                                                                    <Button variant='primary' size='sm' className='m-0'>Set Vehicle</Button>
                                                                                </Col>
                                                                            </Row>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="1">
                                                                    <Accordion.Header>Impreza</Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <Row>
                                                                            <Col sm={12} className='pb-2'>Subaru Liberty 2.0 (BP) 2005 - 2009</Col>
                                                                        </Row>
                                                                        <Row className='small'>
                                                                            <Col sm={3}>Year</Col>
                                                                            <Col sm={3}>2005 - 2009</Col>
                                                                            <Col sm={3}>Engine</Col>
                                                                            <Col sm={3}>Petrol</Col>
                                                                            <Col sm={3}>Series</Col>
                                                                            <Col sm={3}>2.0 (BP)</Col>
                                                                            <Col sm={3}>KW</Col>
                                                                            <Col sm={3}>121</Col>
                                                                            <Col sm={3}>Body</Col>
                                                                            <Col sm={3}>Wagon</Col>
                                                                            <Col sm={3}>Notes</Col>
                                                                            <Col sm={3}>--</Col>
                                                                        </Row>
                                                                        <Row>
                                                                            <Col sm={12} className='text-right py-2'>
                                                                                <Button variant='primary' size='sm' className='m-0'>Price</Button>
                                                                            </Col>
                                                                        </Row>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </Col>
                                <Col md={4} lg={4}>
                                    <ul className='mb-4 list-unstyled'>
                                        <li className='mb-2 big'><FontAwesomeIcon icon={faCheck} className='text-success me-2' />Australian Owned</li>
                                        <li className='mb-2 big'><FontAwesomeIcon icon={faCheck} className='text-success me-2' />100% Fitment Guarantee</li>
                                        <li className='mb-2 big'><FontAwesomeIcon icon={faCheck} className='text-success me-2' />Genuine Quality Brands</li>
                                    </ul>
                                    <h5>Share with...</h5>
                                    <ul className='list-unstyled'>
                                        <li className='list-inline-item align-top'><Button className='social_btn facebook_icon me-2'><FontAwesomeIcon icon={faFacebookF} /></Button></li>
                                        <li className='list-inline-item align-top'><Button className='social_btn twitter_icon me-2'><FontAwesomeIcon icon={faTwitter} /></Button></li>
                                        <li className='list-inline-item align-top'><Button className='social_btn envelope_icon me-2'><FontAwesomeIcon icon={faEnvelope} /></Button></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
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
                </div>
            ))
            }

            <Footer />

        </div >
    )
}
export default SingleProduct;