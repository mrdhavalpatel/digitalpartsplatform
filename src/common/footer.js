import React from 'react'

/* bootstrap */
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


/* images */
import Mastercard from '../assets/image/Mastercard.png';
import VISA from '../assets/image/VISA.png';
import American_Express from '../assets/image/American_Express.png';
import PayPal from '../assets/image/PayPal.png';
import Afterpay from '../assets/image/Afterpay.png';
import ZipPay from '../assets/image/ZipPay.png';
import mishimoto from '../assets/image/mishimoto.jpg';

/* RecentlyViewed JSON */
const RecentlyViewed = [
    { id: 1, title: 'Mishimoto Racing Thermostat fits Mitsubishi Evo 7/8/9', link: '#0', image: mishimoto },
    { id: 2, title: 'Mishimoto Racing Thermostat fits Mitsubishi Evo 7/8/9', link: '#0', image: mishimoto },
    { id: 3, title: 'Mishimoto Racing Thermostat fits Mitsubishi Evo 7/8/9', link: '#0', image: mishimoto },
    { id: 4, title: 'Mishimoto Racing Thermostat fits Mitsubishi Evo 7/8/9', link: '#0', image: mishimoto },
    { id: 5, title: 'Mishimoto Racing Thermostat fits Mitsubishi Evo 7/8/9', link: '#0', image: mishimoto },
    { id: 6, title: 'Mishimoto Racing Thermostat fits Mitsubishi Evo 7/8/9', link: '#0', image: mishimoto }
];

function Footer() {

    return (
        <div>
            {/* Recently Viewed section Start */}
            <div className='recently_viewed_section py-4'>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3 className='title_h3'>Recently Viewed</h3>
                        </Col>
                    </Row>
                    <Row>
                        <div className='recently_prouct_row'>
                            {/* Recently Viewed */}
                            {RecentlyViewed.map(RecentlyViewed => (
                                <Col xs={5} md={2} className='recently_viewed_col mt-2 py-2 px-4'>
                                    <a className='text_decor_no' href={RecentlyViewed.link}>
                                        <div className='mt-2'>
                                            <img src={RecentlyViewed.image} className='img-fluid recently_viewed_img' alt={RecentlyViewed.title} />
                                            <p className='mb-0'>{RecentlyViewed.title}</p>
                                        </div>
                                    </a>
                                </Col>
                            ))}
                        </div>
                    </Row>
                </Container>
            </div>
            {/* Recently Viewed section End */}

            <footer>
                <div className='footer_content'>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <p>Digital Parts Platform - Auto Parts, Car Care and 4x4 Accessories</p>
                            </Col>
                            <Col md={2}>
                                <h6 className='footertitle mb-3'>About Us</h6>
                                <ul className='footer-nav'>
                                    <li><a href='#0'>About Us</a></li>
                                    <li><a href='#0'>Digital Parts Platform Blog</a></li>
                                    <li><a href='#0'>Privacy Policy</a></li>
                                    <li><a href='#0'>Digital Parts Platform on Facebook</a></li>
                                    <li><a href='#0'>Terms and Conditions</a></li>
                                    <li><a href='#0'>Pay Over Time with Afterpay</a></li>
                                    <li><a href='#0'>Zip Pay</a></li>
                                </ul>
                            </Col>
                            <Col md={2}>
                                <h6 className='footertitle mb-3'>Help & Contact</h6>
                                <ul className='footer-nav'>
                                    <li><a href='#0'>Contact Us</a></li>
                                    <li><a href='#0'>Returns</a></li>
                                    <li><a href='#0'>Shipping</a></li>
                                    <li><a href='#0'>Fitment Guarantee</a></li>
                                    <li><a href='#0'>Nationwide Delivery</a></li>
                                    <li><a href='#0'>FAQ</a></li>
                                    <li><a href='#0'>Buying Guides</a></li>
                                </ul>
                            </Col>
                            <Col md={2}>
                                <h6 className='footertitle'>Account</h6>
                                <ul className='footer-nav'>
                                    <li><a href='#0'>Manage Account</a></li>
                                    <li><a href='#0'>Login</a></li>
                                    <li><a href='#0'>Register</a></li>
                                </ul>
                            </Col>
                            <Col md={2}>
                                <h6 className='footertitle'>Shop</h6>
                                <ul className='footer-nav'>
                                    <li><a href='#0'>Performance</a></li>
                                    <li><a href='#0'>Offroad &amp; 4x4</a></li>
                                    <li><a href='#0'>Servicing</a></li>
                                    <li><a href='#0'>Workshop</a></li>
                                    <li><a href='#0'>Shop by Make</a></li>
                                    <li><a href='#0'>Shop By Category</a></li>
                                </ul>
                            </Col>
                            <Col md={2}>
                                <h6 className='footertitle'>Follow us on</h6>
                                <ul className='footer_social'>
                                    <li>
                                        <a href='#0'>
                                            <span className='social_li'>
                                                <FontAwesomeIcon icon={faCircle} className='fa-2x mb-1' /><FontAwesomeIcon icon={faFacebookF} className='fa-1x fa-inverse' />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#0'>
                                            <span className='social_li'>
                                                <FontAwesomeIcon icon={faCircle} className='fa-2x mb-1' /><FontAwesomeIcon icon={faTwitter} className='fa-1x fa-inverse' />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#0'>
                                            <span className='social_li'>
                                                <FontAwesomeIcon icon={faCircle} className='fa-2x mb-1' /><FontAwesomeIcon icon={faInstagram} className='fa-1x fa-inverse' />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#0'>
                                            <span className='social_li'>
                                                <FontAwesomeIcon icon={faCircle} className='fa-2x mb-1' /><FontAwesomeIcon icon={faYoutube} className='fa-1x fa-inverse' />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className='text-center paymanet_method_logo'>
                                    <p className='small mb-1'>SAFE & SECURE SHOPPING</p>
                                    <img src={Mastercard} className='img-fluid paymanet_method_logo_img' alt='Mastercard' />
                                    <img src={VISA} className='img-fluid paymanet_method_logo_img' alt='VISA' />
                                    <img src={American_Express} className='img-fluid paymanet_method_logo_img' alt='American_Express' />
                                    <img src={PayPal} className='img-fluid paymanet_method_logo_img' alt='PayPal' />
                                    <img src={Afterpay} style={{ width: '48px' }} className='img-fluid paymanet_method_logo_img' alt='Afterpay' />
                                    <img src={ZipPay} className='img-fluid paymanet_method_logo_img' alt='ZipPay' />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <div className='copy-info text-center'>© 2021 Digital Parts Platform. All Rights Reserved. ABN 15 168 552 323</div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </div >
    )
}
export default Footer;