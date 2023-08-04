import { Card, CardHeader, CardBody, Typography, Avatar } from '@material-tailwind/react';

function StarIcon() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-5 w-5 text-yellow-700'>
      <path
        fillRule='evenodd'
        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
        clipRule='evenodd'
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className='flex justify-center'>
      <div className='flex-1 hidden md:block pr-10'>
        <h1 className='mb-10'>Hello world!</h1>
        <h1>环境变量输出目录是： {process.env.DISTDIR}</h1>
      </div>
      <div>
        {[1, 2, 3].map((key) => (
          <Card key={key} color='transparent' shadow={false} className='w-full max-w-[26rem]'>
            <CardHeader
              color='transparent'
              floated={false}
              shadow={false}
              className='mx-0 flex items-center gap-4 pt-0 pb-8'>
              <Avatar
                size='lg'
                variant='circular'
                src='https://w.wallhaven.cc/full/1p/wallhaven-1ppld1.jpg'
                alt='nanzhen'
              />
              <div className='flex w-full flex-col gap-0.5'>
                <div className='flex items-center justify-between'>
                  <Typography variant='h5' color='blue-gray'>
                    Nanzhen Huang
                  </Typography>
                  <div className='5 flex items-center gap-0'>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <Typography color='blue-gray'>bilibili @ 哪国莫有</Typography>
              </div>
            </CardHeader>
            <CardBody className='mb-6 p-0'>
              <Typography>
                &quot;洞察真理，是我们对现实深刻的思考和理解，是对事物本质的把握和领悟。真理是存在于世界万物之中的普遍规律和最高境界，它超越表面现象，探求事物的本源和内在联系。&quot;
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
