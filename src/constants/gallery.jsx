const nameFile = (r) => { 
  let images = {}
  r.keys().forEach((key) => {
    const name = key.replace('./', '').split('.')[0]
    images[name] = r(key)
  })
  return images
}
//NOTE: name additional Event's photos as cover.png and 1,2,3 ... format to dynamically add them
const galleryObject = (name, object) => {  // this will create object with title and array of photos 
    const newObject = {
        title: name, 
        photos: [ object['cover'] ]
    }
    const length = Object.keys(object).length // taking the total no.of files in given directory
    for (let i = 1; i < length; i++){
        newObject.photos.push(object[`${i}`]) 
    }
    return newObject
}
// adding all the directory containing events's photos and storing as object references
const ml = nameFile(require.context('../images/gallery/Machine Learning Workshop', false, /\.(png|jpe?g|svg)$/));
const du = nameFile(require.context('../images/gallery/Data Unleashed', false, /\.(png|jpe?g|svg)$/));
const d = nameFile(require.context('../images/gallery/Docker', false, /\.(png|jpe?g|svg)$/));
const pa = nameFile(require.context('../images/gallery/Python Automation', false, /\.(png|jpe?g|svg)$/));
const ud = nameFile(require.context('../images/gallery/UI UX Design', false, /\.(png|jpe?g|svg)$/));
const wd = nameFile(require.context('../images/gallery/Web Development', false, /\.(png|jpe?g|svg)$/));

const gallery = [
    galleryObject('Machine Learning', ml),
    galleryObject('Data Unleashed', du),
    galleryObject('Docker', d),
    galleryObject('Python Automation', pa),
    galleryObject('UI UX Design', ud),
    galleryObject('Web Development', wd)
]

export default gallery