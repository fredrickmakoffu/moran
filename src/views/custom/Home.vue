 <template>
    <div id="wrapper">
      <div v-show="loading" class="container">
        <div class="center">
          <div class="fingerprint-spinner">
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
            <div class="spinner-ring"></div>
          </div>
        </div>
      </div>  

      <transition name="fade" mode="out-in" v-show="!loading">
        <div class="body">
          <navbar class="pt-3"></navbar>

          <div class="row bg-dark">
            <transition name="fade" mode="out-in">
              <open-nav></open-nav>
            </transition>

            <section :class="['headliner', 'bg-' + headliner.background_color]" v-if="headliner" id="headliner">
              <headliner :page="'Home'" v-model:prop_data=headliner></headliner>
            </section>

            <section :class="['search', 'bg-dark']">
              <products></products>
            </section>
            
            <svg class="bg-dark" v-if="services" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 200">
              <path fill="#373a3e" fill-opacity="1" d="M0,128L80,128C160,128,320,128,480,138.7C640,149,800,171,960,197.3C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
                          
            <section v-if="services" id="services" :class="['work', 'bg-' + services.background_color, 'pt-0', 'pb-0']">
              <services :page="'Home'" v-model:prop_data="services"></services>
            </section>
            
            <svg class="bg-dark" v-if="services" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
              <path fill="#373a3e" fill-opacity="1" d="M0,32L120,48C240,64,480,96,720,112C960,128,1200,128,1320,128L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
            </svg>

            <section v-if="partners" id="partners" :class="['partners', 'about', 'bg-' + partners.background_color, 'pt-0']">        
              <partners :page="'Home'" v-model:prop_data=partners></partners>
            </section>  

            <section v-if="testimonials" id="testimonials" :class="['testimonials', 'about', 'bg-' + testimonials.background_color, 'text-'  + testimonials.color ]">        
              <testimonials :page="'Home'" v-model:prop_data=testimonials></testimonials>
            </section>

            <section id="contacts" class="contact bg-dark">
              <contacts></contacts>
            </section>
          </div>

          <main-footer v-if="footer" :page="'Home'" v-model:prop_data="footer"></main-footer>
        </div>
      </transition>
    </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/scss/abstracts/_variables';
  @import '../../assets/scss/layout/_spinner';
  
  body {
    background-color: $dark-color!important;
  }

  #wrapper {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }    

  .body {
    padding-left: 0!important;
  }

  .navbar-border-bottom {
    border-bottom: 1px solid #fafafa !important;
    box-shadow: 0 4px 8px rgb(0 0 0 / 3%);
  }

  .about, .work, .search, .contact, .testimonials, .partners {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .testimonials {
    @include media('<=LGdesktop' ,'>tablet') {
      max-width: 90%;
      margin-left: auto;
      margin-right: auto;
      border-radius: 5px;
    }
  }

  .form-select, .form-control {
    line-height: 3;
    border: 1px solid #eee;
  }

  .form-select option{
    color: $dark-color;
  }

  .form-select option:first-child{
    color: $secondary-secondary-color;
  }

  .card {
    border: 1px solid #eee;
  }

  .circle-icon {
    padding: 0.6rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 800px;
      margin: 1.75rem auto;
    }
  }

  .center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .typed {
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 100px;
    text-shadow: none;
    padding-top: 6rem;
  }


</style>

<script>
  import Navbar from '../../components/Custom/HomeNavbar'
  import Headliner from '../../components/Custom/Site/Headliner'
  import Services from '../../components/Custom/Site/Services'
  import Partners from '../../components/Custom/Site/Partners'
  import Products from '../../components/Custom/Site/Products'
  import Testimonials from '../../components/Custom/Site/Testimonials'
  import Contacts from '../../components/Custom/Site/Contacts'
  import MainFooter from '../../components/Footer'
  import OpenNav from '../../components/OpenNav'

  export default {
    name: 'Home',
    components: {
      Navbar,
      Headliner,
      Services,
      Partners,
      Products,
      Testimonials,
      Contacts,
      MainFooter,
      OpenNav
    }, 
    data() {
      return {
        title: {status: true, title: 'Your Data', actions: true}, 
        headliner: {
          "backdrop": "1",
          "tagline": "Moran Capital Management",
          "title": "We're the The Future of Wealth Management.",
          "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
          "background_color": "dark",
          "position": "center ",
          "call_to_action": {
              "text": "Contact Us",
              "link": "#contacts",
              "background_color": "info"
          },
          "Kipekee Properties Inc": "title"
        },
        catalogue: {
          "title": "All Featured Properties.",
          "tagline": "See all featured properties here",
          "background_color": "white",
          "call_to_action": {
            "text": "See all properties",
            "link": "properties",
            "background_color": "burgundy"
          }
        },
        services: {
          "title": "What we Do",
          "tagline": "We've built a track record to guarantee you're completely satisfied.",
          "background_color": "light-dark",
          "service-items": [
            {
              "title": "Trust",
              "tagline": "A Proven Track Record",
              "description": "We have established time-tested and refined marketing strategies that will help you sell your property fast. Find the most qualified buyer for your property",
              "align": "right"
            },
            {
              "title": "Support",
              "tagline": "Keeping customers satisfied",
              "description": "We are here to help you every step of the way. The people on our team are always friendly, totally committed to your success. We can handle any questions or requests you have.",
              "align": "left"
            },
            {
              "title": "Negotiation",
              "tagline": "We negotiate for you",
              "description": "Finding properties that meet the needs of our buyers is our top priority. Our process helps you successfully handle offer and negotiation processes.",
              "align": "right"
            }
          ]
        },
        partners: {
          "title": "Trusted by the very best",
          "tagline": "We work with the best to build the best",
          "background_color": "dark",
          "partner-items": [
            {
              "title": "Nabo Capital",
              "link": "https://centum.co.ke/index.php/our-business/nabo",
              "image": "partners/nabo.jpg"
            },
            {
              "title": "Pan Africa Asset Management",
              "link": "https://www.pacassetmanagement.com/about-us/",
              "image": "partners/paam.png"
            },
            {
              "title": "Stanlib",
              "link": "https://stanlib.com",
              "image": "partners/stanlib.png"
            },
            {
              "title": "UAP Insurance",
              "link": "https://www.uapoldmutual.com",
              "image": "partners/uap.png"
            },
            {
              "title": "British American Asset Management",
              "link": "https://www.uapoldmutual.com",
              "image": "partners/baam.jpg"
            }            
          ],
        },
        testimonials: {
          "title": "All Testimonials",
          "tagline": "See what people are saying about us!",
          "color": "white",
          "background_color": "light-dark",
          "testimonial-items": [
            {
              "text": "No words to express my huge gratitude you to you and to the team for the advice you provided. Excellent work!",
              "author": "David Mukabi"
            },
            {
              "text": "We've seen amazing results already.",
              "author": "Hyacinthe V."
            },
            {
              "text": "Thank You! I love the help I was given!",
              "author": "Marybelle"
            },
            {
              "text": "It's really wonderful.",
              "author": "Morris Q."
            }
          ],
        },
        footer: {
          "title": "About Moran Capital.",
          "address": "Vedic House, Mama Ngina Street|Nairobi, Kenya",
          "phone_number": "+254(0)721 349 020",
          "email": "info@morancapital.co.ke",
          "background_color": "light-grey",
          "description": "Moran Capital Management Limited is an Investment Consultancy firm, duly registered and operating in Kenya. We provide consultancy services on Investments to our clients and develops tangible strategies to accomplish targeted goals. This is followed up by providing linkages to reputable service providers as well as managing the relationships.",
          "call_to_action": {
            "text": "Contact us",
            "background_color": "primary",
            "link": "#contacts"
          },
          navigation: [
            {
              "text": "Services",
              "link": "#services",
              "type": "id"
            },
            {
              "text": "What we offer",
              "link": "#products",
              "type": "id"
            },
            {
              "text": "Partners",
              "link": "#partners",
              "type": "id"
            },
            {
              "text": "Testimonials",
              "link": "#testimonials",
              "type": "id"
            },
            {
              "text": "Contacts",
              "link": "#contacts",
              "type": "id"
            }            
          ],
          socials: [
            {
              "social": "twitter",
              "link": "https://www.twitter.com/@mc.gogo_",
              "background_color": "info"
            },
            {
              "social": "instagram",
              "link": "https://www.instagram.com/@mc.gogo_",
              "background_color": "burgundy"
            },
            {
              "social": "facebook",
              "link": "https://www.facebook.com/@mc.gogo_",
              "background_color": "primary"
            }
          ],          
        },
        loading: true
      } 
    },  
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 2000);
    }
  }
</script>
