import React from 'react';

import Header from '../common/header';
import Footer from '../common/footer';

/* bootstrap */
import { Container, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/* FontAwesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faShoppingCart, faCheckSquare, faTags, faAngleDown } from '@fortawesome/free-solid-svg-icons'

/* css */
import '../assets/css/style.css';

import $ from 'jquery';

/* images */
import placeholder from '../assets/image/product/placeholder.png';

/* Product JSON */
const Product = [
    { produtctid: 1, image: '', title: 'StrongArm Tailgate RH Strut - Fits Subaru Forester (SF,SG) Wagon 2000-05', partnumber: '6220R', brand: 'StrongArm', brandimage: require('../assets/image/company/strongarm.png').default, fittingposition: 'Rear Right Hand', price: '$59.95', saleprice: '$47.96', discount: '20', compatible: 'yes' },
    { produtctid: 2, image: '', title: 'StrongArm Tailgate LH Strut  - Fits Subaru Forester (SF,SG) Wagon 2000-08', partnumber: '6219L', brand: 'StrongArm', brandimage: require('../assets/image/company/strongarm.png').default, fittingposition: 'Rear Left Hand', price: '$51.95', saleprice: '', discount: '', compatible: 'no' },
    { produtctid: 3, image: '', title: 'StrongArm Tailgate RH Strut  - Fits Subaru Forester (SF,SG) Wagon 2000-08', partnumber: '6219R', brand: 'StrongArm', brandimage: require('../assets/image/company/strongarm.png').default, fittingposition: 'Rear Right Hand', price: '$51.95', saleprice: '', discount: '', compatible: 'no' },
    { produtctid: 4, image: '', title: 'StrongArm Tailgate LH Strut  - Fits Subaru Forester (SF,SG) Wagon 2000-05', partnumber: '6220L', brand: 'StrongArm', brandimage: require('../assets/image/company/strongarm.png').default, fittingposition: 'Rear Left Hand', price: '$59.95', saleprice: '', discount: '', compatible: 'no' },
    { produtctid: 5, image: require('../assets/image/product/LightweightPulley.jpg').default, title: 'GFB Lightweight Pulley Kit fits Subaru WRX/STI MY08-14', partnumber: '2014', brand: 'GFB', brandimage: require('../assets/image/company/gfb.png').default, fittingposition: '', price: '$407.95', saleprice: '', discount: '', compatible: 'no' },
    { produtctid: 6, image: require('../assets/image/product/LightweightPulley01.jpg').default, title: 'GFB Lightweight Pulley Kit fits Subaru WRX/STI MY03-07', partnumber: '2010', brand: 'GFB', brandimage: require('../assets/image/company/gfb.png').default, fittingposition: '', price: '$407.95', saleprice: '', discount: '', compatible: 'no' },
    { produtctid: 7, image: require('../assets/image/product/aerproaps.jpg').default, title: 'Aerpro Speaker Leads Suits Ford & Subaru', partnumber: 'APS58', brand: 'Aerpro', brandimage: require('../assets/image/company/aerpro.png').default, fittingposition: '', price: '$7.95', saleprice: '', discount: '', compatible: 'no' },
    { produtctid: 8, image: require('../assets/image/product/LightweightPulley02.jpg').default, title: 'GFB Lightweight Pulley Kit fits Subaru Impreza WRX/STI MY98-00', partnumber: '2002', brand: 'GFB', brandimage: require('../assets/image/company/gfb.png').default, fittingposition: '', price: '$407.95', saleprice: '', discount: '', compatible: 'no' },
    { produtctid: 9, image: require('../assets/image/product/whitelineksb590q.jpg').default, title: 'Whiteline Strut Brace Rear fits Subaru Forester/Liberty/Outback 1994-02', partnumber: 'KSB590Q', brand: 'Whiteline', brandimage: require('../assets/image/company/whiteline.png').default, fittingposition: '', price: '$275   .95', saleprice: '', discount: '', compatible: 'no' },
    { produtctid: 10, image: require('../assets/image/product/LightweightPulley03.jpg').default, title: 'GFB Lightweight Crankshaft Pulley fits Subaru WRX/STI MY01-02 / B4 MY98-03', partnumber: '2001', brand: 'GFB', brandimage: require('../assets/image/company/gfb.png').default, fittingposition: '', price: '$296.95', saleprice: '', discount: '', compatible: 'no' }
];

const Postion = [
    { title: 'Front', totalpart: '150' },
    { title: 'Engine', totalpart: '50' },
    { title: 'Rear', totalpart: '36' },
    { title: 'Lower', totalpart: '59' },
    { title: 'Upper', totalpart: '79' },
    { title: 'Front & Rear', totalpart: '400' },
    { title: 'Front RH', totalpart: '100' },
    { title: 'Front LH', totalpart: '89' },
    { title: 'Rear RH', totalpart: '63' },
    { title: 'Rear LH', totalpart: '56' },
    { title: 'Cooling System', totalpart: '64' }
];

const Colour = [
    { title: 'Black', totalpart: '890' },
    { title: 'Red', totalpart: '250' },
    { title: 'Blue', totalpart: '350' },
    { title: 'Blue/Red', totalpart: '80' },
    { title: 'Yellow', totalpart: '150' },
    { title: 'Charcoal', totalpart: '400' },
    { title: 'Silver', totalpart: '90' },
    { title: 'Gold', totalpart: '90' },
    { title: 'Chrome', totalpart: '150' },
    { title: 'White', totalpart: '56' }
];

const Brand = [
    { title: 'Aeroflow', totalpart: '890' },
    { title: 'PAT', totalpart: '250' },
    { title: 'SuperPro Suspension', totalpart: '350' },
    { title: 'RDA Brakes', totalpart: '80' },
    { title: 'Dayco', totalpart: '150' },
    { title: 'Permaseal Gaskets', totalpart: '400' },
    { title: 'Clutch Industries', totalpart: '90' },
    { title: 'Gates', totalpart: '90' },
    { title: 'Protex', totalpart: '150' },
    { title: 'EXEDY Clutch', totalpart: '56' }
];

const price_filter = () => {
    $('.price_filter_btn').on('click', function (e) {
        $('.price_filter_option').toggle();
        $('.position_filter_option').hide();
        $('.colour_filter_option').hide();
        e.stopPropagation();
    });

    $('.price_filter_option').on('click', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function () {
        $('.price_filter_option').hide();
    });
}

const position_filter = () => {
    $('.position_filter_btn').on('click', function (e) {
        $('.position_filter_option').toggle();
        $('.colour_filter_option').hide();
        $('.price_filter_option').hide();
        e.stopPropagation();
    });

    $('.position_filter_option').on('click', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function () {
        $('.position_filter_option').hide();
    });
}

const colour_filter = () => {
    $('.colour_filter_btn').on('click', function (e) {
        $('.colour_filter_option').toggle();
        $('.price_filter_option').hide();
        $('.position_filter_option').hide();
        e.stopPropagation();
    });

    $('.colour_filter_option').on('click', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function () {
        $('.colour_filter_option').hide();
    });
}

const Cat_filter = () => {
    $('.cat_title').on('click', function (e) {
        $('.cat_list').toggle();
        e.stopPropagation();
    });
}

const brand_filter = () => {
    $('.brand_title').on('click', function (e) {
        $('.brand_list').toggle();
        e.stopPropagation();
    });
}


function Home() {
    return (
        <div className='main_div'>

            <Header />

            <Container className='breadcrumb_container py-3'>
                <Row>
                    <Col md={12}>
                        <div className='breadcrumb mb-0'><a href='/'>Home</a> <FontAwesomeIcon icon={faChevronRight} className='mx-2 mt-1' /> <span><b>Search</b></span></div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='serach_container'>
                <div className='serach_layout'>
                    <Row>
                        <Col md={2} className='search_result_option my-3'>
                            <div className='bg-white'>
                                <div className='p-3 boder_bottom'>
                                    <h5 className='cat_title d-flex justify-content-between' onClick={Cat_filter}>Categories <FontAwesomeIcon icon={faAngleDown} /></h5>
                                    <ul className='cat_list list-unstyled' style={{ display: 'none' }}>
                                        <Form className='position_filter_checkbox'>
                                            {Postion.map((Postion) => (
                                                <div key={`default-checkbox`} className='p-2'>
                                                    <Form.Check
                                                        type='checkbox'
                                                        id={`default-${Postion.title}`}
                                                        label={`${Postion.title}`}
                                                    />
                                                    <div>({Postion.totalpart})</div>
                                                </div>
                                            ))}
                                        </Form>
                                    </ul>
                                </div>

                                <div className='p-3 boder_bottom'>
                                    <h5 className='brand_title d-flex justify-content-between' onClick={brand_filter}>Brand <FontAwesomeIcon icon={faAngleDown} /></h5>
                                    <ul className='brand_list list-unstyled' style={{ display: 'none' }}>
                                        <Form className='position_filter_checkbox'>
                                            {Brand.map((Brand) => (
                                                <div key={`default-checkbox`} className='p-2'>
                                                    <Form.Check
                                                        type='checkbox'
                                                        id={`default-${Brand.title}`}
                                                        label={`${Brand.title}`}
                                                    />
                                                    <div>({Brand.totalpart})</div>
                                                </div>
                                            ))}
                                        </Form>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={10} className='search_result_list my-3'>
                            <div className='bg-white px-2'>
                                <Row>
                                    <Col md={12} className='px-4'>
                                        <h2 className='py-3'>Showing results for '2019 Subaru, Forester, 2.5 AWD (SK9)'</h2>
                                        <div className='d-flex justify-content-between flex-column flex-sm-row'>
                                            <div>
                                                <span className='price_filter'>
                                                    <Button variant='outline-secondary' size='sm' className='me-2 mb-2 d-inline-block price_filter_btn' onClick={price_filter}>Price</Button>
                                                    <div className='price_filter_option' style={{ display: 'none' }}>
                                                        <p>dfdf</p>
                                                    </div>
                                                </span>
                                                <span className='position_filter'>
                                                    <Button variant='outline-secondary' size='sm' className='me-2 mb-2 d-inline-block position_filter_btn' onClick={position_filter}>Fitment Position</Button>
                                                    <div className='position_filter_option' style={{ display: 'none' }}>
                                                        <Form className='position_filter_checkbox'>
                                                            {Postion.map((Postion) => (
                                                                <div key={`default-checkbox`} className='p-2'>
                                                                    <Form.Check
                                                                        type='checkbox'
                                                                        id={`default-${Postion.title}`}
                                                                        label={`${Postion.title}`}
                                                                    />
                                                                    <div>({Postion.totalpart})</div>
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </span>
                                                <span className='colour_filter'>
                                                    <Button variant='outline-secondary' size='sm' className='me-2 mb-2 d-inline-block colour_filter_btn' onClick={colour_filter}>Colour</Button>
                                                    <div className='colour_filter_option' style={{ display: 'none' }}>
                                                        <Form className='colour_filter_checkbox'>
                                                            {Colour.map((Colour) => (
                                                                <div key={`default-checkbox`} className='p-2'>
                                                                    <Form.Check
                                                                        type='checkbox'
                                                                        id={`default-${Colour.title}`}
                                                                        label={`${Colour.title}`}
                                                                    />
                                                                    <div>({Colour.totalpart})</div>
                                                                </div>
                                                            ))}
                                                        </Form>
                                                    </div>
                                                </span>
                                                <Button variant='primary' size='sm' className='me-2 mb-2 d-inline-block'>More filters</Button>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <div>
                                                    <Form.Select size='sm'>
                                                        <option value='25'>25</option>
                                                        <option value='50'>50</option>
                                                        <option value='100'>100</option>
                                                    </Form.Select>
                                                </div>
                                                <div className='ms-3'>
                                                    <Form.Select size='sm'>
                                                        <option value='Relevance'>Relevance</option>
                                                        <option value='Price High - Low'>Price High - Low</option>
                                                        <option value='Price Low - High'>Price Low - High</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                        </div>
                                        <Row>
                                            <Col md={8}>
                                                <div className='d-flex justify-content-between'>
                                                    <div className='selected-filters'>
                                                        <div className='selected-filters-option selected-filters__item selected-filter--FitmentPosition'><div className='selected-filters-option__name'>Fitment Position: Rear</div><div className='selected-filters-option__remove-action'>x</div></div>
                                                        <div className='selected-filters-option selected-filters__item selected-filter--FitmentPosition'><div className='selected-filters-option__name'>Fitment Position: Lower</div><div className='selected-filters-option__remove-action'>x</div></div>
                                                        <div className='selected-filters-option selected-filters__item selected-filter--FitmentPosition'><div className='selected-filters-option__name'>Fitment Position: Front & Rear</div><div className='selected-filters-option__remove-action'>x</div></div>
                                                        <div className='selected-filters-option selected-filters__item selected-filter--FitmentPosition'><div className='selected-filters-option__name'>Colour: Black</div><div className='selected-filters-option__remove-action'>x</div></div>
                                                        <div className='selected-filters-option selected-filters__item selected-filter--FitmentPosition'><div className='selected-filters-option__name'>Colour: Silver</div><div className='selected-filters-option__remove-action'>x</div></div>
                                                        <div className='selected-filters-option selected-filters__item selected-filter--FitmentPosition'><div className='selected-filters-option__name'>Colour: Blue</div><div className='selected-filters-option__remove-action'>x</div></div>
                                                    </div>
                                                    <div>
                                                        <div className='reset-filters'><div className='reset-filters__reset'>Clear all filters</div></div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <p className='text-right small text-muted'>152 results found</p>
                                            </Col>
                                        </Row>
                                        <Row className='search_result_product_row'>
                                            {Product.map(Product => (
                                                <article className='search_result_product_col mb-3 card search_result_product_box'>
                                                    <a href='/singleproduct' className='p-2 card-body'>
                                                        <div>
                                                            <img src={Product.image !== '' ? (Product.image) : (placeholder)} alt={Product.title} className='img-fluid search_result_product_img' />
                                                            <img src={Product.brandimage} alt={Product.brand} className='img-fluid search_result_product_brand_img' />
                                                        </div>
                                                        <div className='d-flex flex-column justify-content-between h-100 search_result_product_info'>
                                                            <div className='item'>
                                                                <p className='small search_result_product_partnumber mb-0 text-muted'>{Product.partnumber}</p>
                                                                <p className='search_result_product_title'>{Product.title}</p>
                                                                {Product.fittingposition === ''
                                                                    ? ('')
                                                                    : [
                                                                        (Product.compatible === 'yes'
                                                                            ? <Alert variant='success' className='p-2 search_result_product_fitting'><span><b><FontAwesomeIcon icon={faCheckSquare} className='mt-1' /> This part fits your car</b></span><hr className='mt-1 mb-0' /><b>Fitting Position</b> : {Product.fittingposition}</Alert>
                                                                            : <Alert variant='secondary' className='p-2 search_result_product_fitting'><b>Fitting Position</b> : {Product.fittingposition}</Alert>
                                                                        ),
                                                                    ]
                                                                }
                                                            </div>
                                                        </div>
                                                        <div>
                                                            {Product.saleprice === ''
                                                                ? <h4 className='search_result_product_price fw-bold mb-0'>{Product.price}</h4>
                                                                : <div className='d-flex text-danger'>
                                                                    <h4 className='search_result_product_price fw-bold mb-0'>{Product.saleprice}</h4>
                                                                    <div className='mb-0 text-muted ms-2'>
                                                                        <span className='d-block price_top_m'>
                                                                            <span className='search_result_product_price_off'>{Product.price}</span>
                                                                            <span className='search_result_product_price_offer d-block text-primary'><FontAwesomeIcon icon={faTags} /> Save {Product.discount}%</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                    </a>
                                                    <div className='card-footer'>
                                                        <Button className='btn-block text-left search_result_product_cart_btn' variant='success' type='button'>
                                                            <FontAwesomeIcon icon={faShoppingCart} className='mx-2 mt-1' /> <span>Add to Cart</span>
                                                        </Button>
                                                    </div>
                                                </article>
                                            ))}
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Footer />

        </div>
    )
}
export default Home;