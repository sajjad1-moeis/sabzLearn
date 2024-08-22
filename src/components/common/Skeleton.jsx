import {Button, CardBody, CardFooter, CardHeader, Card} from "@material-tailwind/react";
import {FaVideo} from "react-icons/fa";

function Skeleton() {
   return (
      <Card className='mt-6 w-full animate-pulse dark:bg-dark-medium'>
         <CardHeader
            shadow={false}
            floated={false}
            className='relative grid h-48 place-items-center bg-gray-300 dark:bg-dark-semi'
         >
            <FaVideo className='text-5xl' />
         </CardHeader>
         <CardBody>
            <div className='mb-4 h-3 w-full rounded-full bg-gray-300 dark:bg-dark-light'>&nbsp;</div>
            <div className='mb-2 h-2 w-3/4 rounded-full bg-gray-300 dark:bg-dark-light'>&nbsp;</div>
            <div className='mb-2 h-2 w-3/4 rounded-full bg-gray-300 dark:bg-dark-light'>&nbsp;</div>
            <div className='mb-2 h-2 w-3/4 rounded-full bg-gray-300 dark:bg-dark-light'>&nbsp;</div>
            <div className='mb-2 h-2 w-3/4 rounded-full bg-gray-300 dark:bg-dark-light'>&nbsp;</div>
         </CardBody>
         <CardFooter className='pt-0'>
            <Button
               disabled
               tabIndex={-1}
               className='h-8 w-20 bg-gray-300 dark:bg-dark-sm shadow-none hover:shadow-none'
            >
               &nbsp;
            </Button>
         </CardFooter>
      </Card>
   );
}

export default function SkeletonCustom(props) {
   return (
      <div className={`grid md:grid-cols-2  ${props.article ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-8`}>
         <Skeleton />
         <Skeleton />
         <Skeleton />
         <Skeleton />
      </div>
   );
}
