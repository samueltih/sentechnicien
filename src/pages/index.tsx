import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@styles/Home.module.css";
import { ReactElement } from "react";
import HomeLayout from "@layouts/HomeLayout";
import { NextPageWithLayout } from "./_app";
import { Card, Carousel, Grid, List, Typography } from "antd";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const HomePage: NextPageWithLayout = () => {
  const data = [
    {
      title: "Informatique",
    },
    {
      title: "Lavage Auto",
    },
    {
      title: "Maçonnerie",
    },
    {
      title: "Soudure",
    },
    {
      title: "Photographie",
    },
    {
      title: "Vidange",
    },
    {
      title: "Couture",
    },
    {
      title: "Livraison",
    },
  ];

  const engagements = [
    {
      title: "LES MEILLEURS TECHNICIENS & ENTREPRISES DU SÉNÉGAL !",
      content:
        "Vous recherchez une entreprise fiable, un bon technicien pour vos travaux, rénovations et vous souhaitez connaître les avis des anciens clients de cette entreprise, technicien avant d'accorder pleinement votre confiance ? Vous êtes au bon endroit ! Trouvez des entreprises et techniciens certifiées et recommandées par leurs anciens clients. Avec Sen Techniciens, soyez sûr de faire le bon choix grâce aux avis !",
    },
    {
      title: "RECHERCHER, CONTACTEZ & DONNEZ VOTRE AVIS !",
      content:
        "Vous êtes un particulier ? Vous avez récemment réalisé des travaux ? C’est le moment de donner votre avis sur cet entreprise, ce technicien afin d’aider les autres internautes à faire le bon choix ! En effet, faire le choix d'une entreprise sur Sen Techniciens, c’est également se donner la garantie de noter le professionnel et de donner votre avis quand tout est fini.",
    },
    {
      title: "DES TECHNICIENS CERTIFIES POUR VOS DEVIS DE TRAVAUX",
      content:
        "Vous souhaitez réaliser des travaux et avez besoin d'un devis afin d'en estimer le montant. Avec Sen Techniciens, vous avez la possibilité de contacter directement l'entreprise ou le technicien certifié présent dans l'annuaire de notre réseau ou de nous adresser votre demande, nous nous chargeons de trouver pour vous le technicien ou l’entreprise en mesure de répondre au mieux à votre demande de devis travaux.",
    },
  ];

  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <Head>
        <title>Sentechnicien | Chercher des artisans compétents</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography.Title level={1}>Welcome</Typography.Title>
      <p>
        Besoin d'un techniciens? d'une entreprise professionnel? d'un devis pour
        vos travaux? Vous avez un projet de construction, de rénovation ou
        d'équipement de l'habitat et vous souhaitez trouver un Technicien
        particulier ou une Entreprise de Qualité pour vos travaux. Nous vous
        proposons gratuitement une liste des meilleurs professionnels sur notre
        plateforme et proche de chez vous! Vous avez un besoin, nous vous
        trouvons les meilleurs Pros pour vos travaux. polices. Déplacez-moi où
        vous le souhaitez sur votre page. Expliquez ic Besoin d'un techniciens?
        d'une entreprise professionnel? d'un devis pour vos travaux? Vous avez
        un projet de construction, de rénovation ou d'équipement de l'habitat et
        vous souhaitez trouver un Technicien particulier ou une Entreprise de
        Qualité pour vos travaux. Nous vous proposons gratuitement une liste des
        meilleurs professionnels sur notre plateforme et proche de chez vous!
        Vous avez un besoin, nous vous trouvons les meilleurs Pros pour vos
        travaux. i votre parcours et présentez votre activité à vos visiteurs.
      </p>

      <Typography.Title level={1}>Our Network</Typography.Title>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      ></List>

      <Typography.Title level={1}>Our Engagement</Typography.Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={engagements}
        renderItem={(engagement) => (
          <List.Item>
            <Card title={engagement.title}>{engagement.content}</Card>
          </List.Item>
        )}
      ></List>

      <Typography.Title level={1}>Ils nous ont rejoins</Typography.Title>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={engagements}
        renderItem={(engagement) => (
          <List.Item>
            <Card title={engagement.title}>{engagement.content}</Card>
          </List.Item>
        )}
      ></List>

      <Typography.Title level={1}>Les derniers avis clients</Typography.Title>
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <div className="flex items-center justify-center">
        <Link href="#">Demander un devis</Link>
      </div>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <HomeLayout>{page}</HomeLayout>;

export default HomePage;
