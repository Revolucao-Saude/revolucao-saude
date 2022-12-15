import './Sobre.css'
import pedro from "../../assets/images/pedro.jpg";
import ismael from "../../assets/images/ismael.jpg";
import lilian from "../../assets/images/lilian.jpg";
import marcos from "../../assets/images/marcos.jpg";
import anderson from "../../assets/images/anderson.jpg";
import alice from "../../assets/images/alice.jpg";
import joao from "../../assets/images/joao.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid } from '@material-ui/core';


export default function SobreNos() {
  return (
    <Grid container>
    <div id='model3'>
        <h1 className='model-title'>Colaboradores</h1>
        <div className="divider"></div>
        <div className="members">
        <Grid container item>
          <Grid item>
          <div className="member">
            <img width={200} height={200} src={pedro}/>
            <div className="description">
                <h1>Pedro Rosa</h1>
                <div className="social-media">
                <a target="_blank" href="https://github.com/pedrorosadev">
                  <GitHubIcon  color="inherit" />
                  </a>
                  <a target="_blank" href= "https://www.linkedin.com/in/pedro-rosa19/">
                  <LinkedInIcon />
                  </a>
                </div>
            </div>
          </div>
      </Grid>
      <Grid item>
          <div className="member">
            <img width={200} height={200} src={ismael}/>
            <div className="description">
                <h1>Ismael Finamore</h1>
                <div className="social-media">
                <a target="_blank" href="https://github.com/IsmaelMF9469">
                  <GitHubIcon  color="inherit" />
                  </a>
                  <a target="_blank" href= "https://www.linkedin.com/in/ismael-melo-finamore-884195238/">
                  <LinkedInIcon />
                  </a>
                </div>
            </div>
          </div>
    </Grid>
          <Grid item>
          <div className="member">
            <img width={200} height={200} src={lilian}/>
            <div className="description">
                <h1>Lilian Magalhães</h1>
                <div className="social-media">
                <a target="_blank" href="https://github.com/lilianguima">
                  <GitHubIcon  color="inherit" />
                  </a>
                  <a target="_blank" href= "https://www.linkedin.com/in/l%C3%ADlian-magalh%C3%A3es-guimar%C3%A3es-7031b1205/">
                  <LinkedInIcon />
                  </a>
                </div>
            </div>
          </div>
          </Grid>
          <Grid item>
          <div className="member">
            <img width={200} height={200} src={marcos}/>
            <div className="description">
                <h1>Marcos Da Silva </h1>
                <div className="social-media">
                <a target="_blank" href="https://github.com/MarcosDaSilvaGomes">
                  <GitHubIcon  color="inherit" />
                  </a>
                  <a target="_blank" href= "https://www.linkedin.com/in/marcos-silva-gomes-380325206/">
                  <LinkedInIcon />
                  </a>
                </div>
            </div>
          </div>
          </Grid>
    </Grid> 
    <Grid container item justifyContent='center'>
          <Grid item>
          <div className="member">
            <img width={200} height={200} src={alice}/>
            <div className="description">
                <h1>Ana Alice</h1>
                <div className="social-media">
                <a target="_blank" href="https://github.com/anaalicefortuna">
                  <GitHubIcon  color="inherit" />
                  </a>
                  <a target="_blank" href= "https://www.linkedin.com/in/anaalicefortuna/">
                  <LinkedInIcon />
                  </a>
                </div>
            </div>
          </div>
    </Grid> 
        <Grid item>
         <div className="member">
            <img width={200} height={200} src={anderson}/>
            <div className="description">
                <h1>Anderson Silva</h1>
                <div className="social-media">
                <a target="_blank" href="https://github.com/AndersonMSilva91">
                  <GitHubIcon  color="inherit" />
                  </a>
                  <a target="_blank" href= "https://www.linkedin.com/in/Anderson-MSilva91/">
                  <LinkedInIcon />
                  </a>
                </div>
            </div>
          </div>     
          </Grid>
          <div className="member">
            <img width={200} height={200} src={joao}/>
            <div className="description">
                <h1>João Marcos</h1>
                <div className="social-media">
                <a target="_blank" href="https://github.com/jmbarreto">
                  <GitHubIcon  color="inherit" />
                  </a>
                  <a target="_blank" href= "https://www.linkedin.com/in/jo%C3%A3o-marcos-b37704250/">
                  <LinkedInIcon />
                  </a>
                </div>
            </div>
          </div>
    </Grid>
        </div>
    </div>
  </Grid>
  );
}