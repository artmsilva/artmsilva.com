import Head from "next/head";
import Image from "next/image";
import * as React from "react";

const Photo = ({ photo }) => (
  <article key={photo.id}>
    <style jsx>{`
      article {
        text-align: center;
      }
      .photo-card {
        display: block;
        background: ${photo.color};
        border-radius: 0.5rem;
        border: 0.5rem solid ${photo.color};
        overflow: hidden;
      }
    `}</style>
    <a
      href={photo.links.html}
      title={photo.description}
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure className="photo-card">
        <Image
          alt={photo.description}
          width={photo.width}
          height={photo.height}
          layout="responsive"
          src={photo.urls.small}
        />
      </figure>
    </a>
    <figcaption className="figcaption">
      <h3>{photo.description}</h3>
      <p>
        <small>{photo.likes} likes</small>,{" "}
        <small>{photo.statistics.totalDownloads} downloads</small>,{" "}
        <small>{photo.statistics.totalViews} views</small>
      </p>
      <p></p>
    </figcaption>
  </article>
);

export default function Home({ photos }) {
  return (
    <React.Fragment>
      <Head>
        <title>Arturo Silva — Technical Architect at The Washington Post</title>
      </Head>
      <header>
        <h1 className="block">Arturo Silva</h1>
        <h2 className="block">
          He/him pronouns. Technical architect &amp; engineering leader at{" "}
          <a href="https://build.washingtonpost.com">The Washington Post</a>.
          Loves cooking, photography, and traveling.
        </h2>
      </header>
      <main>
        <h3>Social links</h3>
        <ul>
          <li>
            <a
              className="block"
              title="Link to Arturo Silva's Twitter Profile"
              href="https://twitter.com/artfromclt"
            >
              https://twitter.com/artfromclt
            </a>
          </li>
          <li>
            <a
              className="block"
              title="Link to Arturo Silva's Instagram Profile"
              href="https://instagram.com/artfromclt"
            >
              https://instagram.com/artfromclt
            </a>
          </li>
          <li>
            <a
              className="block"
              title="Link to Arturo Silva's LinkedIn Profile"
              href="https://www.linkedin.com/in/artfromclt/"
            >
              https://www.linkedin.com/in/artfromclt/
            </a>
          </li>
        </ul>
        <style jsx>{`
          hr {
            margin-block: 2rem;
          }
          section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
            gap: 0.1rem;
            align-items: center;
          }

          @media (max-width: 768px) {
            section {
              grid-template-columns: 1fr;
            }
          }
          ul {
            margin: 0;
            padding: 0;
          }
        `}</style>
        <hr />
        <h3>
          Photos by{" "}
          <a
            href="https://unsplash.com/@artmsilva?utm_source=artmsilva.com&utm_medium=referral"
            target="_blank"
            rel="noopener"
          >
            Art Silva
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/?utm_source=artmsilva.com&utm_medium=referral"
            target="_blank"
            rel="noopener"
          >
            Unsplash
          </a>
        </h3>
        <section>
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </section>
      </main>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  let photos = [];
  try {
    const response = await fetch(
      `https://api.unsplash.com/users/artmsilva/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&stats=true`,
      {
        method: "GET",
      }
    );

    // cache for 1 day
    response.headers.set("Cache-Control", "public, max-age=86400");

    const data = await response.json();

    photos = data.map((photo) => {
      return {
        id: photo.id,
        width: photo.width,
        height: photo.height,
        description: photo.description,
        color: photo.color,
        urls: {
          small: photo.urls.small,
        },
        links: {
          html: photo.links.html,
        },
        likes: photo.likes.toLocaleString(),
        statistics: {
          totalDownloads: photo.statistics.downloads.total.toLocaleString(),
          totalViews: photo.statistics.views.total.toLocaleString(),
        },
      };
    });
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      photos,
    },
  };
}
