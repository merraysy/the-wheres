import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/utils/css'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { iso6392 } from 'iso-639-2'

export const REGION_PARAM = 'region'

export const LANGUAGE_PARAM = 'language'

enum REGIONS {
  africa = 'Africa',
  europe = 'Europe',
  asia = 'Asia',
  americas = 'Americas',
}

const Combobox: React.FC<{ items: { value: string; label: string }[]; label: string; param: string; placeholder: string; }> = ({ label, param, placeholder, items }) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [open, toggle] = useState<boolean>(false)
  const value = searchParams.get(param)

  const handleSelect = useCallback((selectedValue: string) => {
    if (selectedValue) {
      searchParams.set(param, selectedValue)
    } else {
      searchParams.delete(param)
    }
    
    navigate(`${location.pathname}?${searchParams.toString()}`)
    toggle(false)
  }, [navigate, param, searchParams])

  return (
    <Popover open={open} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <Button
          aria-label={label}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[170px] justify-between max-sm:w-full"
          size="sm"
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[170px] p-0 max-sm:w-[230px]">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>Not found.</CommandEmpty>
            <CommandGroup>
              <CommandItem key="reset" value="" onSelect={() => handleSelect('')}>
                <Check className="mr-2 h-4 w-4 opacity-0" />
                <span className="opacity-70">Reset</span>
              </CommandItem>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => handleSelect(item.value)}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === item.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export const Filters: React.FC = () => {
  const regions = [
    REGIONS.africa,
    REGIONS.americas,
    REGIONS.asia,
    REGIONS.europe,
  ]

  return (
    <div className="flex flex-nowrap gap-1 max-sm:flex-col">
      <Combobox label="Region" param={REGION_PARAM} placeholder="Filter by region" items={regions.map((value) => ({ label: value, value }))} />
      <Combobox label="Languge" param={LANGUAGE_PARAM} placeholder="Filter by language" items={iso6392.map((item) => ({ value: item.iso6392B, label: item.name }))} />
    </div>
  )
}