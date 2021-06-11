import React from 'react'
import Meta from '../components/Meta';
import PageHeaders from '../components/PageHeaders';

const ContactUsScreen = () => {
    return (
        <div id="contact" class="">
            <Meta title='Contact Us | The-Covid-Ease' description='About The-Covid-Ease' keywords='Who are The-Covid-Ease' />

            <PageHeaders message='Contact Us - যোগাযোগ করুন' />
            <div class="contact-wrapper">
            {/* <form class="form-horizontal" role="form" method="post" action="#">

            <div class="form-group">
                <div class="col-sm-12">
                <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value=""></input>
                </div>
            </div>

            <div class="form-group">
                <div class="col-sm-12">
                <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value=""></input>
                </div>
            </div>

            <textarea class="form-control" rows="10"  placeholder="MESSAGE" name="message"></textarea>

            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                <div class="button text-center">
                <i class="fa fa-paper-plane "></i><span class="send-text">SEND</span>
                </div>

            </button>

            </form> */}
            <div class="direct-contact-container">

            <ul class="contact-list">
                <li class="list-item"><i class="fas fa-map-marker-alt"><span class="contact-text place">Rahara Khardah, Kolkata-700118</span></i></li>

                <li class="list-item"><i class="fa fa-phone fa-1x"><span class="contact-text phone"><a href="tel:+919797009876" title="Give us a call">(+91) 9903595619</a></span></i></li>

                <li class="list-item"><i class="fa fa-envelope fa-1x mail"><span class="contact-text gmail"><a href="mailto:banerjeeprayas.Work@outlook.com" title="Send us an email">Mail Me</a></span></i></li>

            </ul>

            
            <ul class="social-media-list">
                <li><a href="https://github.com/banerjeePrayas/The-Covid-Ease" target="_blank" class="contact-icon" rel="noreferrer">
                <i class="fab fa-github"></i></a>
                </li>
                <li><a href="https://twitter.com/covid19indiaorg" target="_blank" class="contact-icon" rel="noreferrer">
                <i class="fab fa-twitter"></i></a>
                </li>
                <li><a href="https://instagram.com/covid19indiaorg" target="_blank" class="contact-icon" rel="noreferrer">
                <i class="fab fa-instagram"></i></a>
                </li>
            </ul>

            </div>

        </div>

        </div>  
    )
}

export default ContactUsScreen
