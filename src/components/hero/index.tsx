import { Rocket, Globe2, Wrench, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../ui/button'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <section className="w-full py-32 md:py-48">
        <p>Welcome</p>
      </section>
    </div>
  )
}
