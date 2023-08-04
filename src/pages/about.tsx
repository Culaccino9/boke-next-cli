import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';

const TABS = [
  {
    label: '全部',
    value: 'all',
  },
  {
    label: 'options_1',
    value: 'options_1',
  },
  {
    label: 'options_2',
    value: 'options_2',
  },
];

const TABLE_HEAD = ['人员', '描述', '状态', '时间', '操作'];

const TABLE_ROWS = [
  {
    img: 'https://w.wallhaven.cc/full/1p/wallhaven-1ppld1.jpg',
    name: '云',
    email: '邮箱xxxxxx',
    job: '管理者',
    org: '一些balabala',
    online: true,
    date: '23/04/18',
  },
  {
    img: 'https://w.wallhaven.cc/full/1p/wallhaven-1ppld1.jpg',
    name: '腾',
    email: '邮箱xxxxxx.com',
    job: '开发者',
    org: '一些balabala',
    online: false,
    date: '23/04/18',
  },
  {
    img: 'https://w.wallhaven.cc/full/1p/wallhaven-1ppld1.jpg',
    name: '米',
    email: '邮箱xxxxxx.com',
    job: '管理者',
    org: '一些balabala',
    online: false,
    date: '19/09/17',
  },
  {
    img: 'https://w.wallhaven.cc/full/1p/wallhaven-1ppld1.jpg',
    name: '花',
    email: '邮箱xxxxxx',
    job: '测试者',
    org: '一些balabala',
    online: true,
    date: '24/12/08',
  },
  {
    img: 'https://w.wallhaven.cc/full/1p/wallhaven-1ppld1.jpg',
    name: '老六',
    email: '邮箱xxxxxx',
    job: '开发者',
    org: '一些balabala',
    online: false,
    date: '04/10/21',
  },
];

export default function About() {
  return (
    <Card className='h-full w-full'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='mb-8 flex items-center justify-between gap-8'>
          <div>
            <Typography variant='h5' color='blue-gray'>
              表格
            </Typography>
            <Typography color='gray' className='mt-1 font-normal'>
              一个curd可支持切换的表格
            </Typography>
          </div>
          <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
            <Button variant='outlined' color='blue-gray' size='sm'>
              可选项
            </Button>
            <Button className='flex items-center gap-3' color='blue' size='sm'>
              <UserPlusIcon strokeWidth={2} className='h-4 w-4' /> 添加按钮
            </Button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <Tabs value='all' className='w-full md:w-max'>
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className='w-full md:w-72'>
            <Input label='Search' icon={<MagnifyingGlassIcon className='h-5 w-5' />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className='overflow-scroll px-0'>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                  <Typography variant='small' color='blue-gray' className='font-normal leading-none opacity-70'>
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ img, name, email, job, org, online, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className='flex items-center gap-3'>
                      <Avatar src={img} alt={name} size='sm' />
                      <div className='flex flex-col'>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          {name}
                        </Typography>
                        <Typography variant='small' color='blue-gray' className='font-normal opacity-70'>
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className='flex flex-col'>
                      <Typography variant='small' color='blue-gray' className='font-normal'>
                        {job}
                      </Typography>
                      <Typography variant='small' color='blue-gray' className='font-normal opacity-70'>
                        {org}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className='w-max'>
                      <Chip
                        variant='ghost'
                        size='sm'
                        value={online ? '在线' : '离线'}
                        color={online ? 'green' : 'blue-gray'}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content='编辑'>
                      <IconButton variant='text' color='blue-gray'>
                        <PencilIcon className='h-4 w-4' />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Typography variant='small' color='blue-gray' className='font-normal'>
          Page 1 of 10
        </Typography>
        <div className='flex gap-2'>
          <Button variant='outlined' color='blue-gray' size='sm'>
            上一页
          </Button>
          <Button variant='outlined' color='blue-gray' size='sm'>
            下一页
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
