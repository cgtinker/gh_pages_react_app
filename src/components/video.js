
function Video({video}) {
    return (
        <div>
            <Thumbnail video={video} />
            <a href={video.url}>
                <h3>{video.titel}</h3>
                <p>{video.description}</p>
            </a>
        </div>
    )
}

function VideoList({videos, emptyHeading}) {
    const count = videos.length;
    let heading = emptyHeading;

    if (count > 0) {
        const noun = count > 1 ? 'Videos' : 'Video';
        heading = count + ' ' + noun;
    }

    return (
        <section>
            <h2>{heading}</h2>
            {videos.map(video => 
                <Video key={video.id} video={video} />
            )}
        </section>
    )
}