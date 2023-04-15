import Head from "next/head";
import { PageTemplate, DishList } from "@/components";
import Styles from "../../styles/discover.module.css";
import { api } from "@/services";
import { CityProps, DishType, PageDiscoverProps, ParamsStaticProps } from "@/types";

export default function Descobrir(props: PageDiscoverProps) {
  const { city, deliveries } = props;

  return (
    <>
      <Head>
        <title>OnFood App - Opções em {city.name}</title>
        <meta
          name="description"
          content={`Encontre opções em Delivery próximos à você em ${city.name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTemplate>
        <div className={Styles.content}>
          <h1>Opções na região de {city.name}</h1>
          <p>Encontramos {deliveries} opções</p>
          <div className={Styles.items}>
            <DishList citySlug={city.slug} />
          </div>
        </div>
      </PageTemplate>
    </>
  );
}

export async function getStaticPaths() {
  const response = await api.get("/cities");
  const cities = response.data;

  const urls = cities.map((city: CityProps) => ({
    params: {
      city: city.slug,
    },
  }));

  return {
    paths: urls,
    fallback: false,
  };
}

export async function getStaticProps({ params }: ParamsStaticProps) {
  const citySlug = params?.city as string;
  const cityResponse = await api.get(`/cities?citySlug=${citySlug}`);
  const deliveriesResponse = await api.get<DishType[]>(`/deliveries?city=${citySlug}`);

  const city = cityResponse.data;
  const deliveries = deliveriesResponse.data.length;

  return {
    props: {
      city,
      deliveries,
    },
    revalidate: 30,
  };
}
