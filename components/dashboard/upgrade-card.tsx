import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export function UpgradeCard() {
  return (
    <Card className='md:max-xl:rounded-none md:max-xl:border-none md:max-xl:shadow-none'>
      <CardHeader className='md:max-xl:px-4'>
        <CardTitle>Welcome to the Nerds Dashboard!</CardTitle>
        <CardDescription>
          Update settings, Manage your account, Read Blog posts by Coach Larry
          and more.
        </CardDescription>
      </CardHeader>
      <CardContent className='md:max-xl:px-4'>
        {/* <Button size='sm' className='w-full'>
          Upgrade
        </Button> */}
      </CardContent>
    </Card>
  )
}
