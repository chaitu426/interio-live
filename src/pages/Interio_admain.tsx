import React from 'react';
import '../index.css';
import { IKContext, IKImage } from 'imagekitio-react';

const urlEndpoint = 'https://ik.imagekit.io/81grncrg2';

function App() {
  return (
    <div className="App">
      <IKContext urlEndpoint={urlEndpoint}>

        <IKImage
          src="https://ik.imagekit.io/81grncrg2/image.png?updatedAt=1739685420336"
          width="400"
          lqip={{ active: true ,quality: 20 }}
        />
        <IKImage
          src="https://ik.imagekit.io/81grncrg2/image%20(29).png?updatedAt=1739685486099"
          width="400"
          lqip={{ active: true ,quality: 20 }}
        />
        <IKImage
          src="https://ik.imagekit.io/81grncrg2/image(7).png?updatedAt=1739685486072"
          width="400"
          lqip={{ active: true ,quality: 20 }}
        />
        <IKImage
          src="https://ik.imagekit.io/81grncrg2/image%20(27).png?updatedAt=1739685485792"
          width="400"
          lqip={{ active: true ,quality: 20 }}
        />
        <IKImage
          src="https://ik.imagekit.io/81grncrg2/image%20(26).png?updatedAt=1739685485231"
          width="400"
          lqip={{ active: true ,quality: 20 }}
        />
        <IKImage
          src="https://ik.imagekit.io/81grncrg2/image%20(28).png?updatedAt=1739685485152"
          width="400"
          lqip={{ active: true ,quality: 20 }}
        />
      </IKContext>
    </div>
  );
}

export default App;