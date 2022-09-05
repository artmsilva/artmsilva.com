export default async function getPhotos() {
  let photos = [];
  try {
    const response = await fetch(
      `https://api.unsplash.com/users/artmsilva/photos?client_id=${
        import.meta.env.UNSPLASH_ACCESS_KEY
      }&stats=true`,
      {
        method: "GET",
      }
    );

    // cache for 1 day
    response.headers.set("Cache-Control", "public, max-age=86400");

    const data = await response.json();

    photos = data?.map((photo) => {
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

  return photos;
}
