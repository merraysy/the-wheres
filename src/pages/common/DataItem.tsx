import type { LucideProps } from 'lucide-react';
import { Building, Clock, Globe, PersonStanding, PhoneCall, Currency, PinIcon, Thermometer, ThermometerSun, ParkingMeter, CloudFog } from 'lucide-react'

const map: Record<string, { Icon: React.FC<LucideProps>; label: string; }> = {
  capital: {
    Icon: Building,
    label: 'Capital',
  },
  region: {
    Icon: Globe,
    label: 'Continent',
  },
  subregion: {
    Icon: PinIcon,
    label: 'Region',
  },
  population: {
    Icon: PersonStanding,
    label: 'Population',
  },
  timezones: {
    Icon: Clock,
    label: 'Timezones',
  },
  callingCodes: {
    Icon: PhoneCall,
    label: 'Phone Code',
  },
  currencies: {
    Icon: Currency,
    label: 'Currencies',
  },
  temp: {
    Icon: Thermometer,
    label: 'Temperature'
  },
  feels_like: {
    Icon: ThermometerSun,
    label: 'Feels Like'
  },
  pressure: {
    Icon: ParkingMeter,
    label: 'Pressure'
  },
  humidity: {
    Icon: CloudFog,
    label: 'Humidity'
  }
}

export const DataItem: React.FC<{ prop: keyof typeof map; value: string | number | React.ReactNode }> = ({ prop, value }) => {
  const { Icon, label } = map[prop];

  return (
    <div className="flex items-center gap-2">
      <Icon size={16} />
      <p>{label}: <strong>{prop === 'callingCodes' ? '+' : ''}{value || 'N/A'}</strong></p>
    </div>
  )
}