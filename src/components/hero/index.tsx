import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'
import { useState } from 'react'

export const Hero = () => {
  const { t } = useTranslation()
  const [otp, setOtp] = useState('')

  async function confirmOtp() {
    try {
      const res = await fetch(
        `http://192.168.100.16:3000/admin/confirm-otp?admin_id=4118a74d-0b15-4f81-8cab-135e035cc395&otp=${otp}`,
      )
      const data = await res.json()
      // const status = data?.status

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <section className="flex w-full max-w-2xl flex-col space-y-4 px-4">
        <p>Welcome</p>
        <input placeholder="Email address" type="text" />
        <input placeholder="Password" type="text" />
        <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" />
        <Button onClick={() => confirmOtp()}>
          <p>Login</p>
        </Button>
      </section>
    </div>
  )
}
