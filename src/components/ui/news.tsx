import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const News = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <main className='main-interactive'>
      <section className='section clearfix section-result'>
        <div className='container'>
          <div
            className='title-block-text aos-init aos-animate'
            data-aos='zoom-in'
            data-aos-duration='1000'
          ></div>
          <div
            ref={ref}
            className={cn('box-quote aos-init', isInView && 'aos-animate')}
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div
              className={cn(
                'title-block-text aos-init',
                isInView && 'aos-animate'
              )}
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              Phóng sự / Thời sự
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <iframe
                height='315'
                src='https://www.youtube.com/embed/d52fM8FXY_U?si=phFllGeijp-r0Jev'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='rounded-xl w-full'
              ></iframe>

              <iframe
                height='315'
                src='https://www.youtube.com/embed/FXxgu6SHMAg?si=CcQVYjwCo8baVzoS'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
                className='rounded-xl w-full'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;
