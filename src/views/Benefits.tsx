import { Grid, NavBar, Tabs } from "antd-mobile";

import { BenefitCard } from "../components/benefit-card/BenefitCard";
import { UserRank } from "../types/UserRank";

export const Benefits = () => {
  return (
    <div>
      <NavBar backArrow={false}>Benefit</NavBar>
      <Tabs defaultActiveKey="0" stretch>
          {BenefitsList.map((item, index) => (
            <Tabs.Tab title={item.categoryTitle} key={index}>
              <Grid columns={2} gap={16}>
                {item.benefits.map((benefit, bi) => (
                  <BenefitCard
                    key={bi}
                    title={benefit.title}
                    content={benefit.description}
                    link={benefit.link}
                    imageSrc={benefit.image}
                    rank={benefit.rank}
                  />
                ))}
              </Grid>
            </Tabs.Tab>
          ))}
      </Tabs>
      <div></div>
    </div>
  );
};


interface BenefitCategory {
  categoryTitle: string;
  benefits: BenefitItem[];  
}

interface BenefitItem {
  title: string;
  description: string;
  link: string;
  image: string;
  rank?: UserRank;
}

const BenefitsList: BenefitCategory[] = [
  {
    categoryTitle: "Popular",
    benefits: [
      // From Lifestyle
      {
        title: "Home Style Makeover",
        description:
          "Win a home styling session with Designwell to elevate your living space.",
        link: "/benefits/designwell-styling",
        image: "/assets/images/designwell.avif",
      },
      // From Interior
      {
        title: "Interior Design Consultation",
        description:
          "A free initial consultation with SWP Interiors to discuss your design needs.",
        link: "/benefits/swp-consultation",
        image: "/assets/images/swp-interiors-logo.avif",
        
      },
      // From Services
      {
        title: "Green Building Consult",
        description:
          "Free consultation on sustainable design for your next project with Pacific Environments.",
        link: "/benefits/pacific-environments-consult",
        image: "/assets/images/pacific-environments-logo.avif",
        rank: 2,
      },
      // From Kitchen
      {
        title: "Designer Kitchenware Kit",
        description:
          "Receive a curated set of kitchenware essentials from Kit & Caboodle.",
        link: "/benefits/kit-caboodle-kit",
        image: "/assets/images/kit-caboodle-logo.avif",
        rank: 2,
      },
    ],
  },
  {
    categoryTitle: "Lifestyle",
    benefits: [
      {
        title: "Free Starbucks Drink",
        description:
          "Collect double stars on Tuesdays, bringing you closer to free drinks and exclusive offers.",
        link: "/benefits/heritage-homes-consult",
        image: "/assets/images/starbucks.png",
      },
      {
        title: "Les Mills On Demand Discount",
        description:
          "Enjoy a 20% discount on Les Mills On Demand, bringing world-class workouts to your home.",
        link: "/benefits/pacific-environment-audit",
        image: "/assets/images/lesmills.png",
        rank: 2,
      },
      {
        title: "AA Home Insurance Safety Bonus",
        description:
          "Earn a 'No Claims' bonus for every year you don’t make a home insurance claim.",
        link: "/benefits/brave-architects-blueprint",
        image: "/assets/images/AA.png",
        rank: 2,
      },
      {
        title: "Life Pharmacy Health Check",
        description:
          "Receive a free health check including blood pressure and BMI measurement on your birthday month.",
        link: "/benefits/designwell-styling",
        image: "/assets/images/life-pharmacy.jpeg",
        rank: 2,
      },
      {
        title: "Architectural Photo Package",
        description:
          "Book a session with Mickey Ross and receive a framed photo collection of your home.",
        link: "/benefits/mickey-ross-photos",
        image: "/assets/images/mickey-ross-logo.png",
        rank: 2,
      },
      {
        title: "Custom Furniture Discount",
        description:
          "Get 15% off custom furniture when you renovate with INLINE Design & Build.",
        link: "/benefits/inline-furniture",
        image: "/assets/images/inline-logo.png",
        rank: 2,
      },
    ],
  },
  {
    categoryTitle: "Interior",
    benefits: [
      {
        title: "Marine Interior Styling",
        description:
          "A special consultation for marine interior design by Parkhurst Design.",
        link: "/benefits/parkhurst-marine-styling",
        image: "/assets/images/parkhurst-design-logo.png",
      },
      {
        title: "Custom Interior Sketch",
        description:
          "A custom interior sketch session with Sandalwood Design's top designers.",
        link: "/benefits/sandalwood-sketch",
        image: "/assets/images/sandalwood-design-logo.png",
      },
      {
        title: "Interior Space Optimization",
        description:
          "10 x 10 Architecture offers a workshop on maximizing your interior space.",
        link: "/benefits/10x10-space-optimization",
        image: "/assets/images/10x10-architecture-logo.png",
      },
      {
        title: "Interior Design Consultation",
        description:
          "A free initial consultation with SWP Interiors to discuss your design needs.",
        link: "/benefits/swp-consultation",
        image: "/assets/images/swp-interiors-logo.png",
      },
      {
        title: "Virtual Home Staging",
        description:
          "Receive a virtual home staging service from The Look for one room.",
        link: "/benefits/the-look-staging",
        image: "/assets/images/the-look-logo.png",
      },
      {
        title: "Kitchen and Bathroom Blueprint",
        description:
          "Bridget Foley offers a complimentary blueprint design for kitchen or bathroom renovation.",
        link: "/benefits/bridget-foley-blueprint",
        image: "/assets/images/bridget-foley-logo.png",
      },
    ],
  },
  {
    categoryTitle: "Services",
    benefits: [
      {
        title: "3D Modelling Session",
        description:
          "A free 3D modelling session for your next project with Morrison Architects.",
        link: "/benefits/morrison-3d-modelling",
        image: "/assets/images/morrison-architects-logo.png",
      },
      {
        title: "Residential Architecture Tour",
        description:
          "Join John Henderson for a tour of award-winning residential projects.",
        link: "/benefits/john-henderson-tour",
        image: "/assets/images/john-henderson-architecture-logo.png",
      },
      {
        title: "Architectural Design Workshop",
        description:
          "Attend a workshop on architectural design fundamentals with 360 Architectural.",
        link: "/benefits/360-architectural-workshop",
        image: "/assets/images/360-architectural-logo.png",
      },
      {
        title: "Green Building Consult",
        description:
          "Free consultation on sustainable design for your next project with Pacific Environments.",
        link: "/benefits/pacific-environments-consult",
        image: "/assets/images/pacific-environments-logo.png",
      },
      {
        title: "Modular Design Discount",
        description:
          "10% off on the design fee for your next modular home with Lambeth Architectural.",
        link: "/benefits/lambeth-architectural",
        image: "/assets/images/lambeth-architectural-logo.png",
      },
      {
        title: "Artisan Woodwork Showcase",
        description:
          "Exclusive access to Joey Chalk’s woodworking workshop and a handcrafted item.",
        link: "/benefits/joey-chalk-showcase",
        image: "/assets/images/joey-chalk-logo.png",
      },
    ],
  },
  {
    categoryTitle: "Kitchen",
    benefits: [
      {
        title: "Borges Kitchen Space Planning",
        description:
          "A free kitchen space planning session with Borges Design.",
        link: "/benefits/borges-kitchen-planning",
        image: "/assets/images/borges-design-logo.png",
      },
      {
        title: "Exclusive Kitchenware Set",
        description:
          "Receive an exclusive designer kitchenware set with any Celia Visser kitchen design service.",
        link: "/benefits/celia-visser-kitchenware",
        image: "/assets/images/celia-visser-design-logo.png",
      },
      {
        title: "Landscape Integration Consult",
        description:
          "Consultation on integrating kitchen spaces with outdoor landscapes by MAXIMARC.",
        link: "/benefits/maximarc-landscape-integration",
        image: "/assets/images/maximarc-logo.png",
      },
      {
        title: "Designer Kitchenware Kit",
        description:
          "Receive a curated set of kitchenware essentials from Kit & Caboodle.",
        link: "/benefits/kit-caboodle-kit",
        image: "/assets/images/kit-caboodle-logo.png",
      },
      {
        title: "Personalized Kitchen Planning",
        description:
          "Complimentary initial kitchen design session with Nicola Cumming.",
        link: "/benefits/nicola-cumming-planning",
        image: "/assets/images/nicola-cumming-logo.png",
      },
      {
        title: "Bathroom Makeover Discount",
        description:
          "Special discount on Celia Visser's bathroom design services.",
        link: "/benefits/celia-visser-bathroom",
        image: "/assets/images/celia-visser-logo.png",
      },
    ],
  },
];
