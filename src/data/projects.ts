export enum ItemType {
  IMAGE
}

export const projects = {
  allure: {
    cover: require('~assets/images/portfolio/allure/cover.jpg'),
    description:
      'The CEO of Allure Media requested a series of posters to be debuted at the company All-In for the quarter. The request was to create something that spurred the viewer and to lift company morale - a ‘shot in the arm’. The poster series have a grungy vibe, a tone that is not corporate. The theme of the posters was the Allure PACT, and the strong imagery reflects this. Accompanying the type, there is a lot of symbols that illustrate motion, and the whole poster has a busy-ness to evoke emotion in the viewer. The first poster is the central poster describing the whole PACT, while posters 2-4 were peripheral posters situated around the office to draw people in.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allure/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allure/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allure/3.jpg')
      }
    ],
    title: 'Allure All-In Posters'
  },
  allureRefresh: {
    cover: require('~assets/images/portfolio/allureRefresh/cover.jpg'),
    description:
      'A brief from the National Sales Manager of Allure Media to refresh some of Allure’s branding. The new colours were selected to stand out, based on research of other media brands in market. The main colour, Robin’s Egg Blue, in combination with it’s accent colour give off a fresh, and premium vibe. Raleway was selected as the new typeface, a geometric sans-serif to give off a modern, and no nonsense vibe. The style of illustration and iconography is reflective of modern web icon trends, which is fitting for a digital media company. These branding touch-points were employed in all external facing collateral.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allureRefresh/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allureRefresh/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allureRefresh/3.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allureRefresh/4.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allureRefresh/5.jpg')
      }
    ],
    title: 'Allure Brand Refresh'
  },
  allureSocial: {
    cover: require('~assets/images/portfolio/allureSocial/cover.jpg'),
    description:
      'The Allure Social Committee (ASC) requested invite designs for each of their events and functions. Each event was usually themed, and this was asked to be reflected in the designs of the invites. Invites and designs for ASC were usually free from Allure Branding. The main concern expressed by the committee was legibility and readability, as these invites were to be printed at various sizes as per brief requirements and displayed around the office at certain points.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allureSocial/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allureSocial/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/allureSocial/3.jpg')
      }
    ],
    title: 'Allure Social Committee'
  },
  businessInsider: {
    cover: require('~assets/images/portfolio/businessInsider/cover.jpg'),
    description:
      'Editor-in-chief of Business Insider Australia wanted to add a ‘research’ vertical to the site that was sponsored by the Commonwealth Bank of Australia. The vertical would comprise of migrated and local articles that were based on research and data evaluation. The editor-in-chief wanted it to look similar to the other verticals, but still differentiated for users to know they were on /research. Placement of the segments was considered to enhance the UX for the reader.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/businessInsider/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/businessInsider/2.jpg')
      }
    ],
    title: 'Business Insider Research Vertical'
  },
  commercial: {
    cover: require('~assets/images/portfolio/commercial/cover.jpg'),
    description:
      'This section includes designs for paid digital ads mock-ups of ads, and idea slides for the sales team to pitch to clients. Working very closely with the commercial team to ideate and find the ideal way to communicate ideas. This required in depth knowledge of the advertising formats as well as research on the brands being partnered with. Often having to learn and follow strict brand guidelines in quick turnover times to produce viable designs. Certain responses also required the transitioning and/or functioning of the ad to be animated in a video mock.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/commercial/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/commercial/2.jpg')
      }
    ],
    title: 'Commercial Design'
  },
  dnWedding: {
    cover: require('~assets/images/portfolio/dnWedding/cover.jpg'),
    description:
      'Stationery and signage suite for the wedding of Natalie and Daniel. The theme of the wedding was Bohemian, with a colour scheme that consisted of deep burgundies, and washed out greens. The client wanted a design that was moody, but retained some of the classic wedding vibe. An accent navy was used to add an edge, as well as a premium quality to the designs.\n\nThe central element was the D&N monogram that is recurring in each of the pieces. The design thinking behind the overall design theme was to create a moody, modern feel, used by colours and type, which also enhanced the legibility of signage and invitation information. Allusions to the ‘classic wedding’ was achieved through the use of floral illustrations, and classic wedding style layouts.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/dnWedding/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/dnWedding/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/dnWedding/3.jpg')
      }
    ],
    title: 'D&N Wedding'
  },
  hp: {
    cover: require('~assets/images/portfolio/hp/cover.jpg'),
    description:
      'Longform sponsored article and infographic for a Gizmodo and Business Insider collaboration, sponsored by HP. The article covered a sculpture, called ‘The Beast’, that was built solely from recovered plastic from the ocean. The aim of the venture was to shine light on the amount of plastic debris and waste that is currently afloat in the ocean, and consequently HP’s sustainable manufacturing processes.\n\nCopy and stock imagery assets were supplied by the Gizmodo commercial content editor. Being sponsored content, the design required HP branded typography and colours with a premium web article feel. Full width, eye-catching, edited imagery were used to highlight the effects of plastic in the ocean. Effective transitions add an immersive feel and further highlight the point.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/hp/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/hp/2.png')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/hp/3.jpg')
      }
    ],
    title: "Plastic: The Ocean's Deadliest Predator"
  },
  melanoma: {
    cover: require('~assets/images/portfolio/melanoma/cover.jpg'),
    description:
      'Pattern, and press-ready finished art for a gift box to be given to contestant winners in a promotion run by Who What Wear. Designed to knifeline and printer’s specifications. Pattern was created from an illustration provided by Who What Wear. It uses Who What Wear branded colours, typography and styling to form sleek quality packaging.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/melanoma/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/melanoma/2.jpg')
      }
    ],
    title: '#CallTimeOnMelanoma Box Design'
  },
  sibc: {
    cover: require('~assets/images/portfolio/sibc/cover.jpg'),
    description:
      'Logo and illustration for the breakdance crew Style is Bond. The clients wanted designs that were bold and had a vintage appeal to it. They requested a logo with the fist as it represented their farewell signatures.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/sibc/sibc-logo.png')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/sibc/sibc-train.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/sibc/sibc-tunnel.jpg')
      }
    ],
    title: 'Style Is Bond Crew'
  },
  slideSpace: {
    cover: require('~assets/images/portfolio/slideSpace/cover.jpg'),
    description:
      'A personal project. It consists of logo, branding and functional packaging design for microscope slides. The packaging solves the spatial issues on a cluttered laboratory workbench, environmental sustainability issues with current packaging, and adds an innovative slide drying mechanism that reduces the hazards involved with the use of open air slides. Package design and branding is targeted towards scientists and lab managers. Clear and concise, with colour coded blocks representing the type of slide, that make the boxes identifiable from every angle.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/slideSpace/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/slideSpace/2.jpg')
      }
    ],
    title: 'SlideSpace'
  },
  uvPro: {
    cover: require('~assets/images/portfolio/uvPro/cover.jpg'),
    description:
      'Business card designs for a small window tinting company. Logo was supplied by the client. The bulk of their business comes from car window tints, as such it was fitting to centre the design on cars. He also wanted his branding to be edgy and cool. The look and feel of the business card was developed around UV Pro’s logo. Darker colours and imagery give an edgy, premium feel. Clean and modern sans serif type was combined with minimalism to maintain the theme. Finally, a spot UV was added to the logo and the car windows, to mimic the tint. This was done to highlight the quality and reiterate the type of work that UV Pro carries out.',
    items: [
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/uvPro/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/uvPro/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/portfolio/uvPro/3.jpg')
      }
    ],
    title: 'UV Pro'
  }
}
