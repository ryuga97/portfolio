import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.css";
import media from "../styles/media.module.css";

export default function Home() {
  return (
    <div className={"all"} lang="ja">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>RYUGA AMEKU PORTFOLIO</title>
        <meta name="description" content="説明文説明文説明文" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        {/* header */}

        <header>
          <div className={`${style.hd_main} ${media.hd_main_sp}`}>
            <h1 className={`${style.hd_ttl} ${media.hd_ttl_sp}`}>
              <a href="#">Bar Kakuu</a>
            </h1>
            <nav className={`${style.hd_nav} ${media.hd_nav_sp}`}>
              <ul className={style.hd_ul}>
                <li className={style.hd_li}>
                  <a href="#about">
                    <span>About</span>はじめに
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    <span>Menu</span>メニュー
                  </a>
                </li>
                <li>
                  <a href="#information">
                    <span>Information</span>店舗情報
                  </a>
                </li>
                <li className={style.list_contact}>
                  <a href="#contact">
                    <span>Contact</span>お問合わせ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* main */}

        <main>
          <div className={`${style.content} ${media.content_sp}`}>
            <div className={`${style.main_img} ${media.padding_sp}`}>
              {/* <Image
                src="/yakei.jpg"
                alt="都会の夜景"
                width={1600}
                height={1066}
                objectFit="cover"
              /> */}
            </div>

            {/* sec-1 about */}

            <section
              id="about"
              className={`${style.sec1} ${media.padding_margin_sp}`}
            >
              <div className={`${style.bgc1} ${media.bgc1_sp}`}>
                <div
                  className={`${style.sec1_img_txt} ${media.sec1_img_txt_sp}`}
                >
                  <div className={style.sec1_img_box}>
                    <div className={`${style.sec1_img} ${media.sec1_img_sp}`}>
                      <Image
                        src="/sec1-img.jpg"
                        width={625}
                        height={520}
                        alt=""
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className={`${style.sec1_txt} ${media.sec1_txt_sp}`}>
                    <h2
                      className={`${style.sec1_txt_title} ${media.sec1_txt_title_sp}`}
                    >
                      Bar Kakuu とは
                    </h2>

                    <p className={`${style.sec1_txt01} ${media.sec1_txt01_sp}`}>
                      本ページの「Bar Kakuu」は、架空のBarです。
                      <br />
                      本ページの「Bar Kakuu」は、架空のBarです。
                      <br />
                      本ページの「Bar Kakuu」は、架空のBarです。
                      <br />
                      本ページの「Bar Kakuu」は、架空のBarです。
                      <br />
                      本ページの「Bar Kakuu」は、架空のBarです。
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* sec-2 menu */}

            <div
              id="menu"
              className={`${style.sec2} ${media.padding_margin_sp}`}
            >
              <div className={`${style.bgc2} ${media.bgc2_sp}`}>
                <section className={style.menu_all}>
                  <div className={style.menu_top}>
                    <div className={style.menu_title}>
                      <p
                        className={`${style.menu_top01} ${media.menu_top01_sp}`}
                      >
                        Menu
                      </p>
                      <h3
                        className={`${style.menu_top02} ${media.menu_top02_sp}`}
                      >
                        メニュー
                      </h3>
                    </div>
                  </div>

                  <div className={style.menu_item}>
                    <Image
                      src="/tequila(s).jpg"
                      width={293.33}
                      height={243.77}
                      alt="tequila"
                      objectFit="cover"
                    />
                    <h3 className={style.menu_h3}>OLMECA TEQUILA</h3>
                    <p className={style.menu_date}>1Shot：600円</p>
                  </div>

                  <div className={style.menu_item}>
                    <Image
                      src="/tequila(s).jpg"
                      width={293.33}
                      height={243.77}
                      alt="tequila"
                      objectFit="cover"
                    />
                    <h3 className={style.menu_h3}>OLMECA TEQUILA</h3>
                    <p className={style.menu_date}>1Shot：600円</p>
                  </div>

                  <div className={style.menu_item}>
                    <Image
                      src="/tequila(s).jpg"
                      width={293.33}
                      height={243.77}
                      alt="tequila"
                      objectFit="cover"
                    />
                    <h3 className={style.menu_h3}>OLMECA TEQUILA</h3>
                    <p className={style.menu_date}>1Shot：600円</p>
                  </div>

                  <div className={style.menu_item}>
                    <Image
                      src="/tequila(s).jpg"
                      width={293.33}
                      height={243.77}
                      alt="tequila"
                      objectFit="cover"
                    />
                    <h3 className={style.menu_h3}>OLMECA TEQUILA</h3>
                    <p className={style.menu_date}>1Shot：600円</p>
                  </div>

                  <div className={style.menu_item}>
                    <Image
                      src="/tequila(s).jpg"
                      width={293.33}
                      height={243.77}
                      alt="tequila"
                      objectFit="cover"
                    />
                    <h3 className={style.menu_h3}>OLMECA TEQUILA</h3>
                    <p className={style.menu_date}>1Shot：600円</p>
                  </div>

                  <div className={style.menu_item}>
                    <Image
                      src="/tequila(s).jpg"
                      width={293.33}
                      height={243.77}
                      alt="tequila"
                      objectFit="cover"
                    />
                    <h3 className={style.menu_h3}>OLMECA TEQUILA</h3>
                    <p className={style.menu_date}>1Shot：600円</p>
                  </div>
                </section>
              </div>
            </div>

            {/* sec-3 info */}

            <div
              id="information"
              className={`${style.sec2} ${media.padding_margin_sp}`}
            >
              <div className={`${style.bgc2} ${media.bgc2_sp}`}>
                <section className={style.info_all}>
                  <div
                    className={`${style.info_top_item} ${media.info_top_item_sp}`}
                  >
                    <div className={style.info_top_title}>
                      <p
                        className={`${style.info_top_item01} ${media.info_top_item01_sp}`}
                      >
                        Information
                      </p>
                      <h3
                        className={`${style.info_top_item02} ${media.info_top_item02_sp}`}
                      >
                        店舗情報
                      </h3>
                    </div>
                  </div>

                  <div className={style.info_content}>
                    <div className={style.content_item01}>
                      <div className={style.content_item02}>
                        <p>住所</p>
                        <h3 className={style.h3_space}>
                          〒904-0115 沖縄県中頭郡北谷町○○
                        </h3>
                      </div>
                    </div>

                    <div className={style.content_item01}>
                      <div className={style.content_item02}>
                        <p>電話番号</p>
                        <h3 className={style.h3_space}>0123-456-789</h3>
                      </div>
                    </div>

                    <div className={style.content_item01}>
                      <div className={style.content_item02}>
                        <p>営業時間</p>
                        <h3 className={style.h3_space}>xx:00～xx:00</h3>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>

        {/* footer */}

        <footer
          id="contact"
          className={`${style.ft} ${media.padding_margin_sp}`}
        >
          <div className={style.ct_img}>
            <div className={style.ct_box}>
              <div className={`${style.ct_txt} ${media.ct_txt_sp}`}>
                <h3 className={`${style.ct_title} ${media.ct_title_sp}`}>
                  お問合わせ
                </h3>
                <p className={`${style.ct_form} ${media.ct_form_sp}`}>
                  contact form
                </p>
                <p className={`${style.ct_exp} ${media.ct_exp_sp}`}>
                  メールでのご予約も承っております
                </p>
              </div>
            </div>
          </div>
          <div className={style.cp_box}>
            <small className={`${style.cp_txt} ${media.cp_txt_sp}`}>
              "© Bar Kakuu 2022"
            </small>
          </div>
        </footer>
      </body>
    </div>
  );
}
