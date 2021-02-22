type TResolution = {
    width:number;
    height:number;
}

type TOptions = {
    smallRes?: TResolution;
    largeRes?: TResolution;
}


const mockImageCollection:Function = (n:number, options:TOptions = {}):ImageMeta[] =>{
    const metaImages:ImageMeta[] = []
    const largeRes:TResolution = options.largeRes ? options.largeRes : {width: 1920, height: 1080}
    const smallRes:TResolution = options.smallRes ? options.smallRes : {width: 200, height: 113}
    for (let i = 0; i < n; i++) {
        const randInt = Math.floor(Math.random() * 100);

        metaImages.push({
            largeUrl: `https://picsum.photos/${largeRes.width}/${largeRes.height}/?image=${randInt}`, 
            smallUrl: `https://picsum.photos/${smallRes.width}/${smallRes.height}/?image=${randInt}`,
            altText: `mock alt text`
        })
    }
    return metaImages
}

export {
    mockImageCollection,
}