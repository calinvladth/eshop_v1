import HomeHero1 from './assets/images/home_hero_1.jpg'
import HomeHero2 from './assets/images/home_hero_2.jpg'
import ContactHero from './assets/images/contact.jpg'
import Spinner from './assets/images/spin.gif'
import TikTokIcon from "./assets/images/tik-tok.png";
import FacebookIcon from "./assets/images/facebook.png";
import InstagramIcon from "./assets/images/instagram.png";
import PinterestIcon from "./assets/images/pinterest.png";
import TwitterIcon from "./assets/images/twitter.png";
import Logo from './assets/images/logo.png'

export const headerData = {
    logo: Logo
}

export const homepageData = {
    image_1: HomeHero1,
    image_2: HomeHero2,
    slogan: "Your favorite store.",
    spinner: Spinner,
    about_title: 'everything you need to know about us',
    about_description: 'lorem ipsum dolor sit amet, consectetur Adipisicing elit. Magnam officiis quibusdam tenetur vero voluptate. Accusamus accusantium ad corporis dicta eum fugiat impedit, inventore labore laboriosam libero nemo nihil optio perspiciatis possimus sapiente sunt tempore unde ut vitae voluptas? Amet ex fugit pariatur, quas rerum saepe.',
    shop_title: "Shop"
}

export const contactpageData = {
    title: "Contact us",
    subtitle: "Fell free to contact us and we will get back to you as soon as possible.",

    image: ContactHero
}

export const contactData = {
    address: "232 Bubby Drive. Austin Texas",
    phone: "512-563-3420",
    email: "example@email.com"
}

export const newsletterData = {
    "reason": "Sign up for exciting sales and updates about our new products."
}

export const successData = {
    message: {
        title: "Thank you for your message",
        message: "We will get back to you as soon as we can"
    },
    newsletter: {
        title: "Success!",
        message: "You have successfully subscribed to our newsletter"
    },
    order: {
        title: "Thank you for your purchase"
    }
}

export const errorData = {
    server_down: {
        title: 'Thank you for your patience',
        message: 'Our servers are down. Please come back later'
    },
    not_found: {
        title: 'This page does not exist',
    }
}

export const socialMediaData = [
    {
        name: 'tiktok',
        icon: TikTokIcon,
        link: 'https://tiktok.com'
    },
    {
        name: 'facebook',
        icon: FacebookIcon,
        link: 'https://facebook.com'
    },
    {
        name: 'instagram',
        icon: InstagramIcon,
        link: 'https://instagram.com'
    },
    {
        name: 'pinterest',
        icon: PinterestIcon,
        link: 'https://pinterest.com'
    },
    {
        name: 'twitter',
        icon: TwitterIcon,
        link: 'https://facebook.com'
    },
]

export const legalPagesData = {
    payment_method: "Payment method",
    terms_and_conditions: "Terms and conditions",
    shipping_and_refund: "Shipping and refund",
    data_privacy: "Data privacy"
}

