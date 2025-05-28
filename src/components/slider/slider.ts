import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Info, Loader2 } from 'lucide-react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import exifr from 'exifr';
import styles from './Slider.module.css';

const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

interface SliderProps {
  sources: string[];
}

interface ExifData {
  Make?: string;
  Model?: string;
  ExposureTime?: number;
  FNumber?: number;
  FocalLength?: number;
  ISO?: number;
  ExifImageWidth?: number;
  ExifImageHeight?: number;
  DateTimeOriginal?: string;
  ModifyDate?: string;
}

const Slider: React.FC<SliderProps> = ({ sources }) => {
  const [index, setIndex] = useState<number>(0);
  const [exif, setExif] = useState<ExifData | null>(null);
  const [showExif, setShowExif] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const left = useAnimation();
  const right = useAnimation();

  const handleImageDirection = (direction: number) => {
    setIndex((prevIndex) => (prevIndex + direction + sources.length) % sources.length);
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handleImageDirection(-1);
      left.start({ x: -10, transition: { duration: 0.1 } }).then(() => left.start({ x: 0 }));
    }
    if (e.key === 'ArrowRight') {
      handleImageDirection(1);
      right.start({ x: 10, transition: { duration: 0.1 } }).then(() => right.start({ x: 0 }));
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    exifr.parse(sources[index]).then((output) => setExif(output as ExifData));
  }, [index, sources]);

  return (
    <div className={styles.container}>
      <div className={styles.root} onClick={() => setShowExif(!showExif)}>
        <div className={styles.controls}>
          <motion.div whileTap={{ x: -10 }} animate={left} className={styles.leftControl} onClick={() => handleImageDirection(-1)}>
            <ChevronLeft />
          </motion.div>
          <motion.div whileTap={{ x: 10 }} animate={right} className={styles.rightControl} onClick={() => handleImageDirection(1)}>
            <ChevronRight />
          </motion.div>
        </div>
        <AnimatePresence>
          {isLoading && (
            <motion.div className={styles.loader} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Loader2 className="animate-spin" size={32} />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.img
          onLoad={() => setIsLoading(false)}
          className={styles.image}
          src={sources[index]}
          key={sources[index]}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          alt="Gallery Image"
        />
        {exif && (
          <div className={styles.info}>
            <div className={styles.infoIconContainer}>
              <Info className={styles.infoIcon} />
              <span className={styles.hint}>Click the image to toggle exif info</span>
            </div>
          </div>
        )}
        <AnimatePresence>
          {exif && showExif && (
            <motion.div initial={{ y: 300 }} animate={{ y: 75 }} exit={{ y: 500 }} className={styles.exifDataContainer}>
              <div className={styles.gridContainer}>
                <p>Make: {exif.Make || '-'}</p>
                <p>Model: {exif.Model || '-'}</p>
                <p>Shutter Speed: {secondsToFractions(exif.ExposureTime) || '-'}</p>
                <p>Aperture: {`ƒ${exif.FNumber || '-'}`}</p>
                <p>Focal Length: {exif?.FocalLength?.toFixed(1) || '-'}</p>
                <p>ISO: {exif.ISO || '-'}</p>
                <p>Dimensions: {exif.ExifImageWidth || '-'} x {exif.ExifImageHeight || '-'}</p>
                <p>Date: {new Date(exif.DateTimeOriginal || exif.ModifyDate || '').toLocaleDateString(undefined, options) || '-'}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const secondsToFractions = (sec?: number) => {
  if (!sec) return '-';
  return `1/${(1 / sec).toFixed(0)}`;
};

export default Slider;
