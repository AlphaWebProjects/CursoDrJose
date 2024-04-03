import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import doc from '../img/doc.jpg';

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
            slidesPerView={width > 1200 ? 2 : 1}
            spaceBetween={40}
            autoplay={{
              delay: width > 1200 ? 3500 : 5000,
              disableOnInteraction: true,
            }}
            
          >

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>João Carlos</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p>"Este curso mudou completamente minha prática clínica! 
                  Aprendi técnicas avançadas de manejo da via aérea que me deram muito mais confiança ao lidar com situações críticas. Recomendo a todos os colegas!"
                  </p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>Fabrício Nunes</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "Como estudante de medicina, este curso foi essencial para minha formação. Aprendi não apenas as habilidades técnicas necessárias para lidar com a via aérea, mas também ganhei uma compreensão mais profunda da fisiologia e das melhores práticas. 
                  Sem dúvida, um investimento valioso em minha carreira."</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>Pedro Rodrigues</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "O curso 'Manejo da Via Aérea' superou todas as minhas expectativas! Os instrutores são extremamente qualificados e as aulas são práticas e envolventes. 
                  Saí do curso me sentindo muito mais preparada para lidar com emergências médicas."</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>João Carlos</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p>"Este curso mudou completamente minha prática clínica! 
                  Aprendi técnicas avançadas de manejo da via aérea que me deram muito mais confiança ao lidar com situações críticas. Recomendo a todos os colegas!"
                </p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>Fabrício Nunes</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "Como estudante de medicina, este curso foi essencial para minha formação. Aprendi não apenas as habilidades técnicas necessárias para lidar com a via aérea, 
                  mas também ganhei uma compreensão mais profunda da fisiologia e das melhores práticas. Sem dúvida, um investimento valioso em minha carreira."</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>Pedro Rodrigues</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "O curso 'Manejo da Via Aérea' superou todas as minhas expectativas! Os instrutores são extremamente qualificados e as aulas são práticas e envolventes. 
                  Saí do curso me sentindo muito mais preparada para lidar com emergências médicas."</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>João Carlos</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p>"Este curso mudou completamente minha prática clínica! 
                  Aprendi técnicas avançadas de manejo da via aérea que me deram muito mais confiança ao lidar com situações críticas. Recomendo a todos os colegas!"
                </p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>Fabrício Nunes</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "Como estudante de medicina, este curso foi essencial para minha formação. Aprendi não apenas as habilidades técnicas necessárias para lidar com a via aérea, 
                  mas também ganhei uma compreensão mais profunda da fisiologia e das melhores práticas. Sem dúvida, um investimento valioso em minha carreira."</p>
              </div>
            </StyledSwiperSlide>

            <StyledSwiperSlide>
              <div>
                <img src={doc} width="150" height="150" alt="Logo" />
                <h2>Pedro Rodrigues</h2>
                <h3>Estudante de medicina pela USP</h3>
                <p> "O curso 'Manejo da Via Aérea' superou todas as minhas expectativas! Os instrutores são extremamente qualificados e as aulas são práticas e envolventes. 
                  Saí do curso me sentindo muito mais preparada para lidar com emergências médicas."</p>
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
padding: 10vh 0 5vh 0 !important;
transition: transform 0.8s;
height: 90% !important;
img{
  width: 23vh;
  height: 18vh;
  border-radius: 25%;
  box-shadow: #158A7A 0px 3px 10px;
}
div{
    height: 90% !important;
    text-align: center !important;
  }
&:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    padding: 3vh 1.5vh;
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