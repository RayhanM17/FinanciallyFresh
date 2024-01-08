import Image from "next/image"
import Header from "@/components/header/Header"
import getCategoryColor from "../../hooks/getCategoryColor"
import styles from './style.module.sass'

const BlogDetails = () => (
   <>
      <Header className="gradient"/>
      <div className="container pb-80">
         <div className="row mb-20">
            <div className="col col_9">
               <div className={`h6 mb-10 c-${getCategoryColor('Product Reviews')}`}>{'Products Review'}</div>
               <h2 className="mb-50">Consequat aliquip non aliquip culpa. Aute velit dolore occaecat nulla deserunt voluptate sit.</h2>
            </div>
         </div>

         <Image className={`${styles.featuredImage} mb-50`} src="/featured-image.webp" alt="Featured Image" width="1280" height="387"/>

         <div className="row">
            <div className="col col_9">
               <p>Ex Lorem anim duis consequat amet laborum amet labore exercitation deserunt. Sint cillum esse fugiat nostrud voluptate eiusmod cillum incididunt deserunt qui pariatur aute sint. Velit laborum tempor et cupidatat et elit consectetur occaecat culpa. Sit reprehenderit sit id do non. Excepteur voluptate est eiusmod fugiat quis laborum ullamco velit sint nulla ipsum.</p>
               <p>Dolor minim veniam fugiat nostrud duis esse consequat est esse id deserunt. Non voluptate aliquip anim eu excepteur excepteur cupidatat ad. Consequat amet dolore officia velit laboris. Magna nostrud occaecat magna elit laborum tempor et cupidatat amet laboris consectetur eu. Nisi exercitation exercitation veniam laborum in laboris Lorem ullamco quis consectetur voluptate dolore ipsum officia.</p>
               <p>Consequat quis in labore commodo pariatur nisi qui laboris nulla ad velit. Et cupidatat ea ad aute magna id ea incididunt pariatur amet culpa minim proident occaecat. Excepteur dolore quis veniam culpa exercitation enim minim nostrud esse veniam sunt ex ut eiusmod. Consectetur eu occaecat laborum esse. Ad nulla ullamco laborum ea velit deserunt laborum ipsum cupidatat sint. Irure aute ipsum cupidatat labore. Pariatur nostrud fugiat dolore voluptate dolor id.</p>
            </div>
         </div>
      </div>
   </>
)

export default BlogDetails
