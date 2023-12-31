import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'

export default class News extends Component {

    states =[
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Lisa Mascaro, Kevin Freking",
            "title": "Ahead of debt ceiling vote, Biden shores up Democrats and McCarthy scrambles for GOP support - The Associated Press",
            "description": "WASHINGTON (AP) — Hard-fought to the end, the debt ceiling and budget cuts package  is heading toward a crucial U.S.",
            "url": "https://apnews.com/article/debt-limit-biden-mccarthy-house-votes-9375cce9b7526b2d0a5728f8d4a18a0a",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/05196ab598a5492c81fe69f2bd93a089/3000.jpeg",
            "publishedAt": "2023-05-31T10:10:28Z",
            "content": "WASHINGTON (AP) Hard-fought to the end, the debt ceiling and budget cuts package is heading toward a crucial U.S. House vote as President Joe Biden and Speaker Kevin McCarthy assemble a coalition of … [+5867 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "North Korea satellite plunges in sea in 'rushed' failure; more launches expected - Reuters",
            "description": "A North Korean satellite launch on Wednesday ended in failure, sending the booster and payload plunging into the sea, North Korean state media said, and the South's military said it had recovered parts of the launch vehicle.",
            "url": "https://www.reuters.com/world/asia-pacific/north-korea-fires-space-satellite-skorea-military-2023-05-30/",
            "urlToImage": "https://www.reuters.com/resizer/xGlL3ZHZkoRN7pQ5UjVfa7h0tc8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6F5PPEG4LVPEJCS5TCZUQOATTI.jpg",
            "publishedAt": "2023-05-31T09:47:00Z",
            "content": "SEOUL/TOKYO, May 31 (Reuters) - A North Korean satellite launch on Wednesday ended in failure, sending the booster and payload plunging into the sea, North Korean state media said, and the South's mi… [+5155 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Bryan Pietsch, Annabelle Timsit",
            "title": "Russia-Ukraine war news: Rising tensions after Moscow drone attack - The Washington Post",
            "description": "Civilian homes in Moscow were attacked for the first time since the war began. Kyiv was also reeling from destruction and deadly debris from downed drones.",
            "url": "https://www.washingtonpost.com/world/2023/05/31/russia-ukraine-war-news/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NMMHNRVBD6RHBVTLBI3KME2W7Q.JPG&w=1440",
            "publishedAt": "2023-05-31T09:44:00Z",
            "content": "Tensions remained high after a rare series of drone attacks in Moscow damaged buildings on Tuesday, the first strikes to hit civilian residences in the Russian capital since the invasion of Ukraine i… [+5982 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Radul Radovanovic",
            "title": "Ethnic Serbs in Kosovo gather in northern town after clashes with NATO-led peacekeepers - The Associated Press",
            "description": "ZVECAN, Kosovo (AP) — Hundreds of ethnic Serbs on Wednesday gathered in a town in northern Kosovo, days after clashes that injured 30 soldiers from a NATO-led peacekeeping force and over 50 Serbs, provoking fears of a renewal of the region's bloody conflicts …",
            "url": "https://apnews.com/article/kosovo-serbia-nato-confrontation-52f7462d31890879b2de0edb732be830",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/0b06ea4a76f1475fa3bad40c98309bed/3000.webp",
            "publishedAt": "2023-05-31T09:22:30Z",
            "content": "ZVECAN, Kosovo (AP) Hundreds of ethnic Serbs on Wednesday gathered in a town in northern Kosovo, days after clashes that injured 30 soldiers from a NATO-led peacekeeping force and over 50 Serbs, prov… [+3492 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Shares drop ahead of US debt ceiling vote; China data rattles nerves - Reuters",
            "description": "Global shares fell on Wednesday ahead of a crucial vote in Washington on the U.S. debt ceiling, while commodities and the Chinese yuan came under pressure after data highlighted faltering growth in the world’s second-largest economy.",
            "url": "https://www.reuters.com/market  s/global-markets-wrapup-1-2023-05-31/",
            "urlToImage": "https://www.reuters.com/resizer/5oAcH8eADZJR5XHRgYCfPx8ijGQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NACYHEY3JFNEDASRVUMXGCAOOQ.jpg",
            "publishedAt": "2023-05-31T09:20:00Z",
            "content": "LONDON, May 31 (Reuters) - Global shares fell on Wednesday ahead of a crucial vote in Washington on the U.S. debt ceiling, while commodities and the Chinese yuan came under pressure after data highli… [+3802 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jihye Lee, Lim Hui Jie",
            "title": "Hong Kong slides to new 2023 low; Asia markets mixed as China's factory activity contracts - CNBC",
            "description": "Asian markets trade mixed as Republican opposition to the debt ceiling deal grows",
            "url": "https://www.cnbc.com/2023/05/31/asia-markets.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107227505-1681869615602-gettyimages-1172965063-pano0tty001-pano.jpeg?v=1685490158&w=1920&h=1080",
            "publishedAt": "2023-05-31T08:27:00Z",
            "content": "American chipmakers embroiled in the U.S.-China chip war are going to push back if Washington imposes more export controls on China, said Carol Schleif, chief investment officer at U.S.-based BMO Fam… [+1134 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "Felicia Schwartz",
            "title": "Pentagon accuses Chinese fighter jet of 'aggressive' action near US plane - Financial Times",
            "description": "Defence department says incident took place in South China Sea on Friday",
            "url": "https://www.ft.com/content/c8b9d754-a782-4f98-8944-881573c606a8",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F43815b35-bc9b-4a1d-b6c5-febe1fe8c15e.jpg?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2023-05-31T07:39:25Z",
            "content": "A Chinese fighter jet performed an unnecessarily aggressive manoeuvre near a US military aircraft that was flying over the South China Sea last week, the Pentagon said on Tuesday.\r\nThe US Indo-Pacifi… [+3270 chars]"
        },
        {
            "source": {
                "id": "axios",
                "name": "Axios"
            },
            "author": "Axios",
            "title": "Venice's Grand Canal turns neon green due to fluorescein, officials say - Axios",
            "description": null,
            "url": "https://www.axios.com/2023/05/30/venice-grand-canal-neon-green-fluorescein",
            "urlToImage": null,
            "publishedAt": "2023-05-31T07:17:59Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Rosy Cordero",
            "title": "‘Ted Lasso’ Neatly Wraps Story Of Jason Sudeikis’ Character In Season 3 (And Series?) Finale - Deadline",
            "description": "SPOILER ALERT: The following reveals major plot points from the Season 3 finale of Apple’s Ted Lasso. The biggest question about the Season 3 finale of Apple TV+’s hit Ted Lasso is whet…",
            "url": "https://deadline.com/2023/05/ted-lasso-season-3-finale-recap-spoilers-1235383274/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2023/05/Ted_Lasso_Photo_030904.jpg?w=1024",
            "publishedAt": "2023-05-31T06:33:00Z",
            "content": "SPOILER ALERT: The following reveals major plot points from the Season 3 finale of Apple’s Ted Lasso.\r\nThe biggest question about the Season 3 finale of Apple TV+’s hit Ted Lasso is whether or not it… [+9001 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Andrea Blanco",
            "title": "Iowa building collapse – live: Davenport officials stall apartment demolition after admitting five missing - The Independent",
            "description": "Local residents say Branden Colvin and Ryan Hitchcock are still unaccounted for",
            "url": "https://www.independent.co.uk/news/world/americas/iowa-apartments-davenport-building-collapse-b2348648.html",
            "urlToImage": "https://static.independent.co.uk/2023/05/29/14/fd49eabdbb2548078c3b4c57b1a7f2e1.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-05-31T06:30:01Z",
            "content": "Demolition plans laid out as two tenants feared trapped under wreckage \r\nFire Marshall J Morris said on Tuesday that authorities faced a challenging decision, as experts recommend a demolition as soo… [+2700 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Mike Wall",
            "title": "SpaceX launches 52 Starlink satellites, lands rocket on ship at sea - Space.com",
            "description": "Starlink satellites keep going up.",
            "url": "https://www.space.com/spacex-starlink-launch-group-2-10",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/i7e82vWgsFm6KLUpzNxJqQ-1200-80.jpeg",
            "publishedAt": "2023-05-31T06:28:41Z",
            "content": "SpaceX launched 52 more of its Starlink broadband satellites early Wednesday morning (May 31) and landed the returning rocket on a ship at sea.\r\nA Falcon 9 rocket topped with the 52 Starlink spacecra… [+2198 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "As 76ers' new coach, Nick Nurse is tasked with taking a theoretically top-tier team to the top ... again - CBS Sports",
            "description": "The 2020 Coach of the Year is going to a new place, but he'll be in a familiar position",
            "url": "https://www.cbssports.com/nba/news/as-76ers-new-coach-nick-nurse-is-tasked-with-taking-a-theoretically-top-tier-team-to-the-top-again/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/05/30/5b08014f-baf2-4702-9f88-5d6b4b0ffabe/thumbnail/1200x675/6b672d7e38d8a344ca096a10a5398d6c/nick-nurse-getty-1.png",
            "publishedAt": "2023-05-31T05:48:00Z",
            "content": "Nick Nurse understands he's not going to be judged by regular-season wins. He's taking over a team that is perennially near the top of the Eastern Conference standings, but has ended consecutive seas… [+8156 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Suntimes.com"
            },
            "author": "Georgia Nicols",
            "title": "Horoscope for Wednesday, May 31, 2023 - Chicago Sun-Times",
            "description": null,
            "url": "https://chicago.suntimes.com/2023/5/31/23736723/horoscopes-today-wednesday-may-31-2023",
            "urlToImage": "https://cst.brightspotcdn.com/dims4/default/e5a86f5/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FeKCl0cijSN2Y3GtypzeJTmVbOn8%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24680557%2FGeorgia_mug.jpeg",
            "publishedAt": "2023-05-31T05:02:41Z",
            "content": "Moon Alert\r\nCaution! Avoid shopping or major decisions from 9:30 a.m. to 7 p.m. Chicago time. After that, the moon moves from Libra into Scorpio.\r\nAries (March 21-April 19)\r\nA tricky day! Most of thi… [+3839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Carly Thomas",
            "title": "Al Pacino Expecting Child With Girlfriend Noor Alfallah - Hollywood Reporter",
            "description": "This marks the 83-year-old actor's fourth child, including a daughter he shares with ex-girlfriend Jan Tarrant and twins he shares with Beverly D'Angelo.",
            "url": "https://www.hollywoodreporter.com/news/general-news/al-pacino-expecting-child-baby-girlfriend-noor-alfallah-1235504052/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/Al-Pacino-getty-1353704069-H-2023.jpg?w=1024",
            "publishedAt": "2023-05-31T04:56:14Z",
            "content": "Al Pacino and his girlfriend Noor Alfallah are expecting a child, his rep confirmed to The Hollywood Reporter.\r\nAlthough his rep didn’t share details on their relationship, TMZ, who was the first to … [+1214 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Elon Musk: Tesla boss on first China trip in over three years - BBC",
            "description": "The multi-billionaire has not yet publicly commented on the visit, which comes amid US-China tensions.",
            "url": "https://www.bbc.com/news/business-65762114",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/115A1/production/_129937017_1c35036499b393c0bd2a148142e9aa54864c63d8.jpg",
            "publishedAt": "2023-05-31T04:38:39Z",
            "content": "Tesla chief executive Elon Musk is in China, as he makes his first trip to the world's second largest economy in over three years.\r\nHe arrived in Beijing on Tuesday and is also expected to visit Tesl… [+4016 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Katherine Donlevy, Marjorie Hernandez",
            "title": "Nine teens arrested over brutal beating of three Marines on California beach - New York Post ",
            "description": "Four males and one female were charged with assault with a deadly weapon and were admitted to the juvenile hall, Orange County Sheriff’s Department announced.",
            "url": "https://nypost.com/2023/05/31/nine-teens-arrested-over-brutal-beating-of-three-marines-on-california-beach/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/05/marines-beaten-fireworks-comp.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2023-05-31T04:24:00Z",
            "content": "Nine teenagers were arrested Tuesday in connection with the brutal on-camera beatdown of three Marines on a California beach over the weekend, authorities said.\r\nFour males and one female were charge… [+2328 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Vincent Goodwill",
            "title": "NBA Finals matchup of Nuggets-Heat shows why the regular season — all 82 games — still matters - Yahoo Sports",
            "description": "The race to finish the regular season, with the play-in tournament being featured so prominently should mean an end to the criticism of the 82-game schedule.",
            "url": "https://sports.yahoo.com/nba-finals-matchup-of-nuggets-heat-shows-why-the-regular-season--all-82-games--still-matters-041152572.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/zDLUgxcX9qiSBzHLkMY_UA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MzI-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/18d0b0a0-f9ff-11ed-9791-8483d732fcc3",
            "publishedAt": "2023-05-31T04:11:00Z",
            "content": "That sound of silence is the first day in some time the NBA didnt have a high-stakes competition on the horizon, a much-needed exhale before the Finals begin in two days.\r\nIt hasnt just been the unpr… [+5797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Webb Space Telescope Detects 6000-Mile Water Plume Jetting From Saturn's Moon Enceladus - SciTechDaily",
            "description": "Interaction between moon’s plumes and Saturn’s ring system explored with Webb Enceladus—a tiny, icy moon of Saturn—is one of the most intriguing objects in the search for signs of life beyond our own planet. Under a crust of ice lies a global ocean of salty w…",
            "url": "https://scitechdaily.com/webb-space-telescope-detects-6000-mile-water-plume-jetting-from-saturns-moon-enceladus/",
            "urlToImage": "https://scitechdaily.com/images/Cassini-Flying-Through-Plumes-on-Enceladus.jpg",
            "publishedAt": "2023-05-31T03:13:11Z",
            "content": "BySpace Telescope Science InstituteMay 30, 2023\r\nArtists impression of the Cassini spacecraft flying through plumes erupting from the south pole of Saturns moon Enceladus. These plumes are much like … [+12425 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Steve Contorno",
            "title": "DeSantis says he’ll ‘counterpunch’ against Trump attacks after kicking off 2024 campaign in Iowa - CNN",
            "description": "Florida Gov. Ron DeSantis said he plans to “counterpunch” against former President Donald Trump’s attacks after kicking off his 2024 campaign in Iowa on Tuesday.",
            "url": "https://www.cnn.com/2023/05/30/politics/desantis-iowa-2024/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230530135259-ron-desantis-230310-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-05-31T02:59:00Z",
            "content": "Florida Gov. Ron DeSantis said he plans to counterpunch against former President Donald Trumps attacks after kicking off his 2024 campaign in Iowa on Tuesday.\r\nThe Florida governor implicitly poked f… [+8511 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sandee LaMotte",
            "title": "Cognitive decline accelerates after heart attack, study finds - CNN",
            "description": "Cognitive decline increases sharply in the years following a heart attack, according to a new study, but doctors do not yet know why.",
            "url": "https://www.cnn.com/2023/05/30/health/cognitive-decline-heart-attack-wellness/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230529133803-man-chest-pain-stock.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-05-31T01:44:00Z",
            "content": "Having a heart attack may put you at risk of accelerated cognitive decline in later years, above and beyond what is considered appropriate for the aging mind, according to a new study.\r\nEveryones bra… [+3775 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
            state : this.states,
            loading: false
        }
    }

    async componentDidMount(){
        let url =  "https://newsapi.org/v2/everything?q=tesla&from=2023-05-05&sortBy=publishedAt&apiKey=c25c45f5a758475c8ff797da3b521a4e"
        let data = await fetch(url);
    }

  static propTypes = {
    prop: PropTypes
  }

  render() {
    const line ={
        height:'5px',
        color:'#EA5455'
    }
    return (
      <>
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col-md-3">
                    <h2 className='float-right'>Flash News - <hr className='line' style={line}/></h2>
                    
                </div>
                <div className="col-md-9" style={{color:'#EA5455'}}>
                    <marquee className='col' behavior="" direction=""> <h2>Hot Headlines</h2></marquee> 
                </div>
            </div>        
            
            <div className="row">
            {this.state.state.map((element)=>{
                    return <div className="col-md-4 mb-3 col-sm-12" key={element.url}>
                    <NewsItems title={element.title.slice(0,40)} description={element.description} imgUrl={element.urlToImage} detailLink={element.url} publishedAt={element.publishedAt}/>
                </div>  
                })};
            </div>
        </div>
      </>
    )
  }
}
