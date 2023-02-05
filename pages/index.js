import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles/home.module.css";
import SwitchTheme from "../lib/components/SwitchTheme";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { animlib } from "../lib/animations";
import Image from "next/image";
function Home({ theme }) {
  const animation = animlib[0];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    }
    document.body.style.overflowY = "auto";
  }, []);
  return (
    <React.Fragment>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header_logo}>
            <Link href="/">
              <p>
                <span>S</span>trane
              </p>
            </Link>
          </div>
          <div className={styles.header_try}>
            <Link href="/try">
              <button>Try Beta</button>
            </Link>
          </div>
        </header>

        <main>
          <div className={styles.main}>
            <div className={styles.main_left}>
              <h1>
                Simple. Secure. <br />
                Reliable messaging.
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
              <div className={styles.main_left_buttons}>
                <button>Try Beta</button>
              </div>
            </div>
            <div className={styles.main_right}>
              <Image
                width={isMobile ? 0 : 727.54}
                height={isMobile ? 0 : 594.47}
                src={"/static/index/ind1.png"}
                alt="A phone with strane open in it"
              />
            </div>

            <div className={styles.main_appTiles}>
              <div className={styles.main_appTiles_tile}>
                <Image
                  src={"/static/index/ind2.png"}
                  alt="Mac, Windows and Linux icon"
                  width={150.06}
                  height={45}
                />
                <p className={styles.main_appTiles_tile_title}>Any Plathform</p>
                <p className={styles.main_appTiles_tile_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <a href="/home/more/applications">Learn More</a>
              </div>
              <div className={styles.main_appTiles_tile}>
                <Image
                  src={"/static/index/ind2.png"}
                  alt="Mac, Windows and Linux icon"
                  width={150.06}
                  height={45}
                />
                <p className={styles.main_appTiles_tile_title}>Any Plathform</p>
                <p className={styles.main_appTiles_tile_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <a href="/home/more/applications">Learn More</a>
              </div>
              <div className={styles.main_appTiles_tile}>
                <Image
                  src={"/static/index/ind2.png"}
                  alt="Mac, Windows and Linux icon"
                  width={150.06}
                  height={45}
                />
                <p className={styles.main_appTiles_tile_title}>Any Plathform</p>
                <p className={styles.main_appTiles_tile_text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
                <a href="/home/more/applications">Learn More</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Home;
