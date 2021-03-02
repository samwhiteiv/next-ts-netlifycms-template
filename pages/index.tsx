import { NextPage, GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { IContentItem } from '../interfaces'

interface Props {
  content: { attributes: HomeAttributes };
}
interface HomeAttributes {
  hero_title: string;
  hero_description: string;
  hero_image: string;
  content_list: [];
}

const HomePage: NextPage<Props> = ({ content }) => {
  const { attributes } = content;
  return (
    <Layout title="Home | Next + TS + NetlifyCMS">
      <p>hello world</p>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <img src={attributes.hero_image} alt='hero image' />
      <ul>
        {attributes.content_list.map((item: IContentItem, index: number) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
};



export default HomePage;