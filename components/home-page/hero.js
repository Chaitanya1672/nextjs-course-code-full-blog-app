import Image from 'next/image';

import classes from './hero.module.css';
import Link from 'next/link';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/user.jpg'
          alt='An image showing Chaitanya'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Chaitanya</h1>
      <p>
        I am having more than 2 years of experience as a web developer, you can check out my <Link href={"https://github.com/Chaitanya1672"} target='_blank'>Profile</Link>.
        I blog about web development - especially frontend frameworks like
        React & Next js.
      </p>
    </section>
  );
}

export default Hero;
