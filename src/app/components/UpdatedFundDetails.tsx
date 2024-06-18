import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"

const UpdatedFundDetails = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-8 mt-4'>
      <h1 className='text-2xl font-semibold'>Fund Review</h1>

      <div className='flex gap-4'>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className='text-green-600 font-semibold'>Received</CardDescription>
            <CardTitle className="text-xl">₹ 2000</CardTitle>
          </CardHeader>
        
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className='text-red-600 font-semibold'>Spent</CardDescription>
            <CardTitle className="text-xl">₹ 1500</CardTitle>
          </CardHeader>
       
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className='text-blue-600 font-semibold'>Remaining</CardDescription>
            <CardTitle className="text-xl">₹ 500</CardTitle>
          </CardHeader>
          {/* <CardContent>
            <div className="text-xs text-muted-foreground">+25% from last week</div>
          </CardContent> */}
          {/* <CardFooter>
            <Progress value={25} aria-label="25% increase" />
          </CardFooter> */}
        </Card>

      </div>
    </div>
  )
}

export default UpdatedFundDetails