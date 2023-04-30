import './assets/css/infoCard.css';


const InfoCards = (props) => {
    return(<section class="col-md-3 my-3 cards mx-3">
          <span class="main-icon">
            <i class="fas fa-users"></i>
          </span>
          <h4 class="mx-2">{props.title}</h4>
          <p class="px-4">{props.description}</p>
    </section>)
}

const WhatWeDo = (props) => {
    const cardDetails = [
        {title: "Industry Connections", description: "Get to know industry professionals, gain exposure to technical talks and the chance to build career connections!"},
        {title: "Workshops", description: "Expand your skillset and get some hands-on experience! Workshops are taught by industry and student experts!"},
        {title: "Hackathons", description: "Come and compete for the chance to win prize money, gain some technical experience, and to put your ideas to the test!"}
    ];
    return(<div class="section px-2 py-4 text-center">
      <h3 class="mt-5 section-title">What We Do</h3>
      <div class="row d-flex justify-content-center py-5 mx-2">
        {cardDetails.map((detail) => {return <InfoCards {...detail}/>})}
      </div>
    </div>)
}

export default WhatWeDo;