import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import { motion } from "framer-motion";
import './assets/css/index.scss';

import thesis_img0 from './assets/image/thesis-img0.png';
import thesis_img1 from './assets/image/thesis-img1.png';
import thesis_img2 from './assets/image/thesis-img2.png';
import thesis_img3 from './assets/image/thesis-img3.png';

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
        <span className='logo-w'/>
        <span className='logo-o'/>
        <span className='logo-n'/>
        <span className='logo-h'/>
        <span className='logo-o o2'/>
      </a>
      <div className='header-right'>
        wonho9188@naver.com
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
            Redefining <div className='sm-break'/> Robotics by
          </motion.div>
          <motion.div 
            className='main-banner-title-top-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5}}
          >
            Reimagining <div className='sm-break'/> Beauty
          </motion.div>
        </div>
        <motion.div 
          className='main-banner-title-bot'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1}}
        >
          <div>로봇 개발의 새로운 미래. &nbsp; <br/>
          움직이는 것에서, 보여지는 것까지.</div>
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
            WONHO는 기술적 섬세함과 <div className='sm-break'/> <div className='md-break'/> 심미적 아름다움의 <br/>
            완벽한 융합을 추구합니다.
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
              <div>문서 설계</div>
              <div>
                Jira / Confluence로 <br/>
                팀원들과 소통하고 <br/>
                아키텍쳐를 설계합니다.
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
              <div>SW 개발</div>
              <div>
                Python / C++ 을 <br/>
                활용한 서버 구축 및 <br/>
                ROS2 통신을 구현합니다.
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
              <div>2D 3D 디자인</div>
              <div>
                피그마로 UI를 디자인하고 <br/>
                블렌더로 모델링과 <br/>
                3D 프린팅 HW 제작합니다.
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
              <span>About</span> WONHO
            </motion.div>
            <motion.div
              className='section2-content-top2'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              로봇 시스템을 이해하는 <div className='sm-break'/> SW 디자이너 <br/>
              <span>최원호</span>입니다.
            </motion.div>
          </div>
          <motion.div
            className='section2-content-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className='tag'> # 로직 + 디자인 = 완성 </div>
            <div className='tag'> # 함께하는 작업 </div>
          </motion.div>
          <motion.div
            className='section2-content-bot'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* 지난 4년간 웹 디자이너와 퍼블리셔로 일하며,  <br/>
            제가 만든 코드가 개발 단계에서 <br/>
            살아 움직이는 순간을 지켜봤습니다. <br/>
            <br/>
            하지만 디자인과 퍼블리싱은 <b>로직 구현</b>이 아닌,<br/>
            <u>보이는 것을 코드로 옮기는 작업</u>이었습니다.<br/>
            <br/>
            그래서 <u>디자인 감각과 로직 구현</u>을 <br/>
            <u>함께 살릴 수 있는 길</u>을 찾았고,<br/>
            이는 <b>로봇 개발</b>로 이어졌습니다.<br/>
            <br/>
            지금은 센서·모터·알고리즘을 설계하며,<br/>
            시각적 완성도와 논리적 정밀함이 결합된 <br/>
            <div className='accent'>‘움직이는 창조물’을 연구하고 있습니다.</div> */}

            로봇 시뮬레이터 SW 디자이너는 <br/>
            복잡한 로봇 동작과 데이터를 <br/>
            누구나 이해할 수 있도록 <br/>
            시각화하는 역할이라고 생각합니다.<br/>
            <br/>
            저는 UI/UX 디자인 경험과 <br/>
            ROS2 로봇 부트캠프 프로젝트를 통해<br/>
            로봇 시스템을 이해하며, <br/>
            사람과 로봇 사이의 <br/>
            간극을 줄이는 UI를 설계해왔습니다.<br/>
            <br/>
            기술과 사용자 경험의 균형을 바탕으로, <br/>
            처음 접하는 사용자도 신뢰하고 <br/>
            쉽게 사용할 수 있는 <br/>
            <div className='accent'> 로봇 시뮬레이터 UI를 만드는 것이 제 목표입니다. </div>
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
              <div>상명대학교 천안캠퍼스 <div className='sm-break'> </div> 산업디자인과 학사 졸업 [학점 : 3.76]</div>
            </div>
          </div>
        </div>
        <div className='section3-content'>
          <div className='title'>Skills</div>
          <div className='contents'>
            <div className='item'>
              <div>Dev</div>
              <div>ROS2 / Slam & Nav</div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>Python / PyQt / C++</div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>OpenCV / Matplotlib</div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>C++ / C++Qt</div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>HTML / CSS / JavaScript / TypeScript </div>
            </div>
            <div className='item'>
              <div>Dev</div>
              <div>React / Chart.js / Ag-Grid</div>
            </div>
            <div className='item'>
              <div>3D</div>
              <div>Blender 3D</div>
            </div>
            <div className='item'>
              <div>UI/UX</div>
              <div>Figma / Illustrator / Photoshop / ClipStudio</div>
            </div>
            <div className='item'>
              <div>Communication</div>
              <div>Git / Jira / Confluence / Slack </div>
            </div>
          </div>
        </div>
        <div className='section3-content'>
          <div className='title'>Work History</div>
          <div className='contents'>
            <div className='item company'>
              시어스랩 (25.11 ~ 26.01) [재직중]
            </div>
            <div className='item'>
              <div>
                <p> 25.11 ~ 26.01 </p>
              </div>
              <div>제OO 로보틱스 : 주행 로봇 모니터링 웹 </div>
            </div>
            <div className='item'>
              <div>
                <p> 25.12 ~ 26.01 </p>
              </div>
              <div>솔OO : 2D, 3D 공간 관리 플랫폼 </div>
            </div>
            <div className='item company'>
              넥스트리 (22.09 ~ 24.10)
            </div>
            <div className='item'>
              <div>
                <p> 22.09 ~ 24.10 </p>
              </div>
              <div>삼성 E&A : 4개 프로젝트, 7개 사이트</div>
            </div>
            <div className='item'>
              <div>
                <p>22.09 ~ 24.06</p>
              </div>
              <div>SK : 1개 프로젝트 </div>
            </div>
            <div className='item'>
              <div>
                <p>23.05 ~ 23.08</p>
              </div>
              <div>동아사이언스 : 1개 프로젝트 </div>
            </div>
            <div className='item'>
              <div>
                <p>23.02 ~ 23.06</p>
              </div>
              <div>서울아산병원 : 1개 프로젝트 </div>
            </div>
            <div className='item'>
              <div>
                <p>22.09 ~ 22.12</p>
              </div>
              <div>AJ : 1개 프로젝트 </div>
            </div>
            <div className='item'>
              <div>
                <p>24.07 ~ 24.10</p>
              </div>
              <div>Edu-Lime : 1개 프로젝트, 2개 사이트 </div>
            </div>
            <div className='item'>
              <div>
                <p>24.01 ~ 24.10</p>
              </div>
              <div>Vizend : 1개 프로젝트 </div>
            </div>
            <div className='item'>
              <div>
                <p>23.06 ~ 23.07</p>
              </div>
              <div>디자인시스템 : 1개 프로젝트 </div>
            </div>
            <div className='item'>
              <div>
                <p>22.09 ~ 24.10</p>
              </div>
              <div>유튜브 나무소리 : 교육 영상 운영 </div>
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
          <div className='title'>Etc.</div>
          <div className='contents'>
            <div className='item'>
              <div>
                25.09 ~ 25.11
              </div>
              <div>
                에드인에듀 ROS2 단기 심화 7기 수료
              </div>
            </div>
            <div className='item'>
              <div>
                25.02 ~ 25.08
              </div>
              <div>
                에드인에듀 ROS2 9기 부트캠프 수료
              </div>
            </div>
            <div className='item'>
              <div>
                20.07 ~ 22.08
              </div>
              <div>
                넥스트리 웹 디자이너 & 웹 퍼블리셔 학생 인턴
              </div>
            </div>
            <div className='item'>
              <div>
                18.06 ~ 20. 02
              </div>
              <div>
                7포병여단 병장 만기 전역
              </div>
            </div>
            <div className='item'>
              <div>
                16.01 ~ 16.11
              </div>
              <div>
                중계 피플 미술학원 입시반 보조강사
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
            Project Highlights
          </div>
          <div className='section5-top2' >
            <div> 
              {
                current == 1 ?
                <>
                  <b> 주행 + 로봇팔 프로젝트 </b>
                  <b>- 원격 쇼핑 로봇 서비스 </b>
                  <p>KDT 단기심화 최우수상</p>
                </>
                :
                current == 2 ?
                <>
                  <b> ROS2 프로젝트 </b>
                  <b>- 대형병원 안내 로봇 시스템 </b>
                  <p>KDT 6개월 훈련과정 최우수상</p>
                </>
                :
                current == 3 ?
                <>
                  <b> Deep Learning 프로젝트  </b>
                  <b>- 무인매장 CCTV 단속 시스템 </b>
                </>
                :
                current == 4 ?
                <>
                  <b> IoT Learning 프로젝트  </b>
                  <b>- 자동 물류 시스템 </b>
                </>
                : <> </>
              }
            </div>
            {
              current == 1 ?
              <div> 사용자 원격 쇼핑(지도 + 로봇 카메라 뷰) 화면 </div>
              :
              current == 2 ?
              <div> 관리자 GUI 대쉬보드(실시간 로봇 위치 및 카메라) 화면 </div>
              :
              current == 3 ?
              <div> 매장주인 GUI 통계 시각화 화면 </div>
              :
              current == 4 ?
              <div> 일반인 이해를 위한 간소화 시나리오 PPT </div>
              : <></>
            }
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
                    <img src={thesis_img0} alt='thesis1'/>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item ${current == 2 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img1} alt='thesis1'/>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item ${current == 3 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img2} alt='thesis2'/>
                  </div>
                </div>
              </div>
            </div>
            <div className={`item ${current == 4 ? 'selected' : ''}`}>
              <div className='box'>
                <div className='img-box-wrap'>
                  <div className='img-box'>
                    <img src={thesis_img3} alt='thesis3'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onClick={()=>{
            if ( current !== 4 ) {
              setCurrent(current + 1);
            }
          }} className={`arrow-right ${current == 4 ? 'disabled' : ''}`}>
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
          <div>로봇 기술의 발전, 기술적 섬세함과 <div className='sm-break'> </div> <div className='md-break'> </div> 심미적 아름다움의 완벽한 융합을 추구합니다.</div>
        </motion.div>
        <motion.div 
          className='section6-link'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          <a rel="noopener noreferrer" href='https://open.kakao.com/o/syIzYmLh' target='_blank'>
            <div className='button'>
              <div>WITH</div>
              <div className='logo'>
                <span className='logo-w'/>
                <span className='logo-o'/>
                <span className='logo-n'/>
                <span className='logo-h'/>
                <span className='logo-o o2'/>
              </div>
              <div className='arrow'/>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

const Section7 = () => {
  return (
    <div className="section7">
      <a rel="noopener noreferrer" href='https://docs.google.com/presentation/d/1E4aBUJIHhEJzeG0_lcu_MrUWmdghdf44whofGV5CPAk/edit?slide=id.p#slide=id.p' target='_blank'>
        PPT 포트폴리오 [클릭]
      </a>
      <a rel="noopener noreferrer" href='https://www.notion.so/WONHO-Wanna-Be-229483ba22f88015b391db22d64e5b02' target='_blank'>
        노션 포트폴리오 [클릭]
      </a>
    </div>
  )
} 

const Footer = () => {
  return (
    <div className='footer'>
      <a href='' className='footer-left'>
        <span className='logo-w'/>
        <span className='logo-o'/>
        <span className='logo-n'/>
        <span className='logo-h'/>
        <span className='logo-o o2'/>
      </a>
      <div className='footer-right'>
        Tel :  010-9633-6788 <br/>
        Email : wonho9188@naver.com <br/>
        Copyright 2025. WONHO. All rights reserved.
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
      <Section7 />
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
