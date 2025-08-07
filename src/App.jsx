import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";
import './assets/css/index.scss';

import thesis_img1 from './assets/image/thesis-img1.png';
import thesis_img2_1 from './assets/image/thesis-img2-1.png';
import thesis_img2_2 from './assets/image/thesis-img2-2.png';
import thesis_img2_3 from './assets/image/thesis-img2-3.png';
import thesis_img2_4 from './assets/image/thesis-img2-4.png';
import thesis_img3_1 from './assets/image/thesis-img3-1.png';
import thesis_img3_2 from './assets/image/thesis-img3-2.png';
import thesis_img3_3 from './assets/image/thesis-img3-3.png';

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [screenHeight, setScreenHeight] = React.useState(window.innerHeight);
  const updateScreen = () => {
    setScreenHeight(window.innerHeight)
  }
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  React.useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
      window.addEventListener('resize', updateScreen);
  });
  return (
    <div className={`header ${scrollPosition > 1 ? 'scrolled' : ''}${scrollPosition > screenHeight ? '2' : ''}`}>
      <a href='' className='header-left'>
        <span className='logo-k'/>
        <span className='logo-g'/>
        <span className='logo-u'/>
      </a>
      <div className='header-right'>
        {/* choiji1995@naver.com */}
        kwin0125@naver.com
      </div>
    </div>
  )
}
const MainBanner = () => {
  return (
    <div className='main-banner'>
      <div className='main-banner-title'>
        <div className='main-banner-title-top'>
          <motion.div 
            className='main-banner-title-top-1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            A Future <div className='sm-break'/> Where  We Live
          </motion.div>
          <motion.div 
            className='main-banner-title-top-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5}}
          >
            Healthier <div className='sm-break'/> and Happier
          </motion.div>
        </div>
        <motion.div 
          className='main-banner-title-bot'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1}}
        >
          <div>치유의 새로운 길, 건강한 삶이 &nbsp;</div>
          <div>함께하는 미래를 꿈꿉니다.</div>
        </motion.div>
      </div>
    </div>
  )
}

const Section1 = () => {
  return (
    <div className='section1-wrap'>
      <div className='section1'>
        <div className='section1-top'>
          <motion.div
            className='section1-top1'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Mind • Character
          </motion.div>
          <motion.div
            className='section1-top2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            KGU는 모든 사람의 <br/>
            더 나은 건강과 행복을 위해 연구합니다.
          </motion.div>
        </div>
        <div className='section1-bot'>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className='img'/>
            <div>
              <div>치유 중심 연구</div>
              <div>
                인류 건강과 복지 증진에 <br/>
                기여하는 것을 <br/>
                목표로 합니다.
              </div>
            </div>
          </motion.div>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3}}
          >
            <span className='img'/>
            <div>
              <div>문제 해결</div>
              <div>
                도전적인 과제 속에서도 <br/>
                창의적인 접근으로 <br/>
                문제를 해결합니다.
              </div>
            </div>
          </motion.div>
          <motion.div
            className='section1-bot-item'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6}}
          >
            <span className='img'/>
            <div>
              <div>커뮤니케이션</div>
              <div>
                팀 내에 협업과 연구 성과를 <br/>
                분명하게 이해하고 <br/>
                명확하게 전달합니다.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='section2-wrap'>
      <div className='section2'>
        <div className='section2-img-bg'>
          <motion.div 
            className='section2-img'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className='section2-content'>
          <div className='section2-content-top'>
            <motion.div
              className='section2-content-top1'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span>About</span> KGU
            </motion.div>
            <motion.div
              className='section2-content-top2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              인류의 건강과 <div className='sm-break'/> 행복을 소망하는 연구원 <br/>
              <span>김건욱</span>입니다.
            </motion.div>
          </div>
          <motion.div
            className='section2-content-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='tag'> # 인류를 위한 치유 </div>
            <div className='tag'> # 희망을 전하는 연구원 </div>
          </motion.div>
          <motion.div
            className='section2-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            인류가 더 건강하고 행복한 삶을 누릴 수 있도록. <br/>
            치유의 길을 찾아가는 바이오 연구자입니다. <br/>
            <br/>
            작은 생명의 신비에서 출발한 제 연구는 <br/>
            더 나은 내일을 위한 소망으로 이어지고,<br/>
            질병과 고통에서 벗어난 세상을 꿈꾸게 합니다.<br/>
            <br/>
            단순한 치료를 넘어 <div className='sm-break'> </div> 사람들의 삶에 회복과 희망을  <div className='sm-break'> </div>  전하는 것을 목표로<br/>
            매 순간 진심을 담아 <div className='sm-break'> </div> 연구에 임하고 있습니다.<br/>
            <br/>
            <br/>
            과학이라는 도구로 인류에게 <div className='sm-break'> </div> 치유의 빛을 비추고<br/>
            모두가 건강하고 풍요로운 삶을 <div className='sm-break'> </div> 누릴 수 있는 세상을 향해 나아가고자 합니다.<br/>
            <br/>
            <div className='accent'>연구를 통해! <div className='sm-break'> </div>건강과 행복을 꽃피우겠습니다!</div>
          </motion.div>
        </div>
        
      </div>
    </div>
  )
}

const Section3 = () => {
  return (
    <div className='section3-wrap'>
      <div className='section3'>
        <div className='section3-content'>
          <div className='title'>Graduation</div>
          <div className='contents'>
            <div className='item'>
              <div>2023</div>
              <div>연세대학교 신촌캠퍼스 <div className='sm-break'> </div> 생명공학과 석사 졸업</div>
            </div>
            <div className='item'>
              <div>2021</div>
              <div>연세대학교 미래캠퍼스 <div className='sm-break'> </div> 생명과학과 학사 졸업</div>
            </div>
          </div>
        </div>
        <div className='section3-content'>
          <div className='title'>Skills</div>
          <div className='contents'>
            <div className='item'>
              <div>#</div>
              <div>Cell culture & Viability test</div>
            </div>
            <div className='item'>
              <div>#</div>
              <div>Immunocytochemistry</div>
            </div>
            <div className='item'>
              <div>#</div>
              <div>Protein extraction & Western blot</div>
            </div>
            <div className='item'>
              <div>#</div>
              <div>Pyruvate kinase activity test</div>
            </div>
            <div className='item'>
              <div>#</div>
              <div>Ex vivo vibrissa assay</div>
            </div>
            <div className='item'>
              <div>#</div>
              <div>H&E staining</div>
            </div>
            <div className='item'>
              <div>#</div>
              <div>PCR</div>
            </div>
            <div className='item'>
              <div>#</div>
              <div>Pipette</div>
            </div>
            <div className='item'>
              <div>#</div>
              <div>Optical & Confocal microscope</div>
            </div>
          </div>
        </div>
        <div className='section3-content'>
          <div className='title'>Papers</div>
          <div className='contents'>
            <div className='item'>
              <div>
                <p> Cells </p>
                <p>2023-02</p>  
              </div>
              <div>CXXC5 Mediates DHT-Induced Androgenetic Alopecia via PGD2 </div>
            </div>
            <div className='item'>
              <div>
                <p>Pharmaceutics</p>
                <p>2023-07</p>
              </div>
              <div>Pyruvate kinase M2 Accelerates Cutaneous Wound Healing via Glycolysis and Wnt/β-Catenin Signaling </div>
            </div>
            <div className='item'>
              <div>
                <p>International Journal <br/> of Molecular Sciences</p>
                <p>2023-07</p>
              </div>
              <div>KY19382 Accelerates Cutaneous Wound Healing via Activation of the Wnt/β-Catenin Signaling Pathway </div>
            </div>
            <div className='item'>
              <div>
                <p>Pharmaceutics</p>
                <p>2023-02</p>
              </div>
              <div>Pyruvate Kinase M2 Promotes Hair Regeneration by Connecting Metabolic and Wnt/β-Catenin Signaling </div>
            </div>
            <div className='item'>
              <div>
                <p>BMB reports </p>
                <p>2022-12</p>
              </div>
              <div>Wnt/β-catenin signaling activator restores hair regeneration suppressed by diabetes mellitus </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Section4 = () => {
  return (
    <div className='section4-wrap'>
      <div className='section4'>
        <div className='section4-content'>
          <div className='title'>Patent</div>
          <div className='contents'>
            <div className='item'>
              <div>
                최강열•류영찬•김건욱 <br/>
                (10-2023-0015930)
              </div>
              <div>
                인디루빈 유도체 및 대사활성화제를 포함하는 탈모 방지 또는 발모 촉진용 조성물 <br/> 
                2023-02-07
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section5 = () => {
  const [current, setCurrent] = React.useState(1);
  return (
    <div className='section5-wrap'>
      <div className='section5'>
        <div className='section5-top'>
          <div className='section5-top1' >
            Graduation Thesis
          </div>
          <div className='section5-top2' >
            <div> 
              <b>모유두세포와 모델 마우스를 통한 </b>
              <b>L-serine의 탈모 개선 효과 연구 </b> 
            </div>
            <div> L-Serine accelerates hair regrowth by stimulating dermal papilla cells and activating hair follicle stem cells </div>
          </div>
        </div>
        <div className='section5-bot'>
          <div 
            onClick={()=>{
              if ( current !== 1 ) {
                setCurrent(current - 1);
              }
            }} 
            className={`arrow-left ${current == 1 ? 'disabled' : ''}`}
          >
            <div/>
          </div>
          <div className='section5-bot-content'>
            <div className={`item ${current == 1 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img1} alt='thesis1'/>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item ${current == 2 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2_1} alt='thesis1'/>
                  </div>
                  <div className='desc'>
                    Cell viability test
                  </div>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2_2} alt='thesis1'/>
                  </div>
                  <div className='desc'>
                    Pyruvate kinase (PK) <br/>
                    activity test
                  </div>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2_3} alt='thesis1'/>
                  </div>
                  <div className='desc'>
                    Immunocytochemistry <br/>
                    (ICC)
                  </div>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2_4} alt='thesis1'/>
                  </div>
                  <div className='desc'>
                    Western blot
                  </div>
                </div>
              </div>
              <div className='desc'>
                <div>Cell study에서는 모발 성장의 핵심 세포인 Dermal papilla cell(모유두세포)를 타겟으로 진행하였습니다.</div>
                <div>인간의 primary dermal papilla cell을 사용하였고, L-serine을 처리 시에 세포의 생존율과 PK 활성 등을 평가하였습니다.</div>
                <div>모유두세포의 활성 마커인 Versican의 활성을 평가하기 위해 ICC와 Western blot을 수행하였습니다.</div>
              </div>
            </div>
            <div className={`item ${current == 3 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img3_1} alt='thesis1'/>
                  </div>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img3_2} alt='thesis1'/>
                  </div>
                  <div className='desc'>
                    Ex vivo vibrissa culture
                  </div>
                </div>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img3_3} alt='thesis1'/>
                  </div>
                  <div className='desc'>
                    Immunohistochemistry <br/>
                    (IHC)
                  </div>
                </div>
              </div>
              <div className='desc'>
                <div>
                  L-serine의 모발 길이 성장 효과를 보기 위해 마우스의 vibrissa를 분리하여 L-serine이 담긴 media에 ex vivo culture 하였고, <br/>
                  vibrissa 길이 성장에 대한 L-serine의 효능을 평가하였습니다.
                </div>
                <div>모유두세포의 활성 마커인 Versican의 활성을 평가하기 위해 culture한 vibrissa를 harvest하여 IHC를 수행하였습니다.</div>
              </div>
            </div>
          </div>
          <div onClick={()=>{
            if ( current !== 3 ) {
              setCurrent(current + 1);
            }
          }} className={`arrow-right ${current == 3 ? 'disabled' : ''}`}>
            <div/>
          </div>
        </div>
      </div>
    </div>
  )
}

const Section6 = () => {
  return (
    <div className='section6-wrap'>
      <div className='section6'>
        <motion.div 
          className='section6-content'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div>Let’s Work Together</div>
          <div>치유의 새로운 길, 건강한 삶이 <div className='sm-break'> </div> 함께하는 미래를 꿈꿉니다.</div>
        </motion.div>
        <motion.div 
          className='section6-link'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          <a rel="noopener noreferrer" href='https://open.kakao.com/o/sB9n62Ug' target='_blank'>
            <div className='button'>
              <div>WITH</div>
              <div className='logo'>
                <span className='logo-k'/>
                <span className='logo-g'/>
                <span className='logo-u'/>
              </div>
              <div className='arrow'/>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='footer'>
      <a href='' className='footer-left'>
        <span className='logo-k'/>
        <span className='logo-g'/>
        <span className='logo-u'/>
      </a>
      <div className='footer-right'>
        Tel :  010-3441-4176 <br/>
        Email : kwin0125@naver.com <br/>
        Copyright 2024. KGU. All rights reserved.
      </div>
    </div>
  )
}
const Main = () => {
  return (
    <div className='main'>
      <Header />
      <MainBanner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
