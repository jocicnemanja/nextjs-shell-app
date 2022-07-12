import {getSession, useSession} from "next-auth/react";
import Image from 'next/image'
import Layout from "../components/layout";

export default function Me() {
  const { data: session, status } = useSession()
  return(
    <Layout>
      {!session && (
        <p>
          {status}
        </p>
      )}
      {session && (
        <>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
          <Image src={session.user.image} title='icon' width='30px' height='30px'/>
        </>
      )}

    </Layout>
  )
}
