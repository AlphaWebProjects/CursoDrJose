import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import doc from '../img/doc.jpg';
import GuilhermeFranca from '../img/GuilhermeFranca.jpeg'
import MarcelaRahal from '../img/MarcelaRahal.jpeg'
import Isabele from '../img/Isabele.jpeg'
import GuilhermeRossi from '../img/GuilhermeRossi.jpeg'
import Caroline from '../img/Caroline.png'
import background from '../img/Background2.png'
function Depoimentos() {

  const [isVisible, setIsVisible] = useState(false);

  const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

      setTimeout(() => {
        setIsVisible(true);
      }, 200); // Altera a opacidade após 1 segundo

      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };

    }, []);

    return (
        <Container>
        <MainContentEquipe>
          <CenterContent>
          <h1>Como é a experiência dos nossos alunos? </h1>
          <Members  isVisible={isVisible}>

          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            navigation={width > 1200 ? true : false}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            slidesPerView={1}
            spaceBetween={40}
            autoplay={{
              delay: width > 1200 ? 3500 : 6000,
              disableOnInteraction: true,
            }}
            
          >

            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={MarcelaRahal} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>Marcela Rahal</h2>
                <h3>Estudante de medicina</h3>
                <p>"Um dos maiores medos do estudante de medicina prestes a se formar é o de, no momento de um plantão, não conseguir oferecer um manejo adequado de vias aéreas ao seu paciente. 
                  Posso dizer com propriedade que esse é o grande diferencial do Simva. Profissionais extremamente capacitados que trazem, de forma prática e didática, 
                  um treinamento cheio de conteúdo e macetes, a fim de que o recém formado consiga conduzir a situação de forma muito mais organizada e correta. 
                  Foi, sem dúvidas, um dos melhores cursos que já participei, se não o melhor. Indico de olhos fechados. Tenho certeza de que, assim como foi crucial para minha formação, também será para a de muitos futuros médicos."
                  </p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={GuilhermeFranca} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>Guilherme Aguiar França</h2>
                <h3>Estudante de medicina</h3>
                <p> "Os caminhos para aprimorar as técnicas aprendidas na faculdade podem ser árduos. E se imaginar um dia aplicando toda teoria estudada em livros, na prática, em um paciente de verdade, que muitas vezes depende de uma boa conduta para ter melhores desfechos, é ainda mais desafiador.
                        Porém, ter um espaço controlado para treinar, aperfeiçoar e relembrar pontos importantes do manejo de vias aéreas em pacientes críticos é um passo extremamente importante e é exatamente o que é oferecido pelo curso SIMVA. 
                        Meu profundo agradecimento pelos ensinamentos oferecidos pelos docentes, todos muito capazes e empenhados com nosso aprendizado!"
                </p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={Isabele} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>Isabelle Boud'hors</h2>
                <h3>Estudante de medicina</h3>
                <p> "Treinamentos como esse são essenciais para
                        todos. Apreender a lidar com os mais
                        diversos cenários que envolvem o manejo da
                        via e ter confiança no uso das drogas é de
                        fundamental importância. Apreendi no
                        SIMVA o que nunca tinha visto na faculdade.
                        Obrigado a toda equipe."</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={GuilhermeRossi} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>Guilherme Rossi</h2>
                <h3>Médico</h3>
                <p>"Este curso mudou completamente minha prática clínica! 
                  Aprendi técnicas avançadas de manejo da via aérea que me deram muito mais confiança ao lidar com situações críticas. Recomendo a todos os colegas!"
                </p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={Caroline} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>Carolina Giacomelli</h2>
                <h3>Médica</h3>
                <p> "Excelente, foi muito produtivo. É de suma importância sabermos de todo o processo envolvido no manejo da via aérea. 
                  O treinamento do SIMVA me trouxe uma outra visão sobre o cuidado da via aérea e muito mais segurança a partir de agora"</p>
              </div>
            </StyledSwiperSlide>
{/* 
            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={doc} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>Pedro Rodrigues</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "O curso 'Manejo da Via Aérea' superou todas as minhas expectativas! Os instrutores são extremamente qualificados e as aulas são práticas e envolventes. 
                  Saí do curso me sentindo muito mais preparada para lidar com emergências médicas."</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={doc} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>João Carlos</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p>"Este curso mudou completamente minha prática clínica! 
                  Aprendi técnicas avançadas de manejo da via aérea que me deram muito mais confiança ao lidar com situações críticas. Recomendo a todos os colegas!"
                </p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={doc} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>Fabrício Nunes</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "Como estudante de medicina, este curso foi essencial para minha formação. Aprendi não apenas as habilidades técnicas necessárias para lidar com a via aérea, 
                  mas também ganhei uma compreensão mais profunda da fisiologia e das melhores práticas. Sem dúvida, um investimento valioso em minha carreira."</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
              <div style={{ width: '250px', height: '250px'}}>
                <img src={doc} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} alt="Logo" />
              </div>
                <h2>Pedro Rodrigues</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "O curso 'Manejo da Via Aérea' superou todas as minhas expectativas! Os instrutores são extremamente qualificados e as aulas são práticas e envolventes. 
                  Saí do curso me sentindo muito mais preparada para lidar com emergências médicas."</p>
              </div>
            </StyledSwiperSlide> */}

          </Swiper>
            
          </Members>
          </CenterContent>
        </MainContentEquipe>
    </Container>
    );
  }
  
  export default Depoimentos;
  
  const Container = styled.div`
    width: 100%;
    height: auto;
    margin-top: -2px;
    background-image: url(${background});
    background-size: cover;
    color:#FFFFFF;
    background-position: center;
    @media (max-width: 1200px) {
  }
`;

const Members= styled.div`
  width: 70%;  
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 2s ease-in-out;
  border: 0.5px solid #4bc6b4;
  border-radius: 15px;
  padding: 5vh;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 4vh;
  }
`
const StyledSwiperSlide = styled(SwiperSlide)`
padding: 10vh 0 0 0 !important;
transition: transform 0.8s;
height: 70% !important;
display: flex;
align-items: center;
justify-content: center;

img{
  width: 23vh;
  height: 18vh;
  border-radius: 20px;
  box-shadow: #4bc6b4 0px 3px 10px;
  @media (max-width: 1200px) {
    width: 80%;
    height: 65%;
  }
}
div{
    height: 90% !important;
    text-align: center !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  p{
    width: 80%;
  }
&:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    padding: 1vh 1.5vh;
  }

`

const MainContentEquipe= styled.div`
    width: 100%;
    height: auto;
    display: flex;
    padding: 5%;
    @media (max-width: 1200px) {
    height: auto;
  }
`
const CenterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    padding:5%;
    h1 {
    color: #4bc6b4;
    font-size: 40px;
    padding: 12px;
    border-radius: 12px;
    border-bottom: 3px solid #4bc6b4;
    margin-bottom: 5vh;
  }
  @media (max-width: 1200px) {
    height: auto;
    h1{
      font-size: 20px;
      text-align: center;
    }
  }
`