import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import aluno from '../img/aluno-simva.jpg'
import aluno2 from '../img/aluno-simva2.jpg'

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


    <div class="img-circle img-layout-11 bgLazyload entered loaded" role="img" aria-label="Isabelle Boud`hors" data-bg="https://static1.s123-cdn-static-a.com/uploads/8125915/400_649da08923f24.jpg" style="background-position: center center; background-image: url(&quot;https://static1.s123-cdn-static-a.com/uploads/8125915/400_649da08923f24.jpg&quot;);" data-ll-status="loaded"></div>

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
                <img src={aluno2} width="150" height="150" alt="Logo" />
                <h2>Isabelle Boud`hors</h2>
                <h3>Estudante de Medicina</h3>
                <p> "Treinamentos como esse são essenciais para todos. Apreender a lidar com os mais diversos cenários que envolvem o manejo da via área e ter confiança no uso das drogas é de fundamental importância. Apreendi no SIMVA o que nunca tinha visto na faculdade. Obrigado a toda equipe!"</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src='https://static1.s123-cdn-static-a.com/uploads/8125915/400_649da2726cc04.jpg' width="150" height="150" alt="Logo" />
                <h2>Caroline Giacomelli</h2>
                <h3>Médica</h3>
                <p>"Excelente, foi muito produtivo. É de suma importância sabermos de todo o processo envolvido no manejo da via aérea. O treinamento do SIMVA me trouxe uma outra visão sobre o cuidado da via aérea e muito mais segurança a partir de agora."
                  </p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={aluno} width="150" height="150" alt="Logo" />
                <h2>Guilherme Dossi</h2>
                <h3>Médico</h3>
                <p> "Toda equipe esta de parabéns. Foi muito produtivo, sai pronto para manejar uma via aérea e principalmente utilizar as drogas para o cuidado com o paciente. Indicarei para todo mundo com certeza."</p>
              </div>
            </StyledSwiperSlide>


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
    @media (max-width: 1200px) {
  }
`;

const Members= styled.div`
  width: 70%;  
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 2s ease-in-out;
  border: 0.5px solid #158A7A;
  box-shadow: #158A7A 0px 5px 15px;
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
  width: 40%;
  height: 40%;
  border-radius: 25%;
  box-shadow: #158A7A 0px 3px 10px;
  @media (max-width: 1200px) {
    width: 80%;
    height: 65%;
  }
}
div{
    height: 90% !important;
    text-align: center !important;
    max-width: 70%;
    @media (max-width: 1200px) {
    max-width: 95% !important;
  }
  }
&:hover {
    transform: scale(1.03);
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
    background: #ADA996;
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); 
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding:5%;
    h1 {
    color: #158a7a;
    font-size: 40px;
    padding: 12px;
    border-radius: 12px;
    border-bottom: 3px solid #158a7a;
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