import Head from "next/head";
import { Menu } from "../components/Menu";
import Image from "next/image";
import mariusDuke from "../../public/img/marius_duke.svg";
import javaZoneLogo from "../../public/img/logos/javazone-logo.jpg";
import octocat from "../../public/img/logos/github-logo.png";
import { Region } from "../components/Region";
import regions from "../../data/regions";
import members from "../../data/boardmembers";
import BoardMembers from "../components/BoardMembers";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import { Trans, useTranslation } from "next-i18next";
import { InferGetStaticPropsType } from "next/types";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation("common", { keyPrefix: "main" });
  const yearsArrangingJavaZone = new Date().getFullYear() - 2002;

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/icon" href="/img/favicon.ico" />
      </Head>
      <Menu />
      <header>
        <div className="container">
          <div className="intro-text">
            <Image priority src={mariusDuke} height={250} alt="Marius Duke" />
            <div className="intro-lead-in">{t("intro")}</div>
            <div className="intro-heading">javaBin</div>
            <Link href="/#about" className="page-scroll btn btn-xl">
              {t("aboutUs")}
            </Link>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="section-heading">{t("about")}</h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2 center-justified">
              <p>{t("aboutJavaBin")}</p>
              <p>
                <Trans
                  i18nKey="aboutJavaZone"
                  t={t}
                  components={{
                    javaZoneLink: <Link href="http://javazone.no" />,
                  }}
                />
              </p>
              <p>{t("aboutMeetups")}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contribute">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="section-heading">{t("contribute")}</h1>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                <li className="timeline-default">
                  <div className="timeline-image">
                    <Image
                      className="img-circle img-responsive"
                      height={170}
                      src={mariusDuke}
                      alt="Marius Duke"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>{t("becomeActive")}</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <Trans
                          i18nKey="aboutBecomingActive"
                          t={t}
                          components={{
                            teknologiHustetLocationLink: (
                              <Link href="https://goo.gl/maps/wpaA5nxxHM5ao3Rr9" />
                            ),
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <Image
                      className="img-circle img-responsive"
                      height={170}
                      src={javaZoneLogo}
                      alt="JavaZone logo"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>{t("ideasJavaZone")}</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <Trans
                          i18nKey="aboutIdeasJavaZone"
                          t={t}
                          values={{
                            yearsArrangingJavaZone: yearsArrangingJavaZone,
                          }}
                          components={{
                            javaZoneLink: <Link href="http://javazone.no" />,
                            javaZoneEmail: (
                              <Link href="mailto:javazone@java.no" />
                            ),
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </li>

                <li className="timeline-default">
                  <div className="timeline-image">
                    <Image
                      className="img-circle img-responsive"
                      height={170}
                      src={octocat}
                      alt="Github Octocat"
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>{t("github")}</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <Trans
                          i18nKey="aboutGithub"
                          t={t}
                          components={{
                            githubLink: (
                              <Link href="http://github.com/javabin" />
                            ),
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="locations">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="section-heading">{t("branches")}</h1>
            </div>
          </div>
          {props.regions.map((region) => (
            <Region key={region.region} region={region} />
          ))}
        </div>
      </section>

      <section id="board">
        <BoardMembers boardMembers={props.boardMembers} />
      </section>

      {/*<Membership />*/}

      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="section-heading">{t("contact")}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 center-justified">
              <form
                action="https://formspree.io/styret@java.no"
                method="POST"
                className="col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6"
              >
                <div className="form-group">
                  <label htmlFor="name">{t("name")}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("yourName")}
                    name="name"
                    id="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t("email")}</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder={t("yourEmail")}
                    name="email"
                    id="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t("message")}</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder={t("yourMessage")}
                    rows={5}
                    id="message"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value={t("send")}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 center-justified">
              <ul id="socialMedia">
                <li>
                  <Link
                    href="https://www.facebook.com/javabin"
                    className="icon fa fa-facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Facebook</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://github.com/javaBin"
                    className="icon fa fa-github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://instagram.com/javabin/"
                    className="icon fa fa-instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Instagram</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://twitter.com/javaBin"
                    className="icon fa fa-twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Twitter</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://vimeo.com/javabin"
                    className="icon fa fa-vimeo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Vimeo</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://linkedin.com/groups/107562"
                    className="icon fa fa-linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>LinkedIn</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="mailto:styret@java.no"
                    className="icon fa fa-envelope"
                    target=""
                  >
                    <span>Email</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <ul className="external">
          <li>
            <Link href="http://www.javazone.no" className="javazone">
              JavaZone
            </Link>
          </li>
          <li>
            <Link
              href="http://www.teknologihuset.no"
              className="teknologihuset"
            >
              Teknologihuset
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

interface Venue {
  country: string;
  localized_country_name: string;
  city: string;
  name: string;
  lon: number;
  id: number;
  lat: number;
  repinned: boolean;
  address_1: string;
}

interface Group {
  join_mode: string;
  created: number;
  name: string;
  group_lon: number;
  id: number;
  urlname: string;
  group_lat: number;
  who: string;
}

interface Result {
  utc_offset: number;
  venue: Venue;
  headcount: number;
  visibility: string;
  waitlist_count: number;
  created: number;
  maybe_rsvp_count: number;
  description: string;
  event_url: string;
  yes_rsvp_count: number;
  duration: number;
  name: string;
  id: string;
  time: number;
  updated: number;
  group: Group;
  status: string;
  rsvp_limit?: number;
  photo_url: string;
}

interface Meta {
  next: string;
  method: string;
  total_count: number;
  link: string;
  count: number;
  description: string;
  lon: string;
  title: string;
  url: string;
  id: string;
  updated: number;
  lat: string;
}

interface MeetupResponse {
  results?: Result[];
  meta?: Meta;
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const meetupRequest = await fetch(
    `https://api.meetup.com/2/events?group_id=7480032%2C8449272%2C7371452%2C4060032%2C10847532%2C1764379%2C30349557%2C32757331&status=upcoming&order=time&limited_events=False&desc=false&offset=0&format=json&page=20&fields=&sig_id=14499833`
  ).catch((err) => {
    console.error(err);
    return NextResponse.json({});
  });
  const events: MeetupResponse = await meetupRequest.json();
  // const events: MeetupResponse = {};

  const regionsWithUpcomingMeetups = regions.map((region) => {
    return {
      events:
        events?.results
          ?.filter((result) => result.group.urlname === region.meetupUrl)
          ?.map((result) => {
            return {
              event_url: result.event_url,
              name: result.name,
              time: result.time,
            };
          }) || [],
      ...region,
    };
  });

  return {
    props: {
      regions: regionsWithUpcomingMeetups,
      boardMembers: members,
      ...(await serverSideTranslations(
        locale ?? "no",
        ["common"],
        nextI18nConfig,
        ["no", "en"]
      )),
    },
    // Recreates the page server-side at most once per hour
    revalidate: 3600,
  };
};

export default Home;
