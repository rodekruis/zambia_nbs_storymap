import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { chapters } from '../config/options';
import accessibility from '../../data/assets/accessibility.jpg';
import buildings from '../../data/assets/buildings.png';
import elevation from '../../data/assets/elevation.png';
import southkafue from '../../data/assets/southkafue.png';
import precip from '../../data/assets/precip.png';
import floodDrought from '../../data/assets/floodDrought.png';
import chart from '../../data/assets/chart.png';
import evacCenters from '../../data/assets/evac_centers.png';
import popHazard from '../../data/assets/pop_hazard.png';
import idealCoverage from '../../data/assets/ideal_coverage.png';
import sampaguita from '../../data/assets/sampaguita_gym.png';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  setActiveChapter = (newChapter) => {
    const { chapterName, updateChapter } = this.props;

    if (newChapter === chapterName) return;

    document.getElementById(newChapter).setAttribute('class', 'active');
    document.getElementById(chapterName).setAttribute('class', '');

    updateChapter(newChapter);
  }

   isElementOnScreen = (id) => {
     const element = document.getElementById(id);
     const bounds = element.getBoundingClientRect();
     return bounds.top < window.innerHeight && bounds.bottom > 0;
   }

  handleScroll = (e) => {
    const chapterNames = Object.keys(chapters);
    let i;

    for (i = 0; i < chapterNames.length; i += 1) {
      const chapterName = chapterNames[i];
      if (this.isElementOnScreen(chapterName)) {
        this.setActiveChapter(chapterName);
        break;
      }
    }
  }
  render() {
    return (
      <div id="features" onScroll={this.handleScroll}>
        <section id="marikina" className="active">
          <Typography variant="h5">Zambia NBS Project</Typography>
          <Typography>Nature-based solutions (NBS) are interventions that work with, rather than against, nature to address societal challenges. In the case of disaster risk reduction, NBS can help to reduce the impact of natural disasters by enhancing the natural resilience of ecosystems and communities.The NBs project is currently in site selection stage for the desktop research.
          NBs project is considering existing flood and drought risks on humans and biodiversity during the site selection stage. This approach can help to minimize the negative impacts of the project on the environment and local communities. To guide the desktop research site selection process, we will consider the following steps:
          <ul>
            <li>Identify areas with a history of flooding and drought: Use available data and maps to identify areas that have experienced floods and droughts in the past. </li>
            <li>Assess the impact of flooding and drought on humans and biodiversity: Once we have identified areas with a history of flooding and drought, we will assess the impact of these events on humans and biodiversity in the area </li>
            <li>Consider existing infrastructure and land use</li>
            <li>Engage with local communities and stakeholders: It's important to engage with local communities and stakeholders throughout the site selection process. They can provide valuable insights into the risks and impacts of flooding and drought in the area.</li>
          </ul>
          Based on the evidence of flood and drought risk collected so far, the potential site for the desktop study will be in the <span class="highlight">Kafue flats and Barotse plains</span>. Kafue Flats is one of the designated RAMSA(The Ramsar Convention) sites in the Zambezi River Basin. The Kafue Flats, covering an area of <span class="highlight">6500 sq. km</span>   in Zambia, face a number of competing demands from various users. For instance, the Kafue Gorge Dam which produces about half the hydropower electricity generation for Zambia is located in Kafue Flats. In response to raising awareness of the already stressed Kafue Flats, WWF Zambia has been working to highlight some of the challenges in the Kafue Flats
          </Typography>
          <Typography variant="h6">CLIMATE &amp; ANNUAL PRECIPITATION</Typography>
          <Typography>
            Zambia experiences a predominantly sub-tropical climate characterized by three distinct seasons: a hot and dry season (mid-August to mid-November), a wet rainy season (mid-November to April) and a cool dry season (May to mid-August). Rainfall is strongly influenced by the movement of the Inter-Tropical Convergence Zone (ITCZ) as well as the El Niño/Southern Oscillation (ENSO) phenomenon and varies from an annual average of <span class="highlight">600 mm</span>  in the lower south up to <span class="highlight">1300 mm</span> in the upper north of the country. Climate is tropical by location near the equator. The annual rainfall in Zambia averages between <span class="highlight">700 mm</span> in the south and <span class="highlight">1400 mm</span> in the north. The hot months are very dry, receiving almost no rainfall between May and August. The wet season (September-April) rainfall is controlled by the passage of the tropical rain belt (also known as the Inter‐Tropical Conversion Zone, ITCZ) which oscillates between the northern and southern tropics over the course of a year, bringing rain between October and April of <span class="highlight">150‐300 mm</span>  per month. Variations in the movements of the ITCZ can cause large variations in the rainfall received from one year to the next. Rainfall in Zambia is also strongly influenced by the El Niño Southern Oscillation (ENSO), which causes further inter‐annual variability. El Niño conditions (warm phase) bring drier than average conditions in the wet summer months (December-February) in the southern half of the country, whilst the north of the country simultaneously experiences significantly wetter‐than average conditions. The reverse pattern occurs with La Niña (cold phase) episodes, with dry conditions in the north and wet conditions in the south.(<i>Source: <a href="https://climateknowledgeportal.worldbank.org/country/zambia/climate-data-historical" target="_blank">worldbank</a></i>).        
          </Typography>
          <br></br>
          <img class="figure" src={chart} alt="Monthly Climatology of Zambia (1991-2020)"></img>
          <br></br>
          <Typography variant="h6"> FLOOD &amp; DROUGHT RISK</Typography>
          <Typography>
          Zambia is vulnerable to both flood and drought risks due to its location in southern Africa, where climate variability and extreme weather events are common. The country's climate is largely characterized by a wet season from November to April and a dry season from May to October. During the wet season, heavy rainfall can lead to flooding in low-lying areas, causing displacement, destruction of infrastructure, and loss of livelihoods. In recent years, Zambia has experienced several severe floods, including in <span class="highlight">2007, 2010, 2017, 2019, and 2023</span> . These floods have affected thousands of people and caused significant damage to infrastructure and crops. On the other hand, during the dry season, the lack of rainfall can lead to drought conditions, which can severely impact agriculture, water resources, and health. Droughts can result in crop failures, livestock deaths, and water scarcity, leading to food insecurity and malnutrition. In <span class="highlight">2019</span>, Zambia declared a national disaster due to a severe drought that affected over <span class="highlight">2.3 million</span>  people. Climate change is expected to exacerbate the flood and drought risks in Zambia, with projected increases in the frequency and intensity of extreme weather events. Addressing these risks will require a combination of measures, this project will conduct a desktop study to identify nature-based solutions to address these risks.    
          <br></br>    
          </Typography>
          <Typography variant="h6"> COMBINED RISK SCORE FOR FLOOD &amp; DROUGHT</Typography>
          <Typography>
          Below, we describe the methodology used to calculate the combined risk score for drought and flood hazards in a particular district. The methodology involves the following steps:
          <ul>
            <li>Collecting historical data on reported drought and flood impacts in the district, which helps to understand the frequency of these impactful hazards.</li>
            <li>Using this data, calculating the frequency of occurrence of droughts and floods in the district. This frequency is a measure of how often impact from these hazards have been reported in the past.</li>
            <li>Normalizing the frequency of occurrence of each hazard. This means adjusting the frequency score to a common scale, so that the risk score for both hazards can be compared fairly.</li>
            <li>Calculating the risk score for each hazard based on the normalized frequency. The risk score is a measure of how likely the hazard is to occur in the future.</li>
            <li>Finally, calculating the combined risk score for both hazards by taking the average of the two scores. This gives an overall measure of the risk of experiencing either a drought or a flood in the district.</li>
          </ul>
          Overall, this process helps to understand the risk of experiencing drought or flood in a particular district based on historical data, it can be used to inform decisions on prioritizing the most affected areas for the desktop research of the NBS project.
          </Typography>
         </section>
         <Typography variant="h7">Project implementation Partners </Typography>
          <Typography>
            <ul>
            <li> <a href="https://www.rodekruis.nl/en/" target="_blank">Rode Kruis</a></li>
            <li> <a href="https://www.wwf.nl/" target="_blank">WWF Netherlands</a></li>
            <li> <a href="https://www.wwfzm.panda.org/" target="_blank">WWF Zambia</a></li>
            <li> <a href="https://www.redcross.org.zm/" target="_blank">Zambia Red Cross Society</a></li>
            <li> <a href="https://www.510.global/" target="_blank">The Netherlands Red Cross</a></li>
            </ul>
          </Typography>


      </div>
    );
  }
}

Panel.propTypes = {
  chapterName: PropTypes.string.isRequired,
  updateChapter: PropTypes.func.isRequired,
};
