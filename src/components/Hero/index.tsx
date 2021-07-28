import Heading from 'components/Heading'
import FullSection from 'components/FullSection'
import Embed from 'components/Embed'
import { ExpandMore as ExpandMoreIcon } from '@styled-icons/material-outlined/ExpandMore'
import * as S from './styles'
import React, { useRef } from 'react'

const Hero = () => {
  const titleRef = useRef()

  function handleClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <S.Wrapper>
      <S.AnimatedBg>
        <svg
          className="wave"
          viewBox="0 0 310 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="path line_1" d="M10 125H0V360H10V125Z" />
          <path className="path line_2" d="M30 80H20V390H30V80Z" />
          <path className="path line_3" d="M50 120H40V335H50V120Z" />
          <path className="path line_4" d="M70 180H60V420H70V180Z" />
          <path className="path line_5" d="M90 270H80V470H90V270Z" />
          <path className="path line_6" d="M110 120H100V350H110V120Z" />
          <path className="path line_7" d="M130 10H120V310H130V10Z" />
          <path className="path line_8" d="M150 60H140V350H150V60Z" />
          <path className="path line_9" d="M170 185H160V365H170V185Z" />
          <path className="path line_10" d="M190 110H180V410H190V110Z" />
          <path className="path line_11" d="M210 150H200V430H210V150Z" />
          <path className="path line_12" d="M230 190H220V450H230V190Z" />
          <path className="path line_13" d="M250 170H240V370H250V170Z" />
          <path className="path line_14" d="M270 50H260V340H270V50Z" />
          <path className="path line_15" d="M290 180H280V390H290V180Z" />
          <path className="path line_16" d="M310 110H300V410H310V110Z" />
          <path className="path line_17" d="M30 410H20V420H30V410Z" />
          <path className="path line_18" d="M50 360H40V370H50V360Z" />
          <path className="path line_19" d="M110 400H100V420H110V400Z" />
          <path className="path line_20" d="M70 480H60V500H70V480Z" />
          <path className="path line_21" d="M90 500H80V510H90V500Z" />
          <path className="path line_22" d="M130 370H120V380H130V370Z" />
          <path className="path line_23" d="M150 395H140V415H150V395Z" />
          <path className="path line_24" d="M150 435H140V445H150V435Z" />
          <path className="path line_25" d="M190 520H180V530H190V520Z" />
          <path className="path line_26" d="M110 450H100V460H110V450Z" />
          <path className="path line_27" d="M210 480H200V490H210V480Z" />
          <path className="path line_28" d="M250 400H240V420H250V400Z" />
          <path className="path line_29" d="M270 360H260V370H270V360Z" />
          <path className="path line_30" d="M290 410H280V420H290V410Z" />
          <path className="path line_31" d="M290 140H280V160H290V140Z" />
          <path className="path line_32" d="M310 30H300V40H310V30Z" />
          <path className="path line_33" d="M250 145H240V155H250V145Z" />
          <path className="path line_34" d="M230 60H220V70H230V60Z" />
          <path className="path line_35" d="M210 100H200V110H210V100Z" />
          <path className="path line_36" d="M150 20H140V30H150V20Z" />
          <path className="path line_37" d="M170 110H160V120H170V110Z" />
          <path className="path line_38" d="M90 180H80V190H90V180Z" />
          <path className="path line_39" d="M70 110H60V130H70V110Z" />
          <path className="path line_40" d="M50 70H40V80H50V70Z" />
          <path className="path line_41" d="M30 38.29H20V50H30V38.29Z" />
          <path className="path line_42" d="M110 80H100V90H110V80Z" />
          <path className="path line_43" d="M190 50H180V70H190V50Z" />
          <path className="path line_44" d="M170 150H160V170H170V150Z" />
          <path className="path line_45" d="M90 230H80V250H90V230Z" />
          <path className="path line_46" d="M230 120H220V150H230V120Z" />
          <path className="path line_47" d="M270 0H260V10H270V0Z" />
          <path className="path line_48" d="M250 460H240V470H250V460Z" />
          <path className="path line_49" d="M210 450H200V470H210V450Z" />
          <path className="path line_50" d="M10 460H0V470H10V460Z" />
          <path className="path line_51" d="M10 380H0V400H10V380Z" />
        </svg>
        <svg
          className="wave"
          viewBox="0 0 310 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="path line_1" d="M10 125H0V360H10V125Z" />
          <path className="path line_2" d="M30 80H20V390H30V80Z" />
          <path className="path line_3" d="M50 120H40V335H50V120Z" />
          <path className="path line_4" d="M70 180H60V420H70V180Z" />
          <path className="path line_5" d="M90 270H80V470H90V270Z" />
          <path className="path line_6" d="M110 120H100V350H110V120Z" />
          <path className="path line_7" d="M130 10H120V310H130V10Z" />
          <path className="path line_8" d="M150 60H140V350H150V60Z" />
          <path className="path line_9" d="M170 185H160V365H170V185Z" />
          <path className="path line_10" d="M190 110H180V410H190V110Z" />
          <path className="path line_11" d="M210 150H200V430H210V150Z" />
          <path className="path line_12" d="M230 190H220V450H230V190Z" />
          <path className="path line_13" d="M250 170H240V370H250V170Z" />
          <path className="path line_14" d="M270 50H260V340H270V50Z" />
          <path className="path line_15" d="M290 180H280V390H290V180Z" />
          <path className="path line_16" d="M310 110H300V410H310V110Z" />
          <path className="path line_17" d="M30 410H20V420H30V410Z" />
          <path className="path line_18" d="M50 360H40V370H50V360Z" />
          <path className="path line_19" d="M110 400H100V420H110V400Z" />
          <path className="path line_20" d="M70 480H60V500H70V480Z" />
          <path className="path line_21" d="M90 500H80V510H90V500Z" />
          <path className="path line_22" d="M130 370H120V380H130V370Z" />
          <path className="path line_23" d="M150 395H140V415H150V395Z" />
          <path className="path line_24" d="M150 435H140V445H150V435Z" />
          <path className="path line_25" d="M190 520H180V530H190V520Z" />
          <path className="path line_26" d="M110 450H100V460H110V450Z" />
          <path className="path line_27" d="M210 480H200V490H210V480Z" />
          <path className="path line_28" d="M250 400H240V420H250V400Z" />
          <path className="path line_29" d="M270 360H260V370H270V360Z" />
          <path className="path line_30" d="M290 410H280V420H290V410Z" />
          <path className="path line_31" d="M290 140H280V160H290V140Z" />
          <path className="path line_32" d="M310 30H300V40H310V30Z" />
          <path className="path line_33" d="M250 145H240V155H250V145Z" />
          <path className="path line_34" d="M230 60H220V70H230V60Z" />
          <path className="path line_35" d="M210 100H200V110H210V100Z" />
          <path className="path line_36" d="M150 20H140V30H150V20Z" />
          <path className="path line_37" d="M170 110H160V120H170V110Z" />
          <path className="path line_38" d="M90 180H80V190H90V180Z" />
          <path className="path line_39" d="M70 110H60V130H70V110Z" />
          <path className="path line_40" d="M50 70H40V80H50V70Z" />
          <path className="path line_41" d="M30 38.29H20V50H30V38.29Z" />
          <path className="path line_42" d="M110 80H100V90H110V80Z" />
          <path className="path line_43" d="M190 50H180V70H190V50Z" />
          <path className="path line_44" d="M170 150H160V170H170V150Z" />
          <path className="path line_45" d="M90 230H80V250H90V230Z" />
          <path className="path line_46" d="M230 120H220V150H230V120Z" />
          <path className="path line_47" d="M270 0H260V10H270V0Z" />
          <path className="path line_48" d="M250 460H240V470H250V460Z" />
          <path className="path line_49" d="M210 450H200V470H210V450Z" />
          <path className="path line_50" d="M10 460H0V470H10V460Z" />
          <path className="path line_51" d="M10 380H0V400H10V380Z" />
        </svg>
        <svg
          className="wave"
          viewBox="0 0 310 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="path line_1" d="M10 125H0V360H10V125Z" />
          <path className="path line_2" d="M30 80H20V390H30V80Z" />
          <path className="path line_3" d="M50 120H40V335H50V120Z" />
          <path className="path line_4" d="M70 180H60V420H70V180Z" />
          <path className="path line_5" d="M90 270H80V470H90V270Z" />
          <path className="path line_6" d="M110 120H100V350H110V120Z" />
          <path className="path line_7" d="M130 10H120V310H130V10Z" />
          <path className="path line_8" d="M150 60H140V350H150V60Z" />
          <path className="path line_9" d="M170 185H160V365H170V185Z" />
          <path className="path line_10" d="M190 110H180V410H190V110Z" />
          <path className="path line_11" d="M210 150H200V430H210V150Z" />
          <path className="path line_12" d="M230 190H220V450H230V190Z" />
          <path className="path line_13" d="M250 170H240V370H250V170Z" />
          <path className="path line_14" d="M270 50H260V340H270V50Z" />
          <path className="path line_15" d="M290 180H280V390H290V180Z" />
          <path className="path line_16" d="M310 110H300V410H310V110Z" />
          <path className="path line_17" d="M30 410H20V420H30V410Z" />
          <path className="path line_18" d="M50 360H40V370H50V360Z" />
          <path className="path line_19" d="M110 400H100V420H110V400Z" />
          <path className="path line_20" d="M70 480H60V500H70V480Z" />
          <path className="path line_21" d="M90 500H80V510H90V500Z" />
          <path className="path line_22" d="M130 370H120V380H130V370Z" />
          <path className="path line_23" d="M150 395H140V415H150V395Z" />
          <path className="path line_24" d="M150 435H140V445H150V435Z" />
          <path className="path line_25" d="M190 520H180V530H190V520Z" />
          <path className="path line_26" d="M110 450H100V460H110V450Z" />
          <path className="path line_27" d="M210 480H200V490H210V480Z" />
          <path className="path line_28" d="M250 400H240V420H250V400Z" />
          <path className="path line_29" d="M270 360H260V370H270V360Z" />
          <path className="path line_30" d="M290 410H280V420H290V410Z" />
          <path className="path line_31" d="M290 140H280V160H290V140Z" />
          <path className="path line_32" d="M310 30H300V40H310V30Z" />
          <path className="path line_33" d="M250 145H240V155H250V145Z" />
          <path className="path line_34" d="M230 60H220V70H230V60Z" />
          <path className="path line_35" d="M210 100H200V110H210V100Z" />
          <path className="path line_36" d="M150 20H140V30H150V20Z" />
          <path className="path line_37" d="M170 110H160V120H170V110Z" />
          <path className="path line_38" d="M90 180H80V190H90V180Z" />
          <path className="path line_39" d="M70 110H60V130H70V110Z" />
          <path className="path line_40" d="M50 70H40V80H50V70Z" />
          <path className="path line_41" d="M30 38.29H20V50H30V38.29Z" />
          <path className="path line_42" d="M110 80H100V90H110V80Z" />
          <path className="path line_43" d="M190 50H180V70H190V50Z" />
          <path className="path line_44" d="M170 150H160V170H170V150Z" />
          <path className="path line_45" d="M90 230H80V250H90V230Z" />
          <path className="path line_46" d="M230 120H220V150H230V120Z" />
          <path className="path line_47" d="M270 0H260V10H270V0Z" />
          <path className="path line_48" d="M250 460H240V470H250V460Z" />
          <path className="path line_49" d="M210 450H200V470H210V450Z" />
          <path className="path line_50" d="M10 460H0V470H10V460Z" />
          <path className="path line_51" d="M10 380H0V400H10V380Z" />
        </svg>
        <svg
          className="wave"
          viewBox="0 0 310 530"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="path line_1" d="M10 125H0V360H10V125Z" />
          <path className="path line_2" d="M30 80H20V390H30V80Z" />
          <path className="path line_3" d="M50 120H40V335H50V120Z" />
          <path className="path line_4" d="M70 180H60V420H70V180Z" />
          <path className="path line_5" d="M90 270H80V470H90V270Z" />
          <path className="path line_6" d="M110 120H100V350H110V120Z" />
          <path className="path line_7" d="M130 10H120V310H130V10Z" />
          <path className="path line_8" d="M150 60H140V350H150V60Z" />
          <path className="path line_9" d="M170 185H160V365H170V185Z" />
          <path className="path line_10" d="M190 110H180V410H190V110Z" />
          <path className="path line_11" d="M210 150H200V430H210V150Z" />
          <path className="path line_12" d="M230 190H220V450H230V190Z" />
          <path className="path line_13" d="M250 170H240V370H250V170Z" />
          <path className="path line_14" d="M270 50H260V340H270V50Z" />
          <path className="path line_15" d="M290 180H280V390H290V180Z" />
          <path className="path line_16" d="M310 110H300V410H310V110Z" />
          <path className="path line_17" d="M30 410H20V420H30V410Z" />
          <path className="path line_18" d="M50 360H40V370H50V360Z" />
          <path className="path line_19" d="M110 400H100V420H110V400Z" />
          <path className="path line_20" d="M70 480H60V500H70V480Z" />
          <path className="path line_21" d="M90 500H80V510H90V500Z" />
          <path className="path line_22" d="M130 370H120V380H130V370Z" />
          <path className="path line_23" d="M150 395H140V415H150V395Z" />
          <path className="path line_24" d="M150 435H140V445H150V435Z" />
          <path className="path line_25" d="M190 520H180V530H190V520Z" />
          <path className="path line_26" d="M110 450H100V460H110V450Z" />
          <path className="path line_27" d="M210 480H200V490H210V480Z" />
          <path className="path line_28" d="M250 400H240V420H250V400Z" />
          <path className="path line_29" d="M270 360H260V370H270V360Z" />
          <path className="path line_30" d="M290 410H280V420H290V410Z" />
          <path className="path line_31" d="M290 140H280V160H290V140Z" />
          <path className="path line_32" d="M310 30H300V40H310V30Z" />
          <path className="path line_33" d="M250 145H240V155H250V145Z" />
          <path className="path line_34" d="M230 60H220V70H230V60Z" />
          <path className="path line_35" d="M210 100H200V110H210V100Z" />
          <path className="path line_36" d="M150 20H140V30H150V20Z" />
          <path className="path line_37" d="M170 110H160V120H170V110Z" />
          <path className="path line_38" d="M90 180H80V190H90V180Z" />
          <path className="path line_39" d="M70 110H60V130H70V110Z" />
          <path className="path line_40" d="M50 70H40V80H50V70Z" />
          <path className="path line_41" d="M30 38.29H20V50H30V38.29Z" />
          <path className="path line_42" d="M110 80H100V90H110V80Z" />
          <path className="path line_43" d="M190 50H180V70H190V50Z" />
          <path className="path line_44" d="M170 150H160V170H170V150Z" />
          <path className="path line_45" d="M90 230H80V250H90V230Z" />
          <path className="path line_46" d="M230 120H220V150H230V120Z" />
          <path className="path line_47" d="M270 0H260V10H270V0Z" />
          <path className="path line_48" d="M250 460H240V470H250V460Z" />
          <path className="path line_49" d="M210 450H200V470H210V450Z" />
          <path className="path line_50" d="M10 460H0V470H10V460Z" />
          <path className="path line_51" d="M10 380H0V400H10V380Z" />
        </svg>
      </S.AnimatedBg>
      <FullSection className="test" color="darkGray">
        <Heading>Pode entrar que a casa é sua, aliás é nossa</Heading>
        <ExpandMoreIcon aria-label="ver podcast" onClick={handleClick} />
      </FullSection>
      <div ref={titleRef}>
        <FullSection className="test-1" color="darkGray">
          <Heading>
            Somos uma produtora de conteúdos em áudio de Brasília e um hub de
            ideias e conexões.
          </Heading>
          <Embed embedUrl="https://anchor.fm/a-nossa-casa-de-podcasts/embed/episodes/Trailer-I-Radiofonias-Internticas-e12rg9p/a-a5t2jg4" />
        </FullSection>
      </div>
    </S.Wrapper>
  )
}

export default Hero
