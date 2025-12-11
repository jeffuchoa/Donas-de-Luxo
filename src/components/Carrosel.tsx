import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import "./carousel.css"

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const Carrosel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (!autoScroll) return;

    let resumeTimeout: number | undefined;

    const restartAfterDelay = () => {
      // Cancela timeout antigos
      if (resumeTimeout) window.clearTimeout(resumeTimeout);

      // Programa para reiniciar o autoplay depois de 2s parado
      resumeTimeout = window.setTimeout(() => {
        if (!autoScroll.isPlaying()) autoScroll.play();
      }, 100);
    };

    // Eventos que pausam o autoplay
    emblaApi.on("pointerDown", () => {
      autoScroll.stop();
      restartAfterDelay();
    });

    emblaApi.on("select", () => {
      restartAfterDelay();
    });

    emblaApi.on("scroll", () => {
      restartAfterDelay();
    });

    return () => {
      if (resumeTimeout) window.clearTimeout(resumeTimeout);
    };
  }, [emblaApi]);


  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((index) => (
            <div className="embla__slide " key={index}>
              <img
                src={index}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
      </div>
    </div>
  )
}

export default Carrosel
