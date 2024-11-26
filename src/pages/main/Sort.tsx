import React, { useCallback, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import {
  TextIcon,
  LucideIcon,
  PersonStanding,
  RectangleHorizontal,
} from 'lucide-react'
import { cn } from '@/utils/css'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export const SORT_PARAM = 'sort_by'

const items: {
  value: string
  label: string
  icon: LucideIcon
}[] = [
  {
    value: 'name',
    label: 'Name',
    icon: TextIcon,
  },
  {
    value: 'population',
    label: 'Population',
    icon: PersonStanding,
  },
  {
    value: 'area',
    label: 'Area',
    icon: RectangleHorizontal,
  },
]

export const Sort: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [open, toggle] = useState(false)
  const value = searchParams.get(SORT_PARAM)
  const selectedItem = items.find((item) => item.value === value)

  const handleSelect = useCallback((selectedValue: string) => {
    if (selectedValue) {
      searchParams.set(SORT_PARAM, selectedValue)
    } else {
      searchParams.delete(SORT_PARAM)
    }
    
    navigate(`${location.pathname}?${searchParams.toString()}`)
    toggle(false)
  }, [navigate, searchParams])

  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={toggle}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-[130px] justify-start max-sm:w-full"
          >
            {selectedItem ? (
              <>
                <selectedItem.icon className="mr-2 h-4 w-4 shrink-0" />
                {selectedItem.label}
              </>
            ) : (
              <>Sort By</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="bottom" align="start">
          <Command>
            <CommandInput placeholder="Sort By" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  key="Reset"
                  value="reset"
                  onSelect={() => handleSelect('')}
                  className="opacity-40"
                >
                  <TextIcon className="mr-2 h-4 w-4 opacity-0" />
                  <span>Reset</span>
                </CommandItem>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={() => handleSelect(item.value)}
                  >
                    <item.icon
                      className={cn(
                        'mr-2 h-4 w-4',
                        item.value === selectedItem?.value
                          ? 'opacity-100'
                          : 'opacity-40'
                      )}
                    />
                    <span>{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
