window.TOPIC_DATA = {
  topic: "Crime & Law",
  subtitle: "Arguments, ideas, and vocabulary for crime, justice, and legal questions",
  badges: ["42 Real Questions", "9 Sub-categories", "Vietnam-Relevant Examples"],
  tabs: [
    {
      num: "01",
      name: "Causes of Crime",
      badge: "6 Questions",
      coming: false,
      fullName: "Causes of Crime",
      desc: "Why do people turn to crime — and what can society do about it?",
      panelBadges: ["6 Real Questions", "36 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "What are the main causes of crime in modern society? What measures can be taken to address this problem?" },
        { text: "Poverty is the main cause of crime. To what extent do you agree or disagree?" },
        { text: "A lack of education is the primary cause of criminal behaviour. To what extent do you agree or disagree?" },
        { text: "Some people believe that family background is the main factor influencing criminal behaviour, while others think other factors are more important. Discuss both views and give your own opinion." },
        { text: "Unemployment is a major cause of crime. To what extent do you agree or disagree?" },
        { text: "Governments should focus on addressing the root causes of crime rather than simply punishing offenders. To what extent do you agree or disagree?" }
      ],
      ideas: [
        {
          qText: "What are the main causes of crime in modern society? What measures can be taken to address this problem?",
          sideA: {
            label: "Root causes driving crime in modern society",
            ideas: [
              {
                title: "Economic inequality blocks access to legitimate success",
                flow: "inequality closes off education and formal employment → crime becomes a rational alternative → property crime concentrates in deprived areas → cycles of deprivation and offending reinforce each other",
                examples: [
                  { type: "vn", text: "HCMC's district-level crime maps show a consistent spatial overlap between areas of high poverty concentration and elevated petty theft rates, particularly in zones with large populations of informal migrant workers." },
                  { type: "support", text: "+ The UK Home Office confirms that areas in the highest deprivation decile record property crime rates 3–4 times the national average, establishing economic inequality as a structural driver of crime." }
                ]
              },
              {
                title: "Family instability removes the primary agent of moral development",
                flow: "absent parents, conflict, or parental criminality → children lack supervision and moral modelling → antisocial norms normalised early → risk of offending multiplies through adolescence",
                examples: [
                  { type: "vn", text: "Vietnam's Institute of Youth Research found that over 60% of juveniles in detention came from households marked by parental absence, domestic violence, or substance abuse — identifying the home environment as the primary risk factor." },
                  { type: "support", text: "+ The Cambridge Study in Delinquent Development tracked 400 boys over 40 years and identified poor parental supervision and having a convicted parent as two of the five strongest predictors of adult criminal conviction." }
                ]
              },
              {
                title: "Weak institutions allow criminal norms to take hold",
                flow: "underfunded schools and policing → minor offences go unpunished → community standards against crime erode → criminal subcultures become entrenched across generations",
                examples: [
                  { type: "vn", text: "Remote highland provinces with limited law enforcement show higher rates of informal violent dispute resolution, demonstrating that institutional absence — not poverty alone — creates the conditions for normalised offending." },
                  { type: "contrast", text: "✗ Singapore's rigorous enforcement of even minor offences, combined with community policing and civic education, has produced one of the world's lowest crime rates in a densely populated urban environment." }
                ]
              }
            ]
          },
          sideB: {
            label: "Effective measures to address crime in modern society",
            ideas: [
              {
                title: "Economic inclusion removes the structural incentive for crime",
                flow: "vocational training, job creation, and welfare programmes → financial desperation reduced → legitimate employment becomes viable → crime loses its rational appeal for marginalised groups",
                examples: [
                  { type: "vn", text: "Vietnam's rural poverty reduction programmes (Chương trình 135) have contributed to measurable declines in theft in previously high-crime provincial areas where economic deprivation was most acute." },
                  { type: "support", text: "+ Japan's post-war investment in full employment, income equality, and universal education produced one of the world's lowest crime rates — demonstrating that structural economic reform outlasts policing as a crime reduction tool." }
                ]
              },
              {
                title: "Early family intervention breaks intergenerational crime cycles",
                flow: "parenting education and home-visiting schemes target at-risk households early → children develop self-regulation and moral reasoning → propensity for criminal behaviour reduced before adolescence",
                examples: [
                  { type: "vn", text: "Vietnam's commune-level Women's Union and Children's Fund networks provide family counselling and child welfare monitoring, reaching at-risk households before problems escalate to criminal behaviour." },
                  { type: "support", text: "+ Norway and Denmark's early intervention programmes targeting vulnerable families show 30–40% reductions in later juvenile offending among children who received intensive support before age five." }
                ]
              },
              {
                title: "Community cohesion rebuilds informal social control",
                flow: "investment in public spaces, youth clubs, and neighbourhood networks → stronger informal oversight → residents monitor and report crime → fewer opportunities and less motivation for offending",
                examples: [
                  { type: "vn", text: "Vietnam's tổ dân phố (residential management units) create a dense network of social oversight that deters low-level crime in urban areas through community-level monitoring." },
                  { type: "contrast", text: "✗ New York's 1990s combination of community policing, neighbourhood investment, and zero-tolerance for minor offences produced a 50%+ drop in violent crime — proving community-based approaches can transform even high-crime urban environments." }
                ]
              }
            ]
          }
        },
        {
          qText: "Poverty is the main cause of crime. To what extent do you agree or disagree?",
          sideA: {
            label: "Poverty is a primary driver of criminal behaviour",
            ideas: [
              {
                title: "Material deprivation makes survival crimes a rational calculation",
                flow: "poverty eliminates ability to meet basic needs → theft and fraud become calculated responses → property crime concentrates predictably in deprived areas → the link is structural, not coincidental",
                examples: [
                  { type: "vn", text: "Petty theft in HCMC's central districts is consistently linked by police reports to seasonal migrants in acute financial distress — individuals with no stable income or formal employment options." },
                  { type: "support", text: "+ UN Office on Drugs and Crime data shows a consistent positive correlation between a country's Gini coefficient and its property crime rate, confirming that unequal distribution of wealth structurally produces crime." }
                ]
              },
              {
                title: "Poverty blocks access to legitimate routes to success",
                flow: "poor households lack money for education and social networks → formal employment pathways close off → cultural goals remain but legitimate means to achieve them are absent → crime provides an accessible alternative",
                examples: [
                  { type: "vn", text: "Vietnamese youth migrating from rural provinces without qualifications find formal urban employment largely inaccessible — a situation researchers link directly to their overrepresentation in juvenile crime statistics." },
                  { type: "support", text: "+ Robert Merton's strain theory, widely validated by criminological research, explains this mechanism: when legitimate means to culturally valued goals are blocked, individuals — particularly the poor — turn to crime as an alternative." }
                ]
              },
              {
                title: "Concentrated poverty destroys the institutions that restrain behaviour",
                flow: "deprivation clusters geographically → social cohesion and informal control collapse → criminal norms spread through peer networks → crime becomes embedded regardless of individual intentions",
                examples: [
                  { type: "vn", text: "High-density low-income areas on Hanoi's outskirts show significantly higher gang and drug-related crime, demonstrating how geographic concentration of poverty creates its own self-reinforcing criminal ecology." },
                  { type: "support", text: "+ William Julius Wilson's research showed that concentrated poverty — not poverty per se — drives crime by destroying the institutional infrastructure (schools, stable employment, community organisations) that normally controls behaviour." }
                ]
              }
            ]
          },
          sideB: {
            label: "Poverty alone is insufficient to explain criminal behaviour",
            ideas: [
              {
                title: "The vast majority of poor people never commit crimes",
                flow: "if poverty caused crime deterministically → all deprived communities would show equal crime rates → they demonstrably do not → cultural values and community bonds mediate the relationship",
                examples: [
                  { type: "vn", text: "Vietnam's northern highland provinces — among the country's poorest — consistently record lower violent crime rates than wealthier urban centres, showing that cultural cohesion can override economic hardship." },
                  { type: "support", text: "+ Bangladesh and Nepal, among Asia's poorest nations, maintain violent crime rates far below significantly wealthier middle-income Latin American countries — institutional and cultural factors being the decisive variable." }
                ]
              },
              {
                title: "Affluent individuals commit substantial and highly harmful crime",
                flow: "white-collar crime, corporate fraud, and corruption are committed by the wealthy → poverty-based explanations cannot account for these → greed and opportunity — not desperation — are the motivating forces",
                examples: [
                  { type: "vn", text: "Vietnam's anti-corruption campaign (đốt lò) has prosecuted dozens of senior officials and wealthy business figures, demonstrating that crime is not the exclusive domain of the economically desperate." },
                  { type: "support", text: "+ Bernie Madoff, Enron executives, and the architects of the 2008 financial crisis were among the wealthiest people in the world — their crimes driven entirely by greed, making poverty an irrelevant explanatory category for large-scale criminal harm." }
                ]
              },
              {
                title: "Cultural and institutional quality override poverty as crime determinants",
                flow: "rule of law, social trust, and cultural norms shape crime rates independently of poverty levels → some wealthy societies are high-crime; some poor societies are low-crime → poverty provides partial but not complete explanation",
                examples: [
                  { type: "vn", text: "Vietnam's Confucian emphasis on social harmony, family reputation, and collective responsibility provides a cultural brake on crime even in economically disadvantaged communities." },
                  { type: "contrast", text: "✗ Switzerland (extremely wealthy, very low crime) versus Venezuela (middle-income, extremely high crime) — the divergence is explained by institutional strength and cultural norms, not income levels." }
                ]
              }
            ]
          }
        },
        {
          qText: "A lack of education is the primary cause of criminal behaviour. To what extent do you agree or disagree?",
          sideA: {
            label: "Lack of education is a primary driver of criminal behaviour",
            ideas: [
              {
                title: "Education provides the gateway to legal employment",
                flow: "without qualifications → formal job market largely inaccessible → financial pressure intensifies → criminal income becomes the practical alternative",
                examples: [
                  { type: "vn", text: "Vietnamese prison population surveys consistently show low levels of educational attainment — the majority of convicted offenders having left school before completing secondary education." },
                  { type: "support", text: "+ UNESCO data confirms that countries with higher primary school completion rates show systematically lower rates of property crime, establishing education access as a structural crime-prevention variable." }
                ]
              },
              {
                title: "Education instils the values and norms that inhibit offending",
                flow: "schooling transmits civic values, rule of law, and awareness of consequences → moral reasoning and empathy develop → psychological barriers to crime become internalised → educated populations resist criminal peer cultures more effectively",
                examples: [
                  { type: "vn", text: "Vietnam's mandatory giáo dục công dân (civic education) curriculum covers legal responsibilities and social duties — directly building awareness of criminal consequences among all secondary students." },
                  { type: "support", text: "+ Finland's integration of ethics, civic rights, and conflict resolution throughout its national curriculum is credited by criminologists as a key contributor to the country's consistently low crime and incarceration rates." }
                ]
              },
              {
                title: "Education builds impulse control and long-term thinking",
                flow: "schooling develops cognitive and emotional self-regulation → individuals weigh future consequences before acting → impulsive risk-taking decreases → propensity for opportunistic crime falls significantly",
                examples: [
                  { type: "vn", text: "Vietnamese youth development research shows that students who remain in secondary education exhibit significantly lower rates of gang involvement than school drop-outs in the same socioeconomic bracket." },
                  { type: "support", text: "+ James Heckman's Nobel-winning research on early childhood education shows that cognitive and socio-emotional skills developed through schooling reduce criminal involvement more effectively than any subsequent intervention." }
                ]
              }
            ]
          },
          sideB: {
            label: "Crime has deeper roots than education levels alone",
            ideas: [
              {
                title: "Many educated people commit serious crimes",
                flow: "white-collar crime, corruption, and fraud require intelligence and credentials → education does not prevent crime when opportunity and moral failure are present → formal schooling does not reliably transmit ethical behaviour",
                examples: [
                  { type: "vn", text: "Numerous Vietnamese corruption cases involve university-educated officials and business executives — demonstrating that educational attainment offers no protection against crime when institutional oversight is weak." },
                  { type: "support", text: "+ Corporate fraud at Enron, Theranos, and Wirecard was perpetrated by highly educated professionals — suggesting that elite education does not instil the ethical character needed to prevent opportunistic crime." }
                ]
              },
              {
                title: "Structural poverty overrides individual educational gains",
                flow: "economic inequality concentrates crime regardless of education levels → poor areas remain high-crime even as school completion improves → education without economic opportunity is insufficient → structural reform must accompany schooling",
                examples: [
                  { type: "vn", text: "Urban areas of Vietnam with rising secondary school completion still show persistent property crime where economic inequality remains high, suggesting education alone cannot overcome structural deprivation." },
                  { type: "contrast", text: "✗ The United States has near-universal secondary education completion yet maintains extremely high incarceration and violent crime rates compared to less-educated but more equal Scandinavian societies." }
                ]
              },
              {
                title: "Family environment shapes behaviour more powerfully than formal schooling",
                flow: "children spend more hours in family environments than classrooms → parental values and attachment are the primary determinants of moral development → schooling reinforces but rarely overrides deeply embedded family-derived values",
                examples: [
                  { type: "vn", text: "Vietnamese criminologists consistently find that family dysfunction — domestic violence, parental criminality, and neglect — predicts juvenile offending more strongly than school dropout status." },
                  { type: "support", text: "+ The Perry Preschool Project found that family-based interventions in early childhood produced greater long-term reductions in criminal behaviour than school interventions beginning at age five or later." }
                ]
              }
            ]
          }
        },
        {
          qText: "Some people believe that family background is the main factor influencing criminal behaviour, while others think other factors are more important. Discuss both views and give your own opinion.",
          sideA: {
            label: "Family background is the dominant influence on criminal behaviour",
            ideas: [
              {
                title: "Parents are the first and most powerful moral educators",
                flow: "children learn by observing and imitating parents → family is the first moral classroom → values instilled in early childhood become deep-seated → criminal family environments produce criminal children through socialisation",
                examples: [
                  { type: "vn", text: "Vietnamese culture places the heaviest burden of moral formation on parents — the proverb 'dạy con từ thuở còn thơ' (teach children while they are young) reflects a deep cultural belief that parental instruction is the decisive moral influence." },
                  { type: "support", text: "+ The Cambridge Study in Delinquent Development found that having a convicted parent was the single strongest predictor of adult criminal conviction, with 63% of boys with convicted fathers becoming offenders themselves." }
                ]
              },
              {
                title: "Family instability creates the specific conditions that produce offenders",
                flow: "parental conflict, neglect, or abuse → insecure attachment and poor impulse control → children seek belonging in criminal peer groups → delinquent identity forms in adolescence",
                examples: [
                  { type: "vn", text: "Studies of Vietnamese juvenile detention centres show that the majority of young inmates experienced significant family trauma — parental divorce, domestic violence, or substance-abusing parents — before their first offence." },
                  { type: "support", text: "+ Attachment theory research by John Bowlby shows that insecure attachment in early childhood — caused by inconsistent or neglectful parenting — predicts aggression, antisocial behaviour, and criminal risk in adolescence." }
                ]
              },
              {
                title: "Criminal behaviour is directly transmitted across generations within families",
                flow: "criminal parents normalise offending as a life choice → children observe crime as a practical career option → family criminal networks provide opportunity and protection → intergenerational cycles become self-reinforcing",
                examples: [
                  { type: "vn", text: "Vietnamese organised crime networks — particularly in drug trafficking regions near the Lao and Chinese borders — are frequently structured around family clans, demonstrating the direct intergenerational transmission of criminal enterprise." },
                  { type: "support", text: "+ Research across UK, US, and Scandinavian datasets consistently shows that children of convicted parents are two to three times more likely to be convicted themselves than children from non-criminal families of the same socioeconomic background." }
                ]
              }
            ]
          },
          sideB: {
            label: "Wider social and economic factors are more powerful determinants",
            ideas: [
              {
                title: "Economic structure shapes criminal opportunity regardless of family",
                flow: "macroeconomic inequality creates deprived neighbourhoods → entire communities face blocked legitimate pathways → crime increases across all families in the same area → structural forces override individual family influence",
                examples: [
                  { type: "vn", text: "The rapid rural-to-urban migration in Vietnam has produced crime increases in receiving cities among young people from stable rural families — demonstrating that economic dislocation can override good family backgrounds." },
                  { type: "support", text: "+ William Julius Wilson's research showed that the removal of manufacturing jobs from US inner cities produced crime increases even among families with no prior criminal history, confirming that economic structure can trump family influence." }
                ]
              },
              {
                title: "Peer group and neighbourhood environment override parental influence in adolescence",
                flow: "adolescent peer influence becomes dominant → children from good families turn to crime through peer socialisation in high-crime neighbourhoods → family values alone are insufficient to overcome environmental pressure",
                examples: [
                  { type: "vn", text: "Vietnamese gang research shows that many recruits come from intact, law-abiding families in high-crime urban areas — the neighbourhood peer environment being the decisive radicalising factor, not family background." },
                  { type: "support", text: "+ Judith Rich Harris's empirically supported 'Nurture Assumption' argued that peer group influence — not parental socialisation — is the primary determinant of adolescent behaviour, including delinquency." }
                ]
              },
              {
                title: "Institutional failures create crime independently of family environment",
                flow: "inadequate policing, failing schools, and absent community support → crime becomes viable across all family types → no family background can compensate for complete institutional collapse → social investment is the more powerful lever",
                examples: [
                  { type: "vn", text: "Post-war periods in Vietnam's history show crime spikes that affected communities regardless of family background — demonstrating that when institutions fail, offending spreads beyond any family's capacity to restrain it." },
                  { type: "contrast", text: "✗ Japan's extraordinarily low crime rate is attributed primarily to effective institutions — rigorous policing, strong community norms, and high social trust — rather than to any special quality of Japanese family structures." }
                ]
              }
            ]
          }
        },
        {
          qText: "Unemployment is a major cause of crime. To what extent do you agree or disagree?",
          sideA: {
            label: "Unemployment significantly drives criminal behaviour",
            ideas: [
              {
                title: "Unemployment removes the financial means to meet basic needs",
                flow: "no income → inability to afford food, housing, and necessities → petty theft and fraud become practical responses → economic crime correlates closely with unemployment cycles",
                examples: [
                  { type: "vn", text: "Vietnamese police reports show spikes in petty theft during economic downturns and following factory closures — particularly in export manufacturing cities like Binh Duong and Dong Nai where sudden job loss is most acute." },
                  { type: "support", text: "+ A study across 26 European countries found that a 1% increase in unemployment correlates with a 0.5% increase in property crime, confirming a measurable relationship between joblessness and criminality." }
                ]
              },
              {
                title: "Unemployment creates idle time and severs the social bonds of work",
                flow: "work structures time, provides identity, and builds social bonds → unemployment removes these → idle time creates opportunity and reduces investment in the community → risk of offending rises",
                examples: [
                  { type: "vn", text: "Vietnamese young men who migrated to cities for factory work and became unemployed during COVID-19 shutdowns were reported by local authorities to be overrepresented in petty crime statistics during the 2020–2021 lockdown periods." },
                  { type: "support", text: "+ Robert Sampson's social bonds theory argues that employment is one of the key social ties that prevents crime — its removal eliminating a central mechanism of informal social control." }
                ]
              },
              {
                title: "Prolonged unemployment breeds hopelessness that fuels violent crime",
                flow: "sustained unemployment → loss of identity and social worth → frustration and resentment accumulate → violent crime increases as an expression of alienation rather than financial desperation alone",
                examples: [
                  { type: "vn", text: "Youth unemployment in Vietnam's rural areas, particularly among young men unable to find work matching their qualifications, is identified by social researchers as a key factor driving substance abuse and associated violent crime." },
                  { type: "support", text: "+ Research into the causes of the 2011 UK riots found that chronic youth unemployment — not temporary financial difficulty — was the most consistent predictor of participation, with rioters expressing deep alienation from mainstream society." }
                ]
              }
            ]
          },
          sideB: {
            label: "Unemployment is overstated as a direct cause of crime",
            ideas: [
              {
                title: "Many unemployed people never commit crimes",
                flow: "millions are unemployed at any point without turning to crime → additional variables beyond joblessness determine criminal choice → moral values, family support, and social capital all mediate the relationship",
                examples: [
                  { type: "vn", text: "During Vietnam's economic restructuring periods, large numbers of workers lost state-enterprise jobs without significant increases in criminal activity in their communities — social cohesion and family networks providing sufficient support." },
                  { type: "support", text: "+ Scandinavian countries with generous unemployment benefits and strong social support systems show low crime rates even during periods of significant unemployment — the safety net decoupling joblessness from criminal motivation." }
                ]
              },
              {
                title: "Welfare systems can break the link between unemployment and crime",
                flow: "strong social safety nets replace income lost to unemployment → financial desperation is avoided → crime does not increase even when jobs are scarce → the unemployment–crime relationship is a policy choice, not an inevitability",
                examples: [
                  { type: "vn", text: "Vietnam's expanding social insurance system (bảo hiểm xã hội) has progressively reduced the income shock of job loss, particularly for formal sector workers, dampening the desperation-driven crime impulse." },
                  { type: "contrast", text: "✗ Germany's 2003 Hartz labour market reforms, which maintained generous unemployment benefits alongside tightened conditions, produced falling crime rates even during periods of rising unemployment — confirming that support quality matters more than employment rates alone." }
                ]
              },
              {
                title: "Criminal opportunity and normalisation drive crime independently of employment",
                flow: "crime thrives when social controls are weak and criminal networks are present → employed people in these environments also commit crimes → unemployment is a trigger, not the root structural cause",
                examples: [
                  { type: "vn", text: "Drug trafficking and organised crime in Vietnam's border regions involve many individuals with regular employment — suggesting criminal opportunity and normalisation of offending are more powerful drivers than unemployment alone." },
                  { type: "support", text: "+ Research on crime in fast-growing Gulf states shows elevated crime despite near-zero unemployment among nationals — social and cultural dislocations rather than joblessness being the operative cause." }
                ]
              }
            ]
          }
        },
        {
          qText: "Governments should focus on addressing the root causes of crime rather than simply punishing offenders. To what extent do you agree or disagree?",
          sideA: {
            label: "Addressing root causes is the more effective long-term strategy",
            ideas: [
              {
                title: "Punishment treats symptoms while root causes reproduce crime continuously",
                flow: "incarceration removes individual offenders temporarily → structural causes persist → new offenders emerge from the same conditions → crime rates do not fall sustainably without addressing origins",
                examples: [
                  { type: "vn", text: "Vietnam's sustained economic development and poverty reduction over two decades has contributed more visibly to crime reduction in formerly high-crime rural areas than any expansion of policing or prison capacity." },
                  { type: "support", text: "+ The United States, despite having the world's largest prison population (2.3 million), maintains violent crime rates 5–10 times higher than Western European countries that invest comparatively more in social support — confirming that punishment alone cannot resolve criminogenic conditions." }
                ]
              },
              {
                title: "Prevention is dramatically more cost-effective than punishment",
                flow: "early interventions in education, family support, and employment cost far less than policing, courts, and prisons → economic analysis consistently favours investment in causes → prevention returns compound while punishment costs recur annually",
                examples: [
                  { type: "vn", text: "Vietnam's investment in universal education access, including free secondary schooling and ethnic minority scholarships, represents a long-term crime prevention investment that costs a fraction of expanding the prison system." },
                  { type: "support", text: "+ The RAND Corporation estimated that every $1 spent on early childhood education programmes returns $7–12 in reduced crime, welfare, and incarceration costs — making root-cause investment among the highest-return public expenditures available to governments." }
                ]
              },
              {
                title: "Countries that invested in reducing inequality achieved lasting crime reductions",
                flow: "social investment in equality and opportunity → sustained multi-decade crime reductions → reliance on mass incarceration → cycling recidivism and high crime → evidence consistently favours structural over punitive investment",
                examples: [
                  { type: "vn", text: "The steady decline in rural poverty in Vietnam from 60% in 1993 to under 5% by 2020 corresponds with long-term improvements in social stability and reduced property crime rates in previously high-crime provincial areas." },
                  { type: "contrast", text: "✗ Despite doubling its prison population between 1980 and 2000, the US saw violent crime initially rise — the eventual decline attributable by researchers primarily to demographic and economic factors rather than incarceration itself." }
                ]
              }
            ]
          },
          sideB: {
            label: "Punishment and deterrence remain essential alongside addressing root causes",
            ideas: [
              {
                title: "Deterrence is necessary for immediate crime control while causes are addressed",
                flow: "root-cause solutions take decades to show results → crime must be controlled in the interim → credible punishment deters rational actors who calculate risks → abandoning punishment creates a permissive environment",
                examples: [
                  { type: "vn", text: "Vietnam's strict criminal penalties for drug trafficking and corruption provide a deterrent that keeps crime rates lower than they would otherwise be — particularly for organised crime where potential offenders make calculated decisions." },
                  { type: "support", text: "+ Singapore's extraordinarily low crime rate is maintained through a combination of social investment and strict, consistently enforced penalties — demonstrating that deterrence and root-cause work are complementary, not competing, strategies." }
                ]
              },
              {
                title: "Victims require justice, not only offender rehabilitation",
                flow: "crime causes real harm to victims → a system focused purely on causes risks minimising victim suffering → punishment provides societal acknowledgment that victims' rights matter → public confidence in the legal system depends on visible consequences",
                examples: [
                  { type: "vn", text: "Vietnamese public opinion surveys show strong support for punitive measures against violent and corruption-related crime, reflecting a cultural demand that serious offenders face meaningful consequences regardless of their social background." },
                  { type: "support", text: "+ Victims' rights movements in the UK and USA have successfully argued that rehabilitation-focused systems can appear to prioritise offenders over victims — eroding public trust and deterring crime reporting." }
                ]
              },
              {
                title: "Some dangerous offenders require incapacitation regardless of the social strategy",
                flow: "not all offenders are purely products of social conditions → some exhibit persistent dangerous behaviour → the public requires protection → incarceration for dangerous individuals is necessary regardless of the broader investment strategy",
                examples: [
                  { type: "vn", text: "Vietnam maintains high-security detention for serial violent offenders and organised crime figures not because rehabilitation is impossible but because public safety requires their removal from society." },
                  { type: "support", text: "+ Research consistently identifies a small group of prolific offenders — typically 5–10% of the criminal population — who account for 50–60% of all crime, and whose incapacitation produces disproportionate crime reduction benefits." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Economic & Social Causes",
          layout: "pre",
          items: [
            { phrase: "income inequality", vn: "bất bình đẳng thu nhập", meaning: "unequal distribution of wealth across society", synonyms: "wealth disparity, economic divide" },
            { phrase: "social deprivation", vn: "thiệt thòi xã hội", meaning: "lack of access to social necessities and opportunities", synonyms: "social disadvantage, marginalisation" },
            { phrase: "root causes of crime", vn: "nguyên nhân gốc rễ của tội phạm", meaning: "the underlying structural factors that produce criminal behaviour", synonyms: "underlying drivers, structural causes" },
            { phrase: "blocked opportunity", vn: "cơ hội bị chặn", meaning: "the inability to achieve success through legitimate means", synonyms: "limited access, structural barriers" },
            { phrase: "intergenerational poverty", vn: "nghèo đói liên thế hệ", meaning: "poverty that persists across multiple generations of a family", synonyms: "cycle of poverty, inherited deprivation" },
            { phrase: "criminal underclass", vn: "tầng lớp tội phạm", meaning: "a social group persistently excluded from mainstream society and involved in crime", synonyms: "marginalised community, excluded group" }
          ]
        },
        {
          group: "Family & Social Environment",
          layout: "half",
          items: [
            { phrase: "broken home", vn: "gia đình tan vỡ", meaning: "a household disrupted by separation, divorce, or dysfunction", synonyms: "dysfunctional family, disrupted household" },
            { phrase: "parental neglect", vn: "cha mẹ bỏ bê con cái", meaning: "failure to provide adequate care and supervision for children", synonyms: "child neglect, inadequate parenting" },
            { phrase: "peer pressure", vn: "áp lực từ bạn bè", meaning: "influence from social peers to conform to group behaviour", synonyms: "social influence, group conformity pressure" },
            { phrase: "moral framework", vn: "hệ thống giá trị đạo đức", meaning: "a set of values guiding judgements about right and wrong", synonyms: "ethical grounding, value system" }
          ]
        },
        {
          group: "Institutions & Policy",
          layout: "half",
          items: [
            { phrase: "social safety net", vn: "mạng lưới an sinh xã hội", meaning: "government programmes providing support to people in need", synonyms: "welfare system, social protection" },
            { phrase: "social cohesion", vn: "sự gắn kết xã hội", meaning: "the strength of bonds between members of a community", synonyms: "community solidarity, social bonds" },
            { phrase: "institutional weakness", vn: "sự yếu kém của thể chế", meaning: "the failure of government institutions to function effectively", synonyms: "governance failure, systemic weakness" },
            { phrase: "community policing", vn: "cảnh sát cộng đồng", meaning: "a policing approach based on partnership with local communities", synonyms: "neighbourhood policing, local law enforcement" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "span",
          items: [
            { phrase: "perpetuate a cycle", vn: "duy trì một vòng luẩn quẩn", meaning: "to cause a repeating pattern to continue indefinitely", synonyms: "sustain a pattern, entrench a cycle" },
            { phrase: "address root causes", vn: "giải quyết nguyên nhân gốc rễ", meaning: "to tackle fundamental underlying problems rather than symptoms", synonyms: "tackle underlying issues, resolve structural problems" },
            { phrase: "deter criminal behaviour", vn: "ngăn chặn hành vi tội phạm", meaning: "to discourage offending through the threat of consequences", synonyms: "discourage offending, suppress crime" },
            { phrase: "reintegrate into society", vn: "tái hòa nhập xã hội", meaning: "to return an offender to productive participation in mainstream society", synonyms: "rehabilitate offenders, rejoin the community" }
          ]
        }
      ]
    },
    {
      num: "02",
      name: "Juvenile Crime",
      badge: "4 Questions",
      coming: false,
      fullName: "Juvenile Crime",
      desc: "Why do young people commit crimes — and who bears responsibility?",
      panelBadges: ["4 Real Questions", "24 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "In many countries, the number of young people committing crimes is increasing. What are the causes of this trend and what solutions can be implemented?" },
        { text: "Young offenders who commit serious crimes should be punished in the same way as adults. To what extent do you agree or disagree?" },
        { text: "Parents are responsible for their children's behaviour, including criminal acts. To what extent do you agree or disagree?" },
        { text: "Schools should play a key role in teaching children to become law-abiding citizens. To what extent do you agree or disagree?" }
      ],
      ideas: [
        {
          qText: "In many countries, the number of young people committing crimes is increasing. What are the causes of this trend and what solutions can be implemented?",
          sideA: {
            label: "Causes of rising youth crime",
            ideas: [
              {
                title: "Family breakdown removes the primary restraint on adolescent behaviour",
                flow: "rising parental absence and divorce → children lack consistent supervision and moral guidance → seek belonging in peer groups → criminal gang affiliation fills the parental void",
                examples: [
                  { type: "vn", text: "Vietnam's rapid urbanisation has separated many children from extended family networks — grandparents who traditionally supervised children while parents worked — increasing unsupervised time and exposure to urban criminal peer groups." },
                  { type: "support", text: "+ UK Home Office data shows that over 70% of juvenile offenders in custody came from single-parent households or had experienced significant family breakdown, making family instability the strongest predictor of youth crime in the dataset." }
                ]
              },
              {
                title: "Digital media normalises criminal behaviour and accelerates peer radicalisation",
                flow: "social media and gaming platforms celebrate criminal aesthetics → young people normalise what they repeatedly see → peer competition rewards risk-taking → digital socialisation accelerates the path to criminal involvement",
                examples: [
                  { type: "vn", text: "Vietnamese youth researchers have documented a rise in gang-related violence directly linked to social media rivalries — groups escalating conflicts online before carrying them into physical confrontations in the real world." },
                  { type: "support", text: "+ Research in the UK and USA links exposure to online gang content on YouTube and TikTok to increased delinquency among 13–17 year olds — the algorithmic amplification of violent content creating a radicalisation pathway accessible to any smartphone user." }
                ]
              },
              {
                title: "Youth unemployment and blocked aspirations create criminal motivation",
                flow: "school-to-work transitions increasingly difficult → qualified young people unable to find employment → aspirations blocked while consumer culture raises expectations → criminal income fills the gap between expectation and reality",
                examples: [
                  { type: "vn", text: "Vietnamese university graduates unable to find employment matching their qualifications are identified by researchers as a growing population vulnerable to recruitment by criminal networks that offer both income and status." },
                  { type: "support", text: "+ The 2011 UK riots were disproportionately carried out by young people with qualifications but no employment — a generation whose educational investment had not translated into economic opportunity, producing the frustration that criminal motivation requires." }
                ]
              }
            ]
          },
          sideB: {
            label: "Solutions to rising youth crime",
            ideas: [
              {
                title: "Youth diversion programmes redirect energy before offending begins",
                flow: "sport, arts, and vocational programmes provide constructive identity and belonging → young people stay outside criminal networks → early intervention at first sign of risk → diversion prevents escalation to serious crime",
                examples: [
                  { type: "vn", text: "Vietnam's Youth Union (Đoàn Thanh Niên) runs community programmes across urban districts providing structured activities for at-risk youth, diverting energy away from criminal peer groups in many cities." },
                  { type: "support", text: "+ Scotland's Violence Reduction Unit, treating youth violence as a public health problem rather than a criminal justice issue, produced a 60% reduction in teenage homicide through sport, mentoring, and social support — with no increase in youth incarceration." }
                ]
              },
              {
                title: "Family support services strengthen the primary protective unit",
                flow: "counselling, parenting classes, and financial support for struggling families → family bonds strengthened → parental capacity to supervise and guide improves → home becomes protective rather than criminogenic",
                examples: [
                  { type: "vn", text: "Vietnam's commune-level family support programmes, including mediation and social worker visits to identified at-risk households, provide early-stage support before family breakdown produces juvenile crime." },
                  { type: "support", text: "+ The Nurse-Family Partnership in the USA, providing intensive home-visiting support to first-time mothers in disadvantaged areas, produced a 48% reduction in child abuse and a 59% reduction in juvenile arrests over the long term." }
                ]
              },
              {
                title: "Restorative justice keeps young offenders out of the criminal justice system",
                flow: "first-time young offenders directed to mediation and community service rather than courts → stigma of criminal record avoided → reintegration into school and community supported → reoffending falls compared with custodial approaches",
                examples: [
                  { type: "vn", text: "Vietnam's juvenile justice system allows first-time minor offenders to be handled through community-based measures (biện pháp xử lý hành chính) rather than criminal prosecution — reflecting growing recognition that criminalising youth does more harm than good." },
                  { type: "support", text: "+ New Zealand's Family Group Conferencing model — involving victims, offenders, and families in designing restorative consequences — shows reoffending rates 20–30% lower than standard prosecution for equivalent youth offences." }
                ]
              }
            ]
          }
        },
        {
          qText: "Young offenders who commit serious crimes should be punished in the same way as adults. To what extent do you agree or disagree?",
          sideA: {
            label: "Young serious offenders should face adult-equivalent punishment",
            ideas: [
              {
                title: "Serious crimes cause equal harm regardless of the offender's age",
                flow: "victims of violent crime suffer identically whether the perpetrator is 16 or 30 → justice demands consequences proportionate to harm caused → age-based exemptions fail victims → equal harm should produce equal consequences",
                examples: [
                  { type: "vn", text: "Vietnamese public opinion responds strongly to cases where juvenile status minimises punishment for serious violent crimes — particularly murders where the victim's family feels that lighter sentences deny meaningful justice." },
                  { type: "support", text: "+ American advocates for adult prosecution of serious juvenile offenders argue that gang-related murders by 16- and 17-year-olds — which destroy families — should not receive drastically reduced sentences simply because the perpetrator was below the age of majority." }
                ]
              },
              {
                title: "Adult-level sentencing removes the tactical incentive to use young offenders",
                flow: "lighter juvenile sentences make youth a shield from serious consequences → criminal organisations specifically use young members for violent acts knowing they face reduced penalties → adult sentencing closes this loophole",
                examples: [
                  { type: "vn", text: "Vietnamese law enforcement has documented that criminal gangs deliberately use members under 18 for dangerous operations, knowing Vietnam's juvenile justice provisions reduce their criminal exposure — a perverse incentive created by age-based leniency." },
                  { type: "support", text: "+ US prosecutors in high-crime cities cite the routine use of juveniles as triggermen in gang shootings as direct evidence that youth-specific lenient sentencing creates a practical incentive for criminal organisations to exploit age-based protections." }
                ]
              },
              {
                title: "Some young offenders are fully aware of and morally responsible for their actions",
                flow: "adolescent moral reasoning is sufficiently developed by mid-teens to understand the wrongness of serious crimes → premeditated violence by a 16-year-old differs fundamentally from impulsive child behaviour → individual culpability should be assessed, not blanket age exemptions applied",
                examples: [
                  { type: "vn", text: "Vietnamese courts already distinguish between genuinely impulsive juvenile offences and premeditated serious crimes committed by older adolescents — Vietnamese law allows courts to assess individual maturity in sentencing decisions." },
                  { type: "support", text: "+ The US Supreme Court in Roper v. Simmons prohibited the death penalty for juveniles but acknowledged that some adolescent criminals demonstrate sophisticated planning and full awareness of the gravity of their actions — supporting individualised over blanket age-based treatment." }
                ]
              }
            ]
          },
          sideB: {
            label: "Young offenders should be treated differently from adults",
            ideas: [
              {
                title: "Adolescent brain development means young people cannot be held to adult standards",
                flow: "prefrontal cortex — governing impulse control and long-term reasoning — is not fully developed until the mid-20s → adolescents are neurologically predisposed to risk-taking and poor judgment → adult-standard accountability ignores established neuroscience",
                examples: [
                  { type: "vn", text: "Vietnam's juvenile justice framework formally acknowledges reduced culpability for offenders under 18 — reflecting the legal principle that full moral responsibility develops gradually, now strongly supported by neuroscientific evidence." },
                  { type: "support", text: "+ The US Supreme Court's decision in Miller v. Alabama (2012), prohibiting mandatory life-without-parole for juveniles, cited extensive neuroscience evidence showing adolescent brains are fundamentally different from adult brains in ways that reduce criminal culpability." }
                ]
              },
              {
                title: "Rehabilitation is far more achievable for young offenders than adults",
                flow: "adolescent identity and behaviour are still in formation → young people are highly responsive to intervention → adult prisons entrench criminal identity and networks → separating young offenders from adult criminals maximises rehabilitation prospects",
                examples: [
                  { type: "vn", text: "Vietnam's juvenile detention centres (trường giáo dưỡng) focus on education and vocational training rather than punishment, producing significantly lower reoffending rates than adult prisons for comparable offences." },
                  { type: "support", text: "+ Evaluation of Finland's youth reformatory system shows 60–70% of young offenders who receive education-focused intervention rather than punitive incarceration do not reoffend within five years — demonstrating the high rehabilitation dividend from age-appropriate responses." }
                ]
              },
              {
                title: "Adult prisons permanently damage young offenders' life prospects",
                flow: "adult prison exposes young offenders to hardened criminals → criminal networks and norms are absorbed → criminal identity becomes permanent → the justice system produces worse outcomes than the crime it was responding to",
                examples: [
                  { type: "vn", text: "Vietnamese criminologists consistently note that young offenders who serve time in adult facilities reoffend at significantly higher rates than those processed through the juvenile system — the adult prison acting as a crime school rather than a deterrent." },
                  { type: "support", text: "+ A comprehensive meta-analysis of US transfer laws — moving juveniles to adult court — found that young people prosecuted as adults had a 34% higher recidivism rate than comparable offenders retained in the juvenile system." }
                ]
              }
            ]
          }
        },
        {
          qText: "Parents are responsible for their children's behaviour, including criminal acts. To what extent do you agree or disagree?",
          sideA: {
            label: "Parents bear primary responsibility for their children's criminal behaviour",
            ideas: [
              {
                title: "Parents are the first and most powerful moral educators",
                flow: "children's core values form in the family before school begins → parents who model, reinforce, or fail to challenge antisocial behaviour shape criminal predisposition → parental negligence produces moral deficits → deficits manifest as crime",
                examples: [
                  { type: "vn", text: "Vietnamese culture places the heaviest burden of moral formation on parents — the proverb 'dạy con từ thuở còn thơ' reflects a deep belief that parental instruction is the decisive early moral influence on a child's character." },
                  { type: "support", text: "+ Research across multiple countries finds that warm, authoritative parenting with clear boundaries reduces criminal behaviour more effectively than any school or community programme — confirming parental behaviour as the primary preventive variable." }
                ]
              },
              {
                title: "Parental legal responsibility creates accountability and incentivises better parenting",
                flow: "holding parents liable for children's crimes → parents have a financial incentive to supervise and discipline → passive or absent parents face real consequences → accountability reshapes parenting behaviour",
                examples: [
                  { type: "vn", text: "Vietnamese civil law holds parents financially liable for property damage caused by children under 15, creating a legal accountability framework that incentivises active parental supervision of younger children." },
                  { type: "support", text: "+ The UK's Parenting Orders — requiring parents of delinquent children to attend parenting classes and improve supervision — have shown measurable reductions in reoffending for young people whose parents engaged genuinely with the programme." }
                ]
              },
              {
                title: "Parental abuse and neglect are direct causal factors in juvenile crime",
                flow: "abuse or severe neglect → trauma, attachment disorders, and learned aggression → children who experience violence are significantly more likely to perpetrate it → parental behaviour is an active cause, not merely background context",
                examples: [
                  { type: "vn", text: "Vietnam's domestic violence statistics show a strong correlation between households with physical child abuse and juvenile crime — the abused child becoming the juvenile offender in a direct, documented causal chain." },
                  { type: "support", text: "+ The ACE (Adverse Childhood Experiences) study found that children who experienced parental abuse, neglect, or household dysfunction were 2–4 times more likely to be arrested as juveniles, confirming parents as causal agents, not merely background variables." }
                ]
              }
            ]
          },
          sideB: {
            label: "Parental responsibility has clear limits; wider factors determine criminal behaviour",
            ideas: [
              {
                title: "Social and economic forces beyond parental control shape criminal behaviour",
                flow: "parents have no control over neighbourhood environments, school quality, or peer groups → structural inequality creates crime-producing conditions that good parenting cannot overcome → holding parents solely responsible ignores systemic failure",
                examples: [
                  { type: "vn", text: "Vietnamese parents who move to cities for factory work, leaving children in cramped shared housing, cannot reasonably be held responsible for delinquency driven by dangerous urban environments their economic situation forces them into." },
                  { type: "support", text: "+ Robert Sampson's research shows that neighbourhood disadvantage predicts youth crime independently of parenting quality — children in deprived areas with attentive parents still show higher crime rates than children in advantaged areas with neglectful parents." }
                ]
              },
              {
                title: "Adolescent autonomy progressively reduces the reach of parental influence",
                flow: "as children reach adolescence → peer influence dominates over parental authority → teenagers form independent identities deliberately opposed to parental values → parental monitoring becomes physically and psychologically limited",
                examples: [
                  { type: "vn", text: "Vietnamese adolescents increasingly reject traditional parental authority as smartphone culture enables private communication entirely outside the family home — parents losing visibility into their children's social lives regardless of intentions." },
                  { type: "support", text: "+ Judith Rich Harris's research concluded that peer group influence overtakes parental socialisation as the primary behaviour determinant by early adolescence — meaning parents simply cannot be held fully accountable for choices teenagers make under peer pressure." }
                ]
              },
              {
                title: "Schools and social services share responsibility for child moral development",
                flow: "education systems, social services, and community organisations are co-responsible for child development → when they fail, blaming parents alone is scapegoating → shared societal responsibility requires shared institutional accountability",
                examples: [
                  { type: "vn", text: "Vietnam's schools are constitutionally responsible for moral education (giáo dục đạo đức) — recognising that the state shares responsibility with parents rather than delegating child development entirely to families." },
                  { type: "contrast", text: "✗ Nordic countries achieve the world's lowest youth crime rates not by holding individual parents criminally liable but by investing heavily in universal welfare, community support, and quality schools — treating child development as a shared social responsibility." }
                ]
              }
            ]
          }
        },
        {
          qText: "Schools should play a key role in teaching children to become law-abiding citizens. To what extent do you agree or disagree?",
          sideA: {
            label: "Schools should take a central role in civic and moral education",
            ideas: [
              {
                title: "Schools reach every child regardless of family background",
                flow: "compulsory education gives schools universal access to all children → families vary dramatically in moral guidance quality → schools provide a consistent baseline of civic values → school-based education compensates for family deficits",
                examples: [
                  { type: "vn", text: "Vietnam's mandatory giáo dục công dân (civic education) curriculum is one of the few channels reaching every child across the country, regardless of family background — making schools the most universally accessible moral education platform available." },
                  { type: "support", text: "+ Finland's integration of ethics, civic responsibility, and conflict resolution throughout its national curriculum is credited by researchers as a key factor in its low crime and high social trust levels." }
                ]
              },
              {
                title: "Schools can teach practical law literacy that deters unknowing violations",
                flow: "many young people commit crimes through ignorance of the law → schools can systematically teach legal rights, responsibilities, and consequences → informed young people make better choices → legal literacy functions as a preventive tool",
                examples: [
                  { type: "vn", text: "Vietnam's legal education programmes in secondary schools cover criminal law basics, cybercrime legislation, and civic rights — equipping students with the knowledge to avoid unknowing violations of increasingly complex laws." },
                  { type: "support", text: "+ UK surveys of young offenders consistently find that a significant proportion were unaware their actions constituted criminal offences — confirming that legal literacy education in schools could prevent a meaningful share of youth crime." }
                ]
              },
              {
                title: "Schools can identify at-risk students and intervene before first offence",
                flow: "teachers observe behavioural warning signs earlier than police do → schools can refer at-risk students to support services → early identification prevents escalation → school is the most cost-effective early warning system available",
                examples: [
                  { type: "vn", text: "Vietnamese schools are increasingly required to report signs of student abuse, gang involvement, and behavioural deterioration to social protection agencies — positioning schools as the first institutional line of prevention." },
                  { type: "support", text: "+ Chicago's Becoming a Man (BAM) programme — delivered through schools — reduced violent crime arrests among participants by 45% through cognitive behavioural training and mentoring, outperforming policing for this age group." }
                ]
              }
            ]
          },
          sideB: {
            label: "Schools alone cannot produce law-abiding citizens",
            ideas: [
              {
                title: "Family and community exercise deeper and earlier moral influence than schools",
                flow: "moral formation begins at birth → early years in the family shape values before school begins → school-based moral education cannot undo deeply embedded family-derived values → schools supplement but cannot replace family moral authority",
                examples: [
                  { type: "vn", text: "Vietnamese educational research consistently finds that family influence (ảnh hưởng gia đình) is a stronger predictor of students' civic attitudes than school curriculum delivery — the family environment setting the floor within which schooling works." },
                  { type: "support", text: "+ Research on moral development by Lawrence Kohlberg shows that advanced moral reasoning is shaped primarily by family relationships and personal experience — formal school instruction playing a secondary reinforcing rather than primary formative role." }
                ]
              },
              {
                title: "Overburdening schools with social problems reduces academic quality",
                flow: "diverting school time to moral and civic education reduces academic instruction → students' academic prospects suffer → reduced qualifications lead to worse employment outcomes → the prevention effort inadvertently creates the economic conditions for crime",
                examples: [
                  { type: "vn", text: "Vietnamese teachers frequently note that expanding civic and moral education requirements crowds an already dense curriculum — leading many schools to deliver the mandatory content superficially rather than effectively." },
                  { type: "support", text: "+ A meta-analysis of character education programmes in US schools found that most had negligible effects on actual behaviour — students completing the programmes showing similar delinquency rates to control groups — questioning the effectiveness of formal school-based moral instruction." }
                ]
              },
              {
                title: "Legal compliance depends on social trust, not classroom instruction",
                flow: "citizens follow the law when they trust institutions and feel invested in society → this trust is built by governance quality, economic fairness, and policing → no school curriculum can compensate for a society people feel excluded from",
                examples: [
                  { type: "vn", text: "Vietnamese surveys show that trust in law enforcement and the justice system is a stronger predictor of legal compliance than civic education received in school — institutional legitimacy matters more than classroom instruction." },
                  { type: "contrast", text: "✗ Countries with the highest rule-of-law compliance (Denmark, New Zealand, Finland) achieve this through broadly trusted institutions, low corruption, and high social equality — not through exceptional school-based moral education programmes." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Youth Crime & Justice",
          layout: "pre",
          items: [
            { phrase: "juvenile delinquency", vn: "phạm pháp vị thành niên", meaning: "criminal or antisocial behaviour by young people below the age of legal adulthood", synonyms: "youth offending, adolescent crime" },
            { phrase: "age of criminal responsibility", vn: "tuổi chịu trách nhiệm hình sự", meaning: "the minimum age at which a person can be held legally responsible for criminal acts", synonyms: "criminal majority age, legal culpability threshold" },
            { phrase: "youth diversion programme", vn: "chương trình chuyển hướng cho thanh thiếu niên", meaning: "a scheme redirecting young offenders away from prosecution into community-based support", synonyms: "diversion scheme, early intervention programme" },
            { phrase: "recidivism rate", vn: "tỷ lệ tái phạm", meaning: "the proportion of offenders who reoffend after release from prison", synonyms: "reoffending rate, relapse rate" },
            { phrase: "restorative justice", vn: "tư pháp phục hồi", meaning: "an approach to crime focusing on repairing harm rather than punishing offenders", synonyms: "reparative justice, victim-offender mediation" }
          ]
        },
        {
          group: "Family & Development",
          layout: "half",
          items: [
            { phrase: "parental supervision", vn: "sự giám sát của cha mẹ", meaning: "the degree to which parents monitor and guide their children's behaviour", synonyms: "parental oversight, parental monitoring" },
            { phrase: "moral development", vn: "phát triển đạo đức", meaning: "the process by which individuals develop values distinguishing right from wrong", synonyms: "ethical formation, character development" },
            { phrase: "antisocial behaviour", vn: "hành vi chống đối xã hội", meaning: "actions harmful or disruptive to the community or other individuals", synonyms: "disruptive behaviour, social misconduct" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "half",
          items: [
            { phrase: "curb youth crime", vn: "kiềm chế tội phạm vị thành niên", meaning: "to reduce or control the rate of offending among young people", synonyms: "reduce juvenile crime, tackle youth offending" },
            { phrase: "rehabilitate young offenders", vn: "cải tạo thanh thiếu niên phạm tội", meaning: "to help young criminals reform and reintegrate into society", synonyms: "reform juvenile offenders, reintegrate youth" },
            { phrase: "impose harsher penalties", vn: "áp đặt hình phạt nghiêm khắc hơn", meaning: "to increase the severity of sentences for criminal acts", synonyms: "increase sentences, toughen penalties" }
          ]
        }
      ]
    },
    {
      num: "03",
      name: "Crime Prevention",
      badge: "4 Questions",
      coming: false,
      fullName: "Crime Prevention",
      desc: "Which approaches most effectively stop crime before it happens?",
      panelBadges: ["4 Real Questions", "24 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "Improving education is the most effective way to reduce crime. To what extent do you agree or disagree?" },
        { text: "Increasing the number of police officers on the streets is the best way to reduce crime. To what extent do you agree or disagree?" },
        { text: "Governments should spend more money on preventing crime rather than punishing criminals. To what extent do you agree or disagree?" },
        { text: "The use of technology in crime prevention is increasing. Do the advantages outweigh the disadvantages?" }
      ],
      ideas: [
        {
          qText: "Improving education is the most effective way to reduce crime. To what extent do you agree or disagree?",
          sideA: {
            label: "Education is the most effective crime reduction tool",
            ideas: [
              {
                title: "Education creates the economic pathways that make crime unnecessary",
                flow: "education provides qualifications → access to formal employment opens → legitimate income removes financial motivation for crime → the fundamental economic driver of most crime is eliminated",
                examples: [
                  { type: "vn", text: "Vietnam's dramatic expansion of secondary and tertiary education access since the 1990s has been accompanied by long-term improvements in economic outcomes for rural youth — directly reducing the desperate economic conditions that produce property crime." },
                  { type: "support", text: "+ The RAND Corporation estimates that every $1 invested in early childhood education returns $7–12 in reduced crime, welfare dependency, and incarceration costs — making education the highest-return crime prevention investment available to governments." }
                ]
              },
              {
                title: "Education builds the values and reasoning that prevent offending",
                flow: "schooling transmits civic norms and legal awareness → moral reasoning and empathy develop → psychological inhibitors of crime become internalised → educated populations resist criminal peer cultures more effectively",
                examples: [
                  { type: "vn", text: "Vietnam's civic education curriculum directly addresses legal responsibilities and civic duties — building a values framework that teachers report contributes to lower rates of drug use and antisocial behaviour among engaged students." },
                  { type: "support", text: "+ Finland's education system, which integrates conflict resolution, ethics, and civic responsibility throughout schooling, is credited by criminologists as a key contributor to the country's consistently low crime and incarceration rates." }
                ]
              },
              {
                title: "Education addresses crime more sustainably than enforcement ever can",
                flow: "policing and incarceration suppress crime while active but cannot change underlying conditions → educated societies produce fewer criminals because fewer people have the motivation to offend → education changes the source, not merely the symptom",
                examples: [
                  { type: "vn", text: "Provinces in Vietnam where educational investment has been highest over 30 years show structural improvements in crime rates that persist even during periods of reduced police presence — the educational foundation being self-sustaining." },
                  { type: "contrast", text: "✗ The United States has more than doubled its prison population since 1980 without producing lasting violent crime reductions, while Nordic countries with comparable populations but higher education investment maintain crime rates a fraction of American levels." }
                ]
              }
            ]
          },
          sideB: {
            label: "Education alone is insufficient; other approaches are equally or more effective",
            ideas: [
              {
                title: "Education's crime prevention effect takes decades; immediate threats require faster responses",
                flow: "educational improvements produce crime reductions over a generation, not years → current crime victims cannot wait decades for social investment to work → policing and deterrence are needed for immediate crime control alongside long-term educational investment",
                examples: [
                  { type: "vn", text: "Vietnam's expansion of CCTV, increased street patrols, and rapid-response policing in major cities have produced measurable short-term reductions in street crime that no educational programme could have achieved at the same speed." },
                  { type: "support", text: "+ Hot-spot policing research — concentrating police presence in specific high-crime locations — shows crime reductions of 20–30% within weeks of deployment, a speed of response that is impossible to replicate through educational means." }
                ]
              },
              {
                title: "Many criminals are educated; education alone does not eliminate criminal motivation",
                flow: "white-collar crime, fraud, and political corruption are committed by educated people → education provides capability but not necessarily ethical constraint → greed and opportunity operate independently of educational level",
                examples: [
                  { type: "vn", text: "Vietnam's anti-corruption prosecutions involve numerous university-educated officials — demonstrating that education credentials do not prevent crime when institutional oversight is weak and criminal opportunity is present." },
                  { type: "support", text: "+ Financial fraud, tax evasion, and corporate crime — committed predominantly by educated professionals — collectively cause more economic damage than all street crime combined, yet are largely unaddressed by educational interventions." }
                ]
              },
              {
                title: "Economic opportunity matters more directly than education credentials alone",
                flow: "education without employment opportunity does not reduce crime → rising youth unemployment despite education expansion shows education is insufficient → jobs and economic fairness must accompany schooling for crime prevention to succeed",
                examples: [
                  { type: "vn", text: "Vietnam's growing population of university graduates unable to find employment matching their qualifications shows that education without economic opportunity can produce frustration that criminal networks exploit." },
                  { type: "contrast", text: "✗ South Korea and Singapore have near-universal tertiary education participation but still maintain active policing, surveillance infrastructure, and strict criminal penalties — demonstrating that even the most educated societies require complementary enforcement." }
                ]
              }
            ]
          }
        },
        {
          qText: "Increasing the number of police officers on the streets is the best way to reduce crime. To what extent do you agree or disagree?",
          sideA: {
            label: "More police on the streets effectively deters and reduces crime",
            ideas: [
              {
                title: "Police visibility deters rational would-be offenders",
                flow: "increased police presence → risk of detection and arrest rises → cost-benefit calculation of offending shifts → rational criminals avoid areas with high police density → crime is suppressed or displaced",
                examples: [
                  { type: "vn", text: "Vietnam's increased police presence in tourist areas of HCMC and Hoi An — including foot patrols and plainclothes officers — has noticeably reduced tourist-targeted pickpocketing in the most heavily patrolled zones." },
                  { type: "support", text: "+ Research on hot-spot policing has confirmed that increased police presence in specific locations reduces crime in those locations by 15–25%, with minimal displacement to adjacent areas." }
                ]
              },
              {
                title: "Faster response times increase apprehension rates and strengthen deterrence",
                flow: "more officers → faster response when crimes occur → higher arrest rates → greater deterrent through certainty of punishment → criminals know rapid response reduces the probability of successful escape",
                examples: [
                  { type: "vn", text: "Vietnam's expansion of 113 emergency response units and their response time improvements in major cities has increased arrest rates for in-progress crimes — raising the personal risk calculation for potential offenders." },
                  { type: "support", text: "+ Research in England and Wales shows a statistically significant relationship between police officer numbers and crime rates — particularly for theft and street robbery — confirming that officer availability influences criminal decision-making." }
                ]
              },
              {
                title: "Community policing builds trust and improves crime intelligence",
                flow: "officers embedded in communities develop relationships and local knowledge → residents more willing to report crimes and suspicious activity → intelligence improves → police prevent crimes proactively rather than only reactively",
                examples: [
                  { type: "vn", text: "Vietnam's công an phường (ward police) system embeds officers in residential communities, creating local familiarity that generates more reliable crime intelligence than anonymous hotline reporting." },
                  { type: "support", text: "+ Japan's kōban (neighbourhood police box) system — placing officers within walking distance of every community — is credited as central to Japan's remarkably low street crime rates, community familiarity producing both deterrence and intelligence." }
                ]
              }
            ]
          },
          sideB: {
            label: "Policing alone is insufficient and not the best use of crime prevention resources",
            ideas: [
              {
                title: "Policing suppresses but does not eliminate the conditions that produce crime",
                flow: "more police respond to crime after the fact → structural causes — inequality, unemployment, family breakdown — remain unchanged → policing is a holding action, not a solution → crime rebounds when police presence reduces",
                examples: [
                  { type: "vn", text: "Periods of intensified police crackdowns in Vietnamese cities produce temporary reductions in street crime, but underlying economic pressures quickly reassert themselves once enforcement intensity relaxes." },
                  { type: "contrast", text: "✗ Nordic countries maintain low crime rates with significantly fewer police officers per capita than the UK or USA — demonstrating that crime prevention depends more on social conditions than police numbers alone." }
                ]
              },
              {
                title: "Heavy policing of poor communities can damage trust and reduce crime reporting",
                flow: "aggressive enforcement in poor communities → perceptions of harassment → trust in police erodes → residents refuse to report crimes → intelligence degrades and crime becomes harder to address",
                examples: [
                  { type: "vn", text: "Overly aggressive enforcement operations targeting particular communities can produce resentment and reduce cooperation with authorities — limiting the intelligence flow that effective policing fundamentally depends upon." },
                  { type: "support", text: "+ Research following aggressive stop-and-frisk policing in New York and London found that trust in police among stopped communities fell dramatically, reducing crime reporting rates and ultimately making those communities less safe, not more." }
                ]
              },
              {
                title: "Social investment produces more sustained crime reduction per unit of spending",
                flow: "police salaries, equipment, and administration are expensive recurring costs → social investment in education, employment, and community produces self-sustaining crime reduction → cost-per-crime-prevented is far higher for policing than for social programmes",
                examples: [
                  { type: "vn", text: "Economic analyses suggest that community development and education investment in Vietnam's at-risk areas produces more durable reductions in crime per unit of spending than equivalent expenditure on policing." },
                  { type: "support", text: "+ The Washington State Institute for Public Policy's cost-benefit analyses consistently show that education, drug treatment, and employment programmes produce crime reductions at 3–8 times lower cost than equivalent spending on policing and incarceration." }
                ]
              }
            ]
          }
        },
        {
          qText: "Governments should spend more money on preventing crime rather than punishing criminals. To what extent do you agree or disagree?",
          sideA: {
            label: "Prevention spending is more effective and efficient than punishment",
            ideas: [
              {
                title: "Prevention is dramatically cheaper than punishment per crime avoided",
                flow: "imprisonment costs tens of thousands per prisoner annually → education, family support, and employment programmes cost a fraction → and prevent crime from occurring rather than merely responding → rational resource allocation favours prevention",
                examples: [
                  { type: "vn", text: "Vietnam's cost per prison inmate significantly exceeds the cost of vocational training or community support programmes — making prevention not only more humane but more economically rational as a resource allocation choice." },
                  { type: "support", text: "+ The UK government's own analysis shows it costs £40,000 per year to keep one person in prison — money that could fund five mentoring programmes or ten vocational training places, each preventing multiple future crimes." }
                ]
              },
              {
                title: "Punishment does not address the conditions that produce new offenders",
                flow: "punishing current criminals while structural conditions persist → new offenders emerge from the same deprived conditions → the criminal justice system processes an endless conveyor belt → prevention breaks the cycle at source",
                examples: [
                  { type: "vn", text: "Vietnam's recognition that punitive responses alone are insufficient has driven increased investment in youth employment programmes and community welfare — an implicit acknowledgment that prevention addresses what punishment cannot." },
                  { type: "support", text: "+ The United States, which spends more on criminal justice than any other country, has not achieved proportionately lower crime rates than European nations that invest comparatively more in social prevention — confirming that punishment spending has diminishing returns." }
                ]
              },
              {
                title: "Evidence-based prevention programmes produce measurable, lasting crime reductions",
                flow: "specific interventions — early childhood programmes, drug treatment, mentoring — have strong evidence of effectiveness → outcomes are measurable in reduced arrest rates → governments have reliable tools for evidence-based investment",
                examples: [
                  { type: "vn", text: "Vietnam's community-based methadone treatment programmes have shown measurable reductions in drug-related crime in cities where they operate at scale — demonstrating that prevention investment produces quantifiable public safety returns." },
                  { type: "support", text: "+ The Perry Preschool Project showed that $1 invested in early childhood intervention for at-risk children produced $7 in lifetime savings across reduced crime, welfare, and health costs — a rate of return that no criminal justice programme can match." }
                ]
              }
            ]
          },
          sideB: {
            label: "Punishment remains an essential and irreplaceable element of crime control",
            ideas: [
              {
                title: "Punishment provides immediate crime reduction that prevention cannot",
                flow: "prevention programmes take years to show results → criminals are committing crimes now → incarceration immediately removes active offenders from society → the public cannot be left unprotected while long-term prevention works",
                examples: [
                  { type: "vn", text: "Vietnam's aggressive prosecution of drug traffickers provides immediate crime reduction in affected communities — removing dangerous operators whose activities cannot wait for long-term social investment to address their motivations." },
                  { type: "support", text: "+ Research on prolific offenders shows that a small group — typically 5–10% of criminals — accounts for 50–60% of all crime; incarcerating this group produces disproportionate immediate crime reductions that no prevention programme can replicate at the same speed." }
                ]
              },
              {
                title: "Credible punishment deters rational criminal calculation",
                flow: "potential offenders weigh benefits against risks of punishment → reducing punishment reduces the deterrent cost of offending → crime becomes more attractive when consequences are perceived as negligible → some level of credible punishment is necessary in any functioning justice system",
                examples: [
                  { type: "vn", text: "Vietnam's strict penalties for corruption and drug trafficking provide a credible deterrent that keeps crime lower than it would otherwise be — particularly for premeditated offences where punishment is a rational calculation factor." },
                  { type: "contrast", text: "✗ Singapore combines high social spending with strict punishment — insisting both are necessary — and achieves among the world's lowest crime rates, demonstrating that effective systems require both prevention investment and credible consequences." }
                ]
              },
              {
                title: "Victims and society require justice, not only crime reduction",
                flow: "punishment has a retributive function beyond crime reduction → victims need societal acknowledgment that wrongs against them matter → public confidence in the justice system requires visible consequences → prevention-only approaches undermine the moral framework of law",
                examples: [
                  { type: "vn", text: "Vietnamese public attitudes toward serious crime — particularly corruption, murder, and sexual violence — strongly favour punitive responses that reflect the gravity of the harm done, independent of any crime-reduction calculation." },
                  { type: "support", text: "+ Retributive justice theory argues that punishment is intrinsically owed to offenders as a matter of justice — not merely instrumentally valuable for crime reduction — a widely held philosophical position that pure prevention spending cannot satisfy." }
                ]
              }
            ]
          }
        },
        {
          qText: "The use of technology in crime prevention is increasing. Do the advantages outweigh the disadvantages?",
          sideA: {
            label: "Technology in crime prevention offers significant advantages",
            ideas: [
              {
                title: "Surveillance technology dramatically improves detection and deterrence",
                flow: "CCTV, facial recognition, and data analytics → more crimes detected and prosecuted → higher risk of apprehension deters potential offenders → deterrent effect radiates beyond surveilled areas",
                examples: [
                  { type: "vn", text: "Vietnam's rapid expansion of CCTV coverage in major cities has contributed to improved detection rates for street crime and robbery — cameras providing evidence that secures convictions and deters repeat offending in covered areas." },
                  { type: "support", text: "+ The UK has the highest density of surveillance cameras globally, and research confirms a statistically significant reduction in crime in areas where camera coverage was introduced — particularly car crime and street robbery." }
                ]
              },
              {
                title: "Predictive analytics enables proactive policing",
                flow: "crime data analysis identifies patterns and hotspots → police resources directed precisely where needed → proactive patrols prevent crimes before they occur → efficiency of the same number of officers multiplies significantly",
                examples: [
                  { type: "vn", text: "Vietnam's Ministry of Public Security has invested in crime mapping and data analytics systems that identify concentration patterns, allowing police resource allocation to be evidence-driven rather than based on historical habit." },
                  { type: "support", text: "+ Los Angeles's predictive policing pilot reduced residential burglary by 20% in the first year of deployment — demonstrating that data-driven resource allocation produces measurable improvements over traditional patrol patterns." }
                ]
              },
              {
                title: "Digital forensics makes it far harder for criminals to escape prosecution",
                flow: "digital traces from phones, financial transactions, and online activity → comprehensive evidence trails → criminals who commit offences leave recoverable digital evidence → conviction rates improve → deterrence through certainty of punishment rises",
                examples: [
                  { type: "vn", text: "Vietnam's prosecution of cybercrime and financial fraud has been transformed by digital forensics — the ability to trace financial flows and recover deleted communications dramatically increasing conviction rates in complex cases." },
                  { type: "support", text: "+ Europol routinely dismantles organised crime networks through digital forensics — tracing cryptocurrency transactions, encrypted communications, and metadata to prosecute criminal hierarchies that would have been untouchable in the pre-digital era." }
                ]
              }
            ]
          },
          sideB: {
            label: "Technology in crime prevention carries significant risks and disadvantages",
            ideas: [
              {
                title: "Mass surveillance technology threatens fundamental privacy rights",
                flow: "widespread surveillance monitors entire populations → innocent citizens' movements and associations are recorded → a presumption of guilt replaces the presumption of innocence → civil liberties erode as the security apparatus expands",
                examples: [
                  { type: "vn", text: "Vietnam's expanding digital surveillance infrastructure — including internet monitoring, social media tracking, and facial recognition — raises civil liberties concerns about whether crime prevention technology can also serve as political surveillance." },
                  { type: "support", text: "+ China's Social Credit System, integrating surveillance, financial data, and behavioural monitoring for social control, demonstrates how crime prevention technology can be repurposed into a comprehensive state control apparatus with profound implications for individual freedom." }
                ]
              },
              {
                title: "Algorithmic systems embed and amplify existing biases",
                flow: "predictive policing algorithms trained on biased historical data → over-police already marginalised communities → more arrests create more data confirming the bias → discriminatory outcomes are mathematically laundered into apparent objectivity",
                examples: [
                  { type: "vn", text: "Any algorithmic crime prediction system in Vietnam risks encoding existing social biases — directing police resources disproportionately at migrant workers or ethnic minorities whose historical overrepresentation in crime data may reflect discrimination, not greater criminal propensity." },
                  { type: "support", text: "+ A ProPublica investigation of the COMPAS algorithm — used in US courts to predict reoffending — found it falsely labelled Black defendants as high-risk at twice the rate of white defendants, demonstrating that technology can institutionalise human prejudice rather than eliminate it." }
                ]
              },
              {
                title: "Technology-dependent policing creates new vulnerabilities and criminals adapt quickly",
                flow: "sophisticated criminals adapt faster than technology is updated → surveillance systems can be circumvented by disguise, routing, or timing → over-reliance on technology reduces human intelligence and community relationships → crime migrates to technology-blind spaces",
                examples: [
                  { type: "vn", text: "Vietnam has seen criminals quickly learn to circumvent CCTV through disguises and timing — with street crime simply relocating to poorly covered areas, demonstrating that technology displacement merely relocates rather than eliminates crime." },
                  { type: "support", text: "+ Researchers have demonstrated that facial recognition systems can be fooled by specific makeup patterns, infrared glasses, and adversarial clothing — creating a perpetual cat-and-mouse between criminal adaptation and technological counter-measures." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Crime Prevention Strategies",
          layout: "pre",
          items: [
            { phrase: "crime prevention", vn: "phòng ngừa tội phạm", meaning: "measures taken to reduce the likelihood of criminal behaviour occurring", synonyms: "crime reduction, offence prevention" },
            { phrase: "hot-spot policing", vn: "tuần tra điểm nóng", meaning: "concentrating police resources in specific locations with high crime rates", synonyms: "targeted policing, concentrated patrol" },
            { phrase: "zero-tolerance policing", vn: "chính sách không khoan nhượng", meaning: "strict enforcement of all laws with no exceptions for minor offences", synonyms: "strict enforcement, no-tolerance approach" },
            { phrase: "situational crime prevention", vn: "phòng ngừa tội phạm theo hoàn cảnh", meaning: "reducing crime by changing the environment or opportunity rather than the offender", synonyms: "environmental design, opportunity reduction" },
            { phrase: "deterrence theory", vn: "lý thuyết răn đe", meaning: "the idea that the threat of punishment reduces the likelihood of criminal behaviour", synonyms: "punishment deterrence, criminal deterrent" }
          ]
        },
        {
          group: "Surveillance & Technology",
          layout: "half",
          items: [
            { phrase: "CCTV surveillance", vn: "hệ thống camera giám sát", meaning: "closed-circuit television monitoring of public or private spaces", synonyms: "video surveillance, camera monitoring" },
            { phrase: "predictive policing", vn: "cảnh sát dự báo tội phạm", meaning: "using data analytics to predict where and when crimes are likely to occur", synonyms: "data-driven policing, algorithmic policing" },
            { phrase: "digital forensics", vn: "điều tra kỹ thuật số", meaning: "the recovery and analysis of electronic data for criminal investigations", synonyms: "cyber forensics, electronic evidence analysis" },
            { phrase: "facial recognition", vn: "nhận dạng khuôn mặt", meaning: "technology identifying individuals from images or video footage", synonyms: "biometric identification, face detection technology" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "half",
          items: [
            { phrase: "allocate resources effectively", vn: "phân bổ nguồn lực hiệu quả", meaning: "to direct funding and manpower to where they will have the greatest impact", synonyms: "direct funding wisely, deploy resources efficiently" },
            { phrase: "infringe on privacy", vn: "xâm phạm quyền riêng tư", meaning: "to violate an individual's right to personal space or information", synonyms: "violate privacy, breach privacy rights" },
            { phrase: "tackle the root causes", vn: "giải quyết nguyên nhân gốc rễ", meaning: "to address fundamental underlying problems rather than surface symptoms", synonyms: "address underlying issues, confront structural causes" },
            { phrase: "mount a surveillance operation", vn: "triển khai chiến dịch giám sát", meaning: "to organise systematic monitoring of individuals or locations", synonyms: "conduct surveillance, run a monitoring operation" }
          ]
        }
      ]
    },
    {
      num: "04",
      name: "Police & Surveillance",
      badge: "4 Questions",
      coming: false,
      fullName: "Police & Surveillance",
      desc: "How should law enforcement operate — and at what cost to civil liberties?",
      panelBadges: ["4 Real Questions", "24 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "The use of CCTV cameras in public places is an effective way to reduce crime. To what extent do you agree or disagree?" },
        { text: "Increased surveillance helps reduce crime, but it also threatens individual privacy. Discuss both views and give your own opinion." },
        { text: "Police officers should be allowed to carry guns at all times. To what extent do you agree or disagree?" },
        { text: "Public trust in the police is declining in some countries. What are the reasons for this and what can be done to improve the situation?" }
      ],
      ideas: [
        {
          qText: "The use of CCTV cameras in public places is an effective way to reduce crime. To what extent do you agree or disagree?",
          sideA: {
            label: "CCTV cameras effectively reduce crime",
            ideas: [
              {
                title: "Visible cameras deter opportunistic and impulsive offending",
                flow: "camera presence makes detection risk obvious → potential offenders recalculate the odds → impulsive crimes suppressed in covered areas → deterrent effect radiates beyond the camera's actual field of view",
                examples: [
                  { type: "vn", text: "Vietnam's expansion of street cameras in HCMC's tourist districts has produced a measurable reduction in pickpocketing and bag-snatching in the most heavily surveilled zones, with police reporting fewer incidents in camera-covered areas." },
                  { type: "support", text: "+ A meta-analysis of 41 CCTV studies found a statistically significant 16% overall reduction in crime in surveilled areas, with the strongest effects in car parks and city centres where offenders have clear visibility of camera presence." }
                ]
              },
              {
                title: "Camera footage provides irrefutable prosecution evidence",
                flow: "crimes caught on camera → identity and action clearly recorded → prosecution becomes straightforward → conviction rates rise → future deterrence strengthened through certainty of punishment",
                examples: [
                  { type: "vn", text: "Vietnamese prosecutors increasingly rely on CCTV footage as primary evidence in theft and assault cases — the availability of video evidence dramatically shortening trial times and increasing guilty verdicts in courts." },
                  { type: "support", text: "+ The UK's Metropolitan Police report that CCTV footage is the single most valuable evidential tool in street crime prosecutions — contributing to convictions in cases that would otherwise collapse due to lack of witness testimony." }
                ]
              },
              {
                title: "Cameras enable faster police response to in-progress crimes",
                flow: "monitoring centres observe crimes as they occur → police dispatched immediately → response time falls → more perpetrators apprehended at the scene → apprehension certainty rises and repeat offending falls",
                examples: [
                  { type: "vn", text: "HCMC's centralised camera monitoring centres allow dispatchers to direct patrol units to incidents in real time — a capability that has visibly reduced the window between crime commission and police arrival in covered areas." },
                  { type: "support", text: "+ London's CCTV network, linked to Metropolitan Police control rooms, enabled real-time tracking of the 2011 riot participants and contributed to over 3,000 subsequent arrests — demonstrating the operational multiplier effect of integrated camera monitoring." }
                ]
              }
            ]
          },
          sideB: {
            label: "CCTV cameras have significant limitations",
            ideas: [
              {
                title: "Determined criminals adapt to and circumvent camera coverage",
                flow: "motivated offenders learn camera locations → avoid covered areas, use disguises, or time offences for blind spots → crime displaced to uncovered zones → total crime not reduced, merely redistributed",
                examples: [
                  { type: "vn", text: "Vietnamese criminal networks have rapidly adapted to expanded CCTV coverage by shifting operations to less-monitored areas and using motorbike approaches that minimise facial exposure — demonstrating that committed offenders are not deterred by cameras alone." },
                  { type: "support", text: "+ UK research on displacement effects found that approximately 20–30% of crimes suppressed by CCTV in target areas relocated to adjacent uncovered zones, significantly reducing the net crime reduction benefit." }
                ]
              },
              {
                title: "Blanket surveillance erodes civil liberties and chills lawful behaviour",
                flow: "pervasive camera coverage → citizens' movements constantly monitored → awareness of surveillance modifies lawful behaviour → freedom of assembly, protest, and personal expression is psychologically curtailed",
                examples: [
                  { type: "vn", text: "The expansion of surveillance infrastructure in Vietnam raises civil liberties concerns beyond crime prevention — the same systems used to monitor criminal activity can equally monitor political activity, with few legal safeguards distinguishing between the two purposes." },
                  { type: "support", text: "+ Research in the UK and USA consistently finds that individuals modify their behaviour in surveilled spaces even when engaging in entirely lawful activities — particularly those from minority communities who associate surveillance with police targeting." }
                ]
              },
              {
                title: "CCTV resources could achieve more crime reduction if deployed elsewhere",
                flow: "camera installation, maintenance, and monitoring are expensive recurring costs → comparable investment in social programmes, community policing, or lighting → more cost-effective crime reduction per pound spent",
                examples: [
                  { type: "vn", text: "Independent analyses of Vietnam's public security spending suggest that community-based prevention programmes in high-crime areas deliver more durable reductions per unit of investment than equivalent CCTV infrastructure expenditure." },
                  { type: "support", text: "+ A UK Home Office analysis found that CCTV had a lower cost-per-crime-prevented ratio than street lighting in many contexts — street lighting being cheaper, less intrusive, and producing comparable or superior crime reduction effects in residential areas." }
                ]
              }
            ]
          }
        },
        {
          qText: "Increased surveillance helps reduce crime, but it also threatens individual privacy. Discuss both views and give your own opinion.",
          sideA: {
            label: "Surveillance offers genuine and important crime reduction benefits",
            ideas: [
              {
                title: "Targeted surveillance disrupts criminal networks before crimes occur",
                flow: "monitoring of communications and movement patterns → criminal networks identified and mapped → targeted intervention before crimes are committed → proactive policing becomes possible at scale",
                examples: [
                  { type: "vn", text: "Vietnam's security services have used targeted digital surveillance to dismantle drug trafficking networks operating across provincial borders — surveillance enabling preventive arrests rather than reactive responses to completed crimes." },
                  { type: "support", text: "+ The UK's GCHQ and US NSA surveillance programmes, while controversial, have been credited by intelligence agencies with disrupting multiple terrorist plots before they reached execution — preventive intelligence being impossible without prior surveillance." }
                ]
              },
              {
                title: "Surveillance with proper oversight is proportionate and publicly supported",
                flow: "judicial authorisation and independent oversight → surveillance targeted at genuine suspects rather than the general public → proportionate to the threat faced → privacy and safety can coexist under proper legal governance",
                examples: [
                  { type: "vn", text: "Vietnam's legal framework for criminal surveillance requires prosecutorial authorisation for intrusive monitoring — reflecting the principle that targeted, legally supervised surveillance is legitimate in ways that mass warrantless surveillance is not." },
                  { type: "support", text: "+ Public surveys across the UK, USA, and Germany consistently find majorities supporting surveillance for crime and terrorism prevention — demonstrating that democratic societies can reach a legitimate consensus on proportionate surveillance use." }
                ]
              },
              {
                title: "Public spaces have always been subject to observation; digital surveillance extends rather than creates that reality",
                flow: "individuals in streets, markets, and public places have always been observable → CCTV merely extends human observation capacity → no reasonable expectation of absolute privacy in shared public space → digital surveillance differs in degree, not in kind",
                examples: [
                  { type: "vn", text: "Vietnam's tradition of dense residential community monitoring (tổ dân phố reporting) reflects a cultural acceptance that communal spaces involve communal observation — digital cameras formalising what informal social monitoring already provided." },
                  { type: "support", text: "+ Legal systems in most democracies have consistently upheld that individuals in public spaces have reduced privacy expectations — with courts in the UK, USA, and EU ruling that public space CCTV does not constitute an intrusion on the right to private life." }
                ]
              }
            ]
          },
          sideB: {
            label: "Surveillance poses serious and lasting threats to individual privacy",
            ideas: [
              {
                title: "Mass surveillance creates a chilling effect that suppresses legitimate dissent",
                flow: "awareness of pervasive monitoring → citizens self-censor political views and associations → civil society and protest are weakened → the mechanisms of democratic accountability are undermined from within",
                examples: [
                  { type: "vn", text: "Research on digital surveillance in Vietnam documents a pattern of self-censorship among journalists, bloggers, and activists who adjust their online behaviour due to awareness that communications are monitored — surveillance achieving political control as a byproduct of crime prevention." },
                  { type: "support", text: "+ Edward Snowden's 2013 revelations about NSA mass surveillance produced measurable increases in the use of encryption and anonymisation tools — demonstrating that awareness of surveillance modifies behaviour across entire populations, not only among criminals." }
                ]
              },
              {
                title: "Surveillance infrastructure is routinely repurposed beyond its stated crime prevention mandate",
                flow: "data collected for crime prevention → repurposed for political monitoring, commercial exploitation, or harassment → scope creep is historically the norm → creating surveillance capacity creates the conditions for its abuse",
                examples: [
                  { type: "vn", text: "Surveillance systems justified under crime prevention mandates have been documented in multiple countries as simultaneously serving immigration enforcement, political monitoring, and protest management — uses far beyond the original public safety justification." },
                  { type: "support", text: "+ China's Xinjiang surveillance infrastructure — initially justified as crime prevention — has been repurposed into a comprehensive ethnic and religious monitoring system, demonstrating the predictable slide from crime prevention to total social control once surveillance capacity exists." }
                ]
              },
              {
                title: "Privacy is a foundational right, not merely an instrumental preference",
                flow: "privacy enables autonomy, identity formation, and freedom from state control → surveillance compromises personhood even when data is never misused → the knowledge of being watched alters behaviour → a permanently watched population cannot be truly free",
                examples: [
                  { type: "vn", text: "Vietnamese human rights scholars argue that privacy protections in the 2013 Constitution and 2015 Civil Code reflect not merely practical concerns but a foundational commitment to human dignity that mass surveillance inherently violates." },
                  { type: "support", text: "+ The European Court of Human Rights has consistently ruled that mass indiscriminate surveillance violates Article 8 (right to private life) even when no specific individual is harmed — affirming that privacy is a right, not merely a preference to be traded against convenience." }
                ]
              }
            ]
          }
        },
        {
          qText: "Police officers should be allowed to carry guns at all times. To what extent do you agree or disagree?",
          sideA: {
            label: "Police should be routinely armed",
            ideas: [
              {
                title: "Armed criminals require an armed and credible police response",
                flow: "offenders who carry firearms → unarmed police cannot safely confront or arrest them → dangerous criminals operate with relative impunity → public safety is compromised by an asymmetry in force",
                examples: [
                  { type: "vn", text: "Vietnam's border police and anti-drug units carry firearms as a matter of operational necessity when confronting armed trafficking networks — the lethal threat posed by organised crime making unarmed policing genuinely dangerous and insufficient." },
                  { type: "support", text: "+ In countries with high rates of civilian gun ownership such as the United States, arming police is presented as a necessary response to the statistical certainty that officers will encounter armed suspects — the asymmetry of an unarmed officer facing a gun being operationally untenable." }
                ]
              },
              {
                title: "Armed officers provide a stronger deterrent to serious violent crime",
                flow: "armed police signal credible lethal consequences for violent resistance → criminals are deterred from direct confrontation → officer authority is reinforced in high-risk situations → crime involving firearms is suppressed by the credible armed response",
                examples: [
                  { type: "vn", text: "Vietnam's armed police presence at borders, airports, and high-security facilities provides a visible deterrent that has contributed to the relative rarity of direct armed confrontation with law enforcement in most parts of the country." },
                  { type: "support", text: "+ Israeli police carry firearms universally given the security environment — a policy that security experts credit with deterring not only terrorism but also opportunistic violent crime in a society facing persistent threat." }
                ]
              },
              {
                title: "Officers deserve adequate protection when facing dangerous situations",
                flow: "policing regularly exposes officers to violent confrontation without warning → unarmed officers face life-threatening situations without proportionate means of protection → duty of care to officers requires appropriate equipment → access to firearms is a workplace safety issue",
                examples: [
                  { type: "vn", text: "Vietnamese police officers posted to drug enforcement and organised crime units regularly face armed suspects — the routine arming of these units reflecting a recognition that asking officers to face lethal threats unarmed is an unacceptable imposition on their safety." },
                  { type: "support", text: "+ Police union surveys in France, Germany, and the Netherlands — all countries where officers are routinely armed — show strong officer support for routine arming, with the majority citing personal safety in unpredictably dangerous situations as the primary justification." }
                ]
              }
            ]
          },
          sideB: {
            label: "Routine arming of police creates more problems than it solves",
            ideas: [
              {
                title: "Armed police escalate confrontations and increase civilian casualties",
                flow: "firearm availability changes the calculus of every encounter → officers more likely to use lethal force in ambiguous situations → civilians killed in confrontations that unarmed officers would have de-escalated → gun presence transforms interactions",
                examples: [
                  { type: "vn", text: "International evidence strongly suggests that countries with routinely armed police record significantly higher rates of fatal police shootings per capita — Vietnam's relatively low rate of police-involved fatalities reflecting in part the more limited distribution of firearms among patrol officers." },
                  { type: "contrast", text: "✗ The UK's predominantly unarmed police model — in which firearms are available to trained specialist units but not routinely carried — results in fewer than 5 police-involved fatal shootings per year in a country of 67 million, versus 1,000+ annually in the comparably sized USA." }
                ]
              },
              {
                title: "Unarmed community policing builds the trust that armed policing destroys",
                flow: "armed police trigger fear and distance in communities → residents less willing to cooperate or report crimes → unarmed officers engage more naturally and build genuine relationships → the intelligence that effective policing needs flows from trust, not fear",
                examples: [
                  { type: "vn", text: "Vietnamese community policing (công an phường) operates most effectively through informal relationship-building and community presence — the approachability of officers who are not visibly armed being an asset in gathering intelligence from residents." },
                  { type: "contrast", text: "✗ New Zealand's unarmed general policing model — with firearms available in patrol cars for emergency use but not on officers' persons — achieves significantly higher public trust and cooperation scores than comparable armed police services in Australia or the USA." }
                ]
              },
              {
                title: "The vast majority of police work does not require lethal force",
                flow: "most police interactions involve minor offences, welfare checks, and dispute resolution → lethal force is statistically rarely needed → routinely arming all officers for rare extreme scenarios creates disproportionate everyday risk → specialist armed units are sufficient",
                examples: [
                  { type: "vn", text: "Analysis of Vietnamese police activities shows that the overwhelming majority of daily officer interactions — traffic enforcement, community disputes, minor theft — involve no threat of violence, making routine arming a disproportionate response to exceptional rather than typical policing demands." },
                  { type: "support", text: "+ UK data shows that armed specialist officers are deployed in fewer than 1% of all police incidents — confirming that the scenario requiring a firearm is genuinely exceptional and does not justify the risks and costs of universal arming." }
                ]
              }
            ]
          }
        },
        {
          qText: "Public trust in the police is declining in some countries. What are the reasons for this and what can be done to improve the situation?",
          sideA: {
            label: "Reasons for declining public trust in the police",
            ideas: [
              {
                title: "High-profile misconduct and corruption undermine institutional credibility",
                flow: "abuse or corruption by individual officers → media coverage amplifies incidents nationally → public trust erodes broadly → even well-functioning officers are viewed with suspicion due to institutional association",
                examples: [
                  { type: "vn", text: "Widely reported cases of traffic police accepting bribes in Vietnam have damaged public perception of police integrity broadly — individual misconduct creating a generalised assumption of corruption that affects trust even in officers who behave professionally." },
                  { type: "support", text: "+ The UK's series of high-profile police misconduct cases — including the murder of Sarah Everard by a serving officer and the Hillsborough cover-up — produced measurable multi-year declines in public confidence in police honesty and integrity." }
                ]
              },
              {
                title: "Disproportionate enforcement against certain communities creates structural distrust",
                flow: "statistical disparities in stops, arrests, and use of force → affected communities experience policing as persecution rather than protection → trust collapses across entire communities → police lose the cooperation those communities would otherwise provide",
                examples: [
                  { type: "vn", text: "Vietnamese migrant workers in cities report feeling disproportionately targeted by identity checks and stop-and-question operations — a perception of discriminatory enforcement that reduces willingness to report crimes to police when they themselves are victims." },
                  { type: "support", text: "+ UK data shows Black people are stopped and searched at 6–9 times the rate of white people — a disparity that leads to dramatically lower trust scores among Black communities, reducing crime reporting rates and intelligence cooperation in exactly the communities most affected by crime." }
                ]
              },
              {
                title: "Lack of genuine accountability perpetuates a perception of impunity",
                flow: "officers who commit misconduct are rarely prosecuted → internal investigations widely seen as whitewashes → the public concludes accountability is structurally impossible → distrust becomes a rational response to a demonstrably unaccountable system",
                examples: [
                  { type: "vn", text: "Vietnamese public surveys show that confidence in the internal police disciplinary process is limited — perceptions that officers protect each other reducing the credibility of self-policing and lowering trust in the institution as a whole." },
                  { type: "support", text: "+ The US Department of Justice's investigation of Chicago's Police Department found that officers who committed misconduct faced no meaningful consequences in the vast majority of cases — a finding that directly explained the city's historically low trust scores among residents." }
                ]
              }
            ]
          },
          sideB: {
            label: "Solutions to restore and sustain public trust in the police",
            ideas: [
              {
                title: "Independent oversight and transparent accountability rebuild credibility",
                flow: "independent bodies investigate misconduct without institutional self-interest → findings made public → officers genuinely held accountable → the public sees that the system works → trust is gradually restored through demonstrated consequences",
                examples: [
                  { type: "vn", text: "Vietnam's establishment of inspection and anti-corruption bodies with investigative powers over police conduct represents a step toward external accountability — the credibility of these bodies being essential to their effectiveness in restoring public confidence." },
                  { type: "support", text: "+ Northern Ireland's transformation of the Royal Ulster Constabulary into the Police Service of Northern Ireland — with an independent oversight board, community representation, and accountability reforms — produced dramatic increases in public trust across previously hostile communities within a decade." }
                ]
              },
              {
                title: "Community policing and active engagement humanise the institution",
                flow: "officers investing time in communities outside emergency contexts → residents know officers personally → human relationships replace institutional fear → cooperation and intelligence improve → both crime and distrust fall together",
                examples: [
                  { type: "vn", text: "Vietnam's công an phường (ward-level police) system at its best embeds officers as community members rather than external enforcers — the familiarity and accessibility of neighbourhood-based policing producing higher public satisfaction than impersonal centralised policing." },
                  { type: "support", text: "+ Camden, New Jersey's complete disbanding and rebuilding of its police department in 2013 — replacing a militarised force with community-focused officers trained in de-escalation — produced a 95% drop in use-of-force complaints and a dramatic rise in public trust within three years." }
                ]
              },
              {
                title: "Diversity in recruitment makes forces representative of the communities they serve",
                flow: "forces that reflect the demographic composition of communities → reduce perceptions of 'us vs them' → officers from the community understand its context and earn natural credibility → legitimacy rises with representativeness",
                examples: [
                  { type: "vn", text: "Vietnam's efforts to recruit more officers from ethnic minority communities in highland provinces — where distrust has historically been higher — reflect recognition that representativeness is a practical trust-building tool, not merely a diversity goal." },
                  { type: "support", text: "+ Research across the USA, UK, and Canada consistently finds that police forces whose demographic composition more closely matches the communities they serve record higher trust scores among minority residents — confirming that representation is a measurable trust determinant." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Policing & Enforcement",
          layout: "pre",
          items: [
            { phrase: "law enforcement", vn: "cơ quan thực thi pháp luật", meaning: "the agencies and processes responsible for enforcing laws and maintaining order", synonyms: "police force, security services" },
            { phrase: "community policing", vn: "cảnh sát cộng đồng", meaning: "a policing approach based on building relationships and trust with local communities", synonyms: "neighbourhood policing, partnership policing" },
            { phrase: "accountability mechanism", vn: "cơ chế trách nhiệm giải trình", meaning: "a system ensuring that individuals and institutions answer for their actions", synonyms: "oversight system, checks and balances" },
            { phrase: "use of force", vn: "sử dụng vũ lực", meaning: "the degree of force applied by a police officer in response to a situation", synonyms: "physical force, coercive force" },
            { phrase: "public trust", vn: "niềm tin của công chúng", meaning: "the confidence the public places in institutions to act in their interests", synonyms: "institutional confidence, public confidence" }
          ]
        },
        {
          group: "Surveillance & Privacy",
          layout: "half",
          items: [
            { phrase: "civil liberties", vn: "quyền tự do dân sự", meaning: "individual rights protected from government interference", synonyms: "individual freedoms, civil rights" },
            { phrase: "chilling effect", vn: "hiệu ứng răn đe đối với quyền tự do", meaning: "the suppression of lawful behaviour caused by fear of surveillance or legal consequences", synonyms: "deterrent effect on rights, self-censorship effect" },
            { phrase: "scope creep", vn: "mở rộng phạm vi ngoài dự kiến", meaning: "the gradual expansion of a system's use beyond its original stated purpose", synonyms: "mission creep, function expansion" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "half",
          items: [
            { phrase: "erode public trust", vn: "làm xói mòn niềm tin công chúng", meaning: "to gradually weaken the confidence the public has in an institution", synonyms: "undermine confidence, damage credibility" },
            { phrase: "hold officers accountable", vn: "quy trách nhiệm cho cảnh sát", meaning: "to ensure police officers face consequences for misconduct", synonyms: "enforce accountability, sanction misconduct" },
            { phrase: "deter violent crime", vn: "răn đe tội phạm bạo lực", meaning: "to discourage violent offending through credible threats of consequences", synonyms: "suppress violence, discourage violent behaviour" }
          ]
        }
      ]
    },
    {
      num: "05",
      name: "Punishment & Prison",
      badge: "5 Questions",
      coming: false,
      fullName: "Punishment & Prison",
      desc: "What is the purpose of prison — and how severe should sentences be?",
      panelBadges: ["5 Real Questions", "30 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "Some people believe that imprisonment is the best way to deal with criminals, while others think there are more effective alternatives. Discuss both views and give your own opinion." },
        { text: "The main purpose of prison should be to reform offenders rather than to punish them. To what extent do you agree or disagree?" },
        { text: "Increasing the length of prison sentences is the best way to reduce crime. To what extent do you agree or disagree?" },
        { text: "Harsher punishments are the most effective way to reduce crime. To what extent do you agree or disagree?" },
        { text: "First-time offenders should be treated more leniently than repeat offenders. To what extent do you agree or disagree?" }
      ],
      ideas: [
        {
          qText: "Some people believe that imprisonment is the best way to deal with criminals, while others think there are more effective alternatives. Discuss both views and give your own opinion.",
          sideA: {
            label: "Imprisonment is justified and effective",
            ideas: [
              {
                title: "Incapacitation immediately protects society from dangerous offenders",
                flow: "incarceration physically removes offenders from society → crimes they would otherwise commit are prevented → communities are immediately safer → the protection effect is direct and certain",
                examples: [
                  { type: "vn", text: "Vietnam's detention of prolific drug traffickers and violent organised crime figures provides immediate community safety benefits — removing individuals whose continued freedom would directly threaten public security." },
                  { type: "support", text: "+ Research on prolific offenders consistently shows that a small group accounting for 5–10% of criminals is responsible for 50–60% of all crime — their incapacitation producing disproportionate and immediate crime reduction benefits." }
                ]
              },
              {
                title: "The threat of imprisonment provides a powerful deterrent",
                flow: "prison represents a significant deprivation of freedom and social standing → rational potential offenders weigh this cost against the benefit of crime → deterrence reduces crime by making it less attractive → alternatives perceived as lenient reduce this deterrent effect",
                examples: [
                  { type: "vn", text: "Vietnam's credible threat of imprisonment for serious corruption and drug-related offences provides a deterrent that rational, calculating would-be offenders factor into their decision-making — the fear of imprisonment being meaningfully different from that of fines or community service." },
                  { type: "support", text: "+ Economic models of crime consistently find that the perceived severity of punishment — particularly the prospect of imprisonment — is a significant deterrent variable, particularly for premeditated property and financial crime where rational calculation precedes action." }
                ]
              },
              {
                title: "Victims and society require meaningful punishment that reflects the gravity of harm",
                flow: "serious crimes cause serious harm to victims → justice demands consequences proportionate to that harm → community values need to be vindicated → prison represents a visible and serious societal response to serious wrongs",
                examples: [
                  { type: "vn", text: "Vietnamese public sentiment strongly supports imprisonment for violent crime, corruption, and sexual offences — reflecting a cultural expectation that those who cause serious harm to others must themselves experience a significant deprivation of liberty." },
                  { type: "support", text: "+ Retributive justice theory, articulated by philosophers from Kant to contemporary legal scholars, argues that punishment proportionate to the crime is owed as a matter of justice — independent of any calculation about deterrence or rehabilitation." }
                ]
              }
            ]
          },
          sideB: {
            label: "Alternatives to imprisonment are more effective",
            ideas: [
              {
                title: "Prison is criminogenic — it produces more crime than it prevents",
                flow: "incarceration exposes offenders to hardened criminals → criminal networks, norms, and techniques are absorbed → criminal identity becomes entrenched → ex-prisoners return to society more dangerous than when they entered",
                examples: [
                  { type: "vn", text: "Vietnamese criminologists document that young offenders who serve time in adult facilities reoffend at significantly higher rates than those given non-custodial sentences for comparable offences — prison acting as a criminal education rather than a deterrent." },
                  { type: "support", text: "+ A comprehensive study across European prison systems found that time served in prison was a positive predictor of future offending — controlling for offence type, the prison experience itself increased subsequent criminal behaviour." }
                ]
              },
              {
                title: "Community-based sentences address the causes of offending while preserving social ties",
                flow: "offenders remain connected to family, employment, and community → the social bonds that prevent reoffending are maintained → programmes address substance abuse, mental health, and skills gaps → the underlying drivers of crime are tackled directly",
                examples: [
                  { type: "vn", text: "Vietnam's community-based supervision and treatment programmes for first-time drug offenders allow individuals to maintain employment and family responsibilities — preserving the social anchors that research identifies as the strongest protectors against reoffending." },
                  { type: "support", text: "+ The UK's Intensive Alternatives to Custody scheme — combining supervision, treatment, and employment support — produced reoffending rates 14 percentage points lower than matched prisoners, at a fraction of the incarceration cost." }
                ]
              },
              {
                title: "Alternatives are dramatically more cost-effective per crime prevented",
                flow: "incarceration costs tens of thousands per person annually → community sentences cost a fraction → prevention programmes produce greater long-term crime reductions → resources released from prisons can fund more effective interventions",
                examples: [
                  { type: "vn", text: "The cost per prison inmate in Vietnam significantly exceeds the cost of vocational training, drug treatment, or community supervision programmes — making alternatives not only more humane but more economically rational for government resource allocation." },
                  { type: "support", text: "+ The Washington State Institute for Public Policy calculated that community-based alternatives to incarceration produced crime reductions at 3–10 times lower cost per crime prevented than prison — making the economic case for alternatives overwhelming." }
                ]
              }
            ]
          }
        },
        {
          qText: "The main purpose of prison should be to reform offenders rather than to punish them. To what extent do you agree or disagree?",
          sideA: {
            label: "Reform should be the primary purpose of prison",
            ideas: [
              {
                title: "Punishment without reform produces reoffending — and society pays twice",
                flow: "prison focused purely on punishment → causes of offending remain unaddressed → offenders released unchanged or worse → reoffending rates remain high → the same individual costs society again through victim harm, policing, trial, and reincarceration",
                examples: [
                  { type: "vn", text: "Vietnam's prison reoffending data shows that offenders who complete vocational training and educational programmes while incarcerated return to prison at substantially lower rates than those who serve equivalent sentences without rehabilitation components." },
                  { type: "support", text: "+ England and Wales's reoffending rate of approximately 45% within one year of release — despite significant incarceration — demonstrates the futility of purely punitive imprisonment: punishment is clearly not reforming the majority of those released." }
                ]
              },
              {
                title: "Reformed ex-prisoners contribute productively to society",
                flow: "rehabilitation equips offenders with skills and self-concept for legal life → successful reintegration into employment → tax contributions, family stability, and community participation → society gains a productive member rather than a recurring burden",
                examples: [
                  { type: "vn", text: "Vietnam's trại giam (prison camps) that successfully deliver vocational training report significantly better post-release employment outcomes for graduates — former offenders who secure stable employment rarely return to criminal activity." },
                  { type: "support", text: "+ Norway's Bastøy Prison, designed around rehabilitation with work, education, and normalisation, reports a reoffending rate of 16% — compared to 70% for US prisons — demonstrating that reform-focused imprisonment delivers dramatically better outcomes for society." }
                ]
              },
              {
                title: "International evidence shows reform-focused systems reduce crime more effectively",
                flow: "Nordic countries' rehabilitative prison systems → lowest reoffending rates globally → lower crime rates than punitive systems → the evidence is cross-national and consistent → reform produces better crime outcomes than punishment alone",
                examples: [
                  { type: "vn", text: "Vietnam's Ministry of Public Security has increasingly looked to Nordic and Singaporean models of prison management that combine discipline with education and vocational preparation — acknowledging that purely punitive approaches have not achieved the reoffending reduction goals." },
                  { type: "support", text: "+ Finland reduced its prison population by 70% between 1950 and 2010 by moving to rehabilitation-focused sentencing, while simultaneously achieving one of Europe's lowest crime rates — directly refuting the argument that punishment-focused systems produce safer societies." }
                ]
              }
            ]
          },
          sideB: {
            label: "Punishment remains a legitimate and necessary purpose of prison",
            ideas: [
              {
                title: "Victims require retributive justice, not only offender welfare",
                flow: "crime causes real suffering to victims → justice demands that offenders experience meaningful deprivation proportionate to the harm caused → a prison focused entirely on rehabilitation may appear to prioritise the offender → victims' needs for acknowledgment must be central",
                examples: [
                  { type: "vn", text: "Vietnamese victims of violent crime and their families consistently express the expectation that perpetrators experience genuine punishment — the comfort or educational advancement of offenders during incarceration being experienced as an injustice to those who suffered." },
                  { type: "support", text: "+ The victims' rights movement in the UK and USA has successfully argued that rehabilitation-focused approaches can minimise victim experience — the European Convention on Human Rights now recognising victims' rights alongside offenders' rights as a matter of legal principle." }
                ]
              },
              {
                title: "Deterrence requires that prison be genuinely unpleasant",
                flow: "if prison becomes comfortable or indistinguishable from free life → the deterrent threat it represents diminishes → potential offenders discount the risk → crime increases as the cost of getting caught falls",
                examples: [
                  { type: "vn", text: "Vietnamese public discourse on prison conditions reflects a widespread belief that conditions must be sufficiently austere to constitute a meaningful deterrent — the perception of 'soft' prisons being seen as undermining the criminal justice system's credibility." },
                  { type: "support", text: "+ Criminological research supports a U-shaped relationship between prison conditions and deterrence — conditions that are degrading or brutalising are counterproductive, but conditions too comfortable eliminate the deterrent cost and may increase crime." }
                ]
              },
              {
                title: "Some offenders are unwilling or unable to engage with rehabilitation",
                flow: "not all offenders are motivated to change → compelled participation in rehabilitation programmes produces poor outcomes → for persistent or psychopathic offenders rehabilitation is not achievable → punishment and incapacitation are the appropriate responses for this group",
                examples: [
                  { type: "vn", text: "Vietnam's corrections system acknowledges that certain categories of violent and organised crime offenders show minimal response to rehabilitation interventions — maintaining high-security conditions for this group that prioritise incapacitation over reformative programmes." },
                  { type: "support", text: "+ Meta-analyses of cognitive behavioural therapy programmes in prisons find that they are highly effective for many offenders but produce negligible results for those with antisocial personality disorder or high psychopathy scores — confirming that rehabilitation has limits." }
                ]
              }
            ]
          }
        },
        {
          qText: "Increasing the length of prison sentences is the best way to reduce crime. To what extent do you agree or disagree?",
          sideA: {
            label: "Longer sentences effectively reduce crime",
            ideas: [
              {
                title: "Extended incapacitation prevents reoffending for longer",
                flow: "a prisoner cannot commit crimes while incarcerated → longer sentences extend the crime-free period → for prolific offenders even a few extra years may prevent dozens of crimes → the incapacitation effect is direct and certain",
                examples: [
                  { type: "vn", text: "Vietnam's lengthy sentences for drug trafficking leaders have prevented those individuals from continuing to direct criminal networks — the extended incapacitation of key figures disrupting organisations that would otherwise continue operating." },
                  { type: "support", text: "+ Research on prolific offenders in the UK found that extending sentences by three years for the most active criminals prevented an estimated 4–5 additional offences per person — the incapacitation effect being substantial for this small high-impact group." }
                ]
              },
              {
                title: "Harsher prospective sentences alter the rational criminal's calculation",
                flow: "longer expected sentences → higher expected cost of criminal activity → rational actors who weigh costs and benefits → reduce offending when the expected punishment increases significantly → deterrence effect operates prospectively",
                examples: [
                  { type: "vn", text: "Vietnam's introduction of the death penalty and very long sentences for drug trafficking has been cited by law enforcement as contributing to the deterrence of large-scale trafficking operations — the severity of the expected punishment being a factor for calculating traffickers." },
                  { type: "support", text: "+ Economic research on mandatory minimum sentences in the USA found that increases in sentence length for specific offences reduced the commission of those offences by 10–15% in the period immediately following implementation — a deterrence effect concentrated among rational, calculating offenders." }
                ]
              },
              {
                title: "Longer sentences for serious offences reflect proportionate justice",
                flow: "the gravity of the offence should be reflected in the severity of the sentence → a murderer serving 5 years while a victim's family grieves for a lifetime is a justice failure → proportionality requires that serious harm produces serious punishment → longer sentences for serious crime are intrinsically justified",
                examples: [
                  { type: "vn", text: "Vietnamese criminal law provides for very long sentences and the death penalty for the most serious offences — a reflection of the principle that societal condemnation must be proportionate to the harm caused, particularly for organised crime and corruption at the highest level." },
                  { type: "support", text: "+ Public support for longer sentences for serious violent and sexual offences is consistently high across democratic countries — reflecting a broadly shared intuition that proportionality between harm and punishment is a fundamental requirement of justice." }
                ]
              }
            ]
          },
          sideB: {
            label: "Longer sentences are not the most effective way to reduce crime",
            ideas: [
              {
                title: "Certainty of punishment deters more effectively than severity",
                flow: "potential offenders discount long prison terms because they believe they will not be caught → increasing the probability of detection has a greater deterrent effect than increasing the sentence length → crime prevention requires better detection, not harsher sentencing",
                examples: [
                  { type: "vn", text: "Research on Vietnamese offenders' decision-making suggests that the fear of detection — being caught by police or identified by witnesses — is a more powerful deterrent than the length of the sentence faced once caught." },
                  { type: "support", text: "+ Daniel Nagin's comprehensive review of deterrence research found that sentence severity has a weak and inconsistent deterrent effect, while certainty of punishment has a strong and consistent one — implying that investing in detection rather than longer sentences produces better crime reduction per unit of spending." }
                ]
              },
              {
                title: "Longer sentences worsen rehabilitation prospects and increase reoffending",
                flow: "extended incarceration deepens criminal identity and severs community ties → employment prospects fall with longer criminal records → successful reintegration becomes harder → post-release reoffending rises → longer sentences produce worse long-term crime outcomes",
                examples: [
                  { type: "vn", text: "Vietnamese prison data shows that offenders serving very long sentences face increasingly poor reintegration prospects — having lost employment history, family connections, and social skills during extended incarceration in ways that elevate post-release reoffending risk." },
                  { type: "support", text: "+ A study of US mandatory minimum sentencing reforms found that every additional year of imprisonment beyond 18 months increased rather than decreased the probability of reoffending post-release — the prison experience becoming more harmful than protective as sentence length extended." }
                ]
              },
              {
                title: "Sentence length inflation creates unsustainable costs without proportionate crime reduction",
                flow: "longer sentences dramatically increase prison populations → costs to government multiply → prisons become overcrowded and dysfunctional → conditions worsen for all inmates → the crime reduction benefit fails to materialise at the scale the cost implies",
                examples: [
                  { type: "vn", text: "Vietnam's prison system faces capacity pressures that compromise both the quality of detention conditions and the delivery of rehabilitation programmes — overcrowding being a predictable consequence of sentence inflation that undermines the system's own goals." },
                  { type: "contrast", text: "✗ The Netherlands dramatically reduced its prison population through shorter sentences and alternatives over two decades — yet maintained consistently falling crime rates, demonstrating that sentence length and crime levels are not positively correlated in the way the deterrence argument assumes." }
                ]
              }
            ]
          }
        },
        {
          qText: "Harsher punishments are the most effective way to reduce crime. To what extent do you agree or disagree?",
          sideA: {
            label: "Harsher punishments effectively reduce crime",
            ideas: [
              {
                title: "Rational actors calculate expected costs before committing crimes",
                flow: "potential offenders weigh expected benefits of crime against expected costs → harsher punishment raises the expected cost → crime becomes less attractive → deterrence operates most strongly among calculating, premeditated offenders",
                examples: [
                  { type: "vn", text: "Vietnam's severe penalties for corruption, combined with high-profile prosecutions, have been credited with deterring some forms of institutional corruption — the expected cost of being caught and severely punished being a genuine inhibitor for calculating officials." },
                  { type: "support", text: "+ Singapore's zero-tolerance policy — combining harsh penalties with highly effective enforcement — has produced one of the world's lowest crime rates, demonstrating that in contexts of high detection certainty, harsh punishment delivers measurable deterrence." }
                ]
              },
              {
                title: "Harsh punishment sends a powerful social message about community values",
                flow: "severe sentences signal that society takes certain harms extremely seriously → norms against those crimes are reinforced publicly → the moral condemnation expressed through harsh sentencing shapes cultural attitudes → offending becomes socially unacceptable, not merely legally risky",
                examples: [
                  { type: "vn", text: "Vietnam's public and highly publicised trials of senior officials for corruption, resulting in lengthy sentences, serve an expressive function beyond deterrence — communicating to society that corruption is a serious moral failing, not merely a regulatory violation." },
                  { type: "support", text: "+ Research on the expressive theory of punishment suggests that harsh sentences for high-profile crimes reduce subsequent offending not through rational deterrence but through norm reinforcement — the sentence communicating shared moral values." }
                ]
              },
              {
                title: "Incapacitation through harsh sentences directly prevents reoffending",
                flow: "harsher sentences mean longer incarceration → dangerous offenders remain removed from society for longer → crimes they would otherwise commit are prevented → even if rehabilitation fails, the incapacitation effect produces crime reduction",
                examples: [
                  { type: "vn", text: "Vietnam's long-term detention of convicted drug lords and organised crime leaders has prevented those individuals from continuing to direct criminal enterprises — harsher sentences achieving crime reduction through incapacitation rather than rehabilitation." },
                  { type: "support", text: "+ Studies of repeat violent offenders in the USA found that extending sentences by five years for the most dangerous individuals prevented an average of 7–8 additional serious crimes per person — the incapacitation value being substantial for this high-impact group." }
                ]
              }
            ]
          },
          sideB: {
            label: "Harsher punishments are not the most effective crime reduction strategy",
            ideas: [
              {
                title: "Most crime is impulsive, not a rational cost-benefit calculation",
                flow: "violence, opportunistic theft, and drug-related crime are typically committed impulsively → perpetrators are not running deterrence calculations in the moment → harsher penalties have no deterrent effect on non-rational behaviour → the assumption underlying deterrence theory breaks down",
                examples: [
                  { type: "vn", text: "Studies of Vietnamese street crime and violent assault show that most incidents occur under the influence of alcohol or strong emotion — offenders not engaging in any conscious risk calculation that would make the prospect of harsher punishment relevant." },
                  { type: "support", text: "+ National Academy of Sciences review of deterrence research concluded that the deterrent effect of sentence severity is weak to negligible for most crime types — perpetrators either not knowing the relevant penalties or making decisions in states where rational calculation is impossible." }
                ]
              },
              {
                title: "Cross-national evidence shows no correlation between sentence severity and crime rates",
                flow: "countries with the harshest punishments do not have the lowest crime rates → countries with lenient systems often have the lowest rates → the expected relationship between severity and crime is consistently absent from empirical data",
                examples: [
                  { type: "vn", text: "Vietnam's harsh penalties for drug offences have not eliminated drug-related crime — demonstrating that severity alone, without addressing demand, supply chains, and social conditions, cannot resolve a structural criminal market." },
                  { type: "contrast", text: "✗ Norway, with sentences averaging 8 months and maximum sentences of 21 years for most offences, has a violent crime rate a fraction of the USA's, which has average sentences three to five times longer — the inverse relationship being consistent across Scandinavian comparisons." }
                ]
              },
              {
                title: "Harsher punishment without addressing causes is an expensive futility",
                flow: "harsh penalties do not change the economic conditions, family dysfunction, or social environments that produce crime → new offenders emerge from the same conditions → punishment is endlessly applied to endless new criminals → the crime machine runs on, more expensively",
                examples: [
                  { type: "vn", text: "Vietnam's sustained enforcement operations against street drug markets produce cycles of arrest and replacement — new dealers filling the vacuum within weeks — demonstrating that harsh punishment of symptoms does not resolve the structural demand that drives the market." },
                  { type: "support", text: "+ The US 'war on drugs' — combining mandatory minimums and extremely long sentences — quintupled the prison population between 1970 and 2010 without achieving lasting reductions in drug use or drug-related crime, at an annual cost exceeding $50 billion." }
                ]
              }
            ]
          }
        },
        {
          qText: "First-time offenders should be treated more leniently than repeat offenders. To what extent do you agree or disagree?",
          sideA: {
            label: "First-time offenders deserve more lenient treatment",
            ideas: [
              {
                title: "A first offence may be an aberration; rehabilitation is most achievable at this stage",
                flow: "first-time offenders have not yet developed entrenched criminal identities → the causes of their offence may be temporary or circumstantial → early intervention and leniency maximise the window for change → harsh first responses close off the reform opportunity",
                examples: [
                  { type: "vn", text: "Vietnam's juvenile justice provisions allowing administrative rather than criminal handling of first-time minor offenders reflect the principle that a single mistake need not define a life — early leniency producing significantly better long-term outcomes than immediate criminalisation." },
                  { type: "support", text: "+ Research on 'labelling theory' shows that the formal application of a criminal label at the first offence stage significantly increases the probability of subsequent offending — leniency avoiding the self-fulfilling mechanism by which criminal identity becomes permanent." }
                ]
              },
              {
                title: "Disproportionate punishment for first offences forecloses the path to reform",
                flow: "harsh first sentences → criminal record attaches permanently → employment prospects damaged for life → social stigma makes reintegration extremely difficult → ex-prisoners have few options other than further criminal activity",
                examples: [
                  { type: "vn", text: "Vietnamese employers are legally permitted to request criminal background disclosures in hiring — creating a structural barrier to employment for those with even minor first convictions and making the downstream consequences of early harsh punishment severe and long-lasting." },
                  { type: "support", text: "+ UK research found that a criminal conviction for a first-time non-violent offence reduced lifetime earnings by 10–15% — suggesting that the proportionality principle demands leniency at first offence to avoid punishment vastly exceeding the harm caused." }
                ]
              },
              {
                title: "Leniency for first offenders is consistent with proportionality and justice principles",
                flow: "punishment should be proportionate to the full picture of the offender, not just the offence → criminal history is a legitimate aggravating factor → its absence is a legitimate mitigating factor → treating identical offences identically regardless of history violates proportionality",
                examples: [
                  { type: "vn", text: "Vietnam's Penal Code explicitly lists 'first-time offence' as a mitigating circumstance in sentencing — reflecting the legally embedded principle that a person's criminal history is relevant to the proportionality of the sentence they receive." },
                  { type: "support", text: "+ Legal systems across Europe, including under the European Convention on Human Rights, consistently treat first-offender status as a genuine mitigating factor — recognising that a complete absence of prior offending history is morally and legally relevant to sentencing." }
                ]
              }
            ]
          },
          sideB: {
            label: "Leniency for first-time offenders has important limits",
            ideas: [
              {
                title: "The gravity of the first offence, not its novelty, should determine punishment",
                flow: "a first offence may be murder, rape, or terrorism → treating these leniently because of clean prior history is unjust → the victim's suffering is not reduced by the fact that it is the offender's first crime → seriousness must override criminal history in sentencing",
                examples: [
                  { type: "vn", text: "Vietnamese courts do not apply leniency provisions to first-time offenders who commit extremely serious crimes — the principle that mitigating circumstances have limits when the harm caused is grave being explicitly enshrined in sentencing guidelines." },
                  { type: "support", text: "+ The UK Sentencing Guidelines make clear that first-offender status is a mitigating factor only where the offence itself is not of the highest seriousness — for murder, rape, and terrorism, the absence of prior convictions does not justify substantially reduced sentences." }
                ]
              },
              {
                title: "Perceived leniency creates a strategic incentive for first offending",
                flow: "knowledge that first offences receive light treatment → those who plan crimes calculate that a first offence carries minimal risk → the leniency intended to aid rehabilitation inadvertently creates a free-pass for the first crime",
                examples: [
                  { type: "vn", text: "Vietnamese law enforcement has noted cases where criminal networks deliberately use individuals with clean records for specific high-risk operations — their lack of criminal history being a calculated advantage if apprehended, reflecting awareness of the first-offender leniency system." },
                  { type: "support", text: "+ Critics of first-offender leniency policies argue that the rational actor model predicts that knowledge of lenient treatment for first crimes specifically encourages opportunistic first offending — the leniency operating as an implicit subsidy for the first offence." }
                ]
              },
              {
                title: "Victims deserve justice independent of the offender's prior criminal history",
                flow: "a victim of assault, fraud, or robbery suffers equally whether the perpetrator has prior convictions or not → justice for the victim should be the primary sentencing consideration → punishing the offence, not the criminal history, is the appropriate framework",
                examples: [
                  { type: "vn", text: "Vietnamese victims of serious crime have increasingly asserted through legal channels and media that the application of first-offender leniency to their cases produced outcomes disproportionately lenient relative to the harm they suffered." },
                  { type: "support", text: "+ Victim impact statement research in the UK and USA consistently shows that victims prioritise proportionality between harm and sentence above all other sentencing considerations — the absence of prior convictions being, from their perspective, largely irrelevant to the justice they are owed." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Prison & Sentencing",
          layout: "pre",
          items: [
            { phrase: "custodial sentence", vn: "bản án tù giam", meaning: "a sentence requiring the offender to serve time in prison", synonyms: "prison sentence, term of imprisonment" },
            { phrase: "non-custodial sentence", vn: "bản án không tù giam", meaning: "a sentence that does not involve imprisonment, such as fines or community service", synonyms: "community sentence, alternative sentence" },
            { phrase: "mandatory minimum sentence", vn: "mức án tối thiểu bắt buộc", meaning: "a fixed minimum prison term that a judge must impose for a specific offence", synonyms: "minimum mandatory term, fixed minimum sentence" },
            { phrase: "incapacitation", vn: "vô hiệu hoá (ngăn phạm tội)", meaning: "the prevention of crime by physically removing an offender from society through imprisonment", synonyms: "containment, physical removal from society" },
            { phrase: "proportionality principle", vn: "nguyên tắc tương xứng", meaning: "the legal requirement that punishment must be proportionate to the seriousness of the offence", synonyms: "proportionate sentencing, commensurate punishment" }
          ]
        },
        {
          group: "Justice Theory",
          layout: "half",
          items: [
            { phrase: "retributive justice", vn: "công lý trả đũa", meaning: "a theory of justice focused on punishing offenders in proportion to the wrong they committed", synonyms: "punitive justice, payback-based justice" },
            { phrase: "deterrence", vn: "sự răn đe", meaning: "the use of punishment to discourage future criminal behaviour", synonyms: "discouragement, threat-based prevention" },
            { phrase: "recidivism", vn: "tái phạm", meaning: "the tendency of a convicted criminal to reoffend after release from prison", synonyms: "reoffending, relapse into crime" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "half",
          items: [
            { phrase: "serve a sentence", vn: "chấp hành bản án", meaning: "to undergo the punishment imposed by a court", synonyms: "complete a sentence, do time" },
            { phrase: "impose a sentence", vn: "tuyên phạt", meaning: "for a court to formally set the punishment for a convicted offender", synonyms: "hand down a sentence, deliver a verdict" },
            { phrase: "reduce reoffending", vn: "giảm tái phạm", meaning: "to lower the rate at which released prisoners commit further crimes", synonyms: "cut recidivism, lower reoffending rates" }
          ]
        }
      ]
    },
    {
      num: "06",
      name: "Rehabilitation & Reintegration",
      badge: "6 Questions",
      coming: false,
      fullName: "Rehabilitation & Reintegration",
      desc: "Can offenders truly be reformed — and what does effective rehabilitation require?",
      panelBadges: ["6 Real Questions", "36 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "Community service should be used as an alternative to prison for minor crimes. To what extent do you agree or disagree?" },
        { text: "People who commit crimes should be given a second chance after serving their punishment. To what extent do you agree or disagree?" },
        { text: "Rehabilitation is a more effective way to reduce crime than punishment. To what extent do you agree or disagree?" },
        { text: "Prisons should focus more on rehabilitating offenders than on punishing them. Discuss both views and give your own opinion." },
        { text: "Providing education and vocational training for prisoners is the best way to prevent reoffending. To what extent do you agree or disagree?" },
        { text: "Restorative justice is a better approach than traditional forms of punishment. Discuss both views and give your own opinion." }
      ],
      ideas: [
        {
          qText: "Community service should be used as an alternative to prison for minor crimes. To what extent do you agree or disagree?",
          sideA: {
            label: "Community service is an effective and preferable alternative to prison",
            ideas: [
              {
                title: "Offenders make direct reparation to the community they harmed",
                flow: "community service requires offenders to contribute positively to the community → direct connection between harm caused and reparation made → offenders develop awareness of their impact on others → more meaningful than passive suffering in prison",
                examples: [
                  { type: "vn", text: "Vietnam's community-based corrective measures (biện pháp giáo dục tại cộng đồng) require minor offenders to perform supervised work benefiting local communities — creating a tangible restitution that punitive incarceration does not provide." },
                  { type: "support", text: "+ UK evaluation of community payback orders — which require offenders to complete visible community improvement projects — found that 85% of victims felt community service was a more satisfying response than a short prison term for comparable minor offences." }
                ]
              },
              {
                title: "Community service preserves the social ties that prevent reoffending",
                flow: "offenders remain connected to family, employment, and community while serving their sentence → social bonds maintained → employment record unbroken → reintegration after completion requires no adjustment → reoffending rates fall compared to ex-prisoners",
                examples: [
                  { type: "vn", text: "Vietnamese offenders given community supervision orders rather than short prison terms for minor theft maintain employment and family connections — the preservation of these social anchors being the primary reason their reoffending rates are consistently lower than those of released prisoners." },
                  { type: "support", text: "+ Research in Canada found that offenders given community service in place of short prison terms reoffended at rates 25–30% lower than matched prisoners — the social bond preservation effect being the dominant factor in reduced reoffending." }
                ]
              },
              {
                title: "Community sentences are far more cost-effective than short prison terms",
                flow: "short prison sentences cost tens of thousands annually per person → provide no rehabilitation or skill-building → community service costs a fraction → achieves equal or better crime reduction outcomes → resources released for more effective interventions",
                examples: [
                  { type: "vn", text: "Vietnam's use of administrative corrections and community supervision for first-time minor offenders avoids the full cost of incarceration while achieving comparable or better crime reduction outcomes — a resource efficiency argument increasingly recognised by criminal justice planners." },
                  { type: "support", text: "+ The UK Ministry of Justice calculated that community sentences cost approximately £2,000–4,000 per person per year versus £40,000+ for imprisonment — and produced 7 percentage points lower reoffending rates, making them both cheaper and more effective for minor offences." }
                ]
              }
            ]
          },
          sideB: {
            label: "Community service has significant limitations as an alternative",
            ideas: [
              {
                title: "Community service is not appropriate for serious or violent crimes",
                flow: "the severity of some offences requires a punishment that reflects that gravity → community service feels disproportionately light for assault, fraud causing serious harm, or persistent offending → public justice demands visible and serious consequences for serious wrongs",
                examples: [
                  { type: "vn", text: "Vietnamese criminal law explicitly restricts community service to minor offences — recognising that the principle of proportionality requires more serious responses to more serious crimes, and that community service signals societal condemnation inappropriately for grave offences." },
                  { type: "support", text: "+ Public opinion surveys consistently show strong opposition to community service for crimes involving violence, sexual assault, or serious fraud — the public's proportionality intuition requiring that harmful crimes produce consequential, visible punishment." }
                ]
              },
              {
                title: "Community service is difficult to supervise and enforce consistently",
                flow: "offenders completing community service must be monitored to ensure attendance and quality → under-resourced supervision agencies struggle to enforce compliance → poor supervision allows token participation → the sentence loses its deterrent and rehabilitative value",
                examples: [
                  { type: "vn", text: "Vietnamese community-based supervision programmes face resource constraints that limit the intensity of monitoring — leaving the quality of community service completion variable and undermining the consistency that effective alternatives to custody require." },
                  { type: "support", text: "+ A UK Probation Service inspection found that approximately one-third of community service placements were inadequately supervised — with offenders completing hours on paper without meaningful engagement, reducing the rehabilitative and reparative value of the sentence." }
                ]
              },
              {
                title: "Community service can undermine public confidence that justice is being done",
                flow: "victims and the public may perceive community service as 'getting off lightly' → confidence in the justice system falls → crime reporting reduces if punishments seem meaningless → the legitimacy of the system depends on visible proportionate consequences",
                examples: [
                  { type: "vn", text: "Vietnamese media coverage of cases where significant offenders received community service rather than prison has generated public debate about whether non-custodial sentences adequately reflect the seriousness of the criminal behaviour involved." },
                  { type: "support", text: "+ British Crime Survey data shows that public confidence in community sentences as a meaningful punishment is significantly lower than for custody — with many respondents describing community service as 'not a real punishment', potentially undermining the deterrent effect of the sentence." }
                ]
              }
            ]
          }
        },
        {
          qText: "People who commit crimes should be given a second chance after serving their punishment. To what extent do you agree or disagree?",
          sideA: {
            label: "Ex-offenders deserve and should be given a second chance",
            ideas: [
              {
                title: "Permanent exclusion perpetuates the conditions that caused reoffending",
                flow: "ex-offenders denied employment, housing, and social participation → unable to build stable legitimate lives → few options beyond continued criminal activity → permanent exclusion creates the very reoffending it claims to prevent",
                examples: [
                  { type: "vn", text: "Vietnamese ex-prisoners who are unable to find employment due to criminal record disclosure requirements face a stark choice between destitution and criminal income — the exclusion-reoffending cycle being well documented in Vietnam's criminal justice research." },
                  { type: "support", text: "+ US research found that ex-prisoners who secured stable employment within six months of release reoffended at rates 60% lower than those who remained unemployed — confirming that second chances are not soft sentimentalism but hard-nosed crime prevention." }
                ]
              },
              {
                title: "The principle of rehabilitation requires that punishment ends at release",
                flow: "if punishment is intended to reform → then a reformed individual should be restored to full participation in society → continuing to exclude an ex-offender who has served their sentence contradicts the stated purpose of the justice system → indefinite exclusion amounts to double punishment",
                examples: [
                  { type: "vn", text: "Vietnam's reintegration support framework, including job placement assistance for released prisoners and community supervision programmes, reflects a legal principle that once a sentence is served, the offender is entitled to full reintegration into society." },
                  { type: "support", text: "+ The European Convention on Human Rights and UN Standard Minimum Rules for the Treatment of Prisoners both establish that the goal of imprisonment is rehabilitation and social reintegration — the normative framework of international law treating second chances as a right, not a privilege." }
                ]
              },
              {
                title: "Society benefits enormously from successful reintegration",
                flow: "ex-offenders who successfully reintegrate → become taxpayers, parents, and community members → contribute productively rather than consuming criminal justice resources repeatedly → the social return on successful second chances is substantial",
                examples: [
                  { type: "vn", text: "Vietnamese programmes pairing released prisoners with employer networks and vocational training providers have produced measurable improvements in post-release employment rates — each successful reintegration converting a justice system cost into a productive economic contributor." },
                  { type: "support", text: "+ The RAND Corporation estimates that successful reintegration of one ex-prisoner over a working lifetime generates approximately $250,000 in net social value through taxes, reduced welfare dependency, and avoided reincarceration costs — making second chances a compelling economic investment." }
                ]
              }
            ]
          },
          sideB: {
            label: "Second chances have legitimate and important limits",
            ideas: [
              {
                title: "Extremely serious crimes may not warrant simple restoration",
                flow: "murder, child sexual abuse, and terrorism cause irreversible harm to victims and communities → complete social restoration of the perpetrator may be experienced as a further injustice → proportionality requires ongoing acknowledgment of the gravity of some offences → unconditional second chances may be inappropriate for the most serious crimes",
                examples: [
                  { type: "vn", text: "Vietnamese public opinion is deeply resistant to the complete social restoration of individuals convicted of child sexual abuse or politically motivated terrorism — the gravity of these offences creating a legitimate public expectation of ongoing restrictions even after sentence completion." },
                  { type: "support", text: "+ The UK's sex offenders register and restrictions on certain employment categories for violent offenders post-release reflect a legal and social consensus that some offences justify ongoing supervision and restriction beyond sentence completion." }
                ]
              },
              {
                title: "Victims may reasonably oppose the full restoration of those who harmed them",
                flow: "victims bear lifelong consequences of serious crime → the full social restoration of their offender may renew trauma → victims' interests must be weighed against offenders' rehabilitation claims → justice requires balancing both, not only the offender's future",
                examples: [
                  { type: "vn", text: "Vietnamese victims of serious violent crime increasingly use victim impact statements and legal advocacy to argue that post-sentence privileges for their offenders — such as early parole or complete record expungement — compound the harm they suffered." },
                  { type: "support", text: "+ International research on trauma-informed justice consistently finds that victims' ongoing safety, dignity, and psychological wellbeing must be actively considered in reintegration planning — the offender's second chance should not come at the cost of renewed harm to victims." }
                ]
              },
              {
                title: "Repeat offenders demonstrate that second chances are not always warranted",
                flow: "recidivism statistics show that many offenders reoffend after release → second chances are not automatically redemptive → persistent reoffending reveals that some individuals require ongoing supervision or restriction → unconditional second chances risk public safety",
                examples: [
                  { type: "vn", text: "Vietnam's recidivism data shows that a significant proportion of released offenders reoffend within five years — a statistical reality that requires the second chance framework to be conditional and monitored rather than absolute and unconditional." },
                  { type: "support", text: "+ UK reoffending data shows approximately 46% of adults reoffend within one year of release — demonstrating that while second chances are worth pursuing, the system must include monitoring, support, and the capacity to withdraw freedoms when reoffending occurs." }
                ]
              }
            ]
          }
        },
        {
          qText: "Rehabilitation is a more effective way to reduce crime than punishment. To what extent do you agree or disagree?",
          sideA: {
            label: "Rehabilitation is more effective at reducing crime than punishment",
            ideas: [
              {
                title: "Rehabilitation addresses the causes of reoffending; punishment merely responds to symptoms",
                flow: "underlying drivers of crime — addiction, mental illness, lack of skills, trauma — remain unaddressed by punishment → the rehabilitated offender no longer has the motivation or need to offend → crime is eliminated at source rather than suppressed temporarily",
                examples: [
                  { type: "vn", text: "Vietnam's community drug treatment and methadone programmes address the addiction that drives drug-related crime directly — offenders who complete treatment showing dramatically lower rates of drug-related reoffending than those who serve punitive prison sentences for equivalent offences." },
                  { type: "support", text: "+ Meta-analyses of rehabilitation programmes across 500+ studies consistently show that cognitive behavioural therapy, education, and vocational training reduce reoffending by 10–30% compared to equivalent prison time without rehabilitative components." }
                ]
              },
              {
                title: "Countries prioritising rehabilitation achieve better crime outcomes than those prioritising punishment",
                flow: "Nordic countries invest heavily in rehabilitation → achieve the world's lowest reoffending rates → maintain low crime rates without mass incarceration → punitive systems maintain high crime despite enormous criminal justice spending → the international evidence strongly favours rehabilitation",
                examples: [
                  { type: "vn", text: "Vietnam's criminal justice planners increasingly study Nordic and Japanese models that combine community reintegration with skills development — the consistently better outcomes of these systems providing a strong evidence base for rehabilitation-focused reform." },
                  { type: "contrast", text: "✗ Norway's 20% reoffending rate versus the USA's 70% demonstrates that the dominant variable is not the severity of punishment but the quality of rehabilitation — countries that invest in changing offenders outperform those that focus on punishing them." }
                ]
              },
              {
                title: "The long-term social cost of rehabilitation is far lower than punishment",
                flow: "rehabilitated offenders become productive citizens who do not reoffend → the criminal justice, prison, and victim support costs associated with their future crimes are avoided → society invests once and benefits indefinitely → punishment without rehabilitation repeats the costs endlessly",
                examples: [
                  { type: "vn", text: "Vietnamese economic analyses of criminal justice spending show that each successful rehabilitation — avoiding a subsequent offence — saves the state the cost of investigation, prosecution, trial, and reincarceration, making rehabilitation a rational investment rather than soft charity." },
                  { type: "support", text: "+ The UK Ministry of Justice estimates that reoffending costs the country between £9.5 and £13 billion annually — the vast majority attributable to individuals who received punitive rather than rehabilitative interventions and returned to crime predictably." }
                ]
              }
            ]
          },
          sideB: {
            label: "Punishment remains essential and rehabilitation has important limits",
            ideas: [
              {
                title: "Not all offenders are willing or able to engage with rehabilitation",
                flow: "rehabilitation requires genuine motivation and engagement → compelled participation produces poor outcomes → individuals with psychopathic traits, entrenched criminal identities, or severe personality disorders respond minimally → punishment and incapacitation are the only effective responses for this group",
                examples: [
                  { type: "vn", text: "Vietnam's corrections system acknowledges through its tiered institutional structure that certain categories of repeat violent offenders — particularly those with established organised crime affiliations — require incapacitation-focused management rather than rehabilitative programmes." },
                  { type: "support", text: "+ Research on antisocial personality disorder, which affects approximately 50–70% of prison populations, shows poor response to standard rehabilitation programmes — cognitive behavioural therapy and vocational training being significantly less effective for this group than for the broader prison population." }
                ]
              },
              {
                title: "Deterrence and justice require punishment independently of rehabilitation outcomes",
                flow: "potential offenders need to face a credible cost for offending → rehabilitation-only approaches reduce the deterrent signal → victims require retributive acknowledgment of the harm they suffered → punishment fulfils these functions that rehabilitation cannot",
                examples: [
                  { type: "vn", text: "Vietnamese public expectations that serious criminals face genuine punishment — not merely treatment — reflect a deeply held principle that justice requires more than the offender's future welfare; the victim's past suffering must also be acknowledged through consequential punishment." },
                  { type: "support", text: "+ Survey research across democratic countries consistently shows public support for punishment as a legitimate purpose of sentencing independent of rehabilitation outcomes — the retributive intuition being a stable feature of moral psychology that pure rehabilitation approaches fail to address." }
                ]
              },
              {
                title: "Rehabilitation-only approaches can undermine public confidence in the justice system",
                flow: "if the public perceives that serious criminals receive therapeutic care rather than meaningful punishment → confidence in the justice system falls → crime reporting rates decline → communities take justice into their own hands → the legitimacy of the system depends on visible proportionate consequences",
                examples: [
                  { type: "vn", text: "Vietnamese media commentary on rehabilitation-focused sentencing for serious crimes frequently reflects public concern that the legal system is failing to adequately protect or vindicate victims — the perception of leniency reducing trust in institutional justice." },
                  { type: "support", text: "+ UK research on public confidence in sentencing consistently finds that rehabilitation-focused outcomes for violent offenders generate the highest levels of public dissatisfaction — the public's proportionality intuition requiring that serious harm produces serious consequences." }
                ]
              }
            ]
          }
        },
        {
          qText: "Prisons should focus more on rehabilitating offenders than on punishing them. Discuss both views and give your own opinion.",
          sideA: {
            label: "Prisons should prioritise rehabilitation over punishment",
            ideas: [
              {
                title: "The ultimate measure of a prison system is whether it reduces future crime",
                flow: "prisons exist to serve society → society is better served by released prisoners who do not reoffend → rehabilitation directly achieves this goal → punishment without rehabilitation releases the same person who was imprisoned, unchanged or worse",
                examples: [
                  { type: "vn", text: "Vietnam's stated prison objectives include reformation and reintegration — the legal framework acknowledging that incarceration should transform offenders rather than merely warehouse them, even where full implementation remains aspirational." },
                  { type: "support", text: "+ Norway's rehabilitation-centred prison model, which treats incarceration as a period of intensive support rather than suffering, produces a 20% reoffending rate — compared to 60–70% in punitive systems — demonstrating that the goal of prison should be measured by what happens after release." }
                ]
              },
              {
                title: "Education, training, and therapy produce measurable reductions in reoffending",
                flow: "specific rehabilitation interventions have strong evidence bases → prison education raises employment outcomes post-release → cognitive behavioural therapy reduces criminal thinking → skills programmes enable legitimate income → each intervention has measurable reoffending reduction effects",
                examples: [
                  { type: "vn", text: "Vietnamese prisons that deliver consistent vocational training and literacy programmes — particularly in facilities managed with international NGO involvement — report significantly lower reoffending rates among graduates than the national average for comparable offences." },
                  { type: "support", text: "+ A RAND Corporation study of prison education programmes found that inmates who participated in educational programmes were 43% less likely to return to prison within three years than non-participants — one of the most cost-effective interventions available within the criminal justice system." }
                ]
              },
              {
                title: "Human dignity requires that imprisonment be more than punitive suffering",
                flow: "international human rights law prohibits cruel, inhuman, or degrading treatment → purely punitive imprisonment without rehabilitative purpose approaches this threshold → prisoners retain human dignity → prisons are obligated to support rather than merely confine",
                examples: [
                  { type: "vn", text: "Vietnam's prison conditions are subject to international human rights scrutiny under treaties Vietnam has ratified — the UN Standard Minimum Rules for the Treatment of Prisoners establishing that rehabilitation is a legal obligation, not merely an optional programme enhancement." },
                  { type: "support", text: "+ The European Court of Human Rights has repeatedly ruled that prison conditions must be compatible with human dignity and that a genuine opportunity for rehabilitation must be provided — establishing rehabilitation as a right, not a privilege, in European legal systems." }
                ]
              }
            ]
          },
          sideB: {
            label: "Punishment must remain a central function of prison",
            ideas: [
              {
                title: "Prison must remain genuinely unpleasant to maintain its deterrent effect",
                flow: "the deterrent value of imprisonment depends on it being a genuinely aversive experience → if prison becomes comfortable or resembles a hotel → the prospective cost of crime falls → rational offenders factor this reduced cost into their calculations → deterrence weakens",
                examples: [
                  { type: "vn", text: "Vietnamese public discourse consistently includes the expectation that prison conditions, while not inhumane, must involve genuine deprivation of comfort and freedom — a prison perceived as 'too comfortable' undermining its deterrent credibility in the public mind." },
                  { type: "support", text: "+ Research on public perceptions of sentencing shows that in countries where prisons are perceived as 'soft', courts face pressure to increase sentence lengths to compensate — suggesting that if rehabilitation is purchased at the cost of perceived leniency, longer sentences result, increasing total imprisonment." }
                ]
              },
              {
                title: "Victims require acknowledgment of the severity of the harm done to them",
                flow: "victims experience serious offences as catastrophic life events → the justice system's response should reflect that gravity → a rehabilitation-focused prison that provides the offender with education and comfort may seem to ignore the victim's suffering → punishment acknowledges harm in a way rehabilitation does not",
                examples: [
                  { type: "vn", text: "Vietnamese victims of serious violent crime frequently engage with media and legal channels to argue that rehabilitation-focused imprisonment for their offenders fails to adequately acknowledge the severity of the harm they suffered — the expressive function of punishment being important to survivors." },
                  { type: "support", text: "+ Research on victim satisfaction with criminal justice outcomes consistently shows that victims of violent crime prioritise punishment over rehabilitation in sentencing — the acknowledgment of harm through consequential punishment being more important to their recovery than knowledge that the offender is receiving therapy." }
                ]
              },
              {
                title: "High-risk offenders require secure containment, not therapeutic environments",
                flow: "a subset of prisoners pose serious ongoing dangers → rehabilitation programmes are ineffective for this group → therapeutic prison environments may create security vulnerabilities → for dangerous offenders secure incapacitation is the only appropriate response",
                examples: [
                  { type: "vn", text: "Vietnam maintains high-security facilities with minimal rehabilitative programming for its most dangerous offenders — organised crime leaders, violent recidivists, and terrorism-related detainees — where incapacitation rather than reform is the explicit management objective." },
                  { type: "support", text: "+ The Netherlands, despite its reputation for liberal rehabilitation-focused prisons, maintains a category of high-security forensic psychiatric units for dangerous offenders where secure containment overrides therapeutic considerations — recognising that rehabilitation is not the appropriate framework for all prisoners." }
                ]
              }
            ]
          }
        },
        {
          qText: "Providing education and vocational training for prisoners is the best way to prevent reoffending. To what extent do you agree or disagree?",
          sideA: {
            label: "Prison education and vocational training are the most effective reoffending prevention tools",
            ideas: [
              {
                title: "Employment after release is the strongest single predictor of non-reoffending",
                flow: "stable employment provides income, structure, identity, and social bonds → all the factors that prevent reoffending → education and vocational training are the primary routes to post-release employment → therefore they are the most direct intervention available within prisons",
                examples: [
                  { type: "vn", text: "Vietnamese follow-up studies of released prisoners consistently show that those who secured stable employment within six months of release had reoffending rates approximately half those of unemployed ex-prisoners — the employment effect being the most powerful reintegration variable measured." },
                  { type: "support", text: "+ A UK Ministry of Justice study found that prisoners who participated in work and vocational training programmes were 9 percentage points less likely to reoffend within a year of release than comparable non-participants — the employment pathway being the dominant causal mechanism." }
                ]
              },
              {
                title: "Education changes how offenders think about themselves and their futures",
                flow: "education expands the prisoner's sense of what is possible for them → a newly literate or qualified person may experience a fundamental identity shift → the ex-prisoner becomes capable of imagining a legitimate future → self-concept change underlies sustainable behaviour change",
                examples: [
                  { type: "vn", text: "Vietnamese prison educators report that the psychological transformation accompanying literacy achievement or vocational qualification — 'I am now someone who can do something' — is often the turning point preceding successful reintegration, beyond the purely economic value of the qualification." },
                  { type: "support", text: "+ Research on desistance theory — the process by which offenders permanently stop offending — consistently identifies a shift in identity and self-narrative as the central mechanism: education is one of the most reliably documented triggers of this identity shift." }
                ]
              },
              {
                title: "Prison education is among the highest-return investments in the criminal justice system",
                flow: "programme costs are modest relative to prison operating costs → reoffending reductions generate large savings in avoided investigation, prosecution, and reincarceration → each prevented reoffence saves far more than the programme cost → returns rival those of early childhood education",
                examples: [
                  { type: "vn", text: "Economic analysis of Vietnam's prison vocational training programmes shows positive cost-benefit ratios even under conservative assumptions — the savings from reduced reincarceration exceeding programme costs within three to five years of a prisoner's release." },
                  { type: "support", text: "+ The RAND Corporation's landmark study found that for every $1 spent on prison education, $4–5 were saved in avoided reincarceration costs — making prison education not only humane but among the most cost-effective criminal justice investments available." }
                ]
              }
            ]
          },
          sideB: {
            label: "Other factors are equally or more important in preventing reoffending",
            ideas: [
              {
                title: "Mental health, addiction, and housing instability are stronger reoffending predictors",
                flow: "untreated addiction drives drug-related reoffending regardless of qualifications → mental illness creates crisis situations that overwhelm skills-based coping → homelessness immediately after release produces crisis-driven reoffending → qualifications alone cannot address these deeper needs",
                examples: [
                  { type: "vn", text: "Vietnamese research on reoffending patterns shows that substance abuse relapse — not lack of employment skills — is the most common proximate cause of reoffending among released prisoners, suggesting that addiction treatment should be at least as prioritised as vocational training." },
                  { type: "support", text: "+ A UK National Audit Office study found that 70% of reoffenders had drug or alcohol problems at the time of release, and 35% were released homeless — both factors predicting reoffending more strongly than educational attainment in the immediate post-release period." }
                ]
              },
              {
                title: "Labour market discrimination limits the practical value of prison qualifications",
                flow: "many employers refuse to hire ex-offenders regardless of qualifications → prison qualifications are signalled by the criminal record that accompanies them → the employment pathway that education theoretically opens is blocked by discrimination → the theory fails in the face of labour market reality",
                examples: [
                  { type: "vn", text: "Vietnamese employers' use of criminal record background checks as a standard hiring filter means that even highly qualified ex-prisoners face structural barriers to employment that their qualifications alone cannot overcome without complementary legal reform." },
                  { type: "support", text: "+ A UK audit found that over 75% of employers would not knowingly hire an ex-offender regardless of the qualifications or skills they possessed — confirming that criminal record stigma, not lack of human capital, is the dominant barrier to post-release employment." }
                ]
              },
              {
                title: "Voluntary participation is essential; compelled training has minimal effectiveness",
                flow: "prisoners who choose to engage with education show genuine motivation → compelled participation to fill prison time produces disengaged attendance → disengaged participation yields no meaningful skill development → mandatory education programmes may show numbers without results",
                examples: [
                  { type: "vn", text: "Vietnamese prison educators consistently report that self-selecting participants in vocational programmes — those who actively chose to enroll — achieve employment outcomes far superior to those attending mandatorily, confirming that motivation is as important as programme quality." },
                  { type: "support", text: "+ Research on prison education effectiveness consistently finds that the largest effect sizes occur among highly motivated voluntary participants, with effects shrinking significantly for reluctant or compelled participants — confirming that creating demand for education is as important as supplying it." }
                ]
              }
            ]
          }
        },
        {
          qText: "Restorative justice is a better approach than traditional forms of punishment. Discuss both views and give your own opinion.",
          sideA: {
            label: "Restorative justice offers superior outcomes to traditional punishment",
            ideas: [
              {
                title: "Victims receive direct acknowledgment and genuine reparation",
                flow: "restorative processes give victims voice and direct engagement → offenders must listen to the impact of their actions → apology and reparation can be negotiated → victims report higher satisfaction than those who experienced only the formal court process",
                examples: [
                  { type: "vn", text: "Vietnam's community mediation (hoà giải cơ sở) system — particularly for civil and minor criminal disputes — demonstrates that victim-offender dialogue processes produce higher reported satisfaction rates than formal adversarial proceedings for comparable matters." },
                  { type: "support", text: "+ A meta-analysis of 36 restorative justice programmes found that victims who participated in face-to-face conferences with their offenders reported higher satisfaction rates (80%+) than victims whose cases went to conventional court — including higher perceptions of fairness and completeness." }
                ]
              },
              {
                title: "Offenders take genuine responsibility rather than passively enduring punishment",
                flow: "traditional punishment positions the offender as passive recipient → restorative processes require active participation, acknowledgment, and problem-solving → genuine accountability produces more meaningful behaviour change → taking responsibility — not enduring suffering — is what changes people",
                examples: [
                  { type: "vn", text: "Vietnamese youth justice programmes incorporating elements of restorative dialogue between young offenders and their victims show better subsequent behaviour outcomes than purely punitive detention — the act of acknowledging harm to a real person producing genuine remorse in ways that abstract sentencing cannot." },
                  { type: "support", text: "+ Research on restorative justice processes consistently finds that shame reintegration — where offenders experience genuine shame about their actions in a non-stigmatising context — is more strongly associated with desistance from crime than the shame and stigma produced by court proceedings." }
                ]
              },
              {
                title: "Restorative processes produce lower reoffending rates than traditional punishment",
                flow: "restorative justice is associated with 25–35% reductions in reoffending rates in multiple studies → the combination of genuine accountability, victim awareness, and reparation changes behaviour → the evidence base is now substantial enough to challenge traditional punishment's dominance",
                examples: [
                  { type: "vn", text: "Vietnamese research on community mediation outcomes for juvenile offenders shows significantly lower rates of subsequent reported offending among those who went through restorative processes compared to equivalent cases handled through formal criminal proceedings." },
                  { type: "support", text: "+ Lawrence Sherman and Heather Strang's randomised controlled trials in Canberra found that restorative justice conferences reduced reoffending rates by approximately 25% compared to conventional prosecution for comparable offences — one of the strongest experimental results in criminological research." }
                ]
              }
            ]
          },
          sideB: {
            label: "Traditional punishment remains necessary and irreplaceable",
            ideas: [
              {
                title: "Serious crimes require proportionate punishment that reflects their gravity",
                flow: "restorative processes may be appropriate for minor offences → serious harm demands a response that reflects that gravity → community dialogue cannot adequately express society's condemnation of murder, rape, or terrorism → the expressive and retributive functions of traditional punishment are irreplaceable",
                examples: [
                  { type: "vn", text: "Vietnamese law explicitly reserves restorative and mediation approaches for offences below a seriousness threshold — recognising that for crimes of extreme violence or large-scale corruption, only formal criminal punishment can adequately represent the societal condemnation the offence deserves." },
                  { type: "support", text: "+ Legal philosophers argue that treating a murder victim's family to a 'restorative conference' rather than a murder conviction and substantial sentence fails to honour the irreversibility of the harm — restorative processes being fundamentally inadequate responses to irreversible serious harm." }
                ]
              },
              {
                title: "Not all victims want or are able to engage in restorative processes",
                flow: "restorative justice requires victim willingness and capacity to participate → some victims find face-to-face engagement traumatising → forcing or pressuring victims into restorative processes may cause further harm → the option should be voluntary, not the default or only response",
                examples: [
                  { type: "vn", text: "Vietnamese victims of domestic violence and sexual assault frequently express that they do not want to be in the same room as their offenders — restorative processes being potentially traumatising rather than empowering for this significant category of crime victim." },
                  { type: "support", text: "+ Research on restorative justice for sexual violence found that mandatory participation produced retraumatisation in a significant proportion of victims — confirming that the model's strengths are context-dependent and cannot be universally applied without potential for serious harm." }
                ]
              },
              {
                title: "Public safety sometimes requires incapacitation that restorative justice cannot provide",
                flow: "some offenders pose ongoing danger to the public → restorative dialogue does not remove that threat → imprisonment is the only mechanism for protecting potential future victims → public safety requires incapacitation for dangerous individuals regardless of the restorative justice framework",
                examples: [
                  { type: "vn", text: "Vietnam maintains long-term secure detention for serial violent offenders and organised crime leaders for whom dialogue-based justice would be both inappropriate and insufficient — the protection of future potential victims requiring physical removal from society that restorative processes cannot provide." },
                  { type: "support", text: "+ Critics of restorative justice as a general criminal justice philosophy note that it provides no mechanism for incapacitating dangerous offenders — its effectiveness being confined to cases where the offender poses no ongoing threat, which excludes the most serious criminals for whom alternative responses are most urgently needed." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Rehabilitation & Reform",
          layout: "pre",
          items: [
            { phrase: "rehabilitation", vn: "cải tạo / phục hồi", meaning: "the process of helping offenders reform and return to productive participation in society", synonyms: "reform, reintegration, correction" },
            { phrase: "restorative justice", vn: "tư pháp phục hồi", meaning: "an approach to crime focusing on repairing harm through dialogue between offenders, victims, and communities", synonyms: "reparative justice, victim-offender mediation" },
            { phrase: "vocational training", vn: "đào tạo nghề", meaning: "practical skills training preparing people for employment in a specific trade or profession", synonyms: "skills training, occupational training" },
            { phrase: "desistance", vn: "từ bỏ tội phạm", meaning: "the process by which individuals permanently stop offending over time", synonyms: "cessation of offending, crime exit" },
            { phrase: "social reintegration", vn: "tái hòa nhập xã hội", meaning: "the process of helping ex-offenders return to productive participation in mainstream society", synonyms: "community reintegration, post-release support" }
          ]
        },
        {
          group: "Alternatives to Custody",
          layout: "half",
          items: [
            { phrase: "community service", vn: "lao động công ích", meaning: "unpaid work performed by offenders as an alternative to imprisonment", synonyms: "community payback, unpaid work order" },
            { phrase: "probation", vn: "quản chế / quản lý tại ngoại", meaning: "a period of supervised release in the community as an alternative or addition to custody", synonyms: "supervised release, community supervision" },
            { phrase: "electronic tagging", vn: "đeo vòng điện tử giám sát", meaning: "monitoring an offender's location through an electronic ankle bracelet as a condition of release", synonyms: "ankle monitoring, GPS tagging" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "half",
          items: [
            { phrase: "address offending behaviour", vn: "giải quyết hành vi phạm tội", meaning: "to treat the underlying attitudes and patterns that lead to criminal acts", synonyms: "tackle criminal behaviour, confront offending patterns" },
            { phrase: "give offenders a second chance", vn: "cho người phạm tội cơ hội làm lại", meaning: "to allow convicted individuals to reintegrate into society after serving their sentence", synonyms: "enable reintegration, support rehabilitation" },
            { phrase: "break the cycle of reoffending", vn: "phá vỡ vòng tái phạm", meaning: "to interrupt the pattern by which ex-prisoners repeatedly return to criminal behaviour", synonyms: "end the recidivism cycle, stop repeat offending" }
          ]
        }
      ]
    },
    {
      num: "07",
      name: "Types of Crime",
      badge: "4 Questions",
      coming: false,
      fullName: "Types of Crime",
      desc: "How do different crime types require different societal responses?",
      panelBadges: ["4 Real Questions", "24 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "Cybercrime is becoming more common in many countries. What are the causes of this problem and what solutions can be suggested?" },
        { text: "White-collar crime is more harmful to society than other types of crime. To what extent do you agree or disagree?" },
        { text: "Violent crime is increasing in many parts of the world. What are the causes and what solutions can be implemented?" },
        { text: "Drug-related crime is a serious issue in many countries. What measures can governments take to address this problem?" }
      ],
      ideas: [
        {
          qText: "Cybercrime is becoming more common in many countries. What are the causes of this problem and what solutions can be suggested?",
          sideA: {
            label: "Causes of rising cybercrime",
            ideas: [
              {
                title: "Digital anonymity makes detection and prosecution extremely difficult",
                flow: "offenders operate through VPNs, proxy servers, and encrypted channels → identity concealment is cheap and accessible → risk of apprehension approaches zero → rational calculation strongly favours cybercrime over physical crime",
                examples: [
                  { type: "vn", text: "Vietnamese cybercriminals operating through overseas proxy infrastructure have been virtually impossible to identify and prosecute through domestic channels alone — the anonymisation tools available on any smartphone eliminating the detection risk that deters most physical crime." },
                  { type: "support", text: "+ Interpol reports that fewer than 0.05% of cybercrime incidents globally result in prosecution — the near-zero detection risk being the primary structural driver of explosive growth in cybercrime volumes worldwide." }
                ]
              },
              {
                title: "Rapid digitalisation has created vast attack surfaces before security can keep pace",
                flow: "accelerated digital adoption → enormous volumes of valuable data stored online → systems deployed without adequate security → attackers exploit gaps before defences are established",
                examples: [
                  { type: "vn", text: "Vietnam's rapid digital payment adoption — e-wallets, QR codes, mobile banking — has outpaced consumer security literacy and regulatory frameworks, creating attractive targets for fraud that criminals have quickly and extensively exploited." },
                  { type: "support", text: "+ The global shift to remote work during COVID-19 expanded enterprise attack surfaces overnight, with phishing attacks increasing by 600% in 2020 as attackers exploited hastily deployed and poorly secured remote access systems." }
                ]
              },
              {
                title: "Cross-border jurisdiction gaps allow cybercriminals to operate with impunity",
                flow: "crimes committed in one country, infrastructure hosted in another, proceeds moved through a third → no single jurisdiction can effectively prosecute alone → international legal coordination is slow and incomplete → criminals operate profitably in the gaps between legal systems",
                examples: [
                  { type: "vn", text: "Vietnamese online scam operations targeting victims in South Korea, Japan, and Taiwan exploit the complexity of international cybercrime prosecution — the jurisdictional chain involving multiple countries with varying cooperation capacity and legal frameworks." },
                  { type: "support", text: "+ The FBI's Internet Crime Complaint Center recorded $10.3 billion in reported cybercrime losses in 2022 — yet cross-border prosecution remains the exception, with the vast majority of perpetrators never facing legal consequences regardless of evidence quality." }
                ]
              }
            ]
          },
          sideB: {
            label: "Solutions to the rising cybercrime problem",
            ideas: [
              {
                title: "International cooperation and treaty frameworks close jurisdictional gaps",
                flow: "bilateral and multilateral extradition and evidence-sharing agreements → criminals cannot exploit gaps between legal systems → consistent prosecution risk regardless of location → international norms develop that cover the same behaviours globally",
                examples: [
                  { type: "vn", text: "Vietnam's accession to international cybercrime cooperation agreements and bilateral data-sharing arrangements has improved its capacity to both seek help on cases targeting Vietnamese victims and provide support where perpetrators operate from within Vietnam." },
                  { type: "support", text: "+ Europol's European Cybercrime Centre (EC3) coordinates cross-border investigations across member states, achieving prosecutions of criminal networks that individual countries could not have reached acting alone — demonstrating the multiplier effect of coordinated cooperation." }
                ]
              },
              {
                title: "Public education and digital literacy reduce the attack surface",
                flow: "educated users recognise phishing, protect credentials, and report suspicious activity → the pool of exploitable targets shrinks → criminals face diminishing returns in educated populations → cybersecurity becomes a shared civic responsibility, not only a technical one",
                examples: [
                  { type: "vn", text: "Vietnam's national cybersecurity awareness campaigns — including school-based digital literacy programmes and workplace training — have improved recognition of common fraud techniques among urban populations, reducing successful attack rates on informed users." },
                  { type: "support", text: "+ Singapore's cybersecurity education initiatives, covering schools and vulnerable populations, have reduced successful phishing and social engineering rates despite increasing attack volumes — demonstrating that human literacy, not only technical defences, is a frontline defence." }
                ]
              },
              {
                title: "Mandatory security standards and regulatory penalties force corporate protection",
                flow: "legal obligations to protect user data → regular auditing and certification requirements → significant penalties for preventable breaches → security investment becomes a compliance necessity rather than an optional cost",
                examples: [
                  { type: "vn", text: "Vietnam's Cybersecurity Law (2018) and Decree 13/2023 on personal data protection establish mandatory security standards — the regulatory framework gradually raising the baseline protection of digital systems that previously operated with minimal security obligations." },
                  { type: "support", text: "+ The EU's GDPR — imposing fines up to 4% of global annual turnover for data protection failures — has transformed corporate security investment across Europe, companies investing far more in data protection when regulatory consequences are substantial and credibly enforced." }
                ]
              }
            ]
          }
        },
        {
          qText: "White-collar crime is more harmful to society than other types of crime. To what extent do you agree or disagree?",
          sideA: {
            label: "White-collar crime causes greater societal harm",
            ideas: [
              {
                title: "The financial scale of white-collar crime dwarfs all other categories combined",
                flow: "a single corporate fraud or banking scandal causes losses in the billions → more victims than years of street crime → aggregate economic harm is incomparably greater → the resources extracted from society fund nothing productive",
                examples: [
                  { type: "vn", text: "Vietnam's SCB banking scandal — involving over $44 billion in fraudulent loans — caused financial harm orders of magnitude greater than all reported property crime in Vietnam across the same period, affecting hundreds of thousands of depositors and the broader financial system." },
                  { type: "support", text: "+ The Association of Certified Fraud Examiners estimates organisations globally lose 5% of annual revenue to fraud — a figure that equates to trillions of dollars per year, vastly exceeding the combined losses from all street crime worldwide." }
                ]
              },
              {
                title: "White-collar crime destroys institutional trust and governance quality",
                flow: "corruption and financial fraud erode confidence in banks, governments, and courts → citizens lose faith that institutions serve them → social trust collapses → the cooperative infrastructure of modern society is systematically undermined",
                examples: [
                  { type: "vn", text: "High-profile corruption cases in Vietnam have damaged public trust in state institutions — surveys showing declining confidence in legal processes and official transparency among citizens who observe senior officials enriching themselves while ordinary people face strict enforcement." },
                  { type: "support", text: "+ World Bank research establishes a direct causal link between corruption levels and economic development — countries with high corruption experience lower investment, worse public service delivery, and weaker rule of law, demonstrating that white-collar crime damages every citizen." }
                ]
              },
              {
                title: "White-collar criminals cause disproportionate harm while receiving disproportionately lenient treatment",
                flow: "corporate offenders use legal resources to delay and minimise prosecution → receive lighter sentences than equivalent street criminals → harm more but face less punishment → the justice system perpetuates class inequality by focusing enforcement on the crimes of the poor",
                examples: [
                  { type: "vn", text: "Vietnamese media commentary on sentencing disparities — between drug offenders who may face the death penalty and financial criminals whose sentences are comparatively light relative to losses caused — reflects widespread awareness of a justice gap between different categories of serious crime." },
                  { type: "support", text: "+ US research consistently shows that corporate executives convicted of financial fraud receive shorter sentences per dollar stolen than street criminals convicted of robbery — the disparity in treatment being substantial and compounding the harm by signalling impunity." }
                ]
              }
            ]
          },
          sideB: {
            label: "Other crime types cause equal or greater harm in different dimensions",
            ideas: [
              {
                title: "Violent crime causes direct, irreversible personal harm that money cannot repair",
                flow: "murder, assault, and rape destroy lives and traumatise communities → financial harm, however large, is in principle recoverable → physical and psychological harm from violence is not → direct bodily harm represents a categorically more fundamental injury",
                examples: [
                  { type: "vn", text: "Vietnamese public concern with violent crime — gang violence, domestic abuse, and homicide — reflects the intuition that physical safety is a more fundamental human need than financial security, and that the harm from violence is experienced as more immediate and personally threatening." },
                  { type: "support", text: "+ Victim impact research consistently shows that victims of violent crime experience more severe and lasting psychological harm than victims of financial crime — post-traumatic stress, chronic fear, and loss of bodily autonomy representing harms of a fundamentally different character from financial loss." }
                ]
              },
              {
                title: "Street crime creates pervasive fear that constrains daily freedom for entire communities",
                flow: "high rates of robbery and assault → people significantly modify daily behaviour → avoid public spaces, restrict children's movements, install security → the cumulative social cost of this fear-driven behaviour change is enormous and rarely captured in financial crime statistics",
                examples: [
                  { type: "vn", text: "Vietnamese residents' daily precautions against motorbike theft and bag-snatching — carrying less cash, avoiding certain routes, locking valuables obsessively — represent a pervasive restriction on freedom that financial fraud, however large in scale, does not produce in ordinary people's lives." },
                  { type: "support", text: "+ Research on the social costs of crime finds that the fear and behaviour modification caused by street crime generates substantial welfare losses that are systematically underestimated when crime harm is measured only in direct financial terms." }
                ]
              },
              {
                title: "Drug-related crime causes compound harm across individuals, families, and communities",
                flow: "addiction destroys families from within → violence associated with drug markets devastates entire neighbourhoods → drug trafficking funds terrorism and organised crime globally → the layered harms across multiple dimensions may exceed those of any single financial crime",
                examples: [
                  { type: "vn", text: "The social devastation of methamphetamine in Vietnam's rural and border communities — family breakdown, HIV transmission, gang violence, and community degradation — represents a form of harm that no financial crime, however large, can replicate in its cumulative personal and communal scope." },
                  { type: "support", text: "+ The UNODC estimates that the global drug trade generates $500 billion annually — funding terrorist networks, corrupting governments, and fuelling violent conflict across the developing world, making drug crime's compound harms across multiple dimensions uniquely destructive." }
                ]
              }
            ]
          }
        },
        {
          qText: "Violent crime is increasing in many parts of the world. What are the causes and what solutions can be implemented?",
          sideA: {
            label: "Causes of rising violent crime",
            ideas: [
              {
                title: "Growing economic inequality and blocked aspirations fuel resentment and violence",
                flow: "widening gap between rich and poor → those at the bottom see wealth but cannot access it → frustration and humiliation accumulate → violence becomes an outlet for alienation and a means of asserting status",
                examples: [
                  { type: "vn", text: "The rapid economic development of Vietnamese cities has created visible inequality between those who have benefited and those left behind — the contrast between extreme wealth and persistent poverty in the same urban space fuelling the resentment that criminologists link to violent crime rates." },
                  { type: "support", text: "+ The World Bank's research on Latin America's chronic violent crime problem identifies economic inequality — specifically the Gini coefficient — as the strongest macro-level predictor of homicide rates, explaining why fast-growing but unequal societies often see violence increase alongside GDP." }
                ]
              },
              {
                title: "Cultural glorification of violence and toxic masculinity norms normalise aggression",
                flow: "media, music, and peer culture celebrate violent masculinity → violence is framed as a legitimate response to disrespect → young men internalise that status requires willingness to use force → violent confrontation becomes culturally scripted rather than exceptional",
                examples: [
                  { type: "vn", text: "Vietnamese researchers document a rise in gang-related violence among young men in which attacks are filmed and shared on social media for status — the cultural performance of violence becoming self-reinforcing as each act attracts attention and respect within peer networks." },
                  { type: "support", text: "+ Research on street violence in the USA, UK, and Brazil consistently identifies 'honour culture' — in which perceived disrespect triggers violent retaliation as a cultural obligation — as a key driver of interpersonal violence that operates independently of poverty levels." }
                ]
              },
              {
                title: "Weak institutions and perceived impunity encourage violent behaviour",
                flow: "when police are corrupt, ineffective, or absent → perpetrators calculate they will not face consequences → violence becomes a rational tool for dispute resolution → criminal norms that normalise violence spread in the resulting institutional vacuum",
                examples: [
                  { type: "vn", text: "Regions of Vietnam with weaker institutional presence — remote border areas and rapidly urbanising peripheries — show higher rates of informal violent dispute resolution, demonstrating that institutional weakness and impunity create environments where violence is normalised." },
                  { type: "support", text: "+ Research across Latin American cities finds that confidence in police and courts is inversely correlated with homicide rates — communities that distrust institutions take violence into their own hands because they have no credible legal alternative for resolving disputes." }
                ]
              }
            ]
          },
          sideB: {
            label: "Solutions to rising violent crime",
            ideas: [
              {
                title: "Economic investment and opportunity creation address the structural roots",
                flow: "job creation, vocational training, and reducing inequality → blocked aspirations are opened → young men have legitimate routes to status and income → the economic driver of violence is removed at source",
                examples: [
                  { type: "vn", text: "Vietnam's sustained economic development and poverty reduction have produced long-term improvements in social stability in areas where growth has been inclusive — the correlation between rising incomes and falling violent crime in former high-crime rural provinces being well documented." },
                  { type: "support", text: "+ Medellín, Colombia's transformation from the world's most violent city in the 1990s to a model of urban development was driven primarily by targeted economic investment in poor comunas — jobs, education, and infrastructure reducing violence by 95% over two decades." }
                ]
              },
              {
                title: "Community-based violence interruption programmes break the cycle at street level",
                flow: "trained community mediators intervene in disputes before violence escalates → former offenders with street credibility mediate conflicts → the social script that requires violent retaliation is disrupted → norm change spreads through peer networks",
                examples: [
                  { type: "vn", text: "Vietnam's community mediation networks (hoà giải cơ sở) provide a formal alternative for dispute resolution that reduces the interpersonal conflicts that escalate to violence — community-level intervention being particularly effective for disputes over land, money, and family matters." },
                  { type: "support", text: "+ Chicago's Cure Violence programme — deploying former gang members as violence interrupters in high-crime areas — reduced shootings by 16–34% in target areas, demonstrating that community-based norm-change outperforms policing in addressing culturally embedded violence." }
                ]
              },
              {
                title: "Institutional strengthening and consistent enforcement restore deterrence",
                flow: "invest in capable and trusted police → consistent prosecution of violent offenders → impunity falls → the rational calculation of would-be violent actors changes → violence becomes costly rather than consequence-free",
                examples: [
                  { type: "vn", text: "Vietnam's consistent prosecution of gang-related violence and domestic assault — combined with public awareness campaigns about legal consequences — has contributed to a cultural shift in which violence is increasingly understood as a serious legal risk rather than a private matter." },
                  { type: "contrast", text: "✗ El Salvador's dramatic homicide reduction after 2022 — achieved through mass incarceration of gang members combined with territorial security operations — demonstrates that determined enforcement can rapidly collapse the impunity that enables organised violence, even if questions about human rights remain." }
                ]
              }
            ]
          }
        },
        {
          qText: "Drug-related crime is a serious issue in many countries. What measures can governments take to address this problem?",
          sideA: {
            label: "Law enforcement and supply-reduction measures",
            ideas: [
              {
                title: "Strict criminal penalties for trafficking disrupt supply chains and deter dealers",
                flow: "severe sentences for trafficking reduce willingness to enter the trade → disrupting supply raises drug prices → higher prices reduce consumption → market profitability falls and criminal investment declines",
                examples: [
                  { type: "vn", text: "Vietnam's harsh penalties for drug trafficking — including the death penalty for large-scale operations — have been credited by law enforcement with deterring some domestic trafficking networks, although the proximity to major production regions in the Golden Triangle limits the supply-side effect." },
                  { type: "support", text: "+ Singapore's zero-tolerance approach to drug trafficking, including mandatory death sentences for quantities above specified thresholds, has maintained extremely low domestic drug use rates — the strictest enforcement environments globally correlating with the lowest drug-related crime rates in Asia." }
                ]
              },
              {
                title: "International cooperation disrupts the global drug supply network",
                flow: "intelligence sharing and coordinated operations across source, transit, and destination countries → criminal networks cannot relocate easily between jurisdictions → supply chains are disrupted at multiple points simultaneously → the scale advantage that makes trafficking profitable is removed",
                examples: [
                  { type: "vn", text: "Vietnam's cooperation with ASEAN neighbours and international agencies in targeting Golden Triangle drug networks has enabled disruption of trafficking routes that no single country could have addressed alone — joint operations achieving seizures impossible through unilateral enforcement." },
                  { type: "support", text: "+ US DEA operations coordinated with Colombian and Mexican authorities have dismantled major cartel structures that individual national enforcement could not reach — international coordination being particularly effective against the most sophisticated and geographically distributed networks." }
                ]
              },
              {
                title: "Border security and customs intelligence intercept supply before it reaches domestic markets",
                flow: "improved border technology and intelligence → higher seizure rates → supply reaching domestic markets is reduced → prices rise and downstream drug-related crime falls",
                examples: [
                  { type: "vn", text: "Vietnam's border police and customs services have significantly increased drug seizure rates along the northern and western borders — the improved intelligence and technology investment producing record seizures that disrupt the volumes reaching urban consumer markets." },
                  { type: "support", text: "+ Australian border force investment in intelligence-led targeting at ports and airports has achieved seizure rates among the world's highest — disrupting the supply chains that service Australia's substantial drug market and raising domestic prices significantly above global norms." }
                ]
              }
            ]
          },
          sideB: {
            label: "Demand reduction and treatment-based measures",
            ideas: [
              {
                title: "Drug treatment and harm reduction programmes address the demand that drives the market",
                flow: "addiction is the engine of drug markets → treated addicts are no longer buyers → as demand falls, market profitability falls → supply networks shrink in response → addressing demand is more durable than disrupting supply",
                examples: [
                  { type: "vn", text: "Vietnam's methadone maintenance treatment programme — operating in dozens of provinces — has demonstrably reduced heroin use, HIV transmission, and drug-related crime among participants, showing that demand-side treatment achieves what enforcement alone cannot." },
                  { type: "support", text: "+ Portugal's 2001 decriminalisation of personal drug possession, combined with mandatory referral to treatment and harm reduction services, reduced drug-related HIV infections by 95% and drug-related crime significantly — demonstrating the transformative potential of treating addiction as a health, not criminal, issue." }
                ]
              },
              {
                title: "Diverting resources from enforcement to education prevents drug use before it begins",
                flow: "school-based drug education programmes build resistance before first use → peer norms around drug abstinence are established early → the population of potential addicts — and therefore potential drug-related criminals — is reduced → prevention investment is more durable than enforcement",
                examples: [
                  { type: "vn", text: "Vietnam's school-based drug prevention curricula — particularly in border provinces where trafficking exposure is highest — provide young people with knowledge about addiction and legal consequences that research shows delays or prevents first drug use." },
                  { type: "support", text: "+ Iceland's dramatic reduction in youth drug use — from 42% of 15-year-olds using cannabis in 1998 to 7% in 2016 — was achieved not through enforcement but through structured youth activities, family time investment, and community participation that replaced the social vacuum drugs previously filled." }
                ]
              },
              {
                title: "Addressing the social conditions that make drug use attractive tackles the root cause",
                flow: "poverty, unemployment, trauma, and social exclusion are the strongest predictors of drug dependency → investment in community development, mental health, and economic opportunity → fewer people turn to drugs as escape → the demand base shrinks at its source",
                examples: [
                  { type: "vn", text: "Research on drug use patterns in Vietnam shows its highest prevalence in communities experiencing acute social stress — rural areas with limited employment, urban migrant populations with no social support — confirming that social investment is a drug prevention strategy." },
                  { type: "contrast", text: "✗ The US 'war on drugs', which invested overwhelmingly in enforcement rather than treatment and social investment over 50 years at a cost exceeding $1 trillion, produced no reduction in drug use rates — while countries that invested comparatively more in treatment saw sustained reductions." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Crime Types & Definitions",
          layout: "pre",
          items: [
            { phrase: "white-collar crime", vn: "tội phạm cổ cồn trắng", meaning: "financially motivated non-violent crime committed by professionals or corporations", synonyms: "corporate crime, financial crime" },
            { phrase: "cybercrime", vn: "tội phạm mạng", meaning: "criminal activity carried out using computers, networks, or the internet", synonyms: "computer crime, digital crime" },
            { phrase: "organised crime", vn: "tội phạm có tổ chức", meaning: "crime carried out by structured criminal networks on an ongoing basis", synonyms: "criminal enterprise, criminal syndicate" },
            { phrase: "drug trafficking", vn: "buôn bán ma tuý", meaning: "the illegal trade, transportation, or sale of controlled substances", synonyms: "drug dealing, narcotics trade" },
            { phrase: "money laundering", vn: "rửa tiền", meaning: "concealing the origins of illegally obtained money through complex financial transactions", synonyms: "financial concealment, washing dirty money" }
          ]
        },
        {
          group: "Enforcement & Policy",
          layout: "half",
          items: [
            { phrase: "harm reduction", vn: "giảm thiểu tác hại", meaning: "policies that aim to reduce the negative consequences of drug use without requiring abstinence", synonyms: "risk minimisation, damage limitation" },
            { phrase: "decriminalisation", vn: "phi hình sự hoá", meaning: "removing criminal penalties for certain behaviours while retaining other legal consequences", synonyms: "legalisation of possession, administrative offence treatment" },
            { phrase: "zero-tolerance policy", vn: "chính sách không khoan nhượng", meaning: "strict enforcement of all laws with no exceptions regardless of circumstances", synonyms: "strict enforcement policy, no-leniency approach" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "half",
          items: [
            { phrase: "disrupt criminal networks", vn: "phá vỡ mạng lưới tội phạm", meaning: "to break apart the structure and operations of organised criminal groups", synonyms: "dismantle gangs, break up crime rings" },
            { phrase: "combat drug trafficking", vn: "chống buôn bán ma tuý", meaning: "to take active measures to reduce or eliminate the illegal drug trade", synonyms: "fight drug trafficking, suppress narcotics trade" },
            { phrase: "seize criminal assets", vn: "tịch thu tài sản tội phạm", meaning: "to confiscate money and property obtained through criminal activity", synonyms: "confiscate proceeds of crime, freeze criminal assets" }
          ]
        }
      ]
    },
    {
      num: "08",
      name: "Media & Crime",
      badge: "3 Questions",
      coming: false,
      fullName: "Media & Crime",
      desc: "How does media coverage shape public perceptions of crime and safety?",
      panelBadges: ["3 Real Questions", "18 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "Media coverage of crime can increase fear among the public. To what extent do you agree or disagree?" },
        { text: "Crime is often exaggerated in the media. Discuss both views and give your own opinion." },
        { text: "Exposure to violent content in the media can lead to an increase in crime. To what extent do you agree or disagree?" }
      ],
      ideas: [
        {
          qText: "Media coverage of crime can increase fear among the public. To what extent do you agree or disagree?",
          sideA: {
            label: "Media coverage does increase public fear of crime",
            ideas: [
              {
                title: "Crime reporting is systematically disproportionate to actual statistical risk",
                flow: "rare but dramatic crimes receive extensive coverage → repetition creates the impression that such crimes are frequent → the public's mental model of crime frequency is distorted → fear reflects perceived, not actual, risk",
                examples: [
                  { type: "vn", text: "Vietnamese news and social media coverage of high-profile violent crimes — particularly murders and abductions — creates widespread public anxiety disproportionate to the statistical rarity of such events, with studies showing that perceived crime risk far exceeds actual incidence rates." },
                  { type: "support", text: "+ Research in the UK consistently finds that the public overestimates violent crime rates by 300–400% — with those who consume the most crime news showing the greatest gap between perceived and actual risk, confirming a direct media effect on fear." }
                ]
              },
              {
                title: "Emotional and visceral crime coverage bypasses rational risk assessment",
                flow: "graphic crime narratives trigger visceral fear responses → emotional processing overrides statistical reasoning → one vivid story of harm outweighs many reassuring statistics → fear persists even when objective risk is low",
                examples: [
                  { type: "vn", text: "Detailed Vietnamese news coverage of abduction and trafficking cases — often including victim photographs and graphic detail — produces fear responses in parents and communities that persist long after individual incidents, disproportionate to the actual frequency of such crimes." },
                  { type: "support", text: "+ Psychological research on availability heuristic — by which people judge probability based on how easily examples come to mind — shows that crime coverage makes extreme cases cognitively available, inflating perceived risk independently of actual frequencies." }
                ]
              },
              {
                title: "Repeated exposure creates a cumulative 'mean world syndrome'",
                flow: "sustained diet of crime news → cumulative impression of a dangerous world → distrust of strangers increases → social participation falls → quality of life declines even among people who face minimal actual risk",
                examples: [
                  { type: "vn", text: "Vietnamese social media's rapid amplification of crime incidents — particularly scam fraud and street violence videos — produces community-wide anxiety in cities where actual crime rates have fallen or remained stable, the perception of danger outrunning the reality." },
                  { type: "support", text: "+ George Gerbner's 'cultivation theory' research found that heavy television viewers significantly overestimate crime prevalence and perceived personal danger compared to light viewers with equivalent actual exposure to crime, confirming a causal media effect on worldview." }
                ]
              }
            ]
          },
          sideB: {
            label: "Media crime coverage does not simply produce irrational fear",
            ideas: [
              {
                title: "Crime reporting serves legitimate public safety and accountability functions",
                flow: "reporting crimes alerts the public to genuine local risks → communities take protective action → media exposes police failures and demand accountability → an informed public is better equipped to protect itself than an uninformed one",
                examples: [
                  { type: "vn", text: "Vietnamese media coverage of sophisticated new scam techniques — QR code fraud, voice cloning, fake official calls — provides genuine safety information that allows the public to recognise and avoid emerging threats they would otherwise be unaware of." },
                  { type: "support", text: "+ Investigative journalism has repeatedly exposed systemic criminal justice failures — from the UK's Stephen Lawrence case to Vietnam's documented wrongful convictions — demonstrating that crime media serves accountability functions that outweigh the fear it may produce." }
                ]
              },
              {
                title: "Audiences have media literacy to contextualise crime reporting appropriately",
                flow: "media consumers are not passive recipients of fear → critical media literacy enables contextual interpretation → educated audiences distinguish between dramatic individual cases and statistical trends → the fear effect is concentrated among low-literacy media consumers",
                examples: [
                  { type: "vn", text: "Urban, educated Vietnamese media consumers demonstrate considerably more sophisticated interpretation of crime news than older or rural populations — actively contextualising individual reports against broader social trends rather than treating each incident as a prediction of personal risk." },
                  { type: "support", text: "+ Research on media literacy education in schools finds that students who receive training in critical news consumption show significantly smaller gaps between perceived and actual crime risk — confirming that the fear effect is not inevitable but mediated by literacy." }
                ]
              },
              {
                title: "Some level of crime awareness is a proportionate and protective response",
                flow: "fear of crime is not always irrational → some communities face genuine elevated risk → media-informed caution may produce reasonable protective behaviour → a complete absence of crime fear may indicate dangerous naivety rather than healthy confidence",
                examples: [
                  { type: "vn", text: "Vietnamese tourists and migrant workers in unfamiliar cities who consume crime news and take appropriate precautions — guarding belongings, avoiding poorly lit areas, using reputable transport — demonstrate that informed caution is a reasonable response to genuine if modest risk." },
                  { type: "contrast", text: "✗ Communities that lack information about local crime patterns — including those in areas where media is suppressed or limited — show higher victimisation rates, suggesting that a complete absence of crime coverage removes a genuine protective mechanism." }
                ]
              }
            ]
          }
        },
        {
          qText: "Crime is often exaggerated in the media. Discuss both views and give your own opinion.",
          sideA: {
            label: "Crime is systematically exaggerated in media coverage",
            ideas: [
              {
                title: "Commercial incentives reward sensational crime coverage that inflates perceived threat",
                flow: "dramatic crime stories attract audiences → audiences attract advertising revenue → newsrooms are economically incentivised to select the most frightening cases → crime coverage is filtered for drama, not statistical representativeness",
                examples: [
                  { type: "vn", text: "Vietnamese online news platforms' reliance on click-based advertising revenue has produced a visible shift toward sensational crime headlines — murders, kidnappings, and violent assaults receiving disproportionate coverage relative to the mundane property crime that constitutes the statistical majority of offences." },
                  { type: "support", text: "+ US content analysis studies consistently find that violent crime receives 25–40 times more media coverage per incident than property crime — despite property crime being vastly more statistically common — confirming that commercial logic, not statistical representation, drives crime news selection." }
                ]
              },
              {
                title: "Rare dramatic crimes crowd out the numerically dominant but unremarkable majority",
                flow: "murder and stranger-violence are statistically rare → they are vastly overrepresented in news → theft, fraud, and domestic violence are statistically common → they receive minimal coverage → the public's mental picture of 'crime' is constructed entirely from statistical outliers",
                examples: [
                  { type: "vn", text: "Vietnam's most common crimes — petty theft, traffic violations, and domestic disputes — receive a fraction of the media attention devoted to the rare sensational homicide, producing public crime discourse dominated entirely by unrepresentative extreme cases." },
                  { type: "support", text: "+ UK Crime Survey data confirms that public fear of violent crime is far higher than the statistical risk warrants, while fear of property crime — which directly affects far more people — is comparatively low, reflecting the inverse relationship between media coverage frequency and statistical prevalence." }
                ]
              },
              {
                title: "Victim and perpetrator selection in crime coverage distorts the social picture of who commits crime",
                flow: "media tends to cover crimes involving certain victim and offender profiles → creates racialised, gendered, or class-based stereotypes → public associates crime with particular groups → stigma and discriminatory policing follow from the distorted picture",
                examples: [
                  { type: "vn", text: "Vietnamese crime media's frequent focus on migrant workers, ethnic minority suspects, and poor urban youth as perpetrators — while under-representing white-collar crime by educated elites — constructs a distorted social map of who commits crime that shapes both public attitudes and police targeting." },
                  { type: "support", text: "+ Research in the UK and USA consistently documents that Black and minority ethnic individuals are overrepresented as perpetrators in crime news relative to crime statistics, and underrepresented as victims — a systematic distortion that shapes public and institutional attitudes about race and crime." }
                ]
              }
            ]
          },
          sideB: {
            label: "Media crime coverage serves genuine and important public functions",
            ideas: [
              {
                title: "Crime journalism exposes institutional failures that official statistics conceal",
                flow: "investigative reporting uncovers police corruption, wrongful convictions, and systemic injustice → victims whose cases were buried gain public attention → the justice system is held accountable → reforms follow public exposure that would not occur through statistics alone",
                examples: [
                  { type: "vn", text: "Vietnamese investigative journalism has exposed cases of wrongful conviction, police misconduct, and corruption that official statistics never captured — media coverage driving legal reviews and exonerations that the justice system alone failed to initiate." },
                  { type: "support", text: "+ The UK's Hillsborough disaster cover-up was exposed over decades primarily through persistent media investigation rather than official inquiry — demonstrating that crime journalism serves a critical accountability function that statistics-based reporting can never fulfil." }
                ]
              },
              {
                title: "Public crime awareness enables individual and community protective action",
                flow: "coverage of crime trends and emerging threats → public adjusts behaviour and increases protective measures → communities organise watch schemes and pressure for local improvements → the information function of crime news produces real safety benefits",
                examples: [
                  { type: "vn", text: "Widespread Vietnamese media coverage of sophisticated online fraud techniques has produced measurable improvements in public recognition of common scams — the information function genuinely protecting thousands of potential victims who now recognise the warning signs before being deceived." },
                  { type: "support", text: "+ Public health research on crime prevention confirms that communities with better information about local crime patterns take more protective action — media crime coverage functioning as a distributed early warning system with genuine protective value for informed audiences." }
                ]
              },
              {
                title: "Fear of crime may reflect genuine social conditions that statistics undercount",
                flow: "official crime statistics systematically undercount unreported crimes → police-recorded data misses the majority of actual offending → the public's fear may track the true level of crime more accurately than official figures → dismissing fear as media-manufactured may itself be a distortion",
                examples: [
                  { type: "vn", text: "Vietnamese household surveys consistently record significantly higher crime victimisation rates than police-reported statistics — the gap reflecting under-reporting to police, suggesting that media-amplified public fear may sometimes track unreported crime reality more accurately than official data." },
                  { type: "support", text: "+ The Crime Survey for England and Wales captures approximately twice the number of crimes as police-recorded statistics — confirming that the 'gap' between media-driven fear and official statistics may partly reflect the incompleteness of official data rather than media exaggeration." }
                ]
              }
            ]
          }
        },
        {
          qText: "Exposure to violent content in the media can lead to an increase in crime. To what extent do you agree or disagree?",
          sideA: {
            label: "Violent media content contributes to violent behaviour",
            ideas: [
              {
                title: "Repeated exposure to violent content desensitises and normalises aggression",
                flow: "violent imagery repeatedly encountered → emotional responses diminish over time → violence is gradually perceived as normal rather than shocking → the psychological inhibitors of violent behaviour are progressively weakened",
                examples: [
                  { type: "vn", text: "Vietnamese youth researchers have documented that heavy consumers of violent gaming and social media content show measurably lower empathic responses to depictions of real violence — the desensitisation effect being particularly pronounced among heavy users who began consuming violent content at young ages." },
                  { type: "support", text: "+ Craig Anderson's meta-analysis of 136 studies found that exposure to violent video games was associated with increased aggressive thoughts, feelings, and behaviour — and decreased empathy — across multiple countries and research methodologies." }
                ]
              },
              {
                title: "Violent media provides criminal role models and normalises crime as a lifestyle",
                flow: "media romanticises criminal figures as powerful and successful → young people internalise criminal aesthetics and aspirations → crime is presented as an attractive identity rather than a failing → the cultural legitimacy of criminal behaviour increases",
                examples: [
                  { type: "vn", text: "Vietnamese social media platforms amplifying gang-lifestyle content — videos of young men displaying wealth, weapons, and criminal affiliations — have been linked by researchers to increased gang recruitment in cities, the romanticised portrayal of criminal life attracting vulnerable young men." },
                  { type: "support", text: "+ Research on gang recruitment in the UK and USA consistently identifies social media glorification of criminal lifestyles as a key radicalisation pathway — the algorithmic amplification of violent content creating a recruitment funnel that brings vulnerable young people into contact with gang culture." }
                ]
              },
              {
                title: "Children are particularly vulnerable to violent media's influence on behaviour",
                flow: "developing brains are more susceptible to modelling effects → children who observe violence, including mediated violence, are more likely to reproduce it → aggressive play patterns develop before moral reasoning is mature → early exposure shapes long-term behavioural tendencies",
                examples: [
                  { type: "vn", text: "Vietnamese child psychologists report increasing rates of aggressive behaviour among primary school children that parents and teachers attribute in part to unfiltered access to violent gaming and online video content — the causal relationship being clinically observed even if difficult to isolate statistically." },
                  { type: "support", text: "+ Albert Bandura's classic Bobo doll experiments — in which children who observed adults acting aggressively reproduced that aggression — established the modelling mechanism through which children learn behaviour from observed media, providing a theoretical framework for long-term media violence effects." }
                ]
              }
            ]
          },
          sideB: {
            label: "Violent media content does not meaningfully increase crime",
            ideas: [
              {
                title: "Research correlations are weak and causation has not been established",
                flow: "laboratory aggression studies measure immediate responses, not real-world violence → correlational studies cannot isolate media as a causal variable → countries with highest violent media consumption do not show highest violent crime rates → the causal claim is not supported by the evidence",
                examples: [
                  { type: "vn", text: "Japan is among the world's largest consumers of violent manga, gaming, and film content yet maintains a violent crime rate far below Vietnam's — the inverse relationship directly challenging the assumption that violent media consumption predicts violent crime rates." },
                  { type: "contrast", text: "✗ Global data shows that violent video game consumption increased dramatically between 1990 and 2020 in the USA, UK, and Australia, while violent crime rates fell substantially in all three countries over the same period — the opposite of what the media-violence causation hypothesis predicts." }
                ]
              },
              {
                title: "The vast majority of violent media consumers never engage in violent behaviour",
                flow: "billions of people consume violent films, games, and news without committing violence → if media consumption caused violence, rates would be far higher → other factors — poverty, mental illness, family breakdown — are far stronger predictors → media violence is a negligible variable",
                examples: [
                  { type: "vn", text: "Tens of millions of Vietnamese citizens consume violent gaming and action film content without any measurable increase in their propensity for violence — the overwhelming majority processing violent media entertainment without any behavioural effect, as with most media consumers globally." },
                  { type: "support", text: "+ Christopher Ferguson's comprehensive meta-analysis found that publication bias had significantly inflated estimates of the media-violence effect — correcting for this bias, the relationship between violent media and real-world aggression became negligible, suggesting prior research overstated the effect substantially." }
                ]
              },
              {
                title: "Crime has far more powerful determinants than media consumption",
                flow: "poverty, unemployment, family breakdown, substance abuse, and mental illness are consistently the strongest predictors of violent offending → media consumption explains a negligible additional fraction of variance → policy attention focused on media misallocates resources from genuinely causal factors",
                examples: [
                  { type: "vn", text: "Vietnamese criminological research identifies economic deprivation, substance abuse, and family instability as the primary predictors of violent offending — media consumption featuring nowhere in the empirical models as a significant explanatory variable compared to these structural factors." },
                  { type: "support", text: "+ Patrick Markey's research found that peak hours of violent video game release are associated with temporary decreases in violent crime — young men at home playing games being, literally, not out committing crimes — suggesting violent media may even have a minor crime-suppression effect." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Media & Crime Coverage",
          layout: "pre",
          items: [
            { phrase: "sensationalism", vn: "thông tin giật gân", meaning: "the presentation of stories in a way that provokes public interest or excitement at the expense of accuracy", synonyms: "tabloid journalism, exaggerated reporting" },
            { phrase: "fear of crime", vn: "nỗi sợ tội phạm", meaning: "anxiety about the possibility of becoming a victim of crime, often disproportionate to actual risk", synonyms: "crime anxiety, victimisation fear" },
            { phrase: "cultivation theory", vn: "lý thuyết trồng trọt (truyền thông)", meaning: "the theory that long-term media exposure gradually shapes viewers' perception of social reality", synonyms: "media cultivation effect, mean world syndrome" },
            { phrase: "media literacy", vn: "hiểu biết về truyền thông", meaning: "the ability to critically analyse and evaluate media content", synonyms: "critical media skills, news literacy" },
            { phrase: "desensitisation", vn: "nhờn cảm xúc / chai lì", meaning: "the reduction of emotional response to disturbing content through repeated exposure", synonyms: "emotional numbing, habituation" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "half",
          items: [
            { phrase: "distort public perception", vn: "làm méo mó nhận thức công chúng", meaning: "to create a false or inaccurate picture of reality in the public's mind", synonyms: "misrepresent reality, skew public understanding" },
            { phrase: "sensationalise crime", vn: "thổi phồng tội phạm", meaning: "to present criminal events in an exaggerated, dramatic way to attract audience attention", synonyms: "dramatise crime, exaggerate criminal events" },
            { phrase: "hold the media accountable", vn: "yêu cầu truyền thông chịu trách nhiệm", meaning: "to ensure media organisations face consequences for inaccurate or harmful reporting", synonyms: "regulate media, enforce media standards" }
          ]
        },
        {
          group: "Crime & Social Effects",
          layout: "half",
          items: [
            { phrase: "under-reporting of crime", vn: "tình trạng không tố cáo tội phạm", meaning: "the phenomenon whereby many crimes are not reported to police, leading to incomplete statistics", synonyms: "unreported crime, dark figure of crime" },
            { phrase: "normalise violence", vn: "bình thường hoá bạo lực", meaning: "to cause violent behaviour to be seen as ordinary or acceptable through repeated exposure", synonyms: "mainstream violence, trivialise aggression" },
            { phrase: "media watchdog", vn: "cơ quan giám sát truyền thông", meaning: "an organisation that monitors and holds media outlets responsible for their reporting standards", synonyms: "press regulator, media oversight body" }
          ]
        }
      ]
    },
    {
      num: "09",
      name: "Law, Rights & Society",
      badge: "6 Questions",
      coming: false,
      fullName: "Law, Rights & Society",
      desc: "How do law, individual rights, and social order coexist in a just society?",
      panelBadges: ["6 Real Questions", "36 Developed Ideas", "Vietnam-Relevant Examples"],
      questions: [
        { text: "Criminals should have the same rights as ordinary citizens. To what extent do you agree or disagree?" },
        { text: "Governments must balance the need for public safety with the protection of individual freedom. Discuss both views and give your own opinion." },
        { text: "Strict laws are necessary to maintain order in society. To what extent do you agree or disagree?" },
        { text: "Globalisation has contributed to an increase in international crime. To what extent do you agree or disagree?" },
        { text: "Countries should cooperate more closely to combat international crime. To what extent do you agree or disagree?" },
        { text: "Crime is an unavoidable part of any society. To what extent do you agree or disagree?" }
      ],
      ideas: [
        {
          qText: "Criminals should have the same rights as ordinary citizens. To what extent do you agree or disagree?",
          sideA: {
            label: "Criminals should retain the same fundamental rights as all citizens",
            ideas: [
              {
                title: "Rights are universal and unconditional — stripping them is philosophically unjustifiable",
                flow: "human rights derive from personhood, not behaviour → a person does not forfeit humanity by committing a crime → the logic of stripping rights from criminals is the logic that justified historical atrocities → rights must be universal or they are not rights at all",
                examples: [
                  { type: "vn", text: "Vietnam's Constitution affirms that human rights are inherent — a principle extended to prisoners through the Law on Execution of Criminal Judgments, which establishes minimum rights to health care, education, and family contact even for those serving sentences." },
                  { type: "support", text: "+ The UN Standard Minimum Rules for the Treatment of Prisoners (the Nelson Mandela Rules) establish that imprisonment removes liberty but not human dignity — a principle now accepted in international law and by the vast majority of democratic legal systems." }
                ]
              },
              {
                title: "Due process rights protect all citizens from wrongful conviction",
                flow: "the right to a fair trial, legal representation, and presumption of innocence protect the innocent as much as the guilty → stripping these rights from accused persons risks convicting innocent people → a society that abandons due process for the accused abandons it for everyone",
                examples: [
                  { type: "vn", text: "Vietnam's documented cases of wrongful conviction — many involving defendants whose due process rights were insufficiently respected — demonstrate that procedural rights are not privileges for criminals but protections for anyone who may face false accusation." },
                  { type: "support", text: "+ The US Innocence Project has exonerated over 375 wrongfully convicted individuals using DNA evidence — a majority of whom had inadequate legal representation or were subject to due process violations, confirming that procedural rights protect the innocent rather than shield the guilty." }
                ]
              },
              {
                title: "Preserving prisoners' rights produces better rehabilitation and reoffending outcomes",
                flow: "rights to education, healthcare, and family contact inside prison → prisoners can maintain human connections and develop skills → reintegration after release is more successful → reoffending falls when human dignity is preserved during incarceration",
                examples: [
                  { type: "vn", text: "Vietnamese prison research shows that inmates who maintained regular family contact during incarceration — a right preserved even for serious offenders — show significantly better post-release reintegration outcomes than those who lost all family connections during their sentence." },
                  { type: "support", text: "+ Norway's prison system — which explicitly preserves the full range of human rights for prisoners minus the right to free movement — produces a 20% reoffending rate compared to 60–70% in rights-limiting systems, confirming that dignity preservation is a crime reduction strategy." }
                ]
              }
            ]
          },
          sideB: {
            label: "Some rights can legitimately be restricted as part of punishment",
            ideas: [
              {
                title: "The right to liberty can be legitimately removed as punishment for serious harm",
                flow: "punishment necessarily involves rights restriction → imprisonment removes freedom of movement → this is both accepted and necessary → the question is not whether rights can ever be restricted but which restrictions are proportionate to which offences",
                examples: [
                  { type: "vn", text: "Vietnam's criminal law explicitly treats imprisonment as a deprivation of the right to liberty — a restriction considered both just and necessary as a proportionate response to serious criminal harm, distinct from arbitrary or inhumane treatment." },
                  { type: "support", text: "+ The European Convention on Human Rights explicitly provides that the right to liberty may be restricted through lawful detention following conviction — recognising that rights are not absolutely unlimited and that proportionate restriction through due process is legally and morally legitimate." }
                ]
              },
              {
                title: "Victims' rights must be weighed against offenders' rights in sentencing",
                flow: "victims have rights to safety, justice, and non-repetition → these rights can conflict with offenders' rights to early release or community access → the justice system must balance both sets of rights → unlimited offender rights may compromise victims' legitimate claims",
                examples: [
                  { type: "vn", text: "Vietnamese law provides for restraining orders and geographic restrictions on convicted domestic abusers post-release — a formal restriction of the offender's right to free movement that is explicitly justified by the victim's right to safety and freedom from further harm." },
                  { type: "support", text: "+ The UK's sex offenders register — which restricts convicted sex offenders' right to live near schools, work with children, or travel without notification — reflects a legal consensus that some ongoing rights restrictions are proportionate to the ongoing risk the offender poses to potential victims." }
                ]
              },
              {
                title: "Some dangerous offenders require ongoing restrictions to protect public safety",
                flow: "the most dangerous offenders may pose persistent threats regardless of sentence completion → post-release supervision, movement restrictions, and monitoring → these restrict the offender's rights but protect potential future victims → proportionate ongoing restriction is justified for this group",
                examples: [
                  { type: "vn", text: "Vietnam maintains post-release supervision requirements for certain categories of high-risk offenders — restricting freedom of movement and requiring regular police reporting — reflecting a proportionate ongoing rights restriction justified by documented continuing risk." },
                  { type: "support", text: "+ The UK's Imprisonment for Public Protection (IPP) sentences — which allow indefinite detention beyond the minimum term for those deemed dangerous — represent an extreme case of the principle that public safety can justify ongoing restrictions beyond normal sentence completion." }
                ]
              }
            ]
          }
        },
        {
          qText: "Governments must balance the need for public safety with the protection of individual freedom. Discuss both views and give your own opinion.",
          sideA: {
            label: "Public safety sometimes requires restrictions on individual freedom",
            ideas: [
              {
                title: "The primary duty of government is to protect citizens from harm",
                flow: "the social contract justifies government authority in exchange for protection → citizens surrender certain freedoms to gain collective security → a government that cannot protect its citizens has failed its core function → some freedom must be sacrificed for meaningful safety",
                examples: [
                  { type: "vn", text: "Vietnam's Constitution places social order and national security among the state's primary obligations — a framing that legitimises some restrictions on individual freedom in exchange for the collective security that enables citizens to exercise their remaining freedoms." },
                  { type: "support", text: "+ John Locke's social contract theory — which underlies most modern democratic constitutions — explicitly states that individuals surrender the unlimited freedom of the state of nature in exchange for governed security, confirming that some freedom-safety trade-off is foundational to organised society." }
                ]
              },
              {
                title: "Specific safety measures have demonstrably saved lives at modest cost to freedom",
                flow: "seatbelt laws, smoking restrictions, and gun controls restrict freedom but prevent deaths at scale → the freedom restricted is small relative to the harm prevented → empirical outcomes validate the trade-off → society benefits collectively from targeted freedom restrictions",
                examples: [
                  { type: "vn", text: "Vietnam's helmet law — a restriction on the freedom to ride without headgear — reduced motorcycle fatalities by approximately 2,000 per year in the years following its enforcement, demonstrating that modest freedom restrictions can produce large and measurable public safety benefits." },
                  { type: "support", text: "+ Australia's strict gun laws, enacted after the 1996 Port Arthur massacre, eliminated mass shootings for over two decades — a significant restriction on firearms freedom that demonstrably saved hundreds of lives, with broadly sustained public support reflecting the accepted trade-off." }
                ]
              },
              {
                title: "Emergency conditions can justify temporary restrictions of freedoms that would otherwise be unacceptable",
                flow: "pandemics, terrorist threats, and extreme civil disorder represent genuine emergencies → temporary measures that would be disproportionate in normal times become proportionate under exceptional threat → the key constraint is that such restrictions must be temporary and subject to democratic oversight",
                examples: [
                  { type: "vn", text: "Vietnam's COVID-19 lockdowns — strict restrictions on movement, assembly, and economic activity — were broadly accepted by the public as proportionate emergency responses, demonstrating that citizens will accept significant temporary freedom restrictions when the safety justification is clear and credible." },
                  { type: "support", text: "+ The European Court of Human Rights' 'margin of appreciation' doctrine allows states to temporarily derogate from Convention rights during genuine emergencies — a formal recognition that proportionate temporary safety measures can override normal freedom protections under sufficiently extreme conditions." }
                ]
              }
            ]
          },
          sideB: {
            label: "Individual freedom must be protected from security encroachment",
            ideas: [
              {
                title: "Rights surrendered for safety are rarely fully recovered once the threat passes",
                flow: "emergency powers become institutionalised → temporary measures are extended indefinitely → the bureaucracies built to administer restrictions develop institutional interests in their continuation → the ratchet of security restriction moves in one direction",
                examples: [
                  { type: "vn", text: "Historical analysis shows that security measures introduced during periods of genuine threat frequently persist far beyond the resolution of that threat — the administrative and political structures created to implement restrictions developing self-sustaining momentum." },
                  { type: "support", text: "+ The USA PATRIOT Act — emergency legislation passed after 9/11 — was extended, modified, and made permanent over two decades, with surveillance powers that were publicly presented as temporary counter-terrorism measures becoming a permanent feature of the US security landscape." }
                ]
              },
              {
                title: "The safety-freedom trade-off is often a false choice manufactured by governments",
                flow: "governments routinely overstate the safety benefits of freedom restrictions → understate the costs → viable alternative approaches that protect both are not considered → the framing of 'safety OR freedom' is itself a political choice, not an objective necessity",
                examples: [
                  { type: "vn", text: "Research on security measures globally shows that many restrictions on individual freedom produce minimal measurable safety improvements while imposing significant costs on targeted communities — the trade-off being less favourable in practice than the safety justification implies." },
                  { type: "support", text: "+ Bruce Schneier's 'security theatre' analysis argues that many post-9/11 security measures — airport searches, surveillance expansion, stop-and-frisk — produced no measurable safety improvement while imposing substantial freedom costs, suggesting the trade-off is frequently not the genuine choice it appears." }
                ]
              },
              {
                title: "The most effective and legitimate societies protect both safety and freedom simultaneously",
                flow: "Nordic and East Asian high-trust societies achieve low crime AND high freedom → the assumed inverse relationship is empirically absent in the best-governed societies → freedom and safety are complements, not substitutes, when government is competent and trusted",
                examples: [
                  { type: "vn", text: "Singapore maintains both extremely low crime rates and a high degree of economic freedom simultaneously — demonstrating that safety and freedom are not inevitable trade-offs but can coexist when governance quality, institutional trust, and social investment are sufficiently high." },
                  { type: "contrast", text: "✗ Countries that sacrifice freedom most aggressively in the name of safety — including various authoritarian states — do not systematically achieve the best safety outcomes, with social trust, economic development, and institutional quality being more powerful safety determinants than freedom restriction." }
                ]
              }
            ]
          }
        },
        {
          qText: "Strict laws are necessary to maintain order in society. To what extent do you agree or disagree?",
          sideA: {
            label: "Strict laws are necessary for social order",
            ideas: [
              {
                title: "Law provides the framework without which social cooperation breaks down",
                flow: "without enforceable rules → individuals cannot trust that agreements will be honoured → cooperation becomes impossible → economic and social life collapses → even imperfect strict law is better than no predictable framework",
                examples: [
                  { type: "vn", text: "Vietnam's post-war legal development — the gradual establishment of a civil and criminal code that created predictable rules for contracts, property, and personal safety — was a prerequisite for the economic development and social stability that followed, confirming that law enables rather than constrains prosperity." },
                  { type: "support", text: "+ Hobbes' insight in Leviathan — that life without enforced law is 'solitary, poor, nasty, brutish, and short' — captures the empirical reality observed in failed states where law enforcement collapses: violence, exploitation, and poverty are the predictable consequences." }
                ]
              },
              {
                title: "Strict enforcement creates the predictability that enables social cooperation",
                flow: "consistently enforced laws → citizens know what to expect from each other and from the state → planning, investment, and cooperation become rational → social trust builds on the foundation of predictable legal consequences",
                examples: [
                  { type: "vn", text: "Vietnam's increasingly consistent enforcement of contract law and property rights — replacing the informal arrangements of the pre-reform era — has been directly associated with increased domestic and foreign investment, demonstrating that strict enforcement of civil law enables economic cooperation." },
                  { type: "support", text: "+ Singapore's strict enforcement of laws covering corruption, littering, and traffic violations is credited by economists as foundational to the social trust and predictability that attracted global investment and produced one of the world's most successful economic transformations." }
                ]
              },
              {
                title: "Without credible consequences, laws are merely advisory and are systematically ignored",
                flow: "laws without consistent enforcement → citizens observe that violations produce no consequences → compliance falls → the norm against the prohibited behaviour erodes → eventually even law-abiding citizens stop complying as they see everyone else ignoring the rule",
                examples: [
                  { type: "vn", text: "Vietnam's traffic laws provide a clear example — when helmet laws were unenforced, compliance was near zero and fatalities were extremely high; strict enforcement produced rapid compliance changes, demonstrating that the same law produces radically different outcomes depending on enforcement credibility." },
                  { type: "support", text: "+ The 'broken windows' theory, empirically supported in multiple city contexts, shows that tolerated minor violations signal that rules are not enforced — triggering a cascade of increasingly serious violations as the norm against offending collapses." }
                ]
              }
            ]
          },
          sideB: {
            label: "Strict laws can harm society when poorly designed or over-applied",
            ideas: [
              {
                title: "Over-criminalisation produces unjust outcomes and wastes criminal justice resources",
                flow: "criminalising too many behaviours → disproportionate punishment for minor violations → criminal records harm individuals for trivial acts → the justice system is overwhelmed with cases that do not serve any genuine social protection interest",
                examples: [
                  { type: "vn", text: "Critics of Vietnam's legal framework note that the criminalisation of certain speech and civil society activities — treated as criminal rather than administrative matters — produces outcomes disproportionate to any genuine social harm, reflecting over-criminalisation beyond what order maintenance requires." },
                  { type: "support", text: "+ The USA's over-criminalisation problem — where federal law alone contains over 300,000 regulations with criminal penalties — has been identified by legal scholars across the political spectrum as producing injustices, incentivising prosecutorial overreach, and consuming resources without proportionate safety benefits." }
                ]
              },
              {
                title: "Laws without democratic legitimacy produce resistance and undermine the rule of law",
                flow: "laws that are not seen as just or democratically legitimate → citizens feel no moral obligation to comply → compliance is only achieved through costly enforcement → the system becomes adversarial rather than cooperative → the rule of law is weakened, not strengthened",
                examples: [
                  { type: "vn", text: "Research on regulatory compliance in Vietnam shows that rules perceived as arbitrary, unequally applied, or serving elite interests — rather than the common good — generate systematic non-compliance even among otherwise law-abiding citizens, confirming that legitimacy matters as much as strictness." },
                  { type: "contrast", text: "✗ Prohibition in the USA (1920–1933) provides the paradigm case of strict law without legitimacy — near-universal non-compliance, organised crime proliferating to meet demand, and ultimate repeal demonstrating that strict laws against behaviours with broad social acceptance produce disorder rather than order." }
                ]
              },
              {
                title: "Social norms and trust, not legal coercion, are the primary basis of social order",
                flow: "the vast majority of legal compliance occurs because people believe the law is right → not because they fear enforcement → social trust and shared norms maintain order more efficiently and sustainably than coercive enforcement → strict law is a supplement to social norms, not their replacement",
                examples: [
                  { type: "vn", text: "Vietnam's relatively law-abiding communal rural environments — where formal policing presence is minimal — demonstrate that strong community norms, social pressure, and mutual accountability maintain order independently of strict legal enforcement." },
                  { type: "contrast", text: "✗ Scandinavian societies with relatively lenient laws and low incarceration rates maintain higher rule-of-law scores and lower crime rates than many countries with far stricter laws — demonstrating that social trust and civic culture are more powerful order-maintenance mechanisms than legal strictness." }
                ]
              }
            ]
          }
        },
        {
          qText: "Globalisation has contributed to an increase in international crime. To what extent do you agree or disagree?",
          sideA: {
            label: "Globalisation has contributed to rising international crime",
            ideas: [
              {
                title: "Global supply chains provide infrastructure for smuggling and trafficking",
                flow: "container shipping, air freight, and open borders create high-volume movement of goods → criminal networks exploit the same infrastructure as legitimate trade → concealing illicit cargo within legitimate supply chains becomes feasible at scale → drug, weapons, and human trafficking operations grow with globalisation",
                examples: [
                  { type: "vn", text: "Vietnam's position as a major maritime trade hub has been exploited by international drug trafficking networks — the volume of legitimate container shipping making comprehensive customs inspection impossible and providing cover for significant drug and contraband movement." },
                  { type: "support", text: "+ Europol reports that 80% of the drugs entering Europe arrive via container shipping — the same logistics infrastructure that enables global trade simultaneously enabling global trafficking, with criminal networks having adapted faster than regulatory responses." }
                ]
              },
              {
                title: "Digital financial systems enable seamless cross-border money laundering",
                flow: "global banking integration, cryptocurrency, and shell company networks → criminal proceeds move across jurisdictions in seconds → asset tracing becomes extremely difficult → the financial infrastructure of globalisation serves criminal capital as effectively as legitimate capital",
                examples: [
                  { type: "vn", text: "Vietnam's integration into global financial systems has created pathways through which domestically-generated criminal proceeds — particularly from corruption and drug trafficking — are laundered through foreign real estate, shell companies, and cryptocurrency exchanges." },
                  { type: "support", text: "+ The UNODC estimates that $800 billion to $2 trillion is laundered globally each year — only 1% of which is seized by authorities — with globalised banking infrastructure enabling criminal finance to move faster and more invisibly than enforcement can track." }
                ]
              },
              {
                title: "Reduced border controls have enabled the movement of criminal networks themselves",
                flow: "free movement of people, particularly within regional blocs → criminal organisations recruit, deploy, and relocate operatives easily across borders → operational flexibility makes law enforcement harder → organisations are less vulnerable to disruption in any single jurisdiction",
                examples: [
                  { type: "vn", text: "The ASEAN region's increasingly open borders have facilitated the movement of criminal networks between Vietnam, Cambodia, Thailand, and Myanmar — drug trafficking organisations in particular exploiting regional mobility to relocate operations when enforcement pressure increases in any single country." },
                  { type: "support", text: "+ Europol documents that Eastern European criminal networks specifically use EU free movement rights to deploy operatives across member states for burglary, theft, and human trafficking operations — returning home between operations to frustrate national law enforcement." }
                ]
              }
            ]
          },
          sideB: {
            label: "Globalisation's relationship with crime is complex and also creates tools to combat it",
            ideas: [
              {
                title: "Economic development through globalisation reduces the conditions that produce domestic crime",
                flow: "globalisation raises incomes in developing economies → poverty and unemployment — the primary drivers of most crime — are reduced → the population that would otherwise turn to crime has legitimate economic alternatives → net effect on domestic crime may be negative",
                examples: [
                  { type: "vn", text: "Vietnam's integration into global trade networks has produced sustained economic development and poverty reduction — the rising living standards and employment opportunities of the export manufacturing era directly reducing the desperate economic conditions that historically drove property crime." },
                  { type: "support", text: "+ World Bank research shows that countries that successfully integrated into global trade in the 1990s and 2000s — including China, Vietnam, South Korea, and others — achieved sustained falls in domestic property crime rates alongside rising incomes, confirming globalisation's crime-reducing potential." }
                ]
              },
              {
                title: "Globalisation has strengthened international law enforcement cooperation",
                flow: "global institutions, information sharing networks, and international law developed alongside globalisation → Interpol, Europol, and bilateral treaties enable coordinated enforcement → criminal networks face greater combined law enforcement capacity than any nation could deploy alone",
                examples: [
                  { type: "vn", text: "Vietnam's participation in Interpol, the UNODC, and bilateral law enforcement agreements with major partners has expanded the country's capacity to address transnational crime well beyond what domestic enforcement alone could achieve — globalisation of law enforcement tracking globalisation of crime." },
                  { type: "support", text: "+ Joint international operations have dismantled major organised crime networks that no single country could have reached — the 2021 Anom encrypted phone operation, spanning 18 countries and 1,000 arrests, demonstrating the multiplied effectiveness of globalised law enforcement cooperation." }
                ]
              },
              {
                title: "Much international crime predates globalisation and has other primary causes",
                flow: "piracy, smuggling, human trafficking, and corruption existed long before modern globalisation → attributing their current prevalence to globalisation obscures their independent causes → governance failure, conflict, and inequality are the primary drivers → globalisation is a pathway, not a cause",
                examples: [
                  { type: "vn", text: "Vietnam's historical experience with smuggling and trafficking — which predate the country's modern integration into global trade — demonstrates that cross-border crime has deep roots in geographic, political, and economic conditions that globalisation facilitates but did not create." },
                  { type: "support", text: "+ Researchers point out that the world's highest crime rates are concentrated in regions with the least successful economic globalisation — sub-Saharan Africa, parts of Latin America — suggesting that globalisation's absence, not its presence, is more strongly associated with high crime." }
                ]
              }
            ]
          }
        },
        {
          qText: "Countries should cooperate more closely to combat international crime. To what extent do you agree or disagree?",
          sideA: {
            label: "Closer international cooperation is essential and beneficial",
            ideas: [
              {
                title: "Transnational crime networks cannot be effectively addressed by any single country",
                flow: "criminal operations span multiple jurisdictions → evidence, suspects, and assets are distributed internationally → no single country has the authority or reach to prosecute alone → cooperation is not optional but structurally necessary",
                examples: [
                  { type: "vn", text: "Vietnam's most significant drug trafficking networks operate across Golden Triangle production zones in Myanmar, transit routes through Laos and Thailand, and distribution networks in Vietnamese cities — a structure that makes effective prosecution impossible without multi-country cooperation." },
                  { type: "support", text: "+ The prosecution of Pablo Escobar required US intelligence, equipment, and tactical support to Colombian authorities — demonstrating that even large and capable states require international partners to address the most powerful criminal organisations." }
                ]
              },
              {
                title: "Information sharing multiplies each country's effective enforcement capacity",
                flow: "intelligence gathered in one country about a criminal network operating in another → shared through agreed channels → enables targeted operations that would otherwise be impossible → the combined intelligence picture is vastly richer than any single country can develop alone",
                examples: [
                  { type: "vn", text: "Intelligence sharing between Vietnam and partner countries has enabled the identification of trafficking networks that use Vietnamese nationals overseas — information that Vietnam's domestic intelligence agencies could not have generated independently from within the country's borders." },
                  { type: "support", text: "+ The Five Eyes intelligence sharing network — linking the USA, UK, Canada, Australia, and New Zealand — has enabled the disruption of cybercriminal networks, terrorist financing chains, and drug trafficking operations that no member could have identified acting alone." }
                ]
              },
              {
                title: "Common legal standards prevent criminals exploiting regulatory and legal gaps between countries",
                flow: "harmonised laws on money laundering, cybercrime, and trafficking → criminals cannot base operations in countries with the weakest standards → the global legal floor rises → regulatory arbitrage by criminal networks becomes progressively harder",
                examples: [
                  { type: "vn", text: "Vietnam's alignment with FATF (Financial Action Task Force) anti-money laundering standards — under international pressure and monitoring — has progressively closed gaps that previously allowed criminal financial flows to pass through the Vietnamese banking system with minimal scrutiny." },
                  { type: "support", text: "+ The Budapest Convention on Cybercrime — the first international treaty on internet crimes — has enabled prosecutions across 65 signatory countries that would have been legally impossible without the harmonised framework it provides for cross-border evidence gathering and prosecution." }
                ]
              }
            ]
          },
          sideB: {
            label: "Deep international cooperation faces genuine and legitimate challenges",
            ideas: [
              {
                title: "Sovereignty concerns legitimately limit the depth of cooperation that states will accept",
                flow: "countries are reluctant to share sensitive intelligence that might compromise sources or methods → extradition treaties raise domestic political concerns → some states resist oversight of their justice systems by international bodies → meaningful cooperation hits sovereignty limits that are genuinely contested",
                examples: [
                  { type: "vn", text: "Vietnam's selective engagement with international law enforcement cooperation reflects legitimate sovereignty concerns about sharing intelligence with countries whose geopolitical interests differ — the depth of cooperation reflecting trust levels and strategic alignment as much as shared crime-fighting goals." },
                  { type: "support", text: "+ Russia and China's consistent blocking of UN Security Council resolutions on international crime cooperation demonstrate that sovereignty concerns are not merely pretextual — states with genuine security interests in limiting international oversight will resist cooperation regardless of the crime-fighting argument." }
                ]
              },
              {
                title: "Different legal systems and definitions of crime create genuine incompatibilities",
                flow: "what is criminal in one country may be legal or politically protected in another → extradition treaties typically exclude political crimes → countries with different human rights records may produce evidence through methods that render it inadmissible elsewhere → legal diversity limits operational cooperation",
                examples: [
                  { type: "vn", text: "Vietnam's extradition arrangements with partner countries are constrained by differences in how 'political crime' is defined — activities that Vietnam prosecutes as criminal that partner countries may treat as political expression creating genuine barriers to extradition cooperation." },
                  { type: "support", text: "+ The UK's refusal to extradite suspects to the USA when the death penalty is available demonstrates that even close allies face genuine legal incompatibilities that limit cooperation — the different approaches to criminal punishment creating hard boundaries on what forms of cooperation are legally permissible." }
                ]
              },
              {
                title: "Cooperation risks enabling authoritarian governments to use crime-fighting frameworks for political persecution",
                flow: "international crime frameworks can be misused by authoritarian states to pursue political opponents abroad → Interpol red notices have been abused for political persecution → cooperation with states that criminalise dissent risks making democracies complicit in persecution",
                examples: [
                  { type: "vn", text: "International debates about the misuse of international cooperation mechanisms — including documented cases of politically motivated extradition requests from some states — require that any deepened cooperation framework include robust protections against the abuse of crime-fighting tools for political purposes." },
                  { type: "support", text: "+ Interpol's own recognition of systematic abuse of its red notice system by Russia, China, and Turkey — using international crime cooperation mechanisms to pursue political exiles — demonstrates that deepened cooperation without safeguards risks making democratic countries complicit in political persecution." }
                ]
              }
            ]
          }
        },
        {
          qText: "Crime is an unavoidable part of any society. To what extent do you agree or disagree?",
          sideA: {
            label: "Crime is an unavoidable feature of all human societies",
            ideas: [
              {
                title: "Deviance is a universal feature of all known human societies",
                flow: "every society that has ever been studied contains individuals who violate its norms → the specific acts defined as criminal change across cultures and history → but the existence of norm violation does not → no social system has ever achieved zero crime",
                examples: [
                  { type: "vn", text: "Vietnam's most tightly controlled historical periods — including wartime and early post-unification years with intense social monitoring — still produced crime, albeit of different types and visibility, confirming that even maximally controlled societies cannot eliminate all norm violation." },
                  { type: "support", text: "+ Émile Durkheim's foundational sociology argued that crime is 'normal' in the sense of being universally present — and even functionally necessary for establishing the boundaries of acceptable behaviour — a sociological observation confirmed by the complete absence of crime-free societies in the historical record." }
                ]
              },
              {
                title: "Human nature includes self-interested impulses that will always produce some crime",
                flow: "greed, anger, desire, and competition are innate features of human psychology → in conditions of scarcity or perceived injustice they will periodically overwhelm social constraints → no social system can perfectly align all individuals' interests with collective norms → some crime will always occur",
                examples: [
                  { type: "vn", text: "Vietnam's sustained anti-corruption efforts — involving enormous institutional investment, high-profile prosecutions, and significant political will — have reduced but not eliminated corruption, demonstrating that self-interested behaviour in positions of power is a persistent human tendency resistant to complete eradication." },
                  { type: "support", text: "+ Evolutionary psychology suggests that tendencies toward deception, aggression, and resource acquisition that produce crime under legal definitions were adaptive traits in ancestral environments — they are part of the human behavioural repertoire and cannot be socialised completely out of existence." }
                ]
              },
              {
                title: "The definition of crime expands as society becomes more complex",
                flow: "as societies develop, new behaviours are criminalised → cybercrime, tax evasion, environmental crimes — did not exist until recently → even as traditional crime falls, new criminal categories emerge → the elimination of crime as a category is conceptually impossible",
                examples: [
                  { type: "vn", text: "Vietnam's Cybersecurity Law and expanding environmental protection legislation have created entirely new categories of crime — offences that did not exist a decade ago — demonstrating that legal development continuously creates new forms of crime even as old forms are addressed." },
                  { type: "support", text: "+ The history of law in every society shows continuous expansion of the criminal code alongside economic and technological development — financial regulation, intellectual property law, and data protection creating new crime categories faster than traditional crime categories are reduced." }
                ]
              }
            ]
          },
          sideB: {
            label: "Crime can be substantially and dramatically reduced, even if not eliminated",
            ideas: [
              {
                title: "Social investment has proven capable of dramatic, sustained crime reductions",
                flow: "targeted economic development, education, and community investment → demonstrable falls in crime rates over decades → the scale of reduction achievable dwarfs the residual inevitable minimum → treating crime as 'unavoidable' undermines the political will for this investment",
                examples: [
                  { type: "vn", text: "Vietnam's own experience of dramatically reduced poverty-related crime as economic development progressed demonstrates that crime rates are not fixed features of society but highly responsive to social conditions — the implication being that further investment can produce further reductions." },
                  { type: "support", text: "+ New York City's 75% reduction in violent crime between 1990 and 2020 through a combination of policing, economic development, and demographic change shows that crime levels previously considered intractable can be fundamentally transformed within a generation." }
                ]
              },
              {
                title: "Some societies achieve extremely low crime rates that challenge the 'unavoidable' claim",
                flow: "Japan, Singapore, Iceland, and Nordic countries maintain crime rates orders of magnitude below world averages → if crime were truly unavoidable, these societies could not achieve such outlier outcomes → their success proves that social conditions can reduce crime to near-negligible levels",
                examples: [
                  { type: "vn", text: "Japan's homicide rate of approximately 0.2 per 100,000 — compared to Vietnam's 1.5 and the global average of 6.1 — demonstrates that societies can achieve crime levels that, while not zero, are so low as to render the 'unavoidable' framing practically meaningless for everyday life." },
                  { type: "contrast", text: "✗ The significant variation in crime rates across countries — from near-zero in some Nordic and East Asian societies to extreme violence in some Latin American and African contexts — demonstrates that crime levels are determined by social and institutional conditions, not by any fixed feature of human nature." }
                ]
              },
              {
                title: "Accepting crime as unavoidable creates a dangerous fatalism that undermines prevention",
                flow: "the 'unavoidable' framing reduces political urgency for crime prevention investment → becomes a self-fulfilling prophecy → governments invest less → crime persists → the prediction is confirmed not by necessity but by policy failure",
                examples: [
                  { type: "vn", text: "Vietnam's sustained political commitment to crime reduction — reflected in ongoing anti-corruption campaigns, drug enforcement, and community safety investment — reflects a rejection of fatalism, with measurable results demonstrating that deliberate social investment does produce sustained crime reduction." },
                  { type: "support", text: "+ Criminologists argue that framing crime as inevitable functions politically to shift responsibility from governments to 'human nature' — a framing that conveniently deflects accountability for the policy choices and social conditions that actually determine whether crime is high or low." }
                ]
              }
            ]
          }
        }
      ],
      vocab: [
        {
          group: "Law & Rights",
          layout: "pre",
          items: [
            { phrase: "rule of law", vn: "nhà nước pháp quyền", meaning: "the principle that all individuals and institutions are subject to and accountable under the law", synonyms: "legal governance, supremacy of law" },
            { phrase: "due process", vn: "trình tự tố tụng hợp lệ", meaning: "the fair and proper legal procedures that must be followed before a person is deprived of rights", synonyms: "fair procedure, legal process" },
            { phrase: "civil liberties", vn: "quyền tự do dân sự", meaning: "individual freedoms and rights protected from interference by government", synonyms: "individual rights, fundamental freedoms" },
            { phrase: "social contract", vn: "khế ước xã hội", meaning: "the implicit agreement between citizens and government to exchange some freedoms for collective protection and order", synonyms: "civic compact, political agreement" },
            { phrase: "jurisdiction", vn: "thẩm quyền tài phán", meaning: "the official power to make legal decisions and judgments within a defined territory", synonyms: "legal authority, territorial competence" }
          ]
        },
        {
          group: "International Crime & Cooperation",
          layout: "half",
          items: [
            { phrase: "extradition", vn: "dẫn độ tội phạm", meaning: "the formal process of surrendering a criminal suspect to another country for prosecution", synonyms: "criminal transfer, surrendering suspects" },
            { phrase: "transnational crime", vn: "tội phạm xuyên quốc gia", meaning: "criminal activity that crosses national borders or involves actors in multiple countries", synonyms: "cross-border crime, international crime" },
            { phrase: "money laundering", vn: "rửa tiền", meaning: "disguising the origins of illegally obtained money through complex financial transactions", synonyms: "financial concealment, cleaning dirty money" }
          ]
        },
        {
          group: "Verbs & Collocations",
          layout: "half",
          items: [
            { phrase: "uphold the rule of law", vn: "duy trì nhà nước pháp quyền", meaning: "to actively enforce and respect legal principles and processes", synonyms: "enforce legal standards, maintain legal order" },
            { phrase: "strike a balance between", vn: "tìm sự cân bằng giữa", meaning: "to find an acceptable middle position between two competing interests", synonyms: "reconcile competing interests, find a middle ground" },
            { phrase: "combat international crime", vn: "chống tội phạm quốc tế", meaning: "to take active coordinated measures to reduce cross-border criminal activity", synonyms: "fight global crime, tackle transnational offending" }
          ]
        }
      ]
    }
  ]
};
