import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  TrendingUp,
  BarChart3,
  BrainCircuit,
  Cpu,
  Layers,
  Zap,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Server,
  Terminal,
  BookOpen,
  Sliders,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Play,
  RotateCcw,
  Building2,
  Users,
  Award,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const REQUIRED_IMAGES = {
  fintech: "https://image-hub-studio.herestay-4226.chatgpt.site/api/images/external_ad50b82301cc759beac659444f2698abbfd49220b8a0581c9690bd7e70db531d",
  workspace: "https://image-hub-studio.herestay-4226.chatgpt.site/api/images/external_65f70d6adbb5586d050126a4b72cd34402b05f54b3bfc816853ea7a0353191a9",
  brentOil: "https://image-hub-studio.herestay-4226.chatgpt.site/api/images/vizbot_f0c99da91a8f02a3f45fff85086c6b94ba46731c6aca5fe971e2d4a71e209495",
  education: "https://image-hub-studio.herestay-4226.chatgpt.site/api/images/7iLRc6oD_1790124391065"
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [demoModel, setDemoModel] = useState('fintech');
  const [demoDataCount, setDemoDataCount] = useState(50);
  const [demoRiskLevel, setDemoRiskLevel] = useState('moderate');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);
  
  // Calculator state
  const [calcDataVolume, setCalcDataVolume] = useState(100); // GB
  const [calcUsers, setCalcUsers] = useState(25);
  const [calcType, setCalcType] = useState('predictive'); // predictive, llm, vision

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'custom_ai',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Run AI Demo simulation
  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationResult(null);
    setTimeout(() => {
      let accuracy = (94.2 + Math.random() * 4.5).toFixed(1);
      let roi = (280 + Math.random() * 120).toFixed(0);
      let speed = (12 + Math.random() * 18).toFixed(1);
      
      let summaryText = "";
      if (demoModel === 'fintech') {
        summaryText = `우량주 5종목 분할 매수 최적화 파이프라인 실행 완료. 최대 낙폭(MDD) ${demoRiskLevel === 'low' ? '4.2%' : demoRiskLevel === 'moderate' ? '8.5%' : '14.1%'} 이하 방어 알고리즘 적용됨.`;
      } else if (demoModel === 'oil') {
        summaryText = `원자재 변동성 AI 동적 모니터링: 국제 유가 126달러 급변 시나리오 대비 공급망 매수 타임 윈도우 98.7% 매칭 완료.`;
      } else if (demoModel === 'edu') {
        summaryText = `에듀테크 학습 몰입도 알고리즘: 개별 학습자 이탈율 42% 감소 예측, 개별화 난이도 튜닝 파이프라인 생성.`;
      } else {
        summaryText = `스마트 워크스페이스 MLOps 서버 자동 튜닝: GPU 사용 효율 99.1% 달성, 코드 리팩토링 및 모델 경량화 패치 완료.`;
      }

      setSimulationResult({
        accuracy: `${accuracy}%`,
        roi: `+${roi}%`,
        speed: `${speed}ms`,
        summary: summaryText,
        recommendation: demoRiskLevel === 'low' ? '안전 자산 배분 비중 확대 권장' : demoRiskLevel === 'moderate' ? '성장형 포트폴리오 리밸런싱 최적' : '고위험 알파 추구 모드 가동'
      });
      setIsSimulating(false);
    }, 900);
  };

  useEffect(() => {
    runSimulation();
  }, [demoModel, demoRiskLevel]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', company: '', service: 'custom_ai', message: '' });
    }, 4000);
  };

  // ROI Calculator computed results
  const estimatedDays = Math.max(7, Math.round(calcDataVolume * 0.15 + (calcType === 'llm' ? 14 : 7)));
  const estimatedCost = Math.round(calcDataVolume * 1.8 + calcUsers * 2.5 + (calcType === 'llm' ? 200 : 100));
  const expectedEfficiency = Math.min(95, Math.round(35 + calcDataVolume * 0.2 + (calcType === 'predictive' ? 20 : 30)));

  const caseStudies = [
    {
      id: 'fintech',
      category: 'fintech',
      tag: 'Algorithmic Trading & Personal Investment',
      title: '300만원, 당신의 경제적 자유를 위한 첫걸음: 초보자를 위한 소수 우량주 분할 매수 전략',
      image: REQUIRED_IMAGES.fintech,
      description: 'NEXUS AI의 금융 시황 분석 엔진이 초보 투자자를 위해 300만원 리스크 분산 분할 매수 모델을 실시간 추적하고 시뮬레이션합니다.',
      metrics: [
        { label: '알고리즘 적중률', val: '96.4%' },
        { label: '평균 MDD 방어율', val: '-5.2%' },
        { label: '분석 대상 데이터', val: '1.2B Ticks/Day' }
      ],
      linkText: '알고리즘 상세 분석 사례 보기'
    },
    {
      id: 'oil',
      category: 'macro',
      tag: 'Global Macro & Commodity Forecasting',
      title: '[재창조] 브렌트유 126달러 돌파: 4년 만의 최고치, 유가 시장에 비상등',
      image: REQUIRED_IMAGES.brentOil,
      description: '국제 유가 급등과 급변하는 글로벌 에너지 시장 분석을 위해 비정형 뉴스, 수급 그래프, 선물 트렌드 실시간 빅데이터 AI 모니터링을 구축했습니다.',
      metrics: [
        { label: '시황 예측 정확도', val: '94.8%' },
        { label: '공급망 조기경보', val: '72시간 전' },
        { label: '이상 감지 속도', val: '0.04 sec' }
      ],
      linkText: '유가 예측 AI 대시보드 리포트'
    },
    {
      id: 'workspace',
      category: 'engineering',
      tag: 'R&D Infrastructure & MLOps Culture',
      title: 'AI 개발자를 위한 스마트 워크스페이스: 생산성과 혁신을 깨우는 공간 설계',
      image: REQUIRED_IMAGES.workspace,
      description: 'NEXUS AI의 엔지니어가 데이터 파이프라인과 LLM 모델 구축에 전념할 수 있도록 설계된 하이브리드 스마트 워크스페이스 인프라입니다.',
      metrics: [
        { label: '배포 주기 단축', val: '12배 향상' },
        { label: 'GPU 활용률', val: '98.5%' },
        { label: '자동화 파이프라인', val: '100% MLOps' }
      ],
      linkText: '엔지니어링 문화 & 환경 보기'
    },
    {
      id: 'education',
      category: 'edutech',
      tag: 'Interactive Smart Learning',
      title: '교육 분야에서 활용도 높은 새로운 이미지 주제: 맞춤형 AI 스터디 파이프라인',
      image: REQUIRED_IMAGES.education,
      description: '학습자의 이해도 추이와 난이도 피드백 데이터를 동적 생성하여 교육 효과성을 극대화하는 스마트 튜토링 AI 엔지니어링 케이스입니다.',
      metrics: [
        { label: '학습 성취도 향상', val: '+43%' },
        { label: '이탈 예측 정밀도', val: '97.1%' },
        { label: '자동 퀴즈 생성', val: '실시간' }
      ],
      linkText: '에듀테크 AI 적용 사례'
    }
  ];

  const filteredStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <div className="app-container">
      {/* Background Decor */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-grid-overlay"></div>

      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="brand-logo">
            <div className="logo-icon">
              <BrainCircuit className="w-6 h-6 text-cyan" />
            </div>
            <span className="logo-text">NEXUS <span className="text-highlight">AI</span></span>
            <span className="badge-startup">Startup & Service</span>
          </a>

          <nav className="desktop-nav">
            <a href="#services">서비스 영역</a>
            <a href="#cases">솔루션 & 사례</a>
            <a href="#playground">AI 데이터 데모</a>
            <a href="#calculator">ROI 시뮬레이터</a>
            <a href="#contact">도입 문의</a>
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-primary btn-glow">
              <Sparkles className="w-4 h-4" />
              <span>무료 AI 데이터 진단</span>
            </a>
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>서비스 영역</a>
            <a href="#cases" onClick={() => setMobileMenuOpen(false)}>솔루션 & 사례</a>
            <a href="#playground" onClick={() => setMobileMenuOpen(false)}>AI 데이터 데모</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>ROI 시뮬레이터</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>도입 문의</a>
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>
              무료 AI 데이터 진단
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-badge">
            <Zap className="w-4 h-4 text-cyan" />
            <span>2025 AI 데이터 분석 & 엔지니어링 혁신 스타트업</span>
          </div>

          <h1 className="hero-title">
            미래를 선도하는 <br className="hidden md:inline" />
            <span className="gradient-text">차세대 AI 데이터 플랫폼</span>
          </h1>

          <p className="hero-subtitle">
            금융 시황 예측 알고리즘부터 글로벌 원자재 분석, 에듀테크 맞춤 학습, MLOps 기반 스마트 워크스페이스까지. <br />
            비즈니스 핵심 목표에 정밀하게 맞춰진 맞춤형 AI 모델과 데이터 파이프라인을 구축합니다.
          </p>

          <div className="hero-buttons">
            <a href="#playground" className="btn btn-lg btn-primary btn-glow">
              <Play className="w-5 h-5" />
              <span>AI 데모 즉시 체험하기</span>
            </a>
            <a href="#cases" className="btn btn-lg btn-secondary">
              <BarChart3 className="w-5 h-5" />
              <span>대표 구축 사례 보기</span>
            </a>
          </div>

          <div className="hero-stats-grid">
            <div className="stat-card">
              <div className="stat-val gradient-text">99.4%</div>
              <div className="stat-label">데이터 분석 정밀도</div>
            </div>
            <div className="stat-card">
              <div className="stat-val gradient-text">3.8x</div>
              <div className="stat-label">고객사 평균 ROI 향상</div>
            </div>
            <div className="stat-card">
              <div className="stat-val gradient-text">0.05s</div>
              <div className="stat-label">초저지연 AI 추론 속도</div>
            </div>
            <div className="stat-card">
              <div className="stat-val gradient-text">120+</div>
              <div className="stat-label">성공적인 AI 인프라 구축</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-block">
          <div className="section-header">
            <div className="section-tag">SERVICES & CAPABILITIES</div>
            <h2 className="section-title">NEXUS AI 핵심 개발 및 분석 서비스</h2>
            <p className="section-sub">
              기존 툴로 풀지 못했던 복잡한 비정형 데이터 분석과 실시간 AI 모델링을 하나의 파이프라인으로 연결합니다.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card hover-glow">
              <div className="service-icon-box">
                <TrendingUp className="w-7 h-7 text-cyan" />
              </div>
              <h3>금융 & 자산 시황 예측 알고리즘</h3>
              <p>
                소수 우량주 분할 매수 전략, 실시간 시황 정밀 모니터링, 포트폴리오 리스크 방어 모델 등 금융 데이터 전문 맞춤형 AI 솔루션을 제작합니다.
              </p>

            </div>

            <div className="service-card hover-glow">
              <div className="service-icon-box">
                <BarChart3 className="w-7 h-7 text-cyan" />
              </div>
              <h3>글로벌 원자재 & 매크로 AI 모니터링</h3>
              <p>
                국제 유가(브렌트유, WTI), 환율, 글로벌 공급망 실시간 지표를 종합 분석하여 이상 징후 조기 경보와 매수/매도 타이밍을 시각화합니다.
              </p>

            </div>

            <div className="service-card hover-glow">
              <div className="service-icon-box">
                <BookOpen className="w-7 h-7 text-cyan" />
              </div>
              <h3>에듀테크 맞춤형 AI 학습 엔지니어링</h3>
              <p>
                학습자 데이터에 따른 취약점 파악, 난이도 자동 조율, 실시간 대화형 AI 튜터 시스템을 구축하여 교육 몰입도를 대폭 향상시킵니다.
              </p>

            </div>

            <div className="service-card hover-glow">
              <div className="service-icon-box">
                <Server className="w-7 h-7 text-cyan" />
              </div>
              <h3>스마트 워크스페이스 & MLOps 인프라</h3>
              <p>
                개발자와 데이터 분석가가 즉시 성능을 발휘할 수 있는 GPU 최적화 플랫폼, 자동화 모델 CI/CD 워크플로우를 아키텍처링합니다.
              </p>

            </div>
          </div>
        </section>

        {/* Selected Case Studies & Showcase (Contains Required Images) */}
        <section id="cases" className="section-block showcase-section">
          <div className="section-header">
            <div className="section-tag">PORTFOLIO & CASE STUDIES</div>
            <h2 className="section-title">주요 솔루션 구축 사례 & 스토리</h2>
            <p className="section-sub">
              실제 비즈니스 현장에 도입되어 강력한 성과를 증명한 4가지 스타트업 맞춤 서비스 솔루션입니다.
            </p>
          </div>

          {/* Category Filter */}
          <div className="filter-bar">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              전체 보기
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'fintech' ? 'active' : ''}`}
              onClick={() => setActiveCategory('fintech')}
            >
              핀테크 & 우량주 매수
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'macro' ? 'active' : ''}`}
              onClick={() => setActiveCategory('macro')}
            >
              글로벌 유가 & 원자재
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'engineering' ? 'active' : ''}`}
              onClick={() => setActiveCategory('engineering')}
            >
              스마트 워크스페이스
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'edutech' ? 'active' : ''}`}
              onClick={() => setActiveCategory('edutech')}
            >
              에듀테크 AI
            </button>
          </div>

          <div className="case-grid">
            {filteredStudies.map((item) => (
              <article key={item.id} className="case-card">
                <div className="case-img-wrapper">
                  <img src={item.image} alt={item.title} className="case-img" />
                  <div className="case-tag-badge">{item.tag}</div>
                </div>
                <div className="case-content">
                  <h3 className="case-title">{item.title}</h3>
                  <p className="case-desc">{item.description}</p>
                  
                  <div className="case-metrics-row">
                    {item.metrics.map((m, idx) => (
                      <div key={idx} className="metric-box">
                        <span className="metric-val">{m.val}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="case-footer">
                    <button 
                      className="case-link-btn"
                      onClick={() => {
                        setDemoModel(item.id === 'brentOil' ? 'oil' : item.id === 'education' ? 'edu' : item.id);
                        const el = document.getElementById('playground');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Interactive AI Playground Simulator */}
        <section id="playground" className="section-block playground-section">
          <div className="playground-card">
            <div className="playground-header">
              <div>
                <div className="section-tag text-cyan">INTERACTIVE DEMO</div>
                <h2 className="section-title">NEXUS AI 시뮬레이터 체험</h2>
                <p className="playground-sub">
                  모델과 데이터 조건 파라미터를 조절하여 실시간 AI 엔진의 분석 및 예측 리포트를 체험하세요.
                </p>
              </div>
              <div className="live-status">
                <span className="pulse-dot"></span>
                <span>AI Engine Live</span>
              </div>
            </div>

            <div className="playground-body">
              {/* Controls Column */}
              <div className="control-panel">
                <div className="control-group">
                  <label className="control-label">
                    <Sliders className="w-4 h-4 text-cyan" />
                    <span>적용 분야 선택</span>
                  </label>
                  <div className="model-selector-grid">
                    <button 
                      className={`model-btn ${demoModel === 'fintech' ? 'active' : ''}`}
                      onClick={() => setDemoModel('fintech')}
                    >
                      <span>📈 300만원 소수 우량주 분할 매수</span>
                    </button>
                    <button 
                      className={`model-btn ${demoModel === 'oil' ? 'active' : ''}`}
                      onClick={() => setDemoModel('oil')}
                    >
                      <span>🛢️ 브렌트유 126$ 유가 시황 예측</span>
                    </button>
                    <button 
                      className={`model-btn ${demoModel === 'workspace' ? 'active' : ''}`}
                      onClick={() => setDemoModel('workspace')}
                    >
                      <span>💻 스마트 워크스페이스 MLOps</span>
                    </button>
                    <button 
                      className={`model-btn ${demoModel === 'edu' ? 'active' : ''}`}
                      onClick={() => setDemoModel('edu')}
                    >
                      <span>🎓 에듀테크 맞춤 학습 파이프라인</span>
                    </button>
                  </div>
                </div>

                <div className="control-group">
                  <div className="slider-header">
                    <label className="control-label">분석 데이터 포인트 수량</label>
                    <span className="slider-val-badge">{demoDataCount}K Ticks</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="200" 
                    value={demoDataCount}
                    onChange={(e) => setDemoDataCount(Number(e.target.value))}
                    className="custom-slider"
                  />
                </div>

                <div className="control-group">
                  <label className="control-label">알고리즘 리스크 튜닝 프로필</label>
                  <div className="risk-buttons">
                    <button 
                      className={`risk-btn ${demoRiskLevel === 'low' ? 'active' : ''}`}
                      onClick={() => setDemoRiskLevel('low')}
                    >
                      보수적 (Low Risk)
                    </button>
                    <button 
                      className={`risk-btn ${demoRiskLevel === 'moderate' ? 'active' : ''}`}
                      onClick={() => setDemoRiskLevel('moderate')}
                    >
                      균형형 (Balanced)
                    </button>
                    <button 
                      className={`risk-btn ${demoRiskLevel === 'aggressive' ? 'active' : ''}`}
                      onClick={() => setDemoRiskLevel('aggressive')}
                    >
                      알파 추구 (Aggressive)
                    </button>
                  </div>
                </div>

                <button 
                  className="btn btn-primary w-full run-sim-btn"
                  onClick={runSimulation}
                  disabled={isSimulating}
                >
                  {isSimulating ? (
                    <>
                      <RotateCcw className="w-5 h-5 animate-spin" />
                      <span>AI 추론 실행 중...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>AI 분석 및 추론 재실행</span>
                    </>
                  )}
                </button>
              </div>

              {/* Visualization Column */}
              <div className="output-panel">
                <div className="output-header">
                  <Terminal className="w-5 h-5 text-cyan" />
                  <span>실시간 Inference Output Report</span>
                </div>

                {isSimulating ? (
                  <div className="simulating-placeholder">
                    <div className="spinner"></div>
                    <p>신경망 Weights 계산 및 시뮬레이션 중...</p>
                  </div>
                ) : simulationResult ? (
                  <div className="result-content">
                    <div className="result-stats-row">
                      <div className="res-stat-card">
                        <span className="res-lbl">예측 정확도</span>
                        <span className="res-val text-cyan">{simulationResult.accuracy}</span>
                      </div>
                      <div className="res-stat-card">
                        <span className="res-lbl">기대 시뮬레이션 ROI</span>
                        <span className="res-val text-green">{simulationResult.roi}</span>
                      </div>
                      <div className="res-stat-card">
                        <span className="res-lbl">추론 딜레이</span>
                        <span className="res-val">{simulationResult.speed}</span>
                      </div>
                    </div>

                    <div className="result-box">
                      <div className="box-title">AI 모델 분석 요약</div>
                      <p className="box-desc">{simulationResult.summary}</p>
                    </div>

                    <div className="result-box highlight-box">
                      <div className="box-title text-cyan">최적화 가이드라인</div>
                      <p className="box-desc">{simulationResult.recommendation}</p>
                    </div>

                    <div className="graph-preview">
                      <div className="graph-bar-group">
                        <div className="graph-bar" style={{ height: '40%' }}><span>M1</span></div>
                        <div className="graph-bar" style={{ height: '65%' }}><span>M2</span></div>
                        <div className="graph-bar" style={{ height: '55%' }}><span>M3</span></div>
                        <div className="graph-bar" style={{ height: '85%' }}><span>M4</span></div>
                        <div className="graph-bar highlight-bar" style={{ height: '98%' }}><span>AI Final</span></div>
                      </div>
                      <div className="graph-label">시간 흐름에 따른 알고리즘 신뢰도 분포 데이터</div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section id="calculator" className="section-block">
          <div className="section-header">
            <div className="section-tag">ESTIMATOR & ROI</div>
            <h2 className="section-title">맞춤형 프로젝트 도입 예측 견적기</h2>
            <p className="section-sub">
              데이터의 크기와 조직의 규모에 맞는 AI 구축 파이프라인의 예상 기간과 효율성을 직접 산출해보세요.
            </p>
          </div>

          <div className="calculator-wrapper">
            <div className="calc-inputs">
              <div className="calc-item">
                <label>데이터 수집 & 처리 용량 (GB/월)</label>
                <div className="calc-range-row">
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={calcDataVolume} 
                    onChange={(e) => setCalcDataVolume(Number(e.target.value))}
                  />
                  <span className="calc-badge">{calcDataVolume} GB</span>
                </div>
              </div>

              <div className="calc-item">
                <label>동시 접속 사용자 / 개발인원</label>
                <div className="calc-range-row">
                  <input 
                    type="range" 
                    min="5" 
                    max="200" 
                    step="5"
                    value={calcUsers} 
                    onChange={(e) => setCalcUsers(Number(e.target.value))}
                  />
                  <span className="calc-badge">{calcUsers} 명</span>
                </div>
              </div>

              <div className="calc-item">
                <label>희망 솔루션 아키텍처</label>
                <div className="radio-group">
                  <button 
                    className={`radio-btn ${calcType === 'predictive' ? 'active' : ''}`}
                    onClick={() => setCalcType('predictive')}
                  >
                    시황/자산 예측 모델
                  </button>
                  <button 
                    className={`radio-btn ${calcType === 'llm' ? 'active' : ''}`}
                    onClick={() => setCalcType('llm')}
                  >
                    RAG & 기업 LLM 에이전트
                  </button>
                  <button 
                    className={`radio-btn ${calcType === 'vision' ? 'active' : ''}`}
                    onClick={() => setCalcType('vision')}
                  >
                    비전 & 에듀테크 엔진
                  </button>
                </div>
              </div>
            </div>

            <div className="calc-results">
              <h3 className="calc-res-title">예상 데이터 파이프라인 견적 결과</h3>
              <div className="calc-metrics">
                <div className="calc-metric-item">
                  <div className="calc-metric-label">예상 릴리즈 구축 기간</div>
                  <div className="calc-metric-val">{estimatedDays} 일</div>
                </div>
                <div className="calc-metric-item">
                  <div className="calc-metric-label">업무 자동화 및 효율 향상</div>
                  <div className="calc-metric-val text-cyan">+{expectedEfficiency}%</div>
                </div>
                <div className="calc-metric-item">
                  <div className="calc-metric-label">월 추정 운영 / 인프라 비용</div>
                  <div className="calc-metric-val text-green">약 {estimatedCost}만원~</div>
                </div>
              </div>

              <p className="calc-note">
                * 상세 요구사항 및 기존 인프라와의 연동 방식에 따라 견적은 조정될 수 있습니다.
              </p>
              
              <a href="#contact" className="btn btn-primary btn-block">
                <span>이 구성으로 상담 신청하기</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Workspace & Tech Stack Section */}
        <section className="section-block workspace-tech-section">
          <div className="tech-banner">
            <div className="banner-content">
              <div className="section-tag text-cyan">HYBRID WORKSPACE & CULTURE</div>
              <h2>AI 개발자 및 데이터 분석가를 위해 정교하게 설계된 엔지니어링 생태계</h2>
              <p>
                NEXUS AI는 강력한 MLOps 인프라, GPU 클러스터 및 개발자가 몰입할 수 있는 스마트 워크스페이스를 바탕으로 최단 기간 최상의 AI 서비스를 안정적으로 런칭합니다.
              </p>
              
              <div className="banner-features">
                <div className="b-feat">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  <span>PyTorch / TensorFlow 최적화 파이프라인</span>
                </div>
                <div className="b-feat">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  <span>NVIDIA GPU 클러스터 실시간 스케일링</span>
                </div>
                <div className="b-feat">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  <span>데이터 보안 & Enterprise On-Premise 지원</span>
                </div>
              </div>
            </div>

            <div className="banner-image-box">
              <img src={REQUIRED_IMAGES.workspace} alt="AI 개발자를 위한 스마트 워크스페이스" />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="section-block contact-section">
          <div className="contact-card">
            <div className="contact-info">
              <div className="section-tag">GET IN TOUCH</div>
              <h2 className="section-title">AI 프로젝트 도입 및 컨설팅 문의</h2>
              <p className="contact-desc">
                귀사의 보유 데이터 분석부터 시황 알고리즘, 에듀테크 솔루션, 워크스페이스 MLOps 구축까지. 스타트업 엔지니어링 전문 팀이 24시간 이내 답변드립니다.
              </p>

              <div className="contact-details">
                <div className="detail-item">
                  <Mail className="w-5 h-5 text-cyan" />
                  <span>contact@nexus-ai-analytics.io</span>
                </div>
                <div className="detail-item">
                  <Phone className="w-5 h-5 text-cyan" />
                  <span>02-882-9012 (기술 상담 직통)</span>
                </div>
                <div className="detail-item">
                  <MapPin className="w-5 h-5 text-cyan" />
                  <span>서울특별시 강남구 테헤란로 AI 혁신 센터 8층</span>
                </div>
              </div>

              <div className="guarantee-badge">
                <ShieldCheck className="w-6 h-6 text-cyan" />
                <div>
                  <strong>비밀유지협약(NDA) 철저 준수</strong>
                  <p>고객사의 소중한 고유 데이터 및 알고리즘 정보는 철저한 인프라 보호 하에 관리됩니다.</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleFormSubmit}>
              {formSubmitted ? (
                <div className="form-success-box">
                  <CheckCircle2 className="w-12 h-12 text-cyan" />
                  <h3>문의가 성공적으로 접수되었습니다!</h3>
                  <p>NEXUS AI 데이터 전담 엔지니어가 작성해주신 연락처로 조속히 안내 리포트를 보내드리겠습니다.</p>
                </div>
              ) : (
                <>
                  <div className="form-field">
                    <label>담당자 성함 *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="홍길동 팀장" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>이메일 주소 *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@company.com" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>회사 / 기업명</label>
                    <input 
                      type="text" 
                      placeholder="(주) 넥서스 파트너스" 
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>관심 서비스 영역</label>
                    <select 
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    >
                      <option value="fintech">주식/우량주 시황 & 알고리즘 매수 AI</option>
                      <option value="oil">글로벌 유가 & 원자재 시황 모니터링</option>
                      <option value="workspace">스마트 워크스페이스 MLOps 인프라</option>
                      <option value="edutech">에듀테크 맞춤 학습 데이터 분석</option>
                      <option value="custom_ai">기타 데이터 엔지니어링 커스텀 문의</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>프로젝트 요구사항 및 문의 내용</label>
                    <textarea 
                      rows="4" 
                      placeholder="데이터 종류, 구축 예상 시점, 주요 해결 목표를 적어주시면 더욱 정밀한 1차 분석 리포트를 제공해드립니다."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-glow">
                    <span>무료 분석 리포트 & 컨설팅 신청하기</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col brand-col">
            <a href="#" className="brand-logo">
              <BrainCircuit className="w-6 h-6 text-cyan" />
              <span className="logo-text">NEXUS <span className="text-highlight">AI</span></span>
            </a>
            <p className="footer-brand-desc">
              AI 데이터 분석 및 시황 파이프라인 전문 개발 스타트업. 초보자용 우량주 분할 매수 알고리즘부터 글로벌 매크로 유가 예측, 스마트 워크스페이스 MLOps 솔루션까지 구축합니다.
            </p>
          </div>

          <div className="footer-col">
            <h4>솔루션 & 서비스</h4>
            <ul>
              <li><a href="#cases">우량주 분할 매수 전략 AI</a></li>
              <li><a href="#cases">브렌트유 / 원자재 시황 분석</a></li>
              <li><a href="#cases">스마트 워크스페이스 인프라</a></li>
              <li><a href="#cases">에듀테크 맞춤형 AI 엔진</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>시뮬레이터 & 도구</h4>
            <ul>
              <li><a href="#playground">AI 추론 데모 파이프라인</a></li>
              <li><a href="#calculator">프로젝트 ROI 산출 견적기</a></li>
              <li><a href="#contact">1:1 기술 컨설팅</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>기업 정보</h4>
            <ul>
              <li>주식회사 넥서스에이아이</li>
              <li>사업자등록번호: 220-88-09182</li>
              <li>통신판매업신고: 2025-서울강남-01492</li>
              <li>© 2025 NEXUS AI Inc. All rights reserved.</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
