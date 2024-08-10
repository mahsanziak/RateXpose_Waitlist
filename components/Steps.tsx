import { useRef, useEffect } from 'react';
import styles from '../styles/Steps.module.css';

const steps = [
  {
    title: 'Upload Bills Anonymously',
    description: 'Securely upload your bills without revealing your identity.'
  },
  {
    title: 'View Bills from Others',
    description: 'Access bills uploaded by other users to compare costs.'
  },
  {
    title: 'Request Quotes',
    description: 'Get quotes for similar bills and find better deals.'
  }
];

const Steps: React.FC = () => {
  const stepRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              stepRefs.current[index] = el;
            }
          }}
          className={styles.step}
        >
          <h2 className={styles.title}>{step.title}</h2>
          <p className={styles.description}>{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
