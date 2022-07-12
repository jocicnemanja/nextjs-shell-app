import {NextPageContext} from "next";
import {getSession, useSession} from "next-auth/react";
import  Layout from '../components/layout';
import Head from "next/head";
import {CMS_NAME} from "../lib/constants";
import Container from "../components/container";
import Intro from "../components/intro";
import HeroPost from "../components/hero-post";
import MoreStories from "../components/more-stories";


export default function AdminPage() {
// As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  // This is possible because of the shared context configured in `_app.js` that
  // is used by `useSession()`.
  const { data: session, status } = useSession()
  const loading = status === "loading"
  return (
    <>
      <Layout>
        <Container>
          <p>Session: {JSON.stringify(session)} </p>
          <p>Status: {status}</p>
        </Container>
      </Layout>
    </>

)

}

export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}
