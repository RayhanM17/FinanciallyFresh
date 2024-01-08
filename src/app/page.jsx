import Showcase from "../components/showcase/Showcase";
import Card from "../components/card/Card";
import { IconTypes } from "@/components/button/Button";

const Home = async () => {
  
  return (
    <>
      <Showcase/>

      <div className="container pb-20 pt-40">
        <Card
          label="Personal Projects"
          title="Class apent teciti sociosqu ad liter torquet pur comungi nopstra"
          summary="Morbi tincidunt augue interdum velit euismod in pellentesque massa. Odio eu feugiat pretium nibh ipsum. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi."
          href="#"
          btnIcon={IconTypes.ARROW_RIGHT}
        />
      </div>

      <div className="container pb-40">
        <div className="row">
          <div className="col col_4 m-mw-100">
            <Card
              label="Clients"
              title="Class apent teciti sociosqu ad liter torquet pur comungi nopstra"
              summary="Morbi tincidunt augue interdum velit euismod in pellentesque massa. Odio eu feugiat pretium nibh ipsum. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi."
              href="#"
              btnIcon={IconTypes.ARROW_RIGHT}
            />
          </div>
          <div className="col col_4 m-mw-100">
            <Card
              label="Competitions"
              title="Class apent teciti sociosqu ad liter torquet pur comungi nopstra"
              summary="Morbi tincidunt augue interdum velit euismod in pellentesque massa. Odio eu feugiat pretium nibh ipsum. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi."
              href="#"
              btnIcon={IconTypes.ARROW_RIGHT}
            />
          </div>
          <div className="col col_4 m-mw-100">
            <Card
              label="Personal Projects"
              title="Class apent teciti sociosqu ad liter torquet pur comungi nopstra"
              summary="Morbi tincidunt augue interdum velit euismod in pellentesque massa. Odio eu feugiat pretium nibh ipsum. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi."
              href="#"
              btnIcon={IconTypes.ARROW_RIGHT}
            />
          </div>
        </div>
      </div>

    </>
  )
};

export default Home;